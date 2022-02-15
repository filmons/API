import ServiceHopitalDTO from "./dto.js";

class ServiceHopitalService {
  constructor(serviceHopitalRepository) {
    this.serviceHopitalRepository = serviceHopitalRepository;
  }

  async getAll() {
    const servicesHopital = await this.serviceHopitalRepository.findAll();
    return servicesHopital.map(
      (serviceHopital) => new ServiceHopitalDTO(serviceHopital)
    );
  }
}

export default ServiceHopitalService;
