// import the database connection
const pool = require('../../db');

// import the contract queries
const { getAllContracts, getContractById, checkContractExists, addContract } = require('../queries/contract_queries');

// importing resource util functions
const { capitalize } = require('../utils/resource_utils');

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
    });
}

// A function to get a contract by id
const getById = (req, res) => {
    // getting the id from the request parameters and converting it to integer
    const id = parseInt(req.params.id);
    // using the database connection to query the database
    pool.query(getContractById, [id], (error, results) => {
        // return an error if need
        if (error) {
            console.error("Error fetching contract:", error);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        // return the database response as JSON if request is successful
        res.status(200).json(results.rows);
    })

}

const save = (req, res) => {
    // destricturing the request parameters
    const { name } = req.body;

    // checking if the contract already exists
    pool.query(checkContractExists, [capitalize(name)], (error, results) => {
        if (error) {
            console.error("Error checking contract:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.rowCount > 0) {
            // Contract already exists
            return res.status(409).json({ error: "Contract type already exists." });
        }

        // Add the contract to the database if it doesn't exist
        pool.query(addContract, [capitalize(name)], (error, results) => {
            if (error) {
                console.error("Error saving contract:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            
            // Return the created contract
            res.status(201).json(results.rows[0]);
        });
    });

}



module.exports = {
    listAll,
    getById,
    save,
}