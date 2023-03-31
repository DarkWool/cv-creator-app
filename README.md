# CV Creator App - [view live](https://darkwool.github.io/cv-creator-app/)

This is my very first app created using _**React**_, alongside _**react-pdf**_ and _**emoji-mart**_, it was difficult at first but after a few commits I started to see that is awesome to use it and I think that this was a good project to start practicing with it.

The best part is that I learned how to manage class and functional components (Started with class ones and later I refactored) but not only that, I decided that I could learn about hooks too!

![Preview of the CV Creator App](/app-preview.png "Preview of the CV Creator App")

## Features

1. Fill your CV using your personal data, education, work experience, skills, languages and interests.
1. Download your CV as a **PDF** file!
1. Use emojis to express yourself on the "interests" section.

## Specifications

1. Create a new project using npx create-react-app cv-project. If you need a reminder on how it works, check out the previous lessons. Don’t forget to setup a GitHub repository for your project, to push your progress.
   1. Remove the boilerplate code created by create-react-app.
   1. You should use class components for this project. You’re going to find a lot of code written using class components and this practical experience will help you understand it when encountered. You’ll also revisit this project in a later lesson to replace the class components with functional ones.
   1. Think about how to structure your application into components. Your application should include:
      1. A section to add general information like name, email, phone number.
      1. A section to add your educational experience (school name, title of study, date of study)
      1. A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
   1. Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
   1. Create a components folder in your src directory and add your components.
   1. Include a styles folder in your src directory for your CSS files. You’ll need to import these in the component files to use them.

Check the assignment's page [here.](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)
