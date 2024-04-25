// Create template.
export const template = document.createElement('template')

// Add styling for component.
template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    display: flex;
    flex-direction: column;
  }

  #persona-top-bar {
    width: 100%;
    display: flex;
    align-items: center;
  }

  #resume-icon {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  #resume-icon a {
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-decoration: none;
    color: #FFF;
    transition: all 0.5s ease;
  }

  #resume-icon a:hover {
    color: green;
    transform: scale(0.9)
  }

  .about-title {
    font-size: 1.2rem;
  }

  .about-text {
    margin: 5px 0;
  }

  .about-text:last-of-type {
    margin-bottom: 0;
  }
</style>
`
