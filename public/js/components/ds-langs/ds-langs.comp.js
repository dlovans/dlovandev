/**
 * @description This module defines the ds-langs web component.
 * @module ds-langs
 */

import { template as styleTemplate } from './ds-langs.css.js'

customElements.define('ds-langs',
/**
 * Anonymous class representing the ds-langs custom element.
 */
class extends HTMLElement {
  /**
   * An array of relative sources to all programming language images.
   */
  #imgSources

  /**
   * Initializes new instance.
   */
  constructor () {
    // Attach shadow DOM tree to this custom element, and
    // append templates to its shadow root.
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(styleTemplate.content.cloneNode(true))

    // Initialize imgSources field.
    this.#imgSources = this.getAttribute('langs')
  }

  /**
   * Invoked after the custom element is inserted into the DOM.
   */
  connectedCallback () {
    this.#createImageTags(this.#imgSources)
  }

  /**
   * Observes specified attributes for changes.
   * 
   * @returns {String[]} - An array of attributes.
   */
  static get observedAttributes () {
    return ['langs']
  }

  /**
   * Invoked when an observed attribute value changes.
   * 
   * @param {string} name - Name of the changed attribute.
   * @param {string} oldValue - Attribute value before the change.
   * @param {string} newValue - Attribute value after the change.
   */
  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'langs' && oldValue !== newValue) {
      this.#imgSources = newValue
      this.#createImageTags(this.#imgSources)
    }
  }

})