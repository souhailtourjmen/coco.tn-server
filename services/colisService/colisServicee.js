const { Colis } = require("../../models");
const {
  updateAnnonceById,
} = require("../../services/annouceService/annouceService");

const createColis = async (
  idAnnonce,
  idProposal,
  price,
  datePickup,
  idStatutColisDefault
) => {
  try {
    console.log(idAnnonce, idProposal, idStatutColisDefault);
    /* creation nouveau colis  */
    const colis = new Colis({
      idAnnonce: idAnnonce,
      proposal_Accept: idProposal,
      price: price,
      statut: [
        {
          statutColis: idStatutColisDefault,
          updatedAt: datePickup,
        },
      ],
    });
    const savedColis = await colis.save();

    return {
      success: true,
      data: savedColis,
      message: "create Colis",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to create Colis",
    };
  }
};
const updateStatutColis = async (idStatus, idColis) => {
  try {
    /* check duplcate colis */
    const colis = await Colis.findByIdAndUpdate(
      idColis,
      {
        $push: {
          statut: {
            statutColis: idStatus,
            updatedAt: new Date(),
          },
        },
      },
      { new: true }
    );
    if (colis) {
      return {
        success: true,
        data: colis,
        message: "Colis updated successfully.",
      };
    } else {
      return {
        success: false,
        data: null,
        message: "Colis updated failed.",
      };
    }
    /* end dplicate  */
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service update Colis",
    };
  }
};
const deleteColisByID = async (idColis) => {
  try {
    const colisdeleted = await Colis.deleteOne({
      _id: idColis,
    });

    return {
      success: true,
      data: null,
      message: "Colis deleted successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service deleted Colis",
    };
  }
};

const getColisById = async (idColis) => {
  try {
    const colisFound = await Colis.findById(idColis)
      .populate({ path: "statut.statutColis" })
      .populate({
        path: "proposal_Accept",
        select: "profil text price status proposalDate",
        populate: {
          path: "profil",
          select: " user",
          populate: {
            path: "user",
            select: " -_id name   image role verified", // select only the lastName firstName email phone and verified fields in profil
            populate: {
              path: "image role",
              select: "-_id role path thumbnail",
            },
          },
        },
      })
      .select("idAnnonce proposal_Accept statut createdAt updatedAt")
      .exec();
    if (!colisFound) {
      return {
        success: false,
        data: null,
        message: "Colis not found.",
      };
    }

    return { success: true, data: colisFound, message: "Colis  found." };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service getAllColisById",
    };
  }
};
const getStatusColisById = async (idAnnonce) => {
  try {
    const colisFound = await Colis.findOne({ idAnnonce: idAnnonce })
      .populate({
        path: "statut.statutColis",
      })
      .select(" statut createdAt updatedAt")
      .exec();
    if (!colisFound) {
      return {
        success: false,
        data: null,
        message: "Colis not found.",
      };
    }

    return { success: true, data: colisFound, message: "Colis  found." };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service getStatusColisById",
    };
  }
};
module.exports = {
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
  getStatusColisById,
};
