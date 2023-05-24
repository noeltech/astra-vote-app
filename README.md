# Astra Votes

A Voting Web Application

## Documentation

1. Added a "New Voter" button in the header for ease of testing
   -this clear the cache to test a new voter if the voter had already voted as stated
   in the no. 8 functionalities required document.

## How to Setup and Deploy

### Prerequisites

Before starting, ensure that you have the following software installed on your system:

1. Node.js: You can download and install Node.js from the official website (https://nodejs.org). It's recommended to use the LTS (Long Term Support) version.

### Setup Instructions

1. Clone or download the application repository to your local machine.

   git clone https://github.com/noeltech/astra-vote-app.git

2. Open a terminal or command prompt and navigate to the project's root directory.

   cd astra-vote-app

3. Install the required dependencies by running the following command:
   npm install

4. Once the dependencies are installed, start the development server by running the following command:

   npm start

   This command will start the development server and launch your application in your default browser. Any changes you make to the source code will automatically reload the application.

5. . You should see your simple web application up and running in the browser. By default, CRA provides a basic starter template with some sample components. Modify the code to suit your requirements.

6. Open your preferred text editor or integrated development environment (IDE) to make changes to the code. The entry point for your application is the src/index.js file.

## Deployment Instructions

Once you're ready to deploy your application and make it accessible to others, you can follow these steps to create a production-ready build and deploy it to a hosting service.

1. Create an optimized production build of your application by running the following command:
   npm run build

This command generates a build folder that contains the minified and optimized version of your application.

2. After the build process completes, you can deploy the build folder to any static file hosting service of your choice. Some popular options include:

Netlify3

Vercel

GitHub Pages

Firebase Hosting

Each hosting service has its own deployment process, so refer to their documentation for detailed instructions on how to deploy a static website.

3. Once your application is deployed, you can access it using the provided URL.
