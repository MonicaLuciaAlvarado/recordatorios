const Recordatorio = require("../models/recordatorio.model");

module.exports.get_all = (req, res) => {
    Recordatorio.find().sort({prioridad: -1})
    //1 ASC 1-10 -1 DES 10-1
    .then(recordatorios => res.json(recordatorios))
    .catch(err => {res.status(400).json(err)});
}

//Crear un nuevo recordatorio
module.exports.create_recordatorio = (req,res) =>{
    Recordatorio.findOne({titulo: req.body.titulo})
    .then(recordatorio=>{
        if(recordatorio != null){
            //Ya existe un recordatorio con ese título
            let err = {"errors": {"titulo":{"message": "El título ya existe"}}};
            res.status(400).json(err);
        }
        else{
            Recordatorio.create(req.body)
            .then(recordatorio => res.json(recordatorio))
            .catch(err => {res.status(400).json(err)});
        }
    })
}

//Regrese un recordatorio en base a su ID
module.exports.get_recordatorio = (req,res) => {
    Recordatorio.findOne({_id: req.params.id})
    .then(recordatorio => res.json(recordatorio))
    .catch(err => {res.status(400).json(err)});
}

//Actualiza un recordatorio
module.exports.update_recordatorio = (req,res) =>{
    Recordatorio.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}, {runValidators:true})
    .then(recordatorio => res.json(recordatorio))
    .catch(err => {res.status(400).json(err)});
}

//Borre recordatorio en base a su ID
module.exports.delete_recordatorio = (req, res) =>{
    Recordatorio.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => {res.status(400).json(err)});
}