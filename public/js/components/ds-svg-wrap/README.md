 # &lt;ds-svg-wrap&gt;

`ds-svg-wrap` is a web component that displays a logo in SVG format.

## Attributes

### `svg-source`
The `svg-source` represents the relative path of SVG file source (public/img). Options:

- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `../../img/icons8-swift.svg`

### `div-dimensions`
The `div-dimensions` represents the width and height, in pixels, of the SVG div wrapper. Options:

- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `50`


### `svg-dimensions`
The `svg-dimensions` represents the width and height, in pixels, of the SVG. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `50`

### `bg-color`
The `bg-color` represents the background color of the child div wrapper. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `#36454f`

### `ds-description`
The `ds-description` represents the description of the SVG.Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Being swiftly with Swift is a core principle`

### `ds-svg-name`
The `ds-svg-name` represents the descriptive name of the SVG. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Swift`

## Example

```html
<ds-svg-wrap 
  svg-source="./img/machinecode.svg" 
  div-dimensions="40" 
  svg-dimensions="30"
  bg-color="transparent"
  ds-description="Describe your experience with this programming language/tool."
  ds-svg-name="Machine Code"
>
</ds-svg-wrap>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-svg-wrap.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-svg-wrap/ds-svg-wrap.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-svg-wrap 
  svg-source="./img/machinecode.svg" 
  div-dimensions="40" 
  svg-dimensions="30"
  bg-color="transparent"
  ds-description="Describe your experience with this programming language/tool."
  ds-svg-name="Machine Code"
  >
</ds-svg-wrap>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children <SVG> have `part` attributes to allow for responsive styling in global CSS files.
