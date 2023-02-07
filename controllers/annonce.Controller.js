const Annonce =require("../models/annonce")
const Objet =require("../models/objet")
const Profil =require("../models/profil")
const Image =require("../models/image")
const PT =require("../models/pointTrajet") /// PT => point trajectory
const Proposition =require("../models/proposition")

const getAllAnnonces = async (req, res) => {
    try {
      const annonce = await Annonce.find()
      .populate("profil")
      .populate("objets")
      .populate("pointTrajets")
      .populate("propositions");
  
      return res.status(200).json(annonce);
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
   /* cette methode retourne objet par id avec remplissage les champs profil objets pointTrajets et poropositions  */
  
   const getAnnonceById = async (req, res) => {
    try {
      if (! req.body.id_annonce ) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const annonceFound = await Annonce.findById(req.body.id_annonce)
      .populate("profil")
      .populate("objets")
      .populate("pointTrajets")
      .populate("propositions");
      if (!annonceFound) {
          return res.status(404).json({ success: false, message: "annonce not found" })
      }
      return res.status(200).json({ successful: true, data: annonceFound });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  /* cette methode cree  un nouveau annonce   */

  const createAnnonce = async (req, res) => {
    try {
      const { idProfil,statut,idProfilDist, description, objets, dateExp, dateLiv, idPointExp,  idPointDist, images, prix } = req.body;
      if (!idProfil ||!idProfilDist||!statut ||!description || !objets || !dateExp || !dateLiv || !idPointExp || !idPointDist || ! images || !prix) {
        return res.status(404).json({ message: 'All fields are required' })
    } 

    /* cette block pour verification des objets comme profil pointexp et pointdist  */

    const profilFound = await Profil.findByID(idProfil);
    const profilDistFound = await Profil.findByID(idProfilDist);
    const idPointExpFound = await PT.findByID(idPointExp);
    const idPointDistFound = await PT.findByID(idPointDist);

    if (!profilFound || !idPointExpFound || ! idPointDistFound || ! profilDistFound) {
      return res
        .status(404)
        .json({ success: false, message: "profils or trajectory  not found" });
    }

    /*    end block verification  */

    /* cette block pour verification est ce que list des objets sont  existent  ou non  */

     objets.forEach(async (objet) => {
      try{
        let objetFound = await Objet.findByID(objet);
       if (!objetFound){
        return res
        .status(404)
        .json({ success: false, message: "objet  not found" });
       }
      }catch(error){
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "something went wrong, fail to find objet ",
        });
      }
      
    }) 

    /* end block verification des objets */

    /* cette block pour verification est ce que list des images sont existent ou non  */

     images.forEach(async (img) => {
      try{
        let imageFound = await Image.findByID(img);
       if (!imageFound){
        return res
        .status(404)
        .json({ success: false, message: "image  not found" });
       }
      }catch(error){
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "something went wrong, fail to find image ",
        });
      }
       
     }) 
     /* end block verification des images*/

     const annonce = new Annonce(
      {
        profil:{
          idProfil:idProfil,
          statut:statut,
        },
        description :description ,
        objets :objets,
        objetCount:objets.length,
        dateExp:dateExp,
        dateLiv:dateLiv,
        pointTrajets:{
          pointExp:idPointExp,
          pointDist:idPointDist,
      },
      images:images,
      idProfilDist:idProfilDist,
      prix:prix,

      }
     );


    const savedAnnonce = await annonce.save();
  
      return res.status(201).json({
        success: true,
        data: {
          annonce,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to create annonce ",
      });
    }
  };
  const insertPropositionInAnnonceByID = async (req, res) => { 
    const { idAnnonce ,idPropsition} = req.body;
  
    try {
        if (!idAnnonce || !idPropsition) {
            return res.status(404).json({ message: 'All fields are required' })
        }
  
      const annonceFound = await Annonce.findByID(idAnnonce);
      const propositionFound = await Proposition.findByID(idPropsition);
  
      if (!annonceFound || !propositionFound) {
        return res
          .status(404)
          .json({ success: false, message: "annonce or proposition  not found" });
      }
      const annonce = await Annonce.findByIdAndUpdate(
        annonceFound._id,
        { $set: { listPropositions: propositionFound._id } },
        { $set: { propositionCount: (annonceFound.propositionCount +1) } },
        { new: true }
      );

        const updateProposition = await annonce.save();
        return res.status(200).json({ success: true, data: updateProposition });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
  };
  module.exports = {
    getAllAnnonces ,
    createAnnonce,
    getAnnonceById,
    insertPropositionInAnnonceByID,

 
 };