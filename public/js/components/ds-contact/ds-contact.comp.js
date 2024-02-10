/**
 * @description This module defines the ds-contact web component.
 * @module ds-contact
 */

import { template as markupTemplate } from './ds-contact.html.js'
import { template as styleTemplate } from './ds-contact.css.js'

/**
 * Define custom element ds-contact.
 */
customElements.define('ds-contact',
  /**
   * Anonymous class representing the ds-contact custom element.
   */
  class extends HTMLElement {
    /**
     * The form submit button.
     */
    #submitBtn

    /**
     * The form.
     */
    #form

    // Initializes new instance.
    constructor () {
      super()

      // Attach shadow DOM to this custom element,
      // and append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot
        .append(styleTemplate.content.cloneNode(true))
        .append(markupTemplate.content.cloneNode(true))
      
      // Get references to submit button and form.
      this.#submitBtn = this.shadowRoot.querySelector('#submit')
      this.#form = this.shadowRoot.querySelector('form')

      // Register event handlers.
      this.#form.addEventListener('submit', (event) => this.#formSubmission(event))
    }
  }
)
