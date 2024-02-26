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
      return ['wrapper-is-row']
    }

    /**
     * Invoked when attributes of custom element changes.
     *
     * @param {string} name - Name of the changed attribute.
     * @param {boolean} oldValue - Attribute value before the change.
     * @param {boolean} newValue - Attribute value after the change.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'wrapper-is-row' && oldValue !== newValue) {
        this.#updateFlexUI(newValue)
      }
    }

    /**
     * Updates the flex direction of this wrapper.
     *
     * @param {boolean} isRow - Specifies flex direction: true for rows.
     */
    #updateFlexUI (isRow) {
    isRow ? this.classList.remove('flex-column'):this.classList.add('flex-column')
    }
  }
)