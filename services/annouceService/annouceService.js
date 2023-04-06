// Update an existing document by ID
const Annonce =require('../../models/annonce');
const updateAnnonceById = async (id, newStatut) => {
  try {
    return await Annonce.findByIdAndUpdate(
      id,
      { statut: newStatut },
      { new: true }
    ).exec();
  } catch (error) {
    console.error("Error updating Annonce:", error);
  }
};
module.exports = { updateAnnonceById };