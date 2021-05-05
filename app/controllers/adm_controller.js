var Adm = require('../models/adm');

const AdmController = {
    index: (req, res, next) =>{
        res.send(Adm.todos());
    }
}

module.exports = AdmController;