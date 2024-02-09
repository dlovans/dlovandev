# &lt;ds-about&gt;

`ds-about` is a web component that provides a short about description.

## Attributes

### `title`
The `title` attribute represents the title of the ds-about component, a heading. String attribute.

### `paragraphs`
The `paragraphs` attribute represents the main text of the ds-about component. Use `&#10;` as delimeter to separate into paragraph elements. String attribute.

## Example

```html
<ds-about></ds-about>

<ds-about title="Dev" paragraphs="Hello world.&#10;Hello universe!"></ds-about>
```

## Usage

To use this web component, import the module, then use JavaScript DOM methods.

```javascript
import './ds-about.comp.js'
```

or load the module and use the component declaratively in HTML.

```html
<script type="module" src="../components/ds-about/ds-about.comp.js"></script>
```

Continue in HTML

```html
<ds-about></ds-about>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.