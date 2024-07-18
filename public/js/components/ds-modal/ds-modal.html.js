// Create template object.
export const template = document.createElement('template')

// Populate template.
template.innerHTML = `
    <div class="modal-container" part="modal-container">
        <nav class="navbar-control" part="navbar-control">
            <h2 class="modal-title" part="modal-title">Aquity</h2>
            <button id="close-btn" part="close-btn">X</button>
        </nav>
        <div class="view-container" part="view-container"></div>
        <div class="radio-button-control" part="radio-button-control"></div>
    </div>
    <span class="invisible-overlay" part="invisible-overlay"></span>
`