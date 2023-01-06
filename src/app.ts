import express from "express";
import router from "./router/user.router";
import "dotenv/config";

//Instance de express
const app = express();

//Utilisation d'une variable d'environnement
const port = process.env.PORT;

app.use(express.json())
//Instance du routeur de express ayant une route par defaut
app.use("/user", router);

//Définition du port pout le serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}.`);
});
