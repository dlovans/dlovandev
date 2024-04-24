/**
 * @description Defines the ds-text web component.
 * @module ds-text
 */


import { template as markupTemplate } from './ds-text.html.js'
import { template as styleTemplate } from './ds-text.css.js'


customElements.define('ds-text',
  /**
   * Anonymous class representing the ds-text custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * The text to be rendered.
     */
    #text

    /**
     * Reference to the h2 object.
     */
    #headerObj

    /**
     * Initializes new instance.
     */
    constructor() {
      super()

      // Attach shadow DOM tree to this custom element, and
      // append children to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Assign default value.
      this.#text = 'Native iOS & Android Developer | Fullstack Web Developer'
      this.#headerObj = this.shadowRoot.querySelector('h2')
    }

    /**
     * Invoked after the custom element is inserted into DOM.
     */
    connectedCallback() {
      this.#render(this.#text)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - A singleton.
     */
    static get observedAttributes() {
      return ['text']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'text' && newValue !== oldValue && typeof newValue === 'string') {
        this.#text = newValue
        this.#render(this.#text)
      }
    }

    /**
     * Renders the child element of this custom element.
     * 
     * @param {String} textString - The text string.
     */
    #render(textString) {
      this.#headerObj.innerHTML = textString
    }
  }
)
