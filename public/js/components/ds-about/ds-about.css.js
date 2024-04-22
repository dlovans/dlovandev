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
