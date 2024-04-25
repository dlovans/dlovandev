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

    /**
     * Reference to the h3 heading.
     */
    #refHeading

    /**
     * Reference to the parapgrah div wrapper.
     */
    #refDiv

    // Initalizes a new instance.
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Initalize reference values.
      this.#refHeading = this.shadowRoot.querySelector('h3')
      this.#refDiv = this.shadowRoot.querySelector('#persona')

      // Default values.
      this.#personaTitle = 'Resume'
      this.#paragraphs = 'change later'
    }

    /**
     * Invoked after this custom element has been inserted in the DOM.
     */
    connectedCallback() {
      this.#updateHeading(this.#personaTitle)
      this.#updateParagraphs(this.#paragraphs)
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

    /**
     * Triggers a rerender of the h3.
     *
     * @param {String} title - The heading value.
     */
    #updateHeading(title) {
      this.#refHeading.innerHTML = title
    }

    /**
     * Rerenders the referenced div which contains the text.
     *
     * @param {String} paragraphs - A string of the text to be rendered.
     */
    #updateParagraphs(paragraphs) {
      const arrayOfParagraphs = paragraphs.trim().split('\n')

      this.#refDiv.innerHTML = ''


      for (const paragraph of arrayOfParagraphs) {
        const paragraphObj = document.createElement('p')
        paragraphObj.classList.add('ds-persona-paragraph')
        paragraphObj.textContent = paragraph

        this.#refDiv.append(paragraphObj)
      }
    }
  })