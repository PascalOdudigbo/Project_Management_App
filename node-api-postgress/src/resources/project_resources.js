// import the database connection
const pool = require('../../db');

// A function to list all the projects
const listAll = (req, res) => {
    // using the database connection to querry the database
    pool.query("SELECT * FROM projects", (error, results) => {
        // return an error if need
        if (error) {
            console.error("Error fetching contracts:", error);
            res.status(500).json({error: "Internal Server Error"})
            return;
        }
        // return te database response as json if request is successful
        res.status(200).json(results.rows);
    })
}

module.exports = {
    listAll,
}