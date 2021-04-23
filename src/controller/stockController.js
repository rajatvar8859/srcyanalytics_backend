
const Joi = require('@hapi/joi');
const { CustomError } = require('../helpers/error');
const stockService = require('../services/stockService');

const stockController = {
  /**
     * @name createStockData
     * @author Rajat
     * @description Used for creating stock data
     * @param {*} req client request
     * @param {*} res client response object which is going to be send
     * @param {*} next callback function
     */
  createStockData: async (req, res, next) => {
    try {
      const { body } = req;
      const { error, value } = Joi.object({
        Open: Joi.number().required(),
        Close: Joi.number().required(),
      }).validate(body);
      if (error) {
        throw new CustomError(400, error.message);
      } else {
        const result = await stockService.createStockRecord(value);
        if (result) {
          res.json({
            success: true,
            message: 'Successfully Created Stock Record',
            data: result,
          });
        } else {
          res.json({
            success: false,
            message: 'some error occured while creating',
          });
        }
      }
    } catch (err) {
      next(err);
    }
  },
  /**
     * @name fetchStockData
     * @author Rajat
     * @description Used for fetching stock data
     * @param {*} req client request
     * @param {*} res client response object which is going to be send
     * @param {*} next callback function
     */
  fetchStockData: async (req, res, next) => {
    try {
      const { query } = req;
      const { error, value } = Joi.object({
        start: Joi.number().required(),
        length: Joi.number().required(),
      }).validate(query);
      if (error) {
        throw new CustomError(400, error.message);
      } else {
        const result = await stockService.fetchStockData(value);
        if (result) {
          res.json({
            success: true,
            message: 'Successfully fetched Stock Record',
            data: result,
          });
        } else {
          res.json({
            success: false,
            message: 'Some error occured while fetching...',
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }
};

module.exports = stockController;
