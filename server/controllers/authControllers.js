import User from "../models/User.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "Eksik Bilgi Girdiniz" }); // 400 Bad Request
      return;
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: `Kullanıcı Oluşturuldu: ${newUser.name}`,
      username: newUser.name,
    }); // 201 Created
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu" }); // 500 Internal Server Error
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Eksik Bilgi Girdiniz" }); // 400 Bad Request
      return;
    }

    const findUser = await User.findOne({
      email: email,
    });

    if (!findUser) {
      res.status(404).json({ message: "Email bulunamadı" }); // 404 Not Found
      return;
    }

    const match = await bcrypt.compare(password, findUser.password);
    if (!match) {
      res.status(403).json({ message: "Hatalı Şifre" }); // 403 Forbidden
      return;
    }

    req.session.userID = findUser._id;

    res.cookie("isLoggedIn", true, { maxAge: 24 * 60 * 60 });

    res.status(200).json({
      message: findUser,
    }); // 200 OK
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu" }); // 500 Internal Server Error
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy();
    res.status(204).json(); // 204 No Content
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu" }); // 500 Internal Server Error
  }
};

export default {
  register,
  login,
  logout,
};
