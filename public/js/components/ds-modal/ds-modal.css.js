// Create template object.
export const template = document.createElement('template')

// Style the component.
template.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        :host {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(200%);
            transition: all .5s ease-in;
        }
        
        :host(.toggle-projects-modal) {
            transform: translateY(0%);
        }
        
        .modal-container {
            position: relative;
            width: 50%;
            height: 70%;
            background-color: #26373d;
            z-index: 10;
            border-radius: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            padding: 5px;
        }
        
        .navbar-control {
            grid-area: nav;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid #FFF;
        }
        
        .modal-title {
            margin-left: 1.1rem;
        }
        
        #close-btn {
            font-size: 1.5rem;
            background-color: transparent;
            padding: 0;
            border: none;
            margin-right: 1.1rem;
            color: #FFF;
        }
        
        #close-btn:hover {
            cursor: pointer;
        }
        
        .projects-view-container {
            width: 100%;
            height: 100%;
            display: none;
        }
        
        .display-view-container {
            display: flex;
            overflow: scroll;
        }
        
        
        .project-content-wrapper {
            display: grid;
            grid-template-areas:
            "title title title"
            "desc desc screenshot"
            "desc desc screenshot"
            "desc desc links"
            "desc desc techs"
            "desc desc techs"
            ;
            grid-template-rows: min-content;
            grid-template-columns: 0.9fr 0.9fr 1.3fr;
            width: 100%;
            flex-shrink: 0;
            column-gap: 20px;
            padding: 1.5rem;
        }
        
        .modal-project-title {
            grid-area: title;
            margin: 10px 0;
        }
        
        .modal-links-wrapper {
            grid-area: links;
        }
        
        .modal-project-image {
            grid-area: screenshot;
            background-size: contain;
            border-radius: 10px;
        }
        
        .modal-project-description-wrapper {
            grid-area: desc;
            display: flex;
            flex-direction: column;
        }
        
        .modal-project-description-wrapper p {
            margin-bottom: 1.2rem;
        }
        
        
        .invisible-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: transparent;
            z-index: 9;
        }
    </style>
`