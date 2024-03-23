// Create template.
export const template = document.createElement('template')

// Add styling for component.
template.innerHTML = `
<style>
  .about-title {
    font-size: 1.5rem;
  }

  .about-text {
    margin: 5px 0;
  }

  .about-text:last-of-type {
    margin-bottom: 0;
  }
</style>
`