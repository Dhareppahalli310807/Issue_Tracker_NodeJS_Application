# Issue Tracker

A Node.js + EJS application to track issues/bugs for projects. This application allows users to create projects and track issues related to them. Users can filter issues by multiple labels, author, and search by title and description.

## Features

- **Home Page**
  - Show a list of projects.
  - Create a new project.

- **Create Project Page**
  - Accept the following fields to create a project:
    - Name
    - Description
    - Author

- **Project Detail Page**
  - Show bugs/issues related to the project.
  - Filter issues by multiple labels.
  - Filter issues by author.
  - Search issues by title and description.
  - Create a new issue.

- **Create Issue Page**
  - Accept the following fields to create an issue:
    - Title
    - Description
    - Labels (multiple labels can be added to a project, and if a project already has a label, it will be shown in a dropdown as the user types the label in)
    - Author

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Dhareppahalli310807/Issue_Tracker_NodeJS_Application.git
    cd issue-tracker
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the MongoDB server (make sure you have MongoDB installed):
    ```sh
    mongod --dbpath /path/to/your/db
    ```

4. Start the application:
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to:
    ```
    http://localhost:8080
    ```

## File Structure



issue-tracker/
│
├── controllers/
│ ├── issueController.js
│ └── projectController.js
│
├── models/
│ ├── Issue.js
│ └── Project.js
│
├── public/
│ └── css/
│ └── style.css
│
├── routes/
│ ├── index.js
│ └── projects.js
│
├── views/
│ ├── issues/
│ │ └── new.ejs
│ ├── partials/
│ │ ├── footer.ejs
│ │ └── header.ejs
│ ├── projects/
│ │ ├── index.ejs
│ │ ├── new.ejs
│ │ └── show.ejs
│ └── layout.ejs
│
├── .gitignore
├── server.js
├── package.json
└── README.md


## Usage

### Home Page

1. **List of Projects**: Displays a list of all projects.
2. **Create New Project**: Click the "Create New Project" button to navigate to the create project page.

### Create Project Page

1. **Create a Project**: Fill in the name, description, and author fields and click "Create Project" to add a new project.

### Project Detail Page

1. **View Issues**: Click on a project from the home page to view the project details and related issues.
2. **Filter Issues**: Use the filter options to filter issues by labels, author, or search by title and description.
3. **Create New Issue**: Click the "Create New Issue" button to navigate to the create issue page.

### Create Issue Page

1. **Create an Issue**: Fill in the title, description, labels, and author fields and click "Create Issue" to add a new issue to the project.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
