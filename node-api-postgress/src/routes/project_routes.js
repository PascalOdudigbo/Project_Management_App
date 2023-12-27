const {Router} = require('express');
const router = Router();

// Importing the controller functions
const {getAllProjects} = require('../controllers/projects_controller');

// defining the route to list all projects
router.get('/', getAllProjects);

module.exports = router;