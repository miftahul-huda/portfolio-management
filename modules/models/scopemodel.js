const { Model, DataTypes } = require('sequelize');

class ScopeModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            scopeTitle: DataTypes.STRING,
            description: DataTypes.STRING
        }, 
        { sequelize, modelName: 'scope', tableName: 'scope', force: force });
    }
}

module.exports = ScopeModel;