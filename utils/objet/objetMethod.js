const Objet = require("../../models/objet");
const { createAllImage} = require("../image/imageMethodes");
const createObjet = async (objet) => {
    return new Promise(async(resolve, reject) => {
    try {
        const { nom, taile, langeur, hauteur, poids ,images } = objet;

        if (!nom || !taile || !langeur || !hauteur || !poids ) {
        return reject({ success: false, message: "All fields are required" });
        }
         /* block  create list  images  */
         
        const { dataImages } = images? await createAllImage(images) : null ;
        /* end block list images */
        const newobjet = new Objet({
        nom: nom,
        taile: taile,
        langeur: langeur,
        hauteur: hauteur,
        poids: poids,
        images :dataImages.map((image) =>image._id) || null,
        });

    const savedobjet = await newobjet.save();

    return resolve(newobjet) ;

  } catch (error) {
    console.log(error);
    return reject( {
      success: false,
      message: "something went wrong, fail to create proposition",
    });
  }
});
};

const createAllObject =async(objets)=>{
    try {
    if (!objets) {
        return Promise.reject({
        success: false,
        message: 'All fields are required'
        });
    }   
    const objetPromises =await objets.map(objet => createObjet(objet));
    return Promise.all(objetPromises)
    .then(createdObjets => {
      return {
        success: true,
        message: 'Objets created successfully',
        dataObjet: createdObjets
      };
    })
    .catch(error => {
        return {
          success: false,
          message: 'Objets created faild ',
          error: error
        };
    });
    } catch (error) {
        return reject({
          success: false,
          message: "server side error",
          error: error,
        });
      }
}
const deleteObjetByArray = async (objets) => {
  if (!objets) {
    return { success: false, message: "All fields are required" };
  }
  return new Promise(async (resolve, reject) => {
    try {
      const promisesDeleteObjet = await objets.forEach(async (objet) => {
        await Objet.deleteOne({
          _id: objet._id,
        });
      });
      return resolve({ 
        success: true,
         message: "objets delete successfully"
         });
    } catch (error) {
      return reject({
        success: false,
        message: "server side error",
        error: error,
      });
    }
  });
};
module.exports = {
    createObjet,
    createAllObject,
    deleteObjetByArray
};
