# Exercise 07: Formatting a Form

Create a folder within the "css_exercise" directory named with your first name and the exercise number (e.g., "John-Exercise-7"). Within this folder, create an HTML file named "index.html" and a CSS file named "style.css". Then complete the exercise.

## Instructions

1. Inside the HTML file, create a `<form>` element.
2. Add various form elements within the form, such as text inputs, checkboxes, radio buttons, select dropdowns, and a submit button.
3. Apply the following styles using CSS:
   - Set a background color for the form.
   - Adjust the spacing and alignment of the form elements.
   - Apply styles to the form elements to differentiate them from normal text.
   - Customize the appearance of checkboxes and radio buttons.
   - Style the submit button with appropriate colors and dimensions.
   - Add padding and margins to the form elements to create proper spacing.
   - Adjust the font styles and sizes within the form.
   - Apply hover and focus effects to enhance the interactivity of the form elements.

Example Structure

index.html:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>

    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" id="checkbox" name="checkbox">

    <label for="radio1">Option 1:</label>
    <input type="radio" id="radio1" name="radio" value="option1">
    
    <label for="radio2">Option 2:</label>
    <input type="radio" id="radio2" name="radio" value="option2">

    <label for="select">Select:</label>
    <select id="select" name="select">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    <button type="submit">Submit</button>
  </form>
</body>
</html>
```

style.css:
```css
/* Add your CSS styles here */
```

Finalize Your Exercise

1. Save your HTML and CSS files.
2. Open your HTML file in a web browser to view the form and check if the CSS styles are applied correctly.
3. Make any necessary adjustments to the CSS rules to achieve the desired visual presentation.
4. Validate your HTML and CSS code using online validators to ensure they follow proper syntax and structure.

When you are ready to submit your exercise, commit and push the HTML and CSS files to the Git repository.