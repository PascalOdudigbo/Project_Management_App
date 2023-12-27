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