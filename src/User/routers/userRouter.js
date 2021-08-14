import express from "express";
import { verifyToken, getToken } from "../../shared/jwt/jwt.js";
import createCRUDUserFactory from '../bussiness/CRUD-UserFactory.js';

const CRUDUser = createCRUDUserFactory();

function createUserRouter() {
  const router = express.Router();

  router.post("/password/recover", verifyToken, async (req, res, next) => {
    try {
      console.log(req.userId);
      await CRUDUser.recoverPassword(req.userId);
      res.sendStatus(200);
    } catch (error) {
      next(error)
    }
  });

  router.post("/password/reset", verifyToken, async (req, res, next) => {
    try {
      await CRUDUser.resetPassword(req.body, req.userId);
      res.sendStatus(200);
    } catch (error) {
      next(error)
    }
  });

  router.post("/password/change", verifyToken, async (req, res, next) => {
    try {
      await CRUDUser.changePassword(req.body, req.userId);
      res.sendStatus(200);
    } catch (error) {
      next(error)
    }
  });

  router.get('/profile', verifyToken, async (req, res, next) => {
    try {
      const user = await CRUDUser.getProfile(req.userId);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR" ||
      error.type === "INVALID_DATA_ERROR"
    ) { res.status(404); }
    else if (error.type === "NO_TOKEN_PROVIDED") {
      res.status(403);
    }
    else { res.status(500); }
    console.log(error);
    res.json({ message: error.message });
  });


  return router;
}

export default createUserRouter;
