// import the contract resources
const { listAll, getById, save, update, destroy } = require('../resources/contract_resources');

// A conroller function to get all contracts
const getAllContracts = (req, res) => {
    try {
        // call the listAll function from the resource file
        listAll(req, res);
    } catch (error) {
        // in the eventuality of an error occuring
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// A controller function to get a contract by id
const getContractById = (req, res) => {
    try {
        // call the getById function from the resource file
        getById(req, res);
    } catch (error) {
        // in the eventuality of an error occuring
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// A controller function to add a contract to the database
const addContract = (req, res) => {
    try {
        // call the save function from the resource file
        save(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// A controller function to update a contract
const updateContract = (req, res) => {
    try {
        // call the update function from the resource file
        update(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// A controller function to delete a contract from the database
const deleteContract = (req, res) => {
    try {
        // call the destroy function from the resource file
        destroy(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllContracts,
    getContractById,
    addContract,
    updateContract,
    deleteContract,
}