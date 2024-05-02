// Create template object.
export const template = document.createElement('template')

// Populate template object with styles.
template.innerHTML = `
<style>

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    overflow: hidden;
    border-radius: 15px;
    height: 100%;
    background-color: #242f36;
  }
</style>
`
