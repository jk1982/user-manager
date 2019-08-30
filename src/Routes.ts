import { Express } from 'express';
import { AuthController, AuthContract } from './controllers/AuthController';
import { UserContract, UserController } from './controllers/UserController';

export default class Routes {
    constructor(app: Express) {
        app.route("/user")
            .get((req, res) => {

            })
            .post((req, res) => {
                new UserController(req, res);                
            })
            .put((req, res) => {

            });

        app.get("/user", (req, res) => {
            res.send("User!");
        });

        app.post("/auth", (req, res) => {
            new AuthController(req, res).Auth();
        });

        app.get("/reports", (req, res) => {
            res.send("Reports!");
        });
    }
}