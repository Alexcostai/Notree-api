import express from "express";
import { getToken } from "../../shared/jwt/jwt.js";
import createCRUDUserFactory from '../bussiness/CRUD-UserFactory.js';

const CRUDUser = createCRUDUserFactory();

function createSigninRouter() {
    const router = express.Router();

    router.post("/", async (req, res, next) => {
        try {
            const userId = await CRUDUser.loginUser(req.body);
            const token = getToken({ id: userId });
            res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    });

    router.use((error, req, res, next) => {
        if (error.type === "INVALID_DATA_ERROR") { res.status(404); }
        else { res.status(500); }
        res.json({ message: error.message });
    });


    return router;
}

export default createSigninRouter;
