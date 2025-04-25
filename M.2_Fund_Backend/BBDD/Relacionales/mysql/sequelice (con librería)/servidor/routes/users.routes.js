const express = require("express");
const usersController = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.getUsers);
router.put("/", usersController.getUsers);
router.delete("/", usersController.getUsers);

module.exports = router;

// app.get("/users", (req, res) => {
//     // const getUser = await User.findAll({
//     //     firstName: "Jorge",
//     //     lastName: "Ventura",
//     // });
//     // console.log(getUser);
//     res.status(201).send(JSON.stringify(getUser));
// });

// app.post("/users", async (req, res) => {
//     const createdUsers = await User.create({
//         firstName: "Jorge",
//         lastName: "Ventura",
//         // firstName: req.body.firstName,
//         // lastName: req.body.lastName,
//     });
//     console.log(createdUsers);
//     res.status(201).send({ id: createdUsers.id });
// });

// app.put("/users", async (req, res) => {
//     // const createdUser = await User.update({
//     //     firstName: "Jorge",
//     //     lastName: "Ventura",
//     // });
//     // console.log(createdUser.firstName);
//     res.status(201).send({ id: createdUser.id });
// });

// app.delete("/users/:id", (req, res) => {
//     const deletedUsers = User.destroy({
//         where: {
//             id: req.params.id,
//         },
//     });
//     // console.log(deletedUsers);
//     console.log(deletedUsers);
//     res.status(200).send(`User with ID ${req.params.id} deleted`);
// });
