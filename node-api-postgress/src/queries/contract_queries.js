const getAllContracts = "SELECT * FROM contract_types";
const getContractById = "SELECT * FROM contract_types WHERE id = $1";

module.exports = {
    getAllContracts,
    getContractById,
}