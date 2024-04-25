// Create template object.
export const template = document.createElement('template')

template.innerHTML = `
  <div id="persona-top-bar">
    <h3></h3>
    <div id="resume-icon" part="resume-icon">
      
      <a href="" download>
        <slot>

        </slot>
        Download Resume</a>
    </div>
  </div>
  <div id="persona">

  </div>

`
