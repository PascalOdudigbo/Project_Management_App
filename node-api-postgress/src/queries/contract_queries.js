const getAllContracts = "SELECT * FROM contract_types";
const getContractById = "SELECT * FROM contract_types WHERE id = $1";
const checkContractExists = "SELECT * FROM contract_types WHERE name = $1";
const addContract = "INSERT INTO contract_types (name) VALUES ($1) RETURNING *";
const updateContract = "UPDATE contract_types SET name = COALESCE($1, name) WHERE id = $2 RETURNING *";
const deleteContract = "DELETE FROM contract_types WHERE id = $1";

module.exports = {
    getAllContracts,
    getContractById,
    checkContractExists,
    addContract,
    updateContract,
    deleteContract,
}