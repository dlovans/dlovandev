/**
 * @description This module defines the ds-wrapper web component.
 * @module ds-wrapper
 */

/**
 * Define custom element ds-wrapper.
 */
customElements.define('ds-wrapper',
  /**
   * Anonymous class representing ds-wrapper custom element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of this class.
     */
    constructor () {
      // Invoke superclass' constructor.
      super()
      this.attachShadow({ mode: 'open' })
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes () {
      return ['isRow']
    }

    /**
     * Invoked when attributes of custom element changes.
     *
     * @param {string} name - Name of the changed attribute.
     * @param {boolean} oldValue - Attribute value before the change.
     * @param {boolean} newValue - Attribute value after the change.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'isRow' && oldValue !== newValue) {
        this.#updateFlexUI()
      }
    }
  }
)