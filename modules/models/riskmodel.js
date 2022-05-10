const { Model, DataTypes } = require('sequelize');

class RiskModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            riskTitle: DataTypes.STRING,
            description: DataTypes.STRING
        }, 
        { sequelize, modelName: 'risk', tableName: 'risk', force: force });
    }
}

module.exports = RiskModel;