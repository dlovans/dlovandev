/**
 * @description This module represents the ds-slogan web component.
 * @module ds-slogan
 */

import { template as markupTemplate } from './ds-slogan.html.js'

/**
 * Define custom element ds-slogan.
 */
customElements.define('ds-slogan',
  /**
   * Anonymous class representing ds-slogan custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Represents the slogan text.
     */
    #sloganText

    /**
     * Reference to the button object.
     */
    #buttonRef

    /**
     * Reference to the h4 heading.
     */
    #headingRef

    /**
     * Custom event. Listener in ds-contact component.
     */
    #triggerFocus

    /**
     * Represents the button text.
     */
    #buttonText

    /**
     * Creates an instance of this class.
     */
    constructor() {
      super()

      // Attach shadow DOM to this custom element,
      // and append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))

      // Assign default values and references.
      this.#buttonRef = this.shadowRoot.querySelector('.contact-btn')
      this.#headingRef = this.shadowRoot.querySelector('h4')
      this.#sloganText = 'Transforming Ideas into Action - Let\'s Make a Change Together!'
      this.#buttonText = 'Contact Me!'

      // Define event once when this custom element is initialized.
      this.#triggerFocus = new CustomEvent('ds-trigger-focus', {
        bubbles: true,
        composed: true
      })
      // Register event handler on button.
      this.#buttonRef.addEventListener('click', () => this.dispatchEvent(this.#triggerFocus))
    }

    /**
     * Invoked after this custom element has been inserted into the DOM.
     */
    connectedCallback() {
      this.#updateHeading()
      this.#updateButton()
    }

    /**
     * Specifies the attributes to be observed.
     * 
     * @returns {String[]} - An array of observed attributes.
     */
    static get observedAttributes() {
      return ['ds-slogan', 'ds-button-text']
    }

    /**
     * Invoked when an observed attribute value changes.
     *
     * @param {string} name - Name of the attribute changed.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value before the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-slogan' && oldValue !== newValue) {
        this.#sloganText = newValue
        this.#updateHeading()
      }

      if (name === 'ds-button-text' && oldValue !== newValue) {
        this.#buttonText = newValue
        this.#updateButton()
      }
    }

    /**
     * Updates the h4 text content.
     */
    #updateHeading() {
      this.#headingRef.removeChild(this.#headingRef.firstChild)
      this.#headingRef.prepend(document.createTextNode(this.#sloganText))
    }

    /**
     * Updates the text content of the referenced button.
     */
    #updateButton() {
      this.#buttonRef.textContent = this.#buttonText
    }
  }
)
