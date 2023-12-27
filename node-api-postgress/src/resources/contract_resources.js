// import the database connection
const pool = require('../../db');

// A function to get all the contracts
const listAll = (req, res) => {
    // using the database connection to querry the database
    pool.query("SELECT * FROM contract_types", (error, results) =>{
        // return an error if need
        if (error) {
            console.error("Error fetching contracts:", error);
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