1. Create the backend directory and initialise your package.json

`npm init -y`

2. install express and postgress

`npm i --save express pg`

`npm i pg`


3. Create a src sub directory and within it create the server.js file. Paste the following code within the file

```
const express = require('express')sudi
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => console.log('app listening on port 3000'));

```

4. Run the server from within the src directory using the following command 

`node ./server.js`

5. On the Ubuntu terminal change your user to postgres then enter the postgresql cmd

`sudo -i -u postgres`

`psql`

6. In the postgresql cmd create a database and after creating it connect to it

`CREATE DATABASE database_name;`

`\c database_name`

7. Creating a table

`CREATE TABLE projects (`
`ID SERIAL PRIMARY KEY,`
`attribute_name DATATYPE(max_length),`
`created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`
`updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`

***Example***

```
CREATE TABLE projects (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(80),
    description VARCHAR(255),
    image_url VARCHAR(255),
    contract_type_id INT NOT NULL,
    contract_signed_on DATE,
    budget NUMERIC(18, 2),
    is_active BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contract_type_id) REFERENCES contract_types(id) ON DELETE CASCADE
);

```

8. Ceating an auto update function for the updated_at timestamp 

```
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

```

9. Creating the trigger 

```
CREATE TRIGGER your_table_name_updated_at
BEFORE UPDATE ON your_table_name
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

```

10. Creating the database connection

```
const Pool = require(pg).Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "database_name",
    password: 'postgres_password',
    port: 3000
});

module.exports = pool

```

11. create a routes folder and create route '.js' files for all your database models. set up the route files like this

```
const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send("using api route");
});

module.exports = router;

```

12. Setup the server file to use these routes by importing the route files and creating paths that link to them 

```
const routeName = require('./path/to/route/file');

app.use('path', routeName);

```

***Example***

```
const contractRoutes = require('./routes/contract_routes');

app.use('/api/v1/contracts', contractRoutes);

<!-- or -->

app.use('/contracts', contractRoutes);

```

13. Import the database connector in the resource file and implement the required function

```
// import the database connection
const pool = require('../../db');

// A function to get all the contracts
const listAll = (req, res) => {
    // using the database connection to querry the database
    pool.query("SELECT * FROM database_table", (error, results) =>{
        // return an error if need
        if (error) {
            console.error("Error fetching entity:", error);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        // return the database response as JSON if request is successful
        res.status(200).json(results.rows);
    })
}

module.exports = {
    listAll,
}

```

14. Use the resource function in the appropriate controller

```
// import the contract resources
const {listAll} = require('../resources/contract_resources');

// A conroller function to get all contracts
const getAllContracts = (req, res) =>{
    try{
        // call the listAll function from the resource file
        listAll(req, res);
    } catch (error){
        // in the eventuality of an error occuring
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    getAllContracts,
}

```

15. Use the controller in the appropriate route file as the callback function of the appropriate route

```
const {Router} = require('express');
const router = Router();

// importing the controller functions
const {getAllContracts} = require('../controllers/contracts_controller');

// defining the route to list all contracts
router.get('/', getAllContracts);

module.exports = router; 

```

16. Setup the server file to make use of the routes 

```
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

```