/**
 * @description This module represents the ds-slogan web component.
 * @module ds-slogan
 */

import { template as markupTemplate } from './ds-slogan.html.js'

/**
 * Define custom element ds-slogan.
 */
customElements.define('ds-slogan',
  /**
   * Anonymous class representing ds-slogan custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Represents the slogan text.
     */
    #sloganText

    /**
     * Reference to the button object.
     */
    #buttonRef

    /**
     * Reference to the h4 heading.
     */
    #headingRef

    /**
     * Creates an instance of this class.
     */
    constructor() {
      super()
      
      // Attach shadow DOM to this custom element,
      // and append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))

      // Assign default values and references.
      this.#buttonRef = this.shadowRoot.querySelector('button')
      this.#headingRef = this.shadowRoot.querySelector('h4')
      this.#sloganText = 'Transforming Ideas into Action - Let\'s Make a Change Together!'
    }

    /**
     * Invoked after this custom element has been inserted into the DOM.
     */
    connectedCallback() {
      this.#updateHeading()
    }

    /**
     * Specifies the attributes to be observed.
     * 
     * @returns {String[]} - An array of observed attributes.
     */
    static get observedAttributes() {
      return ['ds-slogan']
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-slogan' && oldValue !== newValue) {
        this.#sloganText = newValue
        this.#updateHeading()
      }
    }

    /**
     * Updates the h4 text content.
     */
    #updateHeading() {
      this.#headingRef.textContent = this.#sloganText
    }
  }
)
