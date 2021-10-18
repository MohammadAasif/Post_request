const express = require("express");

const Router = express.Router();
//For Users collection
const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./controller/userControoler");

Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/{id}", getuserDetail);
Router.patch("/users/:id", updateuser);
Router.delete("/users/:id", deleteUser);

//for Tags collection 
const {
    tagstoreUser,
    taggetUsers,
    taggetuserDetail,
    tagupdateuser,
    tagdeleteUser,
} = require("./controller/tagcontrooler");

Router.get("/tags", taggetUsers);
Router.post("/tags", tagstoreUser);
Router.get("/tags/{id}", taggetuserDetail);
Router.patch("/tags/:id", tagupdateuser);
Router.delete("/tags/:id", tagdeleteUser);

//for Roles collection
const {
    rolestoreUser,
    rolegetUsers,
    rolegetuserDetail,
    roleupdateuser,
    roledeleteUser,
} = require("./controller/rolescontrooler");

Router.get("/roles", rolegetUsers);
Router.post("/roles", rolestoreUser);
Router.get("/roles/{id}", rolegetuserDetail);
Router.patch("/roles/:id", roleupdateuser);
Router.delete("/roles/:id", roledeleteUser);


//for Categories collection
const {
    catstoreUser,
    catgetUsers,
    catgetuserDetail,
    catupdateuser,
    catdeleteUser,
} = require("./controller/categoriescontrooler");

Router.get("/categories", catgetUsers);
Router.post("/categories", catstoreUser);
Router.get("/categories/{id}", catgetuserDetail);
Router.patch("/categories/:id", catupdateuser);
Router.delete("/categories/:id", catdeleteUser);

//for carts collection
const {
    carstoreUser,
    cargetUsers,
    cargetuserDetail,
    carupdateuser,
    cardeleteUser,
} = require("./controller/cartscontrooler");

Router.get("/carts", cargetUsers);
Router.post("/carts", carstoreUser);
Router.get("/carts/{id}", cargetuserDetail);
Router.patch("/carts/:id", carupdateuser);
Router.delete("/carts/:id", cardeleteUser);


//for Products collection
const {
    prostoreUser,
    progetUsers,
    progetuserDetail,
    proupdateuser,
    prodeleteUser,
} = require("./controller/productscontrooler");

Router.get("/products", progetUsers);
Router.post("/products", prostoreUser);
Router.get("/products/{id}", progetuserDetail);
Router.patch("/products/:id", proupdateuser);
Router.delete("/products/:id", prodeleteUser);

//for Orders collection
const {
    orderstoreUser,
    ordergetUsers,
    ordergetuserDetail,
    orderupdateuser,
    orderdeleteUser,
} = require("./controller/ordercontrooler");

Router.get("/orders", ordergetUsers);
Router.post("/orders", orderstoreUser);
Router.get("/orders/{id}", ordergetuserDetail);
Router.patch("/orders/:id", orderupdateuser);
Router.delete("/orders/:id", orderdeleteUser);

module.exports = Router;
