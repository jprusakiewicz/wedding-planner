# Wedding Planner

This is a web app called Wedding Planner where a wedding manager can manage future weddings. It allows the user to view a list of weddings, add new weddings, and view the details of each wedding.

## Project Structure

```
wedding-planner
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.css
│   ├── components
│   │   ├── WeddingList.vue
│   │   ├── WeddingDetails.vue
│   │   └── AddWedding.vue
│   ├── views
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue
│   ├── main.js
│   └── router
│       └── index.js
├── public
│   ├── index.html
│   └── favicon.ico
├── .gitignore
├── package.json
├── README.md
└── vue.config.js
```

## File Descriptions

- `src/assets/styles/main.css`: This file contains the main CSS styles for the web app.

- `src/components/WeddingList.vue`: This file exports a Vue component called `WeddingList` which displays a list of weddings. It may have methods and data properties related to managing the list of weddings.

- `src/components/WeddingDetails.vue`: This file exports a Vue component called `WeddingDetails` which displays the details of a specific wedding. It may have methods and data properties related to managing the wedding details.

- `src/components/AddWedding.vue`: This file exports a Vue component called `AddWedding` which provides a form for adding a new wedding. It may have methods and data properties related to adding a wedding.

- `src/views/Home.vue`: This file exports a Vue component called `Home` which serves as the home page of the web app. It may contain other components and may have methods and data properties related to managing the home page.

- `src/views/About.vue`: This file exports a Vue component called `About` which serves as the about page of the web app. It may contain other components and may have methods and data properties related to managing the about page.

- `src/App.vue`: This file is the root Vue component of the web app. It may contain the main layout and may import and use other components.

- `src/main.js`: This file is the entry point of the web app. It initializes the Vue app and may import and use other files and libraries.

- `src/router/index.js`: This file sets up the routing for the web app using Vue Router. It may define the routes and their corresponding components.

- `public/index.html`: This file is the main HTML file of the web app. It may include the necessary scripts and stylesheets and serve as the entry point for the app.

- `public/favicon.ico`: This file is the favicon for the web app.

- `.gitignore`: This file specifies the files and directories that should be ignored by Git.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

- `README.md`: This file contains the documentation for the project.

- `vue.config.js`: This file is the configuration file for Vue CLI. It may contain custom configurations for the Vue project.