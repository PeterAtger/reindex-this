# Reindex-This

Reindex-This is a web application that simplifies the process of reindexing web pages using the Google Indexing API. Whether you need to update search engine information for your website or any available projects, Reindex-This has you covered.

## Table of Contents
- [Getting Started](#getting-started)
  - [Step 1: Select a Project](#step-1-select-a-project)
  - [Step 2: Provide a List of URLs](#step-2-provide-a-list-of-urls)
  - [Step 3: Reindex](#step-3-reindex)
- [Adding a Custom Project](#adding-a-custom-project)
  - [Step 1: Add Project Name](#step-1-add-project-name)
  - [Step 2: Obtain a Service Account Key JSON File](#step-2-obtain-a-service-account-key-json-file)
  - [Step 3: Add Project](#step-3-add-project)
- [Future Plans](#future-plans)
- [How to Install Locally](#how-to-install-locally)
- [License](#license)
- [Contribution](#contribution)

## Getting Started

To get started with Reindex-This, follow these easy steps:

### Step 1: Select a Project

1. Visit the Reindex-This website at [https://reindex-this.vercel.app/](https://reindex-this.vercel.app/).
2. Choose one of the available projects for which you want to reindex web pages. Selecting a project is the first step in the reindexing process.

### Step 2: Provide a List of URLs

1. After selecting a project, you will be prompted to provide a list of URLs that you want to reindex. These could be the web pages you want to update in the search engine's index.

### Step 3: Reindex

1. Once you've added the list of URLs, simply click the "Reindex" button to initiate the reindexing process.
2. The application will send a request to the Google Indexing API, and your specified URLs will be reindexed.

It's as simple as that! Reindex-This streamlines the process, making it easy to keep your website's search engine information up-to-date.

## Adding a Custom Project

If you have a unique project that is not listed among the available projects, you can add it by following these steps:

### Step 1: Add Project Name

1. Click the "Add Project" button on the Reindex-This website.
2. Enter a name for your project. This will help you identify it later.

### Step 2: Obtain a Service Account Key JSON File

1. To use the Google Indexing API, you need to follow Google's API prerequisites. Obtain a service account key JSON file by following the guide provided by Google at [Google Indexing API Prerequisites](https://developers.google.com/search/apis/indexing-api/v3/prereqs).
2. Save the service account key JSON file to your local device.

### Step 3: Add Project

1. Paste the contents of the service account key JSON file into the appropriate field on the Reindex-This website.
2. Click the "Add Project" button.

Your custom project is now added to Reindex-This, and you can use it for reindexing web pages just like the available projects.

## Future Plans

We have plans to enhance Reindex-This with the ability to unindex web pages in the future. This feature will make it even more versatile and useful for managing your web page indexing.

## How to Install Locally

If you want to run Reindex-This locally on your machine, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

2. Clone the Reindex-This repository:

   ```shell
   git clone https://github.com/peteratger/reindex-this.git
   ```

3. Navigate to the project directory:

   ```shell
   cd reindex-this
   ```

4. Install the project dependencies:

   ```shell
   npm install
   ```

5. Start the local development server:

   ```shell
   npm run dev
   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access Reindex-This locally.

## License

This project is licensed under the MIT License

## Contribution

We welcome contributions to Reindex-This. If you'd like to contribute: 

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your fork on GitHub.
5. Create a pull request to the main branch of this repository, describing the changes and improvements you've mad