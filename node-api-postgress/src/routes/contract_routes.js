const { Router } = require('express');
const router = Router();

// importing the controller functions
const { getAllContracts, getContractById, addContract, deleteContract} = require('../controllers/contracts_controller');

// defining the route to list all contracts
router.get('/', getAllContracts);
// defining a route to get a contract by id
router.get('/:id', getContractById);
// defining a route to add a contract 
router.post('/', addContract);
// defining a route to delete a contract
router.delete('/:id', deleteContract);

module.exports = router; 