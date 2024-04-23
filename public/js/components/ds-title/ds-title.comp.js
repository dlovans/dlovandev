/**
 * @description Defines the ds-title web component.
 * @module ds-title
 */


import { template as markupTemplate } from './ds-title.html.js'
import { template as styleTemplate } from './ds-title.css.js'


customElements.define('ds-title',
  /**
   * Anonymous class representing the ds-title custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * The title(s) of the user.
     */
    #titles

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
      this.#titles = 'iOS | Android | Fullstack Web Developer'
      this.#headerObj = this.shadowRoot.querySelector('h2')
    }

    /**
     * Invoked after the custom element is inserted into DOM.
     */
    connectedCallback() {
      this.#render(this.#titles)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - A singleton.
     */
    static get observedAttributes() {
      return ['titles']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'titles' && newValue !== oldValue && typeof newValue === 'string') {
        this.#titles = newValue
        this.#render(this.#titles)
      }
    }

    /**
     * Renders the child element of this custom element.
     * 
     * @param {String} titlesString - The title string.
     */
    #render(titlesString) {
      this.#headerObj.innerHTML = titlesString
    }
  }
)
