// Create template object.
export const template = document.createElement('template')

// Populate template.
template.innerHTML = `
    <nav class="navbar-control">
        <h2 class="modal-title"></h2>
        <button id="close-btn"></button>
    </nav>
    <div class="project-view-container"></div>
    <span class="invisible-overlay"></span>
`