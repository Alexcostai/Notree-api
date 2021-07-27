import express from "express";
import { verifyToken } from "../../shared/jwt/jwt.js";
import createCRUDNoteFactory from "../business/CRUD-NoteFactory.js";

const CRUDNote = createCRUDNoteFactory();

function createNoteRouter() {
  const router = express.Router();

  router.get("/", verifyToken, async (req, res, next) => {
    try {
      const notes = await CRUDNote.getAll(req.userId);
      res.status(200).json({ notes: notes });
    } catch (error) {
      next(error);
    }
  });

  router.post("/", verifyToken, async (req, res, next) => {
    try {
      await CRUDNote.add({ ...req.body, userId: req.userId })
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  });

  router.post("/remove", verifyToken, async (req, res, next) => {
    try {
      await CRUDNote.remove(req.body.id);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  });

  router.post("/update", verifyToken, async (req, res, next) => {
    try {
      await CRUDNote.update(req.body, req.userId);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    if (
      error.type === "INVALID_DATA_ERROR" ||
      error.type === "USER_NOT_FOUND_ERROR"
    ) { res.status(404); }
    else if (error.type === "NO_TOKEN_PROVIDED") {
      res.status(403);
    }
    else { res.status(500); }
    res.json({ message: error.message });
  });

  return router;
}

export default createNoteRouter;
