import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/database.js";

class PatientDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        adresse: DataTypes.STRING,
        tel: DataTypes.STRING,
      },
      { sequelize, modelName: "Patient" }
    );
  }
  static associate(models) {
    // define association here
    this.hasMany(models.ServiceHopital, { as: "servicehopital" });
    return this;
  }
}

PatientDao.init(db.sequelize);

export default PatientDao;
