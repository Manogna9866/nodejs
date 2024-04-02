const express = require("express");
const employees = require("../model/employeemodel.js");
const cors = require("cors");
const multer = require("multer");
const verifyToken = require('./jwt.js')



const storage = multer.diskStorage({
  destination: "users/",
  filename: (req, file, uploadphoto) => {
    uploadphoto(null,file.originalname);
  },
});

const profile = multer({
  storage,
});

let corsOptions = {
  origin: ["http://localhost:4040"],
};
const route = express.Router();

route.post(
  "/addemployee",
  cors(corsOptions),
  profile.array("file"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "no file" });
    }

    const userData = {
      firstname: req.body.firstname,
      photo: req.file.filename,
    };

    try {
      const m = new employees(userData);
      m.save();
      return res.status(201).json(m);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
);

route.get("/employeelist", verifyToken, cors(corsOptions), async (req, res) => {
  try {
    const employeelist = await employees.find();
    res.status(201).json(employeelist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

route.put("/updateemployee/:id", cors(corsOptions), async (req, res) => {
  const updateemployee = await employees.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(201).json(updateemployee);
});

route.delete("/deleteemployee/:id", cors(corsOptions), async (req, res) => {
  const deleteemployee = await employees.findByIdAndDelete(req.params.id);
  res.status(201).json(deleteemployee);
});

module.exports = route;
