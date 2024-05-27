 # &lt;ds-text&gt;

`ds-text` is a web component that displays an SVG icon and some plain text.

## Attributes

### `ds-text`
The `ds-text` represents the professional titles of the user.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Native iOS & Android Developer | Fullstack Web Developer`


## Example

```html
<ds-text
  ds-text="Native iOS & Android Developer | Fullstack Web Developer"
>
  <ds-svg-wrap
    svg-source="./img/machinecode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  ></ds-svg-wrap>
<ds-text>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-text.comp.js'
```
###### Import ds-svg-wrap web component to be able to add an SVG icon:

```javascript
import './ds-svg-wrap.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-text/ds-text.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-text
  ds-text="Native iOS & Android Developer | Fullstack Web Developer"
>
  <ds-svg-wrap
    svg-source="./img/machinecode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  ></ds-svg-wrap>
<ds-text>
```

#### OR

##### Declare without an SVG.

```html
<ds-text
  ds-text="Native iOS & Android Developer | Fullstack Web Developer"
>
<ds-text>
```


## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.Shadow DOM children have part attributes to allow for responsive styling in global CSS files. The component has a `<slot>` object to allow for insertion of regular DOM objects (`ds-svg-wrap`) in the custom element.
