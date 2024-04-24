// Create template object.
export const template = document.createElement('template')

// Style the component.
template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: flex;
    flex-direction: column;
    background-color: #242f36;
    align-items: center;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 10px;
  }

  input {
    width: 100%;
    height: 35px;
    border-radius: 10px;
    padding: 5px;
  }

  input, .message-wrapper {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    margin-bottom: 5px;
  }

  .message-wrapper {
    width: 100%;
  }

  .message-wrapper textarea {
    border-radius: 10px;
    height: 70px;
    resize: none;
    overflow: scroll;
    padding: 5px;
  }

  input:focus, .message-wrapper textarea:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }

  #submit {
    align-self: flex-end;
    text-align: center;
  }

  #submit:hover {

  }

  .status-message {
    height: 50px;
    margin: 5px 0;
    padding: 10px;
    background-color: transparent;
    border-radius: 10px;
    transition: all .5s ease;
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
