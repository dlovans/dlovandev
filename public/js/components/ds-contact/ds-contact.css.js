// Create template object.
export const template = document.createElement('template')

// Style the component.
template.innerHTML = `
<style>
  :host {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: inherit;
  }
</style>
`