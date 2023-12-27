const {Router} = require('express');
const router = Router();

// importing the controller functions
const {getAllContracts} = require('../controllers/contracts_controller');

// defining the route to list all contracts
router.get('/', getAllContracts);

module.exports = router; 