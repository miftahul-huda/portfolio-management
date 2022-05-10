const { Model, DataTypes } = require('sequelize');

class StrategyModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            strategyDate: DataTypes.DATE,
            strategyTitle: DataTypes.STRING,
            description: DataTypes.STRING,
            scopeId: DataTypes.INTEGER,
            riskId: DataTypes.INTEGER,
            workEstimationId: DataTypes.INTEGER,
            professionalServiceCost: DataTypes.DECIMAL,
            workloadACV: DataTypes.DECIMAL,
            benefit: DataTypes.TEXT
        }, 
        { sequelize, modelName: 'strategy', tableName: 'strategy', force: force });
    }
}

module.exports = StrategyModel;