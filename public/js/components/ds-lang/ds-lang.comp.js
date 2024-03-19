/**
 * @description This module defines the ds-langs web component.
 * @module ds-langs
 */

import { template as styleTemplate } from './ds-lang.css.js'

customElements.define('ds-lang',
  /**
   * Anonymous class representing the ds-langs custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Relative source to the SVG.
     */
    #svgSource

    /**
     * Height of div wrapper.
     */
    #divHeight

    /**
     * Width of div wrapper.
     */
    #divWidth

    /**
     * Initializes new instance.
     */
    constructor() {
      super()
      // Attach shadow DOM tree to this custom element, and
      // append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Initialize svgSource field. Defaults to Swift SVG.
      this.#svgSource = this.getAttribute('lang-language') || '../../img/icons8-swift.svg'
      // Default values.
      this.#divHeight = 50
      this.#divWidth = 50
    }

    /**
     * Invoked after the custom element is inserted into the DOM.
     */
    async connectedCallback() {
      await this.#insertSVGFile(this.#svgSource)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes() {
      return ['lang-language', 'lang-height', 'lang-width']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    async attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'lang-language' && oldValue !== newValue) {
        this.#svgSource = newValue
        await this.#insertSVGFile(this.#svgSource)
      }

      if (name === 'lang-height' && oldValue !== newValue) {
        this.#divHeight = newValue
        await this.#insertSVGFile(this.#svgSource)
      }

      if (name === 'lang-width' && oldValue !== newValue) {
        this.#divWidth = newValue
        await this.#insertSVGFile(this.#svgSource)
      }
    }


    /**
     * Inserts svg content to this custom element from svg file.
     * 
     * @param svgFilePath - Relative file path to SVG file.
     */
    async #insertSVGFile(svgFilePath) {
      this.classList.remove('hide')
      try {
        const response = await fetch(svgFilePath)
        if (!response) {
          throw new Error('Check SVG file source!')
        }
        const svgContent = await response.text()
        const divWrapper = this.shadowRoot.querySelector('div')
        if (divWrapper) {
          this.shadowRoot.querySelector('div').remove()
        }


        // Create a div wrapper to be able to render the SVG tag.
        const newDiv = document.createElement('div')
        newDiv.style.height = `${this.#divHeight}px`
        newDiv.style.width = `${this.#divWidth}px`
        newDiv.innerHTML = svgContent
        this.shadowRoot.append(newDiv)
        const renderedSvg = this.shadowRoot.querySelector('svg')
        renderedSvg.classList.add('edit-svg')
      } catch (error) {
        console.error(error.message)
        this.classList.add('hide')
      }
    }
  }
)