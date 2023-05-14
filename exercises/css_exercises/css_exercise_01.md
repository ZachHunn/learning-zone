# Exercise 1 - Applying CSS Styles to HTML Elements

Create a folder within the "css_exercise" directory named with your first name and the exercise number (e.g., "John-Exercise-1"). Within this folder, create an HTML file named "index.html". Then complete the exercise.

## Applying CSS Styles

1. Inside the HTML file, create three different HTML elements of your choice. For example, you can use `<h1>`, `<p>`, and `<div>` elements.
2. Apply CSS styles to each of the HTML elements using the following methods:

   - Inline CSS: Add the `style` attribute directly to each HTML element and define the desired styles within the attribute. For example, `<h1 style="color: blue;">Heading</h1>`.

   - Internal CSS: Within the `<head>` section of your HTML file, add a `<style>` tag. Inside the `<style>` tag, write CSS rules to style each HTML element using their respective selectors. For example:

     ```html
     <style>
       h1 {
         color: red;
       }

       p {
         font-size: 18px;
       }

       div {
         background-color: yellow;
       }
     </style>
     ```

   - External CSS: Create a separate CSS file named "styles.css" within the same folder. Link the "styles.css" file to your HTML file using the `<link>` tag within the `<head>` section. In the "styles.css" file, write CSS rules to style each HTML element using their respective selectors. For example:

     ```html
     <link rel="stylesheet" href="styles.css">
     ```

     ```css
     /* styles.css */
     h1 {
       color: green;
     }

     p {
       font-size: 20px;
     }

     div {
       background-color: pink;
     }
     ```

## Finalize Your Exercise

1. Save your HTML file and CSS file.
2. Open your HTML file in a web browser to view the web page and check if the CSS styles are applied correctly to the HTML elements.
3. Make any necessary adjustments to the CSS rules to achieve the desired visual presentation.
4. Validate your HTML and CSS code using online validators to ensure they follow proper syntax and structure.

When you are ready to submit your exercise, commit and push all the files in your exercise folder, including any files that have been changed, to the Git repository.