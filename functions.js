var obj = {
    hooks: {
        updateSalesOrderData: function (options, callback) {
            var responseData = options.data || [];
            for (var i = 0; i < responseData.length; i++) {
                responseData[i]['exportedDateTime'] = (new Date()).toISOString();
            }
            return callback(null, {data: responseData, errors: []});
        }
    }
};

module.exports = obj;