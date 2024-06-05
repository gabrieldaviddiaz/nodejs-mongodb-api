const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// creater user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({ message: "se ha generado un error" }));
});

//buscar todos los usuarios
router.get("/users", (req, res) => {
    userSchema
        .find().then((data) => res.json(data)).catch((error) => res.json({ message: "se ha generado un error" }));
});

//buscar un usuario en especifico
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: "se ha generado un error" }));
});


//actualizar
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, age, email } }).then((data) => res.json(data)).catch((error) => res.json({ message: "se ha generado un error" }));
});

//eliminar
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id }) .then((data) => res.json(data)).catch((error) => res.json({ message: "se ha generado un error" }));
});

module.exports = router;        