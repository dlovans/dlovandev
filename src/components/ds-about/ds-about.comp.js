/**
 * @description This module defines the ds-about web component.
 * @module ds-about
 */

import { template as styleTemplate } from './ds-about.css.js'

/**
 * Define custom element ds-about.
 */
customElements.define('ds-about',
/**
 * Anonymous class representing the ds-about custom element.
 */
class extends HTMLElement {
  /**
   * The title of the about card.
   */
  #title

  /**
   * The paragraphs to be rendered.
   */
  #paragraphs

  /**
   * Initializes new instance.
   */
  constructor () {
    super()
    // Attach shadow DOM tree to this custom element, and
    // append templates to its shadow root.
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(styleTemplate.content.cloneNode(true))

    // Default values.
    this.#title = 'Developer 079'
    this.#paragraphs = 'Hey there! I\'m Dlovan, a web developer with a growing passion for iOS development. My coding journey started with a simple idea, leading me to explore online resources and university courses.\nI\'m not your typical developer; I\'m a problem solver with a creative twist. I see programming as something organic, rather than mechanical, a way to bring ideas to life. Currently, I\'m deeply involved in a project aiming to connect people based on their shared interests — forming unique digital tribes.\nSwift and SwiftUI are my languages of choice. The elegance and simplicity of Swift resonate with me, making it my go-to tool for crafting intuitive user experiences.\nBeyond coding, I find joy in contemplating life\'s progression and diving into philosophical discussions. Humility and honesty are my guiding principles in both personal and professional pursuits.\nLet\'s embark on this coding adventure together and create something extraordinary!'
  }

  /**
   * Observes specified attributes for changes.
   *
   * @returns {String[]} - An array of attributes.
   */
  static get observedAttributes () {
    return ['title', 'paragraphs']
  }

  /**
   * Invoked when attributes of custom element changes.
   *
   * @param {*} name 
   * @param {*} oldValue 
   * @param {*} newValue 
   */
  changedAttributeCallback (name, oldValue, newValue) {
    if (name === 'title' && oldValue !== newValue) {
      this.title = newValue
    }

    if (name === 'paragraphs' && oldValue !== newValue) {
      this.paragraphs = newValue
    }

    // Rerender the custom element.
    this.#render()
  }

  /**
   * Invoked after the custom element is inserted into the DOM.
   */
  connectedCallback () {
    this.#render()
  }

  #render () {
    // Create h3 heading and append shadow root.
    const titleHeading = document.createElement('h3')
    titleHeading.classList.add('about-title')
    titleHeading.textContent = this.#title
    this.shadowRoot.append(titleHeading)

    // Create p elements and append to shadow root.
    const arrayOfParagraphs = this.#paragraphs.split('\n')
    for (const paragraph of arrayOfParagraphs) {
      const paragraphElement = document.createElement('p')
      paragraphElement.classList.add('about-text')
      paragraphElement.textContent = paragraph
      this.shadowRoot.append(paragraphElement)
    }
  }
})