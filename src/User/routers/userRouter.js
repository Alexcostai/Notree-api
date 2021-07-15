import express from "express";
import { verifyToken, getToken } from "../../shared/jwt/jwt.js";
import createCRUDUserFactory from '../bussiness/CRUD-UserFactory.js';

const CRUDUser = createCRUDUserFactory();

function createUserRouter() {
  const router = express.Router();

  router.post("/password/recover", verifyToken, async (req, res, next) => {
    try {
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

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR" ||
      error.type === "INVALID_DATA_ERROR"
    ) { res.status(404); }
    else { res.status(500); }
    res.json({ message: error.message });
  });


  return router;
}

export default createUserRouter;
