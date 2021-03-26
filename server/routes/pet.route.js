const PetController = require('../controller/pet.controller')

module.exports = app =>{
    app.get("/api/Pets/all", PetController.findAllPets)
    app.post("/api/Pets/create", PetController.createOnePet)
    app.get("/api/Pets/:Petid", PetController.getOnePet)
    app.put("/api/Pets/update/:Petid", PetController.updatePet)
    app.delete("/api/Pets/delete/:Petid", PetController.deletePet)
}