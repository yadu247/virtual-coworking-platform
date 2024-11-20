<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Virtual Coworking Platform Homepage</h1>
    <h2>Overview</h2>
    <p>
        This project is a web application built using <strong>React</strong> for the frontend and <strong>Express</strong> for the backend.
    </p>
    <p>
        The frontend is built with React to handle the user interface, while the backend uses Express to handle API requests and serve data.
    </p>
    <h2>Features</h2>
    <ul>
        <li>Responsive user interface built with React.</li>
        <li>API endpoints powered by Express for data handling.</li>
    </ul>
    <h2>Approach</h2>
    <h3>Frontend (React)</h3>
    <ul>
        <li>The frontend is developed using <strong>React</strong> to create dynamic and responsive user interfaces.</li>
        <li>React Components are used for creating different sections of the homepage</li>
        <li>Axios (or Fetch API) is used to make HTTP requests to the backend server.</li>
        <li>State management is handled using <strong>React Hooks</strong> (useState).</li>
    </ul>
    <h3>Backend (Express)</h3>
    <ul>
        <li><strong>Express</strong> is used to handle form submission.</li>
    <h2>Getting Started</h2>
    <h3>Prerequisites</h3>
    <p>
        <strong>Node.js</strong> and <strong>npm</strong> (Node Package Manager) should be installed on your system. You can download and install them from <a href="https://nodejs.org/">nodejs.org</a>.
    </p>
    <h3>Installation</h3>
    <p>Follow these steps to set up and run the project locally.</p>
    <ol>
        <li>
            <strong>Clone the repository:</strong><br>
            First, clone the repository to your local machine using the following command:
            <pre><code>git clone https://github.com/yadu247/virtual-coworking-platform.git</code></pre>
        </li>
        <li>
            <strong>Navigate to the project directory:</strong><br>
            <pre><code>cd virtual-coworking-platform</code></pre>
        </li>
        <li>
            <strong>Install dependencies for both frontend and backend:</strong>
            <ul>
                <li><strong>For the backend (Express):</strong>
                    Navigate to the backend folder and install the required dependencies:
                    <pre><code>cd server</code></pre>
                    <pre><code>npm install</code></pre>
                </li>
                <li><strong>For the frontend (React):</strong>
                    Now, move to the frontend directory and install the required dependencies:
                    <pre><code>cd ../client</code></pre>
                    <pre><code>npm install</code></pre>
                </li>
            </ul>
        </li>
    </ol>
    <h2>Running the Project Locally</h2>
    <h3>1. Start the backend server:</h3>
    <p>
        Open a terminal in the <code>server</code> directory and run:
    </p>
    <pre><code>npm start</code></pre>
    <p>
        This will start the Express server.
    </p>
    <h3>2. Start the frontend server:</h3>
    <p>
        In a new terminal window, navigate to the <code>client</code> directory and run:
    </p>
    <pre><code>npm run dev</code></pre>
    <p>
        This will start the React development server.
    </p>
    <p>
        Now, the React frontend will be accessible at <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> and the Express backend at <a href="http://localhost:8888" target="_blank">http://localhost:8888/</a>.
    </p>
    <h2>Testing the Application</h2>
    <p>
        Once the servers are running, you can access the application in your browser:
    </p>
    <ul>
        <li>Frontend: <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a></li>
        <li>Backend: <a href="http://localhost:8888/" target="_blank">http://localhost:8888/</a> (For API testing, you can use Postman or any other API client)</li>
    </ul>
</body>
</html>
