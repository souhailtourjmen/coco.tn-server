const Colis =require("../../models/colis");
const Profil = require("../../models/profil");
const Propositions = require("../../models/propositions");

const getAllColisByUser = async (req, res) => {
    const {idProfil}=req.body.idProfil;

    try {
        if(!idProfil){
            return res.status(404).json({ message: 'All fields are required' })
        }
        const profilFound = await Profil.findById(idProfil);
        if (!profilFound) {
            return res.status(404).json({ success: false, message: "profil not found" })
        }
        const listColisExp = await Colis.find({idExpediteur:idProfil});
        const listColisRec = await Colis.find({idDistinataire:idProfil});
        
      return res.status(200).json({ success: true, data: {listColisExp ,listColisRec} });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };