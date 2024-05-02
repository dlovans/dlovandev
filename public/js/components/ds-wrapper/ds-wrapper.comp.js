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
  }
)
