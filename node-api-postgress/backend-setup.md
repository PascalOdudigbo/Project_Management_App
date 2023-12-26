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