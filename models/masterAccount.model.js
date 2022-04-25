const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema({
    balane: {type: Number, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}
});

const MasterAccount = mongoose.model("masterAccount", masterAccountSchema);

module.exports = MasterAccount;
