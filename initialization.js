//const LoggerModel  = require( './modules/models/loggermodel')

const { Sequelize, Model, DataTypes } = require('sequelize');
const process = require('process');

const RiskModel  = require( './modules/models/riskmodel')
const ScopeModel  = require( './modules/models/scopemodel')
const StrategyModel  = require( './modules/models/strategymodel')
const WorkEstimationModel = require( './modules/models/workestimationmodel')

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.DBENGINE  
});


class Initialization {
    static async initializeDatabase(){

        let force = false;
        RiskModel.initialize(sequelize, force)
        ScopeModel.initialize(sequelize, force)
        WorkEstimationModel.initialize(sequelize, force)
        StrategyModel.initialize(sequelize, force)

        RiskModel.hasMany(StrategyModel);
        ScopeModel.hasMany(StrategyModel);
        WorkEstimationModel.hasMany(StrategyModel, { foreignKey: { name: 'workEstimationId' } });
        StrategyModel.belongsTo(RiskModel);
        StrategyModel.belongsTo(ScopeModel);
        StrategyModel.belongsTo(WorkEstimationModel, { foreignKey: { name: 'workEstimationId' } });

        await sequelize.sync();
    }
}

module.exports = Initialization



