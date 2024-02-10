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

    /**
     * The name input field.
     */
    #nameInput

    /**
     * The email input field.
     */
    #emailInput

    /**
     * The textarea input field.
     */
    #textareaInput

    // Initializes new instance.
    constructor () {
      super()

      // Attach shadow DOM to this custom element,
      // and append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot
        .append(styleTemplate.content.cloneNode(true))
        .append(markupTemplate.content.cloneNode(true))
      
      // Get references to inputs, form and submit button.
      this.#submitBtn = this.shadowRoot.querySelector('#submit')
      this.#form = this.shadowRoot.querySelector('form')
      this.#nameInput = this.shadowRoot.querySelector('#flname')
      this.#emailInput = this.shadowRoot.querySelector('#email')
      this.#textareaInput = this.shadowRoot.querySelector('#message')

      // Register event handlers.
      this.#form.addEventListener('submit', (event) => this.#formSubmission(event))
    }

    /**
     * Handles form submission.
     *
     * @param {object} eventObj - The event object.
     */
    async #formSubmission (eventObj) {
      // Prevent default behavior and disable submit button
      // upon form submission.
      eventObj.preventDefault()
      this.#submitBtn.setAttribute('disabled', '')

      // Validate form data. Cancel form submission on failure, else
      // send data to server.
      if (!this.#clientValidateFormData()) {
        this.#cancelSubmission()
      } else {
        await this.#sendFormData()
      }
    }

    /**
     * Basic validation. Checks if input fields are empty.
     *
     * @returns {boolean} - Returns true if no input fields are empty.
     */
    #clientValidateFormData () {
      if (!this.#nameInput.value || !this.#emailInput.value || !this.#textareaInput.value) return false
      
      return true
    }
  }
)