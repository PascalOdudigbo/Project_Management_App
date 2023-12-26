// importing express and specifying port
const express = require('express');

// importing the created routes
const contractRoutes = require('./routes/contract_routes');
const projectRoutes = require('./routes/project_routes');

const app = express();
const port = 3000;

// Defining the root route and displaying a message
app.get('/', (req, res) => {
    res.send("Hello World!")
});

//Creating a path for contracts that links to the contract routes
app.use('/contracts', contractRoutes);

// returning an output to inform us of server running
app.listen(port, () => console.log('app listening on port 3000'))
