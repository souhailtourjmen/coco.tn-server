const Profil = require("../../models/profil");
const getAllProposal = async (idProfil) => {
  const selectPropsal = "text price pointPickup created Annonce";
  const selectAnnonce =
    "profilexp profilDest pointTrajets description contents";
  const selectTotal = "listProposal";
  try {
    return await Profil.findById(idProfil)
      .populate({
        path: "listProposal",
        populate: {
          path: "Annonce",
          select: selectAnnonce,
          populate: {
            path: "profilexp profilDest",
            select: "user",
            populate: {
              path: "user",
              select: " -_id name email phone verified ",
            },
          },
        },
        select: `${selectPropsal}`,
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "listProposal",
        populate: {
          path: "Annonce",
          select: selectAnnonce,
          populate: {
            path: "pointTrajets.pointExp pointTrajets.pointDist",
            select: " -_id place_id  city country location ",
          },
        },

        select: `${selectPropsal}`,
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "listProposal",
        populate: {
          path: "Annonce",
          select: selectAnnonce,
          populate: {
            path: "contents",
            populate: {
              path: "images",
            },
          },
        },
        select: `${selectPropsal}`,
        options: { sort: { createdAt: -1 } },
      })
      .select(selectTotal)
      // .limit(Number(limit))
      .sort({ createdAt: "desc" })
      .exec();
  } catch (error) {
    console.error("Error getAllProposal :", error);
  }
};
const getAllColis = async (idProfil) => {
  const selectAnnonce =
    "profilexp profilDest pointTrajets description contents";
  const selectTotal = "listColisLiv listColisExp";
  try {
    return await Profil.findById(idProfil)
    .populate({
        path: "listColisLiv listColisExp",
        select: "idAnnonce",
        populate: {
          path: "idAnnonce",
          select: "profilexp profilDest",
          populate: {
            path: "profilexp profilDest",
            select: "user",
            populate: {
              path: "user",
              select: " -_id name email phone verified ",
            },
          },
        },
        options: { sort: { createdAt: -1 } },
      })
    .populate({
        path: "listColisLiv listColisExp",
        select: "idAnnonce",
        populate: {
          path: "idAnnonce",
          populate: {
            path: "contents",
            populate: {
                path: "images",
              },
          },
          select: `contents`,
        },
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "listColisLiv listColisExp",
        select: "idAnnonce",
        populate: {
          path: "idAnnonce",
          select: `pointTrajets description`,
          populate: {
            path: "pointTrajets.pointExp pointTrajets.pointDist",
            select: " -_id place_id  city country location ",
          },
        },
        options: { sort: { createdAt: -1 } },
      })
    //   .populate({
    //     path: "listColisLiv listColisExp",
    //     select: "proposal_Accept",
    //     populate: {
    //         path: "proposal_Accept",
            
    //       },
    //     options: { sort: { createdAt: -1 } },
    //   })
      .populate({
        path: "listColisLiv listColisExp",
        select: "statut created ",
        populate: {
            path: "statut",
            
          },
        options: { sort: { createdAt: -1 } },
      })
      .select(selectTotal)
      // .limit(Number(limit))
      .sort({ createdAt: "desc" })
      .exec();
  } catch (error) {
    console.error("Error getAllColis :", error);
  }
};
const getAllAnnonce = async (idProfil) => {
  const limit = 10; // limit the number of documents to 10
  const fields = "-_id listAnnonce "; // select only the listAnnonce fields

  try {
    return await Profil.findById(idProfil)
      .populate({
        path: "listAnnonce",
        populate: {
          path: "listProposal",
          populate: {
            path: "profil",
            select: " user listReview ", // select only the user and listReview fields in profil
            populate: {
              path: "user listReview",
              select: "-_id name email phone verified note", // select only the lastName firstName email phone and verified fields in profil
            },
          },
        },
        options: { sort: { createdAt: -1 } },
      })

      .populate({
        path: "listAnnonce",
        populate: {
          path: "contents",
          populate: {
            path: "images",
          },
        },
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "listAnnonce",
        populate: {
          path: "pointTrajets.pointExp pointTrajets.pointDist",
          select: " -_id place_id  city country location ",
        },
      })
      .populate({
        path: "listAnnonce",
        populate: {
          path: "profilexp profilDest",
          select: " user  ",
          populate: {
            path: "user",
            select: " -_id name email phone verified ",
          },
        },
        options: { sort: { createdAt: -1 } },
      })
      .limit(limit)
      .select(fields)
      .exec();
  } catch (error) {
    console.error("Error getAllAnnonce :", error);
  }
};
module.exports = { getAllProposal, getAllAnnonce , getAllColis };
