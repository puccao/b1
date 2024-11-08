const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer', // Tham chiếu tới model Customer
        required: false,
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
   
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
