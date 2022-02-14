import ServiceDTO from "../ServiceHopital/dto";

class PatientDTO {
  constructor({
    id,
    email,
    nom,
    password,
    prenom,
    adresse,
    tel,
    services = [],
  }) {
    this.id = id;
    this.email = email;
    this.prenom = prenom;
    this.nom = nom;
    this.password = password;
    this.adresse = adresse;
    this.tel = tel;

    this.services = services.map((service) => new ServiceDTO(service));
  }
}

export default PatientDTO;
