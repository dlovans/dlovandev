// Create template object.
export const template = document.createElement('template')

// Populate template.
template.innerHTML = `
    <div class="modal-container">
        <nav class="navbar-control">
            <h2 class="modal-title">Aquity</h2>
            <button id="close-btn">X</button>
        </nav>
        <div class="projects-view-container"></div>
        <div class="techs-view-container"></div>
        <div class="radio-button-control"></div>
    </div>
    <span class="invisible-overlay"></span>
`