class serviceHopitalController {
  constructor(ServiceHopitalService, jwtService) {
    this.ServiceHopitalService = ServiceHopitalService;
    this.jwtService = jwtService;
  }

  getAll = async ({ res, next }) => {
    try {
      let users = await this.ServiceHopitalService.getAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
}

export default serviceHopitalController;
