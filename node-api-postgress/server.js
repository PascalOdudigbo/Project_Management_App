// importing express and specifying port
const express = require('express');

// Enabling the use of environment variables
require('dotenv').config();


// importing the created routes
const contractRoutes = require('./src/routes/contract_routes');
const projectRoutes = require('./src/routes/project_routes');

const app = express();
const port = 3000;

app.use(express.json());

// Defining the root route and displaying a message
app.get('/', (req, res) => {
    res.send("Hello World!")
});

// Creating a path for contracts that links to the contract routes
app.use('/contracts', contractRoutes);

// Creating a path for projects that links to the project routes
app.use('/projects', projectRoutes);

// returning an output to inform us of server running
app.listen(port, () => console.log('app listening on port 3000'))
