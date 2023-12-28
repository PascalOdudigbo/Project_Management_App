// import the database connection
const pool = require('../../db');

// impoeting the project querries
const { getAllProjects, getProjectById, addProject, checkProjectExists } = require('../queries/project_queries');

// importing resource util functions
const { capitalize } = require('../utils/resource_utils');

// A function to list all the projects
const listAll = (req, res) => {
    // using the database connection to querry the database
    pool.query(getAllProjects, (error, results) => {
        // return an error if need
        if (error) {
            console.error("Error fetching contracts:", error);
            res.status(500).json({ error: "Internal Server Error" })
            return;
        }
        // return te database response as json if request is successful
        res.status(200).json(results.rows);
    })
}

// A function to get a project by id
const getById = (req, res) => {
    // getting the id from the request parameters and converting it to integer
    const id = parseInt(req.params.id);
    // using the database connection to query the database
    pool.query(getProjectById, [id], (error, results) => {
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

// A function to add a project to the database
const save = (req, res) => {
    // destricturing the request parameters
    const { name, description, image_url, contract_type_id, contract_signed_on, budget, is_active } = req.body;

    // checking if project already exists
    pool.query(checkProjectExists, [capitalize(name)], (error, results) => {
        if (error) {
            console.error("Error checking project:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.rowCount > 0) {
            // Project already exists
            return res.status(409).json({ error: "Contract type already exists." });
        }

        // Add the contract to the database if it doesn't exist
        pool.query(addProject, [capitalize(name), description, image_url, contract_type_id, contract_signed_on, budget, is_active], (error, results) => {
            if (error) {
                console.error("Error saving project:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            console.log("Result of the insert:", results.rows[0]);
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