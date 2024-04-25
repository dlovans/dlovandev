/**
 * @description This module defines the ds-persona web component.
 * @module ds-persona
 */

import { template as markupTemplate } from './ds-persona.html.js'
import { template as styleTemplate } from './ds-persona.css.js'

/**
 * Define custom element ds-persona.
 */
customElements.define('ds-persona',
  /**
   * Anonymous class representing the ds-persona custom element.
   */
  class extends HTMLElement {
    /**
     * The heading of this component.
     */
    #personaTitle

    /**
     * Short description about the user.
     */
    #paragraphs

    // Initalizes a new instance.
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))
    }

    /**
     * The observed attributes.
     *
     * @returns {String[]} An array of attributes to be observed.
     */
    static get observedAttributes() {
      return ['ds-heading', 'ds-paragraphs']
    }

    /**
     * Invoked when an attribute value changes.
     *
     * @param {String} name - Attribute name.
     * @param {String} oldValue - Attribute value before change.
     * @param {String} newValue - Attribute value after change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-heading' && oldValue !== newValue) {
        this.#personaTitle = newValue
      }

      if (name === 'ds-paragraphs' && oldValue !== newValue) {
        this.#paragraphs = newValue
      }
    }


  })
