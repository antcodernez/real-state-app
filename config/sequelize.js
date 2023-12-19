import {Sequelize} from "sequelize";
import { config } from "./config";
import setupModels from "../models/index";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: "postgres"
});

setupModels(sequelize);

sequelize.sync();

export default sequelize;
