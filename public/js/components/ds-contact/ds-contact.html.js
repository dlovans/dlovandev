// Create template object.
export const template = document.createElement('template')

// Populate template object.
template.innerHTML = `
<form method="POST" action="./verify-message">
  <div class="name-wrapper">
    <label for="flname">Name:</label>
    <input name="flname" type="text" id="flname">
  </div>
  <div class="email-wrapper">
    <label for="email">Email:</label>
    <input name="email" type="email" id="email">
  </div>
  <div class="message-wrapper">
    <label for="message">Message:</label>
    <textarea name="message" id="message" wrap="hard"></textarea>
  </div>
  <input type="submit" id="submit">
</form>
`