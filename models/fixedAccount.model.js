const mongoose = require('mongoose');

const fixedAccountSchema = new mongoose.Schema({
    account_number: {type: Number, required: true},
    balance: {type: Number, required: true},
    interestRate: {type: Number, required: true},
    startdate: {type: Date, required:true},
    maturityDate: {type: Date, required:true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}
});

const FixedAccount = mongoose.model("fixedAccount", fixedAccountSchema);

module.exports = FixedAccount;
