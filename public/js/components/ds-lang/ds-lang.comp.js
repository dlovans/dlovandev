/**
 * @description This module defines the ds-langs web component.
 * @module ds-langs
 */

import { template as styleTemplate } from './ds-lang.css.js'

customElements.define('ds-lang',
  /**
   * Anonymous class representing the ds-langs custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Relative source to the image.
     */
    #imgSource

    /**
     * Initializes new instance.
     */
    constructor () {
      super()
      // Attach shadow DOM tree to this custom element, and
      // append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Initialize imgSources field.
      this.#imgSource = this.getAttribute('lang-img')
    }

    /**
     * Invoked after the custom element is inserted into the DOM.
     */
    connectedCallback () {
      this.#createImageTag(this.#imgSource)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes () {
      return ['lang-language']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'lang-language' && oldValue !== newValue) {
        this.#imgSource = newValue
        this.#createImageTag(this.#imgSource)
      }
    }

    /**
     * Creates image tag and appends it to the shadow root.
     *
     * @param {string} relativeSource - The relative path to the image source.
     */
    #createImageTag (relativeSource) {
      // If img object exists, mutate the src attribute.
      const imageObject = this.shadowRoot.querySelector('img')
      if (imageObject) {
        imageObject.src = relativeSource
      } else {
        // Create new image tag.
        const img = document.createElement('img')
        img.src = relativeSource
        img.classList.add('lang-comp')
        this.shadowRoot.append(img)
      }
    }
  }
)