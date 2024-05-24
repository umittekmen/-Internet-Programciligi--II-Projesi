import User from "../models/User.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw { message: "Eksik Bilgi Girdiniz", code: 400 };
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      throw { message: "Kullanıcı Bulunamadı", code: 404 };
    }
    res.status(200).json({
      message: `Kullanıcı Oluşturuldu: ${newUser}`,
    });
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw { message: "Eksik Bilgi Girdiniz", code: 400 };
    }
    const findUser = await User.findOne({
      email: email,
    });
    if (!findUser) {
      throw { message: "email bulunamadı", code: 404 };
    }
    const match = await bcrypt.compare(password, findUser.password);
    if (!match) {
      throw { message: "Hatalı Şifre", code: 403 };
    }
    req.session.UserId = findUser._id;
    res.status(200).json({ message: "başalıyla giriş yapıldı" });
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};
export default {
  register,
  login,
};
