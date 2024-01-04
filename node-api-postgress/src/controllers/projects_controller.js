// import the project resources
const {listAll, getById, save, update, destroy} = require('../resources/project_resources');

// A controller function to get all projects
const getAllProjects = (req, res) => {
    try{
        // call the listAll function from the resource file
        listAll(req, res);
    } catch (error){
        // in the eventuality of an error occuring
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// A controller function to get a project by id
const getProjectById = (req, res) => {
    try{
        // call the getById function from the resource file
        getById(req, res);
    } catch (error){
        // in the eventuality of an error occuring
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// A controller function to add a project to the database
const addProject = (req, res) => {
    try {
        // call the save function imported from the resource file
        save(req, res);
    } catch (error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// A controller function to update a project to the database
const updateProject = (req, res) => {
    try {
        // call the update function imported from the resource file
        update(req, res);
    } catch (error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// A controller function to delete a project from the database
const deleteProject = (req, res) => {
    try {
        // call the destroy function imported from the resource file
        destroy(req, res);
    } catch (error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}


module.exports = {
    getAllProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject,
}