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
		return "Le tele doit être renseigné";
	}
	if (typeof tele !== "numbere") {
		return "Le tele doit être une chaîne de caractères";
	}
	if (tele.length < 500 || tele.length > 2000) {
		return "Le tele doit contenir entre 500 et 2000 caractères";
	}
	return null;
};

const passValidation = (password) => {
	if (isNil(password) || password === "") {
		return "Le password doit être renseigné";
	}
	if (typeof password !== "string") {
		return "Le password doit être une chaîne de caractères";
	}
	if (password.length < 500 || password.length > 2000) {
		return "Le password doit contenir entre 500 et 2000 caractères";
	}
	return null;
};

const prenomValidation = (prenom) => {
	if (isNil(prenom) || prenom === "") {
		return "Le prenom doit être renseigné";
	}
	if (typeof prenom !== "string") {
		return "Le prenom doit être une chaîne de caractères";
	}
	if (prenom.length < 500 || prenom.length > 2000) {
		return "Le password doit contenir entre 500 et 2000 caractères";
	}
	return null;
};


const emailValidation = (email) => {
	if (isNil(email) || email === "") {
		return "Le email doit être renseigné";
	}
	if (typeof email !== "string") {
		return "Le email doit être une chaîne de caractères";
	}
	if (email.length < 500 || email.length > 2000) {
		return "Le email doit contenir entre 500 et 2000 caractères";
	}
	return null;
};

const adresseValidation = (adresse) => {
	if (isNil(adresse) || adresse === "") {
		return "Le adresse doit être renseigné";
	}
	if (typeof adresse !== "string") {
		return "Le adresse doit être une chaîne de caractères";
	}
	if (adresse.length < 500 || adresse.length > 2000) {
		return "Le adresse doit contenir entre 500 et 2000 caractères";
	}
	return null;
};

module.exports = (data) => {
	/* eslint-disable camelcase */
	const { email, password, nom, adresse, tele, prenom } = data;
	/* eslint-enable camelcase */
	const errors = [];

	const nameError = nameValidation(nom);
	if (nameError) errors.push({ field: "nom", message: nameError });

	const teleError = teleValidation(tele);
	if (teleError) errors.push({ field: "tele", message: teleError });
  

  /////
  const passwordError =passValidation(password);
	if (passwordError) errors.push({ field: "password", message: passwordError });



  const prenomError = prenomValidation(prenom);
	if (prenomError) errors.push({ field: "prenom", message: prenomError });



  const emailError = emailValidation(email);
	if (emailError) errors.push({ field: "email", message: emailError });



  const adresseError = adresseValidation(adresse);
	if (adresseError) errors.push({ field: "adresse", message: adresseError });


	return errors.length > 0 ? errors : null;

};
