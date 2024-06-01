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
    // Kullanıcı adını yanıt nesnesine ekle
    res.status(201).json({
      message: `Kullanıcı Oluşturuldu: ${newUser}`,
      username: newUser.name, // Kullanıcı adını yanıt nesnesine ekle
    });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
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
      throw { message: "Email bulunamadı", code: 404 };
    }

    const match = await bcrypt.compare(password, findUser.password);
    if (!match) {
      throw { message: "Hatalı Şifre", code: 403 };
    }

    req.session.userID = findUser._id;

    res.cookie("isLoggedIn", true, { maxAge: 24 * 60 * 60 });

    res.status(200).json({
      message: findUser,
    });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    // Oturumu sonlandır
    req.session.destroy();
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export default {
  register,
  login,
  logout,
};
