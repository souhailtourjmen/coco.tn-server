// Update an existing document by ID
const Annonce = require("../../models/annonce");
const moment = require('moment')
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
    .populate([
      {
        path: "contents",
        populate: {
          path: "images",
        },
      },
      {
        path: "listProposal",
        populate: {
          path: "profil",
          select: "user",
          populate: {
            path: "user",
            select: "-_id name email phone role image verified",
            populate: {
              path: "role image",
              select: "_id role path thumbnail",
            },
          },
        },
      },
      {
        path: "profilexp profilDest",
        select: "user",
        populate: {
          path: "user",
          select: "-_id name email phone image role verified",
          populate: {
            path: "role image",
            select: "_id role path thumbnail",
          },
        },
      },
      {
        path: "pointTrajets.pointExp pointTrajets.pointDist",
        select: "-_id place_id city country location",
      },
    ])
    .exec();
};
const getAllAnnonces = async (
  pageSize,
  pageNumber,
  origine,
  destination,
  radius
) => {
  const coordinatesExp = [
    parseFloat(origine._location.lng), // Assuming origine.lng is a string representing the longitude
    parseFloat(origine._location.lat), // Assuming origine.lat is a string representing the latitude
  ];
  const coordinatesDist = [
    parseFloat(destination._location.lng), // Assuming origine.lng is a string representing the longitude
    parseFloat(destination._location.lat), // Assuming origine.lat is a string representing the latitude
  ];
 console.log(
  radius)
console.log(moment().endOf('day'));
  return await Annonce.find({
    locationExp: {
      $near: {
        $maxDistance: radius,
        $geometry: {
          type: "Point",
          coordinates: coordinatesExp,
        },
      },
    },
    
  })
    .populate([
      {
        path: "contents",
        populate: {
          path: "images",
        },
      },
      {
        path: "listProposal",
        populate: {
          path: "profil",
          select: "user",
          populate: {
            path: "user",
            select: "-_id name email phone role image verified",
            populate: {
              path: "role image",
              select: "_id role path thumbnail",
            },
          },
        },
      },
      {
        path: "profilexp profilDest",
        select: "user",
        populate: {
          path: "user",
          select: "-_id name email phone image role verified",
          populate: {
            path: "role image",
            select: "_id role path thumbnail",
          },
        },
      },
      {
        path: "pointTrajets.pointExp pointTrajets.pointDist",
        select: "-_id place_id city country location",
      },
    ])
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ createdAt: "desc" })
    .exec();
};
const getinformationAnnouce = async (id) => {
  return await Annonce.findById(id)
  .populate(
    {
      path: "pointTrajets.pointExp pointTrajets.pointDist",
      select: "-_id place_id city country location",
    },
  )
    .select('profilexp pointTrajets dateExp dateLiv')
    .exec();
};

module.exports = { updateAnnonceById, getAnnouce, getAllAnnonces,getinformationAnnouce };
