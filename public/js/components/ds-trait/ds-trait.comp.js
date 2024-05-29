/**
 * @description Defines the ds-trait web component.
 * @module ds-trait
 */

import { template as styleTemplate } from './ds-trait.css.js'

customElements.define('ds-trait',
  /**
   * Anonymous class representing the ds-trait custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Represents the traits of the user to display.
     */
    #traits

    /**
     * Initializes new instance.
     */
    constructor() {
      super()


      // Attach shadow DOM tree to this custom element, and
      // append children to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Assign default values.
      this.#traits = 'Entrepreneurish&#13;Autonomous&#13;Creative&#13;Resiliant'
    }

    /**
     * Invoked after the custom element has been inserted into the DOM.
     */
    connectedCallback() {
      this.#render(this.#traits)
    }

    /**
     * Observes specified attribute for change.
     * 
     * @returns {String[]} - An array of attributes to be observed.
     */
    static get observedAttributes() {
      return ['ds-traits']
    }

    /**
     * Invoked when an observed attribute value changes.
     *
     * @param {string} name - The name of the attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-traits' && oldValue !== newValue) {
        this.#traits = newValue
        this.#render(this.#traits)
      }
    }

    /**
     * Creates h4 objects for each trait, inserts into shadow DOM.
     *
     * @param {string} traits - The traits/qualities of the owner.
     */
    #render(traits) {
      // Create an array of traits where HTML entity for newline serves as delimiter.
      const arrayOfTraits = traits.split('&#13;')

      // Empty this custom element.
      while(this.firstChild) {
        this.firstChild.remove()
      }

      // Add numbered part attributes for each h4.
      let traitNumber = 1
      for (const trait of arrayOfTraits) {
        const heading = document.createElement('h4')
        heading.textContent = trait
        heading.setAttribute('part', `trait${traitNumber} trait`)
        this.shadowRoot.append(heading)
        ++traitNumber
      }

    }
  }
)
