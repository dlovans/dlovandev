# &lt;ds-slogan&gt;

`ds-slogan` is a web component that displays a text that sums up the owner of this portfolio in one or two sentences.

## Attributes

### `ds-slogan`
The `ds-slogan` attribute represents text to be displayed. String attribute. Optional. Defaults to "Transforming Ideas into Action - Let\'s Make a Change Together!".

### `ds-button-text`
The `ds-button-text` attribute represents the button text. String attribute. Optional. Defaults to "Contact Me!".

## Example

```html
<ds-slogan
        ds-slogan="An idea isn/'t worth much without action,
         so how about we make that action happen?"
        ds-button-text="Break the Ice">
</ds-slogan>
```

## Usage

1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-slogan.comp.js'
```

2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-slogan/ds-slogan.comp.js"></script>
```

Continue in HTML:

```html
<ds-slogan></ds-slogan>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children can be styled with `part` attribute.