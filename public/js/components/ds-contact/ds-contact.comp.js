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
     * An array of references to all input fields.
     */
    #inputFields

    /**
     * Status message displayed after form data has been processed.
     */
    #statusMessageElement

    /**
     * The timeout function.
     */
    #delayMessageReset

    // Initializes new instance.
    constructor () {
      super()

      // Attach shadow DOM to this custom element,
      // and append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))
        this.shadowRoot.append(markupTemplate.content.cloneNode(true))
      
      // Get references to inputs, form and submit button.
      this.#submitBtn = this.shadowRoot.querySelector('#submit')
      this.#form = this.shadowRoot.querySelector('form')
      this.#nameInput = this.shadowRoot.querySelector('#flname')
      this.#emailInput = this.shadowRoot.querySelector('#email')
      this.#textareaInput = this.shadowRoot.querySelector('#message')
      this.#statusMessageElement = this.shadowRoot.querySelector('.status-message')
      this.#inputFields = [this.#nameInput, this.#emailInput, this.#textareaInput]

      // Register event handlers.
      this.#form.addEventListener('submit', (event) => this.#formSubmission(event))
      this.#form.addEventListener('click', () => this.#indicateFields())
      this.#form.addEventListener('input', (event) => this.#greenIndicatorFields(event))
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
        this.#resetForm()

      // Provide feedback on the status of the message.
      if (Object.keys(parsedJSON).length !== 0) {
        this.#statusMessage(parsedJSON)
      }
      }
    }

    /**
     * Basic validation. Checks if input fields are empty.
     *
     * @returns {boolean} - Returns true if no input fields are empty.
     */
    #clientValidateFormData () {
      return !this.#nameInput.value || !this.#emailInput.value || !this.#textareaInput.value
    }


    /**
     * Provides an error indicator to user.
     */
    #provideErrorIndicator () {
      let focusIsSet = false

      this.#inputFields.forEach( input => {
        if (!input.value) {
          input.classList.remove('warning')
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
      const formData = {
        flname: this.#nameInput.value,
        email: this.#emailInput.value,
        message: this.#textareaInput.value
      }
      const response = await fetch ('./smtp', {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      return await response.json()
    }

    /**
     * Provides feedback to the end user.
     *
     * @param {boolean} status - Status of the message.
     */
    #statusMessage (status) {
      if (this.#statusMessageElement.textContent) {
        clearTimeout(this.#delayMessageReset)
        this.#statusMessageElement.classList.remove('success-status-message')
        this.#statusMessageElement.classList.remove('error-status-message')
      }

      this.#statusMessageElement.textContent = status.message
      if (status.messageStatus) {
        this.#statusMessageElement.classList.add('success-status-message')
      } else {
        this.#statusMessageElement.classList.add('error-status-message')
      }

      this.#statusMessageElement.classList.add('display-message')

      this.#delayMessageReset = setTimeout(() => {
        this.#statusMessageElement.textContent = ''
        this.#statusMessageElement.classList.remove('success-status-message')
        this.#statusMessageElement.classList.remove('error-status-message')
        this.#statusMessageElement.classList.remove('display-message')
      }, 4000)
    }

    /**
     * Event handler indicating fields to be filled out. Utilizes bubbling.
     *
     */
    #indicateFields () {
      for (const input of this.#inputFields) {
        if (input.classList.contains('success') || input.classList.contains('error')) {
          return
        }
      }

      for (const input of this.#inputFields) {
        input.classList.toggle('warning')
      }
    }

    /**
     * Provides direct feedback to input value changes by changing border color.
     *
     * @param {*} eventObj - The event object attached to the dispatched event.
     */
    #greenIndicatorFields (eventObj) {
      eventObj.stopPropagation()

      /**
       * Removes orange and green borders on empty 
       * input fields (after typing and then backspacing).
       * Adds error class (red border).
       */
      function changeBorderOnEmptyInput () {
        eventObj.target.classList.remove('warning')
        eventObj.target.classList.remove('success')
        eventObj.target.classList.add('error')
      }

      /**
       * Removes orange and red borders in filled input fields.
       * Adds success class (green border).
       */
      function changeBorderOnFilledInput () {
        eventObj.target.classList.remove('warning')
        eventObj.target.classList.remove('error')
        eventObj.target.classList.add('success')
      }

      if (eventObj.target.tagName === 'INPUT' || eventObj.target.tagName === 'TEXTAREA') {
        if (!eventObj.target.value) {
          changeBorderOnEmptyInput()
        } else {
          changeBorderOnFilledInput()
        }
      }
    }

    /**
     * Resets the form on success.
     */
    #resetForm () {
      for (const input of this.#inputFields) {
        input.value = ''
        input.classList.remove('warning')
        input.classList.remove('error')
        input.classList.remove('success')
      }
      this.#submitBtn.removeAttribute('disabled')
    }

    /**
     * Sets focus on an input.
     */
    #setFocus() {
      if (!this.#nameInput.value) {
        this.#nameInput.focus()
      } else if (!this.#emailInput.value) {
        this.#emailInput.focus()
      } else {
        this.#textareaInput.focus()
      }
    }
  }
)
