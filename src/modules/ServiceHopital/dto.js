import PatientDTO from "../Patient/dto";

class ServiceHopitalDTO {
  constructor({ id, name, specialization, patients = [] }) {
    this.id = id;
    this.name = name;
    this.specialization = specialization;
    this.patients = patients.map((patient) => new PatientDTO(patient));
  }
}

export default ServiceHopitalDTO;
