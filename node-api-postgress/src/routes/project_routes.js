const { Router } = require('express');
const router = Router();

// Importing the controller functions
const {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects_controller");

// defining the route to list all projects
router.get('/', getAllProjects);
// defining a route to get a project by id
router.get('/:id', getProjectById);
// defining a route to add a project to the database
router.post('/', addProject);
// defining routes to update projects
router.put('/:id', updateProject);
router.patch('/:id', updateProject);
// defining a route to delete a project from the database
router.delete('/:id', deleteProject);

module.exports = router;