const {Router} = require('express');
const router = Router();

// Importing the controller functions
const {getAllProjects, getProjectById} = require('../controllers/projects_controller');

// defining the route to list all projects
router.get('/', getAllProjects);
// defining a function to get a project by id
router.get('/:id', getProjectById)

module.exports = router;