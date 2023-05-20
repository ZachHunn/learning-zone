# Exercise 05: Styling a Table

Create a folder within the "css_exercise" directory named with your first name and the exercise number (e.g., "John-Exercise-1"). Within this folder, create an HTML file named "index.html" and a CSS file named "style.css". Then complete the exercise.

## Instructions

1. Inside the HTML file, create a `<table>` element with at least three columns and three rows.
2. Give the table a meaningful caption using the `<caption>` element.
3. Add appropriate table headers using the `<th>` element for each column.
4. Populate the table with sample data using the `<td>` element.
5. Apply the following styles using CSS:
   - Set the background color of the table.
   - Add padding to the table cells.
   - Style the table headers differently from regular cells.
   - Apply alternating row colors to improve readability.
   - Set a specific width for the table.
   - Add a border to the table and adjust its color, thickness, and style.
   - Apply text alignment to the table cells.
   - Add a hover effect to the table rows.

## Example Structure

index.html:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <table>
    <caption>Sample Table</caption>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
      <tr>
        <td>Row 3, Cell 1</td>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

style.css:
```css
/* Add your CSS styles here */
```

## Finalize Your Exercise

1. Save your HTML and CSS files.
2. Open your HTML file in a web browser to view the table and check if the CSS styles are applied correctly.
3. Make any necessary adjustments to the CSS rules to achieve the desired visual presentation.
4. Validate your HTML and CSS code using online validators to ensure they follow proper syntax and structure.

When you are ready to submit your exercise, commit and push the HTML and CSS files to the Git repository.