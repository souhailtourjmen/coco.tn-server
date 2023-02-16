const StatutColis = require("../models/statutColis");
const createStatutColis = async () => {
    try {

      const values = await Promise.all([
        new StatutColis({ statut: "enregistré" }).save(),
        new StatutColis({ statut: "en transit" }).save(),
        new StatutColis({ statut: "recupérer" }).save(),
        new StatutColis({ statut: "non livré" }).save(),
        new StatutColis({ statut: "livré" }).save(),
        new StatutColis({ statut: "retour" }).save(),

      ]);
  
      console.log(values);
    } catch (err) {
      console.error(err);
    }
  };
  module.exports = createStatutColis;