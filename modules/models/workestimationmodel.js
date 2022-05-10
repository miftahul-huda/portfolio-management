const { Model, DataTypes } = require('sequelize');

class WorkEstimationModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            workEstimationTitle: DataTypes.STRING,
            description: DataTypes.STRING
        }, 
        { sequelize, modelName: 'workestimationmaster', tableName: 'workestimationmaster', force: force });
    }
}

module.exports = WorkEstimationModel;