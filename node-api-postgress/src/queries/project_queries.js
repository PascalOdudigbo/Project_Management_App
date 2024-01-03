const getAllProjects = "SELECT * FROM projects";
const getProjectById = "SELECT * FROM projects WHERE id = $1";
const checkProjectExists = "SELECT * FROM projects WHERE name = $1";
const addProject = "INSERT INTO projects (name, description, image_url, contract_type_id, contract_signed_on, budget, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, name, description, image_url, contract_type_id, contract_signed_on, budget, is_active, created_at, updated_at";
const deleteProject = "DELETE FROM projects WHERE id = $1";

module.exports = {
    getAllProjects,
    getProjectById,
    checkProjectExists,
    addProject,
    deleteProject,
}