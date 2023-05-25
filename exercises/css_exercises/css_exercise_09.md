# Exercise 09: Pseudo-classes and Pseudo-elements

Create a folder within the "css_exercise" directory named with your first name and the exercise number (e.g., "John-Exercise-9"). Within this folder, create an HTML file named "index.html" and a CSS file named "style.css". Then complete the exercise.

## Instructions

1. Inside the HTML file, create a simple web page structure with multiple elements.
2. Apply the following styles using CSS pseudo-classes and pseudo-elements:
   - Use the `:hover` pseudo-class to add a hover effect to certain elements when the user hovers over them.
   - Use the `:active` pseudo-class to change the style of an element when it is being activated or clicked.
   - Use the `:first-child` pseudo-class to target and modify the style of the first child element of a parent element.
   - Use the `::before` or `::after` pseudo-elements to add decorative content before or after selected elements.
   - Modify the styles of visited links using the `:visited` pseudo-class.
   - Apply different styles to odd or even elements using the `:nth-child(odd)` or `:nth-child(even)` pseudo-classes.
   - Use the `::first-letter` pseudo-element to style the first letter of selected elements.
   - Use the `::first-line` pseudo-element to style the first line of selected elements.

Example Structure

index.html:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
  <div class="box"></div>
</body>
</html>
```

style.css:
```css
/* Add your CSS styles here */
```

Finalize Your Exercise

1. Save your HTML and CSS files.
2. Open your HTML file in a web browser to view the web page and check if the CSS styles are applied correctly.
3. Make any necessary adjustments to the CSS rules to achieve the desired styling using pseudo-classes and pseudo-elements.
4. Validate your HTML and CSS code using online validators to ensure they follow proper syntax and structure.

When you are ready to submit your exercise, commit and push the HTML and CSS files to the Git repository.