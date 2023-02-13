const Objet =require("../../models/objet")



const getAllObjets = async (req, res)  => {

    try {
        const objets = await Objet.find();
        return res.status(200).json(objets);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }

}
const getObjetById = async (req, res) => {
    try {
      if (! req.body.idObjet) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const objetFound = await Proposition.findById(req.body.idObjet)

      if (!objetFound) {
          return res.status(404).json({ success: false, message: "objet not found" })
      }
      return res.status(200).json({ successful: true, data:objetFound});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
const createObjet =async (req, res) => {
    try {
      const { nom , taile,langeur,hauteur,poids   } = req.body;

      if (!nom || !taile || !langeur || !hauteur || !poids) {
        return res.status(404).json({ message: 'All fields are required' })
    }

    
    const objet=new Objet({
      nom:nom,
      taile:taile,
      langeur:langeur,
      hauteur:hauteur,
      poids:poids
    })

    const savedobjet = await objet.save();
  
      return res.status(201).json({
        success: true,
        data: {
            objet,
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
  const deleteObjetById = async (req, res) => {
    try {
        if (!req.body.idObjet ) {
            return res.status(404).json({ message: 'All fields are required' })
        }
    const objetFound = await Objet.findByID(req.body.idObjet);
    if (!objetFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "objet  not found" });
      }
      const objet = await Objet.deleteOne({
        _id: req.body.idObjet
      });
  
      return res.status(200).json({ successful: true, data: objet, message: `objet delete successfully`, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false,message: "server side error" });
    }
  };

  module.exports = {

    getAllObjets,
    getObjetById,
    createObjet,
    deleteObjetById

 };