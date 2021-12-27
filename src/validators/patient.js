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






module.exports = (data) => {
    /* eslint-disable camelcase */
    const {
      nom,
    biography,
    //   musical_genres,
    //   soundcloud,
    //   facebook,
    //   instagram,
    //   spotify,
    //   beatport,
    //   mixcloud,
    //   youtube,
    } = data;
    /* eslint-enable camelcase */
    const errors = [];



    const nameError = nameValidation(nom);
    if (nameError) errors.push({ field: "nom", message: nameError });

  const biographyError = biographyValidation(biography);
  if (biographyError)
    errors.push({ field: "biography", message: biographyError });


    return errors.length > 0 ? errors : null;

}