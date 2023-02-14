const Annonce =require("../../models/annonce")
const Proposition =require("../../models/proposition")
const Profil =require("../../models/profil")



const getAllPropositionbyIdProfil = async (req, res)  => {

    try {
      const idProfil = req.body.idProfil
      if (! idProfil ) {
        return res.status(404).json({ message: 'All fields are required' })
      }
      const profilFound = await Profil.findById(idProfil).exec();
      if (!profilFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "profil not found" });
      }
        const propositions = await Proposition.find({"profil":profilFound ._id});
        return res.status(200).json(propositions);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }

}
const getPropositionById = async (req, res) => {
    try {
      if (! req.body.idProposition ) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const propositionFound = await Proposition.findById(req.body.idProposition)

      if (!propositionFound) {
          return res.status(404).json({ success: false, message: "proposition not found" })
      }
      return res.status(200).json({ successful: true, data: propositionFound});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
const createProposition =async (req, res) => {
    try {
      const { idProfil , idAnnonce ,text,prix,datePickup ,PointPickup } = req.body;
      console.log(idProfil , idAnnonce ,text,prix,datePickup ,PointPickup);

      if (!idProfil || !idAnnonce || !PointPickup || !text || !prix || !datePickup) {
        return res.status(404).json({ message: 'All fields are required' })
    }
    const profilFound = await Profil.findById(idProfil).exec();

    const annonceFound = await Annonce.findById(idAnnonce).exec();

    if (!profilFound || !annonceFound  ) {
      return res
        .status(404)
        .json({ success: false, message: "profils or annonce or pointPickup  not found" });
    }
    
    const proposition =new Proposition({
        profil:profilFound._id,
        text:text,
        prix:prix,
        datePickup:datePickup,
        pointPickup:PointPickup,
    })
    await annonceFound.insertPropositions(proposition._id);
    const savedProposition = await proposition.save();
  
      return res.status(201).json({
        success: true,
        data: {
            proposition,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to create proposition",
      });
    }
  };
  const deletePropositionById = async (req, res) => {
    try {
        if (!req.body.idProposition ) {
            return res.status(404).json({ message: 'All fields are required' })
        }
    const propositionFound = await Proposition.findByID(req.body.idProposition);
    if (!propositionFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "proposition  not found" });
      }
      const proposition = await Proposition.deleteOne({
        _id: req.body.idProposition
      });
  
      return res.status(200).json({ successful: true, data: proposition , message: `proposition delete successfully`, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false,message: "server side error" });
    }
  };

  module.exports = {

    getAllPropositionbyIdProfil,
    getPropositionById,
    createProposition,
    deletePropositionById

 };