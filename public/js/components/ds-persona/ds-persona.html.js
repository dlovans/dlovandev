// Create template object.
export const template = document.createElement('template')

template.innerHTML = `
  <div>
    <h3>Persona</h3>
    <div id="resume-icon">
      <slot></slot>
      <a download>Download Resume</a>
    </div>
  </div>
  <div id="persona"></div>

`
