const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");
const RiskModel = require('../models/riskmodel');
const ScopeModel = require('../models/scopemodel');
const WorkEstimationModel = require('../models/workestimationmodel');

const CrudLogic = require("./crudlogic");

class StrategyLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/strategymodel");
        return model;
    }

    static getPk(){
        return "id";
    }

    static getWhere(search)
    {
        let where = {
            strategyTitle : {
                [Op.like] : "%" + search + "%"
            } 
        }
        return where;
    }

    static getOrder()
    {
        let order = [['createdAt', 'DESC']];
        return order;
    }

    static getIncludes()
    {
        return [{
            model: RiskModel,
            as: 'risk'
        }, {
            model: ScopeModel,
            as: 'scope'
        }, {
            model: WorkEstimationModel
        }]
    }
}

module.exports = StrategyLogic;