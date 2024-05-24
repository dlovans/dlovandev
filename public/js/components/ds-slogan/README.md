# &lt;ds-slogan&gt;

`ds-slogan` is a web component that displays a text that sums up the owner of this portfolio in one or two sentences.

## Attributes

### `ds-slogan`
The `ds-slogan` attribute represents text to be displayed. Options:

- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Transforming Ideas into Action - Let's Make a Change Together!`

### `ds-button-text`
The `ds-button-text` attribute represents the button text. Options:

- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Contact Me!`

## Example

```html
<ds-slogan
        ds-slogan="An idea isn/'t worth much without action,
         so how about we make that action happen?"
        ds-button-text="Break the Ice">
</ds-slogan>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-slogan.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-slogan/ds-slogan.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-slogan></ds-slogan>
```

## Custom Events
### `ds-trigger-focus`
The `ds-trigger-focus` custom event is dispatched when this custom element's button is clicked.
- **Target:** `ds-app` web component.
- **Communicates with:** `ds-contact` web component.
- **Description:** Sets focus on one of the input fields of `ds-contact` web component..
- **Bubbles:** true.
- **Composed:** true
- **Event Detail Object:** This event's detail object is empty.

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children can be styled with `part` attribute in global CSS files.