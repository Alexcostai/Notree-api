import express from "express";
import { getToken } from "../../shared/jwt/jwt.js";
import createCRUDUserFactory from '../bussiness/CRUD-UserFactory.js';

const CRUDUser = createCRUDUserFactory();

function createSignupRouter() {
    const router = express.Router();

    router.post("/", async (req, res, next) => {
        try {
            const userId = await CRUDUser.registerUser(req.body);
            const token = getToken({ id: userId });
            res.status(201).json({ token });
        } catch (error) {
            next(error);
        }
    });

    router.use((error, req, res, next) => {
        if (error.type === "DUPLICATE_USER_ERROR") { res.status(403); }
        else { res.status(500); }
        res.json({ message: error.message });
    });


    return router;
}

export default createSignupRouter;
