![DV](https://www.deltavcodeschool.com/wp-content/uploads/DeltaV.png) 23: Components and Routing
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives
* students will be able to create front end routes through the use of `react-router-dom`
* students will be able to restructure their applications to use modular components
* students will be able to differentiate between view state and application state
* students will be able to lift application state to better control one way data flow

#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`

#### Feature Tasks
* create the following component and structure it according to the diagram below:
```
App
  NoteCreateForm
```
###### App Component
* the app component should manage the entire **application state**
* the state should contain a notes array
* each note should have the following data
  * `id` - always should contain the result of `uuid.v1()`
  * `editing` - false by default
  * `completed` - false by default
  * `content` - user provided content

###### NoteCreateForm Component
* `onSubmit` - the `NoteCreateForm` component should add a note to the application state
* **note:** in your app component, create a method for logging the state of your application when a note is added (ie: `componentDidUpdate`)
  * this should show an array of all notes that have been added to the state

#### Stretch Goals

###### NoteList Component
* should display an unordered list of NoteItem components

###### NoteItem Component
* should display the note content
* should display a delete button
  * `onClick` the note should be removed from the application state

