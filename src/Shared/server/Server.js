import express from "express";
import createUserRouter from "../../User/routers/userRouter.js";
import createNoteRouter from "../../Note/routers/noteRouter.js";
import createSigninRouter from "../../User/routers/signinRouter.js";
import createSignupRouter from "../../User/routers/singupRouter.js";

async function createServer(port) {
  const app = express();
  app.use(express.json());

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use("/user", createUserRouter());
  app.use("/note", createNoteRouter());
  app.use("/signup", createSignupRouter());
  app.use("/signin", createSigninRouter());

  return new Promise((resolve, reject) => {
    const server = app
      .listen(port)
      .once("error", () => {
        reject(new Error("Error connecting to the server"));
      })
      .once("listening", () => {
        server.port = server.address().port;
        resolve(server);
      });
  });
}

export default createServer;