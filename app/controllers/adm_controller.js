const AdmController = {
    index: (req, res, next) =>{
        res.send([{id: 1, nome: "João Paulo"}]);
    }
}

module.exports = AdmController;