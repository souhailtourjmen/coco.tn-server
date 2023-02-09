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
   //cette methode pour ajouter un nouveau review à le profil transporteur
  const insertReviewInProfilByID = async (req, res) => { 
    const { idProfil ,idReview} = req.body;
  
    try {
        if (!idProfil || !idReview) {
            return res.status(404).json({ message: 'All fields are required' })
        }
  
      const profilFound = await Profil.findByID(idProfil);
      const reviewFound = await Review.findByID(idReview);
  
      if (!profilFound || !reviewFound) {
        return res
          .status(404)
          .json({ success: false, message: "profil or Review  not found" });
      }
      const profil = await Profil.findByIdAndUpdate(
        profilFound._id,
        { $set: { listReview: idReview } },
        { $set: { reviewCount: (profilFound.reviewCount +1) } },
        { new: true }
      );

        const updateReview = await profil.save();
        return res.status(200).json({ success: true, data: updateReview });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
  };

//cette methode pour ajouter un nouveau colis à le profil 
const insertColisInProfilByID = async (req, res) => { 
    const { idProfil ,idColis} = req.body;
  
    try {
        if (!idProfil || !idColis) {
            return res.status(404).json({ message: 'All fields are required' })
        }
  
      const profilFound = await Profil.findByID(idProfil);
      const colisFound = await Colis.findByID(idColis);
  
      if (!profilFound || !colisFound) {
        return res
          .status(404)
          .json({ success: false, message: "profil or colis  not found" });
      }
      const profil = await Profil.findByIdAndUpdate(
        profilFound._id,
        { $set: { listColis: idColis } },
        { $set: { colisCount: (profilFound.colisCount +1) } },
        { new: true }
      );

        const updateColis = await profil.save();
        return res.status(200).json({ success: true, data: updateColis });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
  };
//cette methode pour ajouter un nouveau channel de conversation à le profil 
const insertChannelInProfilByID = async (req, res) => { 
    const { idProfil ,idChannel} = req.body;
  
    try {
        if (!idProfil || !idChannel) {
            return res.status(404).json({ message: 'All fields are required' })
        }
  
      const profilFound = await Profil.findByID(idProfil);
      const channelFound = await Channel.findByID(idChannel);
  
      if (!profilFound || !channelFound) {
        return res
          .status(404)
          .json({ success: false, message: "profil or channel not found" });
      }
      const profil = await Profil.findByIdAndUpdate(
        profilFound._id,
        { $set: { listChanel: idChannel } },
        { $set: { channelCount: (profilFound.channelCount +1) } },
        { new: true }
      );

        const updateChannel = await profil.save();
        return res.status(200).json({ success: true, data: updateChannel });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
  };
//cette methode pour ajouter un nouveau annonces  à le profil  comme si le profil il peut list annonces 

const insertAnnonceInProfilByID = async (req, res) => { 
    const { idProfil ,idAnnonce} = req.body;
  
    try {
        if (!idProfil || !idAnnonce) {
            return res.status(404).json({ message: 'All fields are required' })
        }
  
      const profilFound = await Profil.findByID(idProfil);
      const annonceFound = await Channel.findByID(idAnnonce);
  
      if (!profilFound || !annonceFound) {
        return res
          .status(404)
          .json({ success: false, message: "profil or channel not found" });
      }
      const profil = await Profil.findByIdAndUpdate(
        profilFound._id,
        { $set: { listAnnonce: idAnnonce } },
        { $set: { annonceCount: (profilFound.annonceCount +1) } },
        { new: true }
      );

        const updateAnnonce = await profil.save();
        return res.status(200).json({ success: true, data: updateAnnonce });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
  };

  /* cette methode pour le test mais son emplacement dans le controller authController.js */

const createProfil = async (req, res) => {
    try {
      const { email , password } = req.body;
      if (!email || !password) {
        return res.status(404).json({ message: 'All fields are required' })
    }
      const userFound =  await User.findOne({email: email}).populate(
        "roles"
      );
      if (!userFound) {
        return res.status(404).json({ success: false, message: "user not found" })
    }
   
    const matchPassword = await userFound.comparePassword( password );

      if (!matchPassword)
        return res.status(401).json({
          token: null,
          message: "Invalid Password",
        });

      const profil =new Profil({
        user:userFound._id,
        statut:userFound.roles.map((role) => role.role),
        
      }); 
  
    const savedProfil = await profil.save();
  
      return res.status(201).json({
        success: true,
        data: {
          profil,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to create profil ",
      });
    }
  };

  module.exports = {
    getAllProfils ,
    createProfil,
    getProfilByID,
    getProfilListReviewByID,
    getProfilListColisByID,
    getProfilListAnnonceByID,
    insertReviewInProfilByID,
    insertColisInProfilByID,
    insertAnnonceInProfilByID
 };