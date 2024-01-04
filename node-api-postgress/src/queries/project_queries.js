const getAllProjects = "SELECT * FROM projects";
const getProjectById = "SELECT * FROM projects WHERE id = $1";
const checkProjectExists = "SELECT * FROM projects WHERE name = $1";
const addProject = "INSERT INTO projects (name, description, image_url, contract_type_id, contract_signed_on, budget, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
const updateProject = "UPDATE projects SET name = COALESCE($2, name), description = COALESCE($3, description), image_url = COALESCE($4, image_url), contract_type_id = COALESCE($5, contract_type_id), contract_signed_on = COALESCE($6, contract_signed_on), budget = COALESCE($7, budget), is_active = COALESCE($8, is_active) WHERE id = $1 RETURNING *";
const deleteProject = "DELETE FROM projects WHERE id = $1";

module.exports = {
    getAllProjects,
    getProjectById,
    checkProjectExists,
    addProject,
    updateProject,
    deleteProject,
}