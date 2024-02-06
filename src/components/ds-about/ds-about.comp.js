/**
 * @description This module defines the ds-about web component.
 * @module ds-about
 */

import { template as markupTemplate } from './ds-about.html.js'
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
   * Initializes new instance.
   */
  constructor () {
    super()
    // Attach shadow DOM tree to this custom element, and
    // append templates to its shadow root.
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(markupTemplate.content.cloneNode(true))
    this.shadowRoot.append(styleTemplate.content.cloneNode(true))
  }
})