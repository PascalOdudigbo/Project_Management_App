const { Router } = require('express');
const router = Router();

// Importing the controller functions
const { getAllProjects, getProjectById, addProject } = require('../controllers/projects_controller');

// defining the route to list all projects
router.get('/', getAllProjects);
// defining a route to get a project by id
router.get('/:id', getProjectById);
// defining a route to add a project to the database
router.post('/', addProject);

module.exports = router;