const Profil = require("../../models/profil");
const {User,Transporteur} = require("../../models/user");
const Role = require("../../models/role");
const Review = require("../../models/review");
const Colis = require("../../models/colis");
const Channel = require("../../models/channel");
const Image = require("../../models/image");

const getAllProfils = async (req, res) => {
    try {
      const users = await Profil.find().populate("user");
  
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  const getProfilByID = async (req, res) => {
    try {
        if (! req.body.id_user ) {
            return res.status(404).json({ message: 'All fields are required' })
        }

        const profilFound = await Profil.findOne({user: req.body.id_user})
        .populate("user");
        if (!profilFound) {
            return res.status(404).json({ success: false, message: "profil not found" })
        }
        return res.status(200).json({ successful: true, data: profilFound });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
  };
  // return list review  search by id profl
  const getProfilListReviewByID = async (req, res) => {
    try {
        if (! req.body.id_user ) {
            return res.status(404).json({ message: 'All fields are required' })
        }

        const profilFound = await Profil.findOne({user: req.body.id_user})
        .populate("listReview");
        if (!profilFound) {
            return res.status(404).json({ success: false, message: "profil not found" })
        }
        return res.status(200).json({ successful: true, data: profilFound });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
  };
  //return list colis  search by id profl
  const getProfilListColisByID = async (req, res) => {
    try {
        if (! req.body.id_user ) {
            return res.status(404).json({ message: 'All fields are required' })
        }

        const profilFound = await Profil.findOne({user: req.body.id_user})
        .populate("listColis");
        if (!profilFound) {
            return res.status(404).json({ success: false, message: "profil not found" })
        }
        return res.status(200).json({ successful: true, data: profilFound });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
  };
    //return list annonce  search by id profl
  const getProfilListAnnonceByID = async (req, res) => {
    try {
        if (! req.body.id_user ) {
            return res.status(404).json({ message: 'All fields are required' })
        }

        const profilFound = await Profil.findOne({user: req.body.id_user})
        .populate("listAnnonce");
        if (!profilFound) {
            return res.status(404).json({ success: false, message: "profil not found" })
        }
        return res.status(200).json({ successful: true, data: profilFound });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
  };
  

  /* cette methode pour le test mais son emplacement dans le controller authController.js */



  module.exports = {
    getAllProfils ,
    getProfilByID,
    getProfilListReviewByID,
    getProfilListColisByID,
    getProfilListAnnonceByID,
   
 };