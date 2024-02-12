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

  .status-message {
    height: 0;
    background-color: transparent;
    border-radius: 10px;
    transition: all .5s ease;
  }

  .display-message {
    height: 50px
  }

  .success-status-message {
    background-color: green;
  }
  
  .error-status-message {
    background-color: red;
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
</style>
`