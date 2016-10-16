let mongoose = require('mongoose')
mongoose.connect('mongodb://stackx:stackx@ds057816.mlab.com:57816/stackx')

let salesReportSchema = new mongoose.Schema({
    item_name: String,
    sales_amount: Number,
    month: Number,
    year: Number,
    date: Number,
    createdAt: Date,
    lastUpdate: Date
})

let Sales_Report = mongoose.model('sales_report', salesReportSchema)

module.exports = Sales_Report
