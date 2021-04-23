const stockModel = require('../models/Stock');
const { CustomError } = require('../helpers/error');

const stockService = {
  /**
  * @name createStockRecord
  * @author Rajat
  * @description Used for DB Insert Operation
  * @param payload {*} contain stock record payload
  */
  createStockRecord: async (payload) => stockModel.create(payload),
  /**
  * @name fetchStockData
  * @author Rajat
  * @description Used for fetching records
  */
  fetchStockData: async (payload) => {
    try {
      return stockModel.aggregate([
        {
          $facet: {
            result: [
              { $sort: { "Date": -1 } },
              { $skip: payload.start || 0 },
              { $limit: payload.length || 30 },
              { $project: { _id: 0, Open: 1, Close: 1, Date: 1 } }
            ],
            totalCount: [
              { $count: 'totalCount' }
            ]
          }
        }
      ]);
    } catch (error) {
      throw CustomError(400, `DB Error occured ${error.message || error}`)
    }
  }
};

module.exports = stockService;
