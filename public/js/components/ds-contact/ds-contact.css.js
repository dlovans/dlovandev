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
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 5px 0;
  }

  h3 {
    text-align: center;
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
    margin-bottom: 0;
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
    display: flex;
    position: relative;
    width: 100%;
    height: 35px;
    border-radius: 10px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: scale(1);
    border: 3px solid transparent;
    transition: all 0.5s ease;
  }

  #submit:hover {
    transform: scale(0.95);
    border-color: green;
    cursor: pointer;
  }

  .status-message {
    height: 30px;
    margin: 10px 0;
    padding: 10px;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: all .5s ease;
  }

  .success-status-message {
    background-color: green;
  }
  
  .error-status-message {
    background-color: red;
  }

  .warning {
    border: 3px solid orange;
  }

  .success {
    border: 3px solid green;
  }

  .error {
    border: 3px solid red;
  }
</style>
`
