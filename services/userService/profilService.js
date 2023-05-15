const { Profil } = require("../../models");
const getProfilById = async (idProfil) => {
  const profilFound = await Profil.findById(idProfil)
    .populate({
      path: "user",
      select: "-_id cin phone gender email name image verified roles adresses",
      populate: {
        path: "roles adresses image",
        select: "_id role place_id city country location path thumbnail",
      },
    })
    .select("tokens user")
    .exec();
  if (!profilFound) {
    throw new Error("error getting user");
  } else {
    return profilFound;
  }
};
const getAllProposal = async (idProfil) => {
  const selectPropsal = "text price pointPickup created Annonce";
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
              select: " -_id name email phone image roles verified ",
              populate: {
                path: "image roles",
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
  const selectTotal = "listColisLiv";
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
              select: " -_id name email phone  verified ",
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
  const selectTotal = "listColisExp";
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
          select: "profil price",
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
            select: " user listReview ", // select only the user and listReview fields in profil
            populate: {
              path: "user listReview",
              select: "-_id name email phone image roles verified note", // select only the lastName firstName email phone and verified fields in profil
              populate: {
                path: "image roles",
                select: "role path thumbnail",
              },
            },
          },
        },
        options: { sort: { createdAt: -1 } },
      })

      .populate({
        path: "listAnnonce",
        match: { statut: filter }, // ajouter le filtre pour le statut "en attente"
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
        match: { statut: filter }, // ajouter le filtre pour le statut "en attente"
        populate: {
          path: "pointTrajets.pointExp pointTrajets.pointDist",
          select: " -_id place_id  city country location ",
        },
      })
      .populate({
        path: "listAnnonce",
        match: { statut: filter }, // ajouter le filtre pour le statut "en attente"
        populate: {
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
module.exports = {
  getProfilById,
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
};
