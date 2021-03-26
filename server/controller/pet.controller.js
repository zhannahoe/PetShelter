const Pet = require('../models/pet.model')

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({results: allPets})
        })
        .catch(err => res.json({errors: err}))
}

module.exports.createOnePet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({results: newPet}))
        .catch(err => res.json(err))
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.Petid})
        .then(onePet => {
            res.json({results: onePet})
        })
        .catch(err => res.json({errors: err}))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.Petid},
        req.body,
        {new: true})
        .then(updatedPet => res.json({results: updatedPet}))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.Petid},)
        .then(deletedPet => res.json({results: deletedPet}))
        .catch(err => res.json({errors: err}))
}