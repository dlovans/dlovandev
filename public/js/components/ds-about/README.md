# &lt;ds-about&gt;

`ds-about` is a web component that provides a short about description.

## Attributes

### `about-title`
The `about-title` attribute represents the title of the ds-about component, a heading. String attribute.

### `about-paragraphs`
The `about-paragraphs` attribute represents the main text of the ds-about component. Use `&#10;` as delimeter to separate into paragraph elements. String attribute.

## Example

```html
<ds-about></ds-about>

<ds-about about-title="Dev" about-paragraphs="Hello world.&#10;Hello universe!"></ds-about>
```

## Usage

1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-about.comp.js'
```

2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-about/ds-about.comp.js"></script>
```

Continue in HTML:

```html
<ds-about></ds-about>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.