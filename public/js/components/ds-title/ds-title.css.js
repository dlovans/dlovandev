// Create template object.
export const template = document.createElement('template')

// Add styling for rendering.
template.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }

    * {
      box-sizing: inherit;
    }

    h2 {
      font-size: 1.2rem;
      white-space: nowrap;
      padding: 10px;

    }
  </style>
`
