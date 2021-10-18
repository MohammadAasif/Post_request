const userModal = require("../modal/Roles");

const rolestoreUser = async (req, res) => {
    try {

        const user = new userModal(req.body);
        console.log(user)
        const data = await user.save();
        res.status(200).send(data);
    } catch (error) {
        console.log("Error")
    }
};

const rolegetUsers = async (req, res) => {
    try {
        const users = await userModal.find({});
        res.status(200).send(users);
    } catch (error) { }
};


const rolegetuserDetail = async (req, res) => {

    try {
        const _id = req.params.id;
        const us = await userModal.findById({ _id });
        res.status(200).send(us);
    } catch (error) { }
};


const roleupdateuser = async (req, res) => {

    try {
        const _id = req.params.id;

        const updateuser = await userModal.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(`The data has beeen updated - ${updateuser}`);

    } catch (error) { }

};
const roledeleteUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const us = await userModal.findByIdAndDelete(_id);

        if (!us) {
            return res.status(404).send("Error")
        }
        res.send(us)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports = {
    rolestoreUser,
    rolegetUsers,
    rolegetuserDetail,
    roleupdateuser,
    roledeleteUser,
};
