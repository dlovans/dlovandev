// Create template.
export const template = document.createElement('template')

// Declare what should be rendered.
template.innerHTML = `
<slot></slot>
<h2 part="ds-text-title"></h2>
`
