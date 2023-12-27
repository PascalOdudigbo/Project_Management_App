// import the database connection
const pool = require('../../db');

// import the contract queries
const { getAllContracts, getContractById } = require('../queries/contract_queries');

// A function to get all the contracts
const listAll = (req, res) => {
    // using the database connection to querry the database
    pool.query(getAllContracts, (error, results) => {
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
// A function to get a contract by id
const getById = (req, res) => {
    // getting the id from the request parameters and converting it to integer
    const id = parseInt(req.params.id);
    // using the database connection to query the database
    pool.query(getContractById, [id], (error, results) => {
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
    getById,
}