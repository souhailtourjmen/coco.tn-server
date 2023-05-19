const { Proposal } = require("../../models");

const createProposal = async (
  idProfil,
  idAnnonce,
  text,
  price,
  proposalDate
) => {
  try {
    /* creation nouveau Proposal  */
    const proposal = new Proposal({
      profil: idProfil,
      Annonce: idAnnonce,
      text: text,
      price: price,
      proposalDate: proposalDate,
    });

    const savedProposal = await proposal.save();
    console.log('5arya proposal',savedProposal);
    return {
      success: true,
      data: savedProposal,
      message: "create Proposal",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to create Proposal",
    };
  }
};
const updateStatutProposal = async (status, idProposal) => {
  try {
    Proposal.findByIdAndUpdate(idProposal, { status: status })
      .then((proposal) => {
        if (!proposal) {
          console.log("Proposal not found");
          return {
            success: false,
            data: null,
            message: "Proposal not found",
          };
        } else {
          console.log("Proposal updated:", proposal);
          return {
            success: true,
            data: proposal,
            message: "Proposal updated successfully.",
          };
        }
      })
      .catch((err) => {
        console.error("Error updating proposal:", err);
        return {
          success: false,
          data: null,
          message: "Proposal updated failed.",
        };
      });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service update Proposal",
    };
  }
};
const deleteProposalByID = async (idProposal) => {
  try {
    const proposal = await Proposal.findOneAndDelete({
      _id: idProposal,
    }).exec();
    if (!proposal) {
      throw new Error("Proposal not found");
    }
    return {
      success: true,
      data: null,
      message: "Proposal deleted successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service deleted Proposal",
    };
  }
};

const getProposalById = async (idProposal) => {
  try {
    const proposalFound = await Proposal.findById(idProposal);
    //   .populate({ path: "statut.statutproposal" })
    //   .populate({
    //     path: "proposal_Accept",
    //     select: "profil text price status created",
    //     populate: {
    //       path: "profil",
    //       select: " user",
    //       populate: {
    //         path: "user",
    //         select: " -_id name   image role verified", // select only the lastName firstName email phone and verified fields in profil
    //         populate: {
    //           path: "image role",
    //           select: "-_id role path thumbnail",
    //         },
    //       },
    //     },
    //   })
    //   .select("idAnnonce proposal_Accept statut createdAt updatedAt")
    //   .exec();
    if (!proposalFound) {
      return {
        success: false,
        data: null,
        message: "Proposal not found.",
      };
    }

    return { success: true, data: proposalFound, message: "Proposal  found." };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service getAllProposalById",
    };
  }
};
module.exports = {
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
};
