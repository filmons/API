import PatientDTO from "./dto.js";
import { ApiError } from "../../helpers/error.js";

export interface IPatientService {
  getAll() : Promise<PatientDTO[]>
  register(patientData: any) : Promise<PatientDTO>
  login(patientData: any) : Promise<PatientDTO>
}

export default class PatientService implements IPatientService {
  private patientRepo
  constructor(userRepository) {
    this.patientRepo = userRepository;
  }

  async getAll() {
    const patients = await this.patientRepo.findAll();
    return patients.map((patient) => new PatientDTO(patient));
  }

  async register(patientData) {
    if (
      !patientData.email ||
      !patientData.password ||
      !patientData.nom ||
      !patientData.prenom ||
      !patientData.nom ||
      !patientData.adresse ||
      !patientData.tel
    )
      throw new ApiError(400, "Missing required email and password fields");

    const newPatient = await this.patientRepo.addNew(patientData);
    return new PatientDTO(newPatient);
  }

  async login(patientData) {
    if (!patientData.email || !patientData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const patient = await this.patientRepo.findByEmail(patientData);
    if (!patient)
      throw new ApiError(400, "User with the specified email does not exists");

    const passwordMatch = await this.patientRepo.compareHash(
      patientData.password,
      patient.password
    );
    if (!passwordMatch) throw new ApiError(400, "User password do not match");

    return new PatientDTO(patient);
  }
}
