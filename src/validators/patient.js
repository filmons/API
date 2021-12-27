const { isNil } = require("lodash");

const nameValidation = (nom) => {
  if (isNil(nom) || nom === "") {
    return "Le nom doit être renseigné";
  }
  if (typeof nom !== "string") {
    return "Le nom doit être une chaîne de caractères";
  }
  if (nom.length < 3 || nom.length > 50) {
    return "Le nom doit contenir entre 3 et 50 caractères";
  }
  return null;
};

const teleValidation = (tele) => {
    if (isNil(tele) || tele === "") {
      return "La biographie doit être renseigné";
    }
    if (typeof tele !== "string") {
      return "La biographie doit être une chaîne de caractères";
    }
    if (tele.length < 500 || tele.length > 2000) {
      return "La biographie doit contenir entre 500 et 2000 caractères";
    }
    return null;
  };
  





module.exports = (data) => {
    /* eslint-disable camelcase */
    const {
        nom,
        tele,
    
    } = data;
    /* eslint-enable camelcase */
    const errors = [];



  const nameError = nameValidation(nom);
  if (nameError) errors.push({ field: "nom", message: nameError });

  const biographyError = teleValidation(tele);
  if (biographyError)
    errors.push({ field: "tele", message: biographyError });


    return errors.length > 0 ? errors : null;

}