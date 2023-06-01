// Update an existing document by ID
const Annonce = require("../../models/annonce");
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
const getAnnouce = async (id) => {
  return await Annonce.findById(id)
    .populate({
      path: "contents",
      populate: {
        path: "images",
      },
    })
    .populate({
      path: "profilexp",
      select: " user  ",
      populate: {
        path: "user",
        select: " -_id name email phone image role verified ",
        populate: {
          path: "image role",
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
        select: " user ",
        populate: {
          path: "user ",
          select: " -_id name email phone image role verified", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "image role",
            select: "role path thumbnail",
          },
        },
      },
    })
    .exec();
};
const getAllAnnonces = async (pageSize, pageNumber, origine, destination) => {
  return await Annonce.find()
    .populate({
      path: "contents",
      populate: {
        path: "images",
      },
    })
    .populate({
      path: "pointTrajets.pointExp pointTrajets.pointDist",
      select: " -_id place_id  city country location ",
    })
    .populate({
      path: "profilexp profilDest",
      select: " user  ",
      populate: {
        path: "user",
        select: " -_id name  email phone image role verified ",
        populate: {
          path: "role image",
          select: "_id role path thumbnail",
        },
      },
    })
    .populate({
      path: "listProposal",
      populate: {
        path: "profil",
        select: " user ",
        populate: {
          path: "user",
          select: " -_id name email phone role image verified", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "role image",
            select: "_id role path thumbnail",
          },
        },
      },
    })
    .skip((pageNumber - 1) * pageSize) // calculate the number of documents to skip
    .limit(pageSize) // limit the number of documents returned to the page size
    .sort({ createdAt: "desc" })
    .exec();
};

module.exports = { updateAnnonceById, getAnnouce, getAllAnnonces };
