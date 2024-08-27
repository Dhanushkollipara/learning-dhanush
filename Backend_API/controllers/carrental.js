const Carrental = require('../models/carrental');
const bcrypt = require('bcrypt');
const saltRounds = 10;



  exports.index = async function(req, res) {
    try {
      const users = await Carrental.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  exports.index_id = async function(req, res) {
    try {
      const user = await Carrental.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  exports.createCustomer = async function(req, res) {
    try {
      const { username, email, age, gender, dob, city, profession, password } = req.body;
  
      let existingUser = await Carrental.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new Carrental({
        username,
        email,
        age,
        gender,
        dob,
        city,
        profession,
        password: hashedPassword
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  exports.editCustomer = async function(req, res) {
    try {
      const { username, email, age, gender, dob, city, profession, password } = req.body;
  
      const hashedPassword = password ? await bcrypt.hash(password, saltRounds) : undefined;
  
      const updatedUser = await Carrental.findByIdAndUpdate(req.params.id, {
        username,
        email,
        age,
        gender,
        dob,
        city,
        profession,
        password: hashedPassword
      }, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  exports.editCustomer_patch = async function(req, res) {
    try {
      const { username, email, age, gender, dob, city, profession, password } = req.body;
  
      const updates = {};
      if (username) updates.username = username;
      if (email) updates.email = email;
      if (age) updates.age = age;
      if (gender) updates.gender = gender;
      if (dob) updates.dob = dob;
      if (city) updates.city = city;
      if (profession) updates.profession = profession;
      if (password) updates.password = await bcrypt.hash(password, saltRounds);
  
      const updatedUser = await Carrental.findByIdAndUpdate(req.params.id, updates, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  exports.deleteCustomer = async function(req, res) {
    try {
      const deletedUser = await Carrental.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }