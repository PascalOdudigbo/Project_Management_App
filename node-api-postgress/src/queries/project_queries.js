const getAllProjects = "SELECT * FROM projects";
const getProjectById = "SELECT * FROM projects WHERE id = $1";
module.exports = {
    getAllProjects,
    getProjectById, 
}