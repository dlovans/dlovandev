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
     * Denotes if wrapper is expandable or not.
     */
    #expandableModal

    /**
     * Reference to child div object with SVG expand symbol.
     */
    #expandableHintWrapper

    /**
     * Creates an instance of this class.
     */
    constructor() {
      // Invoke superclass' constructor.
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))

      // Default values and references.
      this.#expandableModal = false
      this.#expandableHintWrapper = this.shadowRoot.querySelector('.expand-icon-wrapper')
    }

    /**
     * Invoked after the custom element has been inserted into the DOM.
     */
    connectedCallback() {
      this.#toggleExpandIconWrapper(this.#expandableModal)
    }

    /**
     * Observes the specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes to be observed.
     */
    static get observedAttributes() {
      return ['ds-expandable']
    }

    /**
     * 
     * @param {String} name - The name of the attribute. 
     * @param {Boolean} oldValue - The attribute value before the change.
     * @param {Boolean} newValue - The attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-expandable' && oldValue !== newValue) {
        this.#expandableModal = newValue
        this.#toggleExpandIconWrapper(this.#expandableModal)
      }
    }
  }
)
