import { Controller, Get, Post, Middleware } from '@overnightjs/core';
import { Request, Response, NextFunction } from 'express';
import JwtService from '../../libs/jwt';
import { auth } from '../../middlewares';
import { IPatientService } from './service';


@Controller('patients')
class PatientController {
  private patientService;
  private jwtService;
  constructor(patientService: IPatientService, jwtService: JwtService) {
    this.patientService = patientService;
    this.jwtService = jwtService;
  }

  @Get()
  @Middleware(auth.isAuth)
  getAll = async ( res: Response, next: NextFunction ) => {
    try {
      let patients = await this.patientService.getAll();
      res.status(200).json(patients);
    } catch (err) {
      next(err);
    }
  };

  @Post()
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.register({ ...req.body });
      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  };

  @Post('login')
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const oneHour = new Date(Date.now() + (30 * 86400 * 1000));
      const patient = await this.patientService.login({ ...req.body });
      const token = await this.jwtService.generateToken({ id: patient.id });
      res.cookie("auth-cookie", token, { expires: oneHour });
      res.status(200).json(patient);
    } catch (err) {
      next(err);
    }
  };
}

export default PatientController;
