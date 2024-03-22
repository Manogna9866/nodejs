const express = require('express')
const employees = require('../model/employeemodel.js')
const cors = require('cors')
let corsOptions = {
    origin: ['http://localhost:4040']
}
const route = express.Router();

route.post('/addemployee', cors(corsOptions), (req, res) => {
    const m = new employees(req.body);
    m.save();
    res.status(201).json(m)
});

route.get('/employeelist', cors(corsOptions), async (req, res) => {
    try {
        const employeelist = await employees.find();
        res.status(201).json(employeelist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }
});

route.put('/updateemployee/:id', cors(corsOptions), async (req, res) => {
    const updateemployee = await employees.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(201).json(updateemployee)
});

route.delete('/deleteemployee/:id', cors(corsOptions), async (req, res) => {
    const deleteemployee = await employees.findByIdAndDelete(req.params.id)
    res.status(201).json(deleteemployee)
});

module.exports = route