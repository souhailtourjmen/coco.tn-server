const Annonce =require('../../models/annonce');
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
          select: " -_id name email phone verified ",
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
            select: " -_id name email phone verified note", // select only the lastName firstName email phone and verified fields in profil
          },
        },
      })
      .exec();
    
}
module.exports = {
    getAnnouce
};