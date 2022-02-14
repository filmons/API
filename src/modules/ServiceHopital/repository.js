import bcrypt from "bcrypt";

class SeviceHopitalRepository {
  constructor(ServiceHopitalDao) {
    this.ServiceHopitalDao = ServiceHopitalDao;
  }

  async findAll() {
    return await this.ServiceHopitalDao.findAll({ include: "patient" });
  }
}

export default SeviceHopitalRepository;
