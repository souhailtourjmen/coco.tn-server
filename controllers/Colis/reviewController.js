const Colis =require("../../models/colis")
const Profil =require("../../models/profil")
const Review =require("../../models/review")


const getAllReview = async (req, res)  => {

    try {
        const reviews = await Review.find();
        return res.status(200).json(reviews);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }

}
const getReviewById = async (req, res) => {
    try {
      if (! req.body.idReview ) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const reviewFound = await Proposition.findById(req.body.idReview)

      if (!reviewFound) {
          return res.status(404).json({ success: false, message: "review not found" })
      }
      return res.status(200).json({ successful: true, data:reviewFound});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
const createReview =async (req, res) => {
    try {
      const { idProfil , idColis ,title,comment,note  } = req.body;

      if (!idProfil || !idColis || !title || !comment || !note ) {
        return res.status(404).json({ message: 'All fields are required' })
    }
    const profilFound = await Profil.findByID(idProfil);
    const colisFound = await Colis.findByID(idColis);
 

    if (!profilFound || !colisFound ) {
      return res
        .status(404)
        .json({ success: false, message: "profils or colis  not found" });
    }
    
    const review =new Review({
        title:title,
        comment:comment,
        note:note,
        idColis:idColis,
        idProfil:idProfil,
    })

    const savedReview = await review.save();

    try {
      const transporteur= await Profil.findOne({'listColis':colisFound._id });
      await transporteur.insertReview(review._id);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to review in profil",
      });
    }
  

      return res.status(201).json({
        success: true,
        data: {
            review,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to create review",
      });
    }
  };
  const deleteReviewById = async (req, res) => {
    try {
        if (!req.body.idReview ) {
            return res.status(404).json({ message: 'All fields are required' })
        }
    const reviewFound = await Review.findByID(req.body.idReview);
    if (!reviewFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "review  not found" });
      }
      const review = await Review.deleteOne({
        _id: req.body.idReview
      });
  
      return res.status(200).json({ successful: true, data: review , message: `review delete successfully`, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false,message: "server side error" });
    }
  };

  module.exports = {

    getAllReview,
    getReviewById,
    createReview,
    deleteReviewById

 };