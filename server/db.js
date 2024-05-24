import mongoose from "mongoose";
import User from "./models/User.js";
const admin = {
  name: "admin",
  password: "Abc123",
  email: "adminumit@gmail.com",
  role: "admin",
};
const db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/arac-atlasi");
    const isAdminRegistered = await User.findOne({ email: admin.email });
    if (isAdminRegistered) {
      console.log("Admin mevcut");
    } else {
      const newAdmin = await User.create(admin);
      if (!newAdmin) {
        throw new error("admin oluşturalamadı");
      }
      console.log("admin kaydedildi");
    }
  } catch (error) {
    throw new error(error);
  }
};
export default db;
