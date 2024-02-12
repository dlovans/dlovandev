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

  .warning {
    border: 1px solid orange;
  }

  .success {
    border: 1px solid green;
  }

  .error {
    border: 1px solid red;
  }

  .status-message {
    height: 0;
    transition: height .5s ease;
  }

  .display-message {
    height: 50px
  }
</style>
`