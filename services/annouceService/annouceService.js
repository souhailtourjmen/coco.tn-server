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
const getAnnouce =async(id) => {
  return await Annonce.findById(id)
    .populate({
      path: "contents",
      populate: {
        path: "images",
      },
    })
    .populate({
      path: "profilexp profilDest",
      select: " user  ",
      populate: {
        path: "user",
        select: " -_id name email phone image roles verified ",
        populate: {
          path: "image roles",
          select: "role path thumbnail",
        },
      },
    })
    .populate({
      path: "pointTrajets.pointExp pointTrajets.pointDist",
      select: " -_id place_id  city country location ",
    })
    .populate({
      path: "listProposal",
      populate: {
        path: "profil",
        select: " user listReview ",
        populate: {
          path: "user listReview",
          select: " -_id name email phone image roles verified note", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "image roles",
            select: "role path thumbnail",
          },
        },
      },
    })
    .exec();
  
}
module.exports = { updateAnnonceById,getAnnouce };