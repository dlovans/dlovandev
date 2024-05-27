# &lt;ds-project&gt;
`ds-project` is a web component that displays a minimal overview of a project.

## Attributes

### `ds-project-title`
The `ds-project-title` attribute represents the title of the project. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Aquity`

### `ds-live-url`
The `ds-live-url` attribute represents the website/app/demo URL of this project.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `https://aquity.onrender.com/`

### `ds-repo-url`
The `ds-repo-url` attribute represents the repository URL.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `https://github.com/dlovans/quant`

### `ds-project-screenshot`
The `ds-project-screenshot` attribute represents a project screenshot. Relative URL to source file.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `./../../../img/projects/aquity-screenshot.png`

### `ds-project-description`
The `ds-project-description` attribute represents the information regarding the project.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Undefined not null.`
- **Note:** Use `&#13` as delimiter/newline.

## Example

```html
<ds-project
        ds-project-title="Solarity"
        ds-live-url="https://www.solarity.com"
        ds-repo-url="https://www.github.com/ds/solarity"
        ds-project-screenshot="../../../img/projects/solarity.jpg"
        ds-project-description="undefind not null"
>
</ds-project>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:
```javascript
import './ds-project.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:
```html
<script type="module" src="../components/ds-project/ds-project.comp.js"></script>
```

###### Continue in HTML:
```html
<ds-project></ds-project>
```

## Custom Events

### `ds-project-info`
The `ds-project-info` custom event is dispatched when the `More` button is clicked.

- **Target:** `ds-project-wrapper` web component.
- **Communicates with:** `ds-project-wrapper` web component.
- **Description:** This event is dispatched by `ds-project` web component in response to a click event on the `More` button of the shadow DOM. The target is `ds-project-wrapper` web component, a parent custom element. This event triggers the dispatch of `ds-expand-projects` event in the parent that has details about all child `ds-project`. The property in event detail object is used to determine which project is focused in `ds-modal`.
- **Bubbles:** true.
- **Composed:** true.
- **Event Detail Object:** The event's detail object contains the following properties:
```javascript
{
    projectKey: string
}
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.

