import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();

const usersController = new UsersController();


/**
 * TIPOS DE PARAMETROS
 * ROUTES PARAMS => DE ROTAS * 
 * QUERY PARAMS => FILTROS E BUSCAS
 * HTPS://LOCALHOST:3333/settings/1?=SEARCH=ALGUMACOISA
 * 
 * BODY PARAMS => {
 * 
 * }
 */

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };