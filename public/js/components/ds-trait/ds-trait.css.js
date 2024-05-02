// Create template object.
export const template = document.createElement('template')

// Style custom element.
template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    border-radius: 15px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
`
