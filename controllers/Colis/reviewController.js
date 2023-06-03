const Colis = require("../../models/colis");
const Profil = require("../../models/profil");
const Review = require("../../models/review");

const getAllReviewController = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const getReviewByIdController = async (req, res) => {
  try {
    if (!req.body.idReview) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const reviewFound = await Proposition.findById(req.body.idReview);

    if (!reviewFound) {
      return res
        .status(404)
        .json({ success: false, message: "review not found" });
    }
    return res.status(200).json({ successful: true, data: reviewFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createReviewController = async (req, res) => {
  try {
    const { idTransprteur, idColis, comment, note } = req.body;
    const idProfil = req.auth.idProfil;
    if (!idTransprteur || !idColis  || !note) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findByID(idTransprteur);
    const colisFound = await Colis.findByID(idColis);

    if (!profilFound || !colisFound) {
      return res
        .status(404)
        .json({ success: false, message: "profils or colis  not found" });
    }

    const review = new Review({
      comment: comment,
      note: note,
      idColis: idColis,
      idProfil: idProfil,
    });

    const savedReview = await review.save();

    try {
      await profilFound.insertReview(review._id);
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
const deleteReviewByIdController = async (req, res) => {
  try {
    if (!req.body.idReview) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const reviewFound = await Review.findByID(req.body.idReview);
    if (!reviewFound) {
      return res
        .status(404)
        .json({ success: false, message: "review  not found" });
    }
    const review = await Review.deleteOne({
      _id: req.body.idReview,
    });

    return res
      .status(200)
      .json({
        successful: true,
        data: review,
        message: `review delete successfully`,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};

module.exports = {
  getAllReviewController,
  getReviewByIdController,
  createReviewController,
  deleteReviewByIdController,
};
