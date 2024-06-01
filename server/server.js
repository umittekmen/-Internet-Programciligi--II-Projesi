import express from "express";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";
import authRouters from "./routes/authRouters.js";
import db from "./db.js";
import cors from "cors";

const app = express();
const MongoDBStore = connectMongoDBSession(session);

const startServer = async () => {
  try {
    // db bağlantısı
    await db();

    // Middleware
    app.use(
      cors({
        origin: "http://localhost:3000", // İsteklerin kabul edileceği köken
        credentials: true, // Oturum çerezleri gibi kimlik doğrulama bilgilerini içerir
      })
    ); // CORS middleware'ini ekleyin// CORS'u etkinleştirin
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ limit: "10mb", extended: true }));

    const store = new MongoDBStore({
      uri: "mongodb://127.0.0.1:27017/arac-atlasi",
      collection: "sessions",
    });

    store.on("error", (error) => {
      console.log("Session store error", error);
    });

    app.use(
      session({
        secret: "8E3933B1D28FC2C1B36719BD29A68",
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
          secure: false,
          httpOnly: false,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 gün
        },
      })
    );

    // Routes
    app.use("/auth", authRouters);

    const port = 5000;
    app.listen(port, () => {
      console.log(`Server ${port} portunda çalışıyor`);
    });
  } catch (error) {
    console.log("server başlatılamadı: " + error);
  }
};

startServer();
