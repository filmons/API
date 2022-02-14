import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class ServiceHopitalDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        specialization: DataTypes.STRING,
      },
      { sequelize, modelName: "ServiceHopital" }
    );
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Patient, { as: "Patient" });
    return this;
  }
}

ServiceHopitalDao.init(db.sequelize);

export default ServiceHopitalDao;
