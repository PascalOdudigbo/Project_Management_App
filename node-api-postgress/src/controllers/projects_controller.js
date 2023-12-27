// import the project resources
const {listAll, getById} = require('../resources/project_resources');

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

// A controller function to get a contract by id
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

module.exports = {
    getAllProjects,
    getProjectById,
}