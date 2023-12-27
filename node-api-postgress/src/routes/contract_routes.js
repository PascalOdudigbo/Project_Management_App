const {Router} = require('express');
const router = Router();

// importing the controller functions
const {getAllContracts, getContractById} = require('../controllers/contracts_controller');

// defining the route to list all contracts
router.get('/', getAllContracts);
// defining a route to get a contract by id
router.get('/:id', getContractById)

module.exports = router; 