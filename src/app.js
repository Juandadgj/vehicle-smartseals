import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import configEnv from './config/env/envModule';
import indexRoutes from './routes/index.routes';
import vehicleRoutes from "./routes/vehicle.routes";
import { sequelize } from "./config/database/database";

configEnv();

const PORT = process.env.PORT || 4000;
const app = express();
app.set('port', PORT);
app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(indexRoutes);
app.use(vehicleRoutes);

async function main() {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
}

main();
