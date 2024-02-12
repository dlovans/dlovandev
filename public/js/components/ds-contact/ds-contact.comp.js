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

    /**
     * Status message displayed after form data has been processed.
     */
    #statusMessageElement

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
      this.#statusMessageElement = this.shadowRoot.querySelector('.status-message')

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
        this.#submitBtn.removeAttribute('disabled')
        this.#provideErrorIndicator()
      } else {
        const parsedJSON = await this.#sendFormData()

      // Provide feedback on the status of the message.
      if (Object.keys(parsedJSON).length !== 0) {
        this.#statusMessage(parsedJSON.status)
      }
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


    /**
     * Provides an error indicator to user.
     */
    #provideErrorIndicator () {
      const inputFields = [
        { input: this.#nameInput },
        { input: this.#emailInput },
        { input: this.#textareaInput }
      ]

      let focusIsSet = false

      inputFields.forEach( input => {
        if (!input.value) {
          input.classList.add('error')
          if (!focusIsSet) {
            input.focus()
            focusIsSet = true
          }
        }
      })
    }

    /**
     * Sends form data to the server. If successful, provides a thank you message.
     * On failure, provides appropriate message.
     *
     * @return {object} - Parsed JSON response.
     */
    async #sendFormData () {
      const formData = new FormData(this.#form)
      const response = await fetch ('./verify-message', {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
      })

      return await response.json()
    }

    /**
     * Provides feedback to the end user.
     *
     * @param {boolean} status - Status of the message.
     */
    #statusMessage (status) {
      if (status) {
        this.#statusMessageElement.textContent = 'Success! I\'ll be in touch soon.'
      } else {
        this.#statusMessageElement.textContent = 'Fill out all fields.'
      }

      this.#statusMessageElement.classList.toggle('display-message')

      setTimeout(() => {
        this.#statusMessageElement.textContent = ''
        this.#statusMessageElement.classList.toggle('increase-height')
      }, 4000)
    }
  }
)
