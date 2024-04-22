/**
 * @description This module defines the ds-wrapper web component.
 * @module ds-wrapper
 */

import { template as styleTemplate } from './ds-wrapper.css.js'
import { template as markupTemplate } from './ds-wrapper.html.js'

/**
 * Define custom element ds-wrapper.
 */
customElements.define('ds-wrapper',
  /**
   * Anonymous class representing ds-wrapper custom element.
   */
  class extends HTMLElement {
    /**
     * Determines if wrapper flex direction is row or column. Boolean value.
     */
    #directionIsRow


    /**
     * Creates an instance of this class.
     */
    constructor() {
      // Invoke superclass' constructor.
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))

      // Default values.
      this.#directionIsRow = this.getAttribute('wrapper-is-row') || true
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes() {
      return ['wrapper-is-row']
    }

    /**
     * Invoked when attributes of custom element changes.
     *
     * @param {string} name - Name of the changed attribute.
     * @param {boolean} oldValue - Attribute value before the change.
     * @param {boolean} newValue - Attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'wrapper-is-row' && oldValue !== newValue) {
        this.#directionIsRow = newValue
        this.#updateFlexUI(this.#directionIsRow)
      }
    }

    connectedCallback() {
      this.#updateFlexUI(this.#directionIsRow)
    }

    /**
     * Updates the flex direction of this wrapper.
     *
     * @param {boolean} isRow - Specifies flex direction: true for rows.
     */
    #updateFlexUI(isRow) {
      if (isRow) {
        this.classList.remove('direction-is-column')
      } else {
        this.classList.add('direction-is-column')
      }
      // isRow ? this.classList.remove('direction-is-column') : this.classList.add('direction-is-column')
    }
  }
)
