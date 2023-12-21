// importing express and specifying port
const express = require('express')
const app = express();
const port = 3000;

// Defining the root route and displaying a message
app.get('/', (req, res) => {
    res.send("Hello World!")
});

// returning an output to inform us of server running
app.listen(port, () => console.log('app listening on port 3000'))
