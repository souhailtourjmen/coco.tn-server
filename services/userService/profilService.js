const { Profil } = require("../../models");

const getProfilById = async (idProfil) => {
  const profilFound = await Profil.findById(idProfil)
    .populate({
      path: "user",
      select:
        "-_id cin phone gender email name image verified role adresses idCardGris",
      populate: {
        path: "role adresses image",
        select: "_id code place_id city country location path thumbnail",
      },
    })
    .select("tokens user isRequired")
    .exec();
  if (!profilFound) {
    throw new Error("error getting user");
  } else {
    return profilFound;
  }
};
const getAllProposal = async (idProfil) => {
  const selectPropsal = "text price pointPickup proposalDate created Annonce";
  const selectAnnonce = "profilexp  pointTrajets description contents";
  const selectTotal = "listProposal";
  try {
    return await Profil.findById(idProfil)
      .populate({
        path: "listProposal",
        populate: {
          path: "Annonce",
          select: selectAnnonce,
          populate: {
            path: "profilexp",
            select: "user",
            populate: {
              path: "user",
              select: " -_id name email phone image role verified ",
              populate: {
                path: "image role",
                select: "role path thumbnail",
              },
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
const getlistColisLiv = async (idProfil) => {
  const selectTotal = "-_id listColisLiv";
  try {
    return await Profil.findById(idProfil)
      .populate({
        path: "listColisLiv",
        select: "idAnnonce",
        populate: {
          path: "idAnnonce",
          select: "profilexp profilDest",
          populate: {
            path: "profilexp profilDest",
            select: "user",
            populate: {
              path: "user",
              select: " -_id name email phone image verified ",
              populate: {
                path: "image",
                select: "path thumbnail",
              },
            },
          },
        },
        options: { sort: { createdAt: -1 } },
      })
      .populate({
        path: "listColisLiv",
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
        path: "listColisLiv",
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

      .populate({
        path: "listColisLiv",
        select: "statut created ",
        populate: {
          path: "statut.statutColis",
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
const getlistColisExp = async (idProfil) => {
  const selectTotal = "-_id listColisExp";
  try {
    return await Profil.findById(idProfil)
      // .populate({
      //   path: "listColisExp",
      //   select: "idAnnonce",
      //   populate: {
      //     path: "idAnnonce",
      //     select: "profilexp profilDest",
      //     populate: {
      //       path: "profilexp profilDest",
      //       select: "user",
      //       populate: {
      //         path: "user",
      //         select: " -_id name email phone  verified ",
      //       },
      //     },
      //   },
      //   options: { sort: { createdAt: -1 } },
      // })
      .populate({
        path: "listColisExp",
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
        path: "listColisExp",
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
      .populate({
        path: "listColisExp",
        select: "proposal_Accept",
        populate: {
          path: "proposal_Accept",
          select: "profil price proposalDate",
          populate: {
            path: "profil",
            select: "profil user",
            populate: {
              path: "user",
              select: "verified name image phone",
              populate: {
                path: "image",
                select: "path thumbnail",
              },
            },
          },
        },
      })
      .populate({
        path: "listColisExp",
        select: "statut created  ",
        populate: {
          path: "statut.statutColis",
        },
        options: { sort: { updatedAt: -1 } },
      })
      .select(selectTotal)
      // .limit(Number(limit))
      .sort({ createdAt: "desc" })
      .exec();
  } catch (error) {
    console.error("Error getAllColis :", error);
  }
};
const getAllAnnonce = async (idProfil, filter) => {
  const limit = 10; // limit the number of documents to 10
  const fields = "-_id listAnnonce "; // select only the listAnnonce fields
  console.log(filter);
  try {
    return await Profil.findById(idProfil)
      .populate({
        path: "listAnnonce",
        populate: {
          path: "listProposal",
          populate: {
            path: "profil",
            select: "user", // select only the user and listReview fields in profil
            populate: {
              path: "user",
              select: "-_id name email phone image role verified ", // select only the lastName firstName email phone and verified fields in profil
              populate: {
                path: "image role",
                select: "role path thumbnail",
              },
            },
          },
        },
        options: { sort: { createdAt: -1 } },
      })

      .populate({
        path: "listAnnonce",
        match: filter ? { statut: filter } : {}, // ajouter le filtre pour le statut "en attente"
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
        match: filter ? { statut: filter } : {}, // ajouter le filtre pour le statut "en attente"
        populate: {
          path: "pointTrajets.pointExp pointTrajets.pointDist",
          select: " -_id place_id  city country location ",
        },
      })
      .populate({
        path: "listAnnonce",
        match: filter ? { statut: filter } : {}, // ajouter le filtre pour le statut "en attente"
        populate: {
          path: "profilexp",
          select: "user",
          populate: {
            path: "user",
            select: " -_id name email phone image role verified ",
            populate: {
              path: "image role",
              select: "role path thumbnail",
            },
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

const updateIsrequired = async (idProfil, value) => {
  let success =false;
  Profil.findOneAndUpdate({ _id: idProfil }, { isRequired: value })
    .then((doc) => {
      console.log("Profil updated successfully:");
       success= true ;
    })
    .catch((error) => {
      console.error("Error updating Profil:", error);
      success= false ;
    });
  return getProfilById(idProfil);
};
const updateTokenFCM = async (idProfil, tokenFCM) => {
  let success =false;
  Profil.findOneAndUpdate({ _id: idProfil }, { tokenFCM: tokenFCM })
    .then((doc) => {
      console.log("Profil updatedTokenFCM  successfully:");
      success=true
      
    })
    .catch((error) => {
      console.error("Error updating TokenFCM Profil:", error);
       success= false;
    });
    return success;
};
const getTokenFCM = async (idProfil) => {
  const profilFound = await Profil.findById(idProfil)
    .populate({
      path: "user",
      select: "-_id name",
    })
    .select("tokenFCM user")
    .exec();
  if (!profilFound) {
    throw new Error("error getting user");
  } else {
    return profilFound;
  }
};
module.exports = {
  getProfilById,
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
  updateIsrequired,
  updateTokenFCM,
  getTokenFCM,
};
