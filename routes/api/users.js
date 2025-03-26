
const express = require('express');
const router = express.Router();
const pool = require('../../config/databases');
const { User } = require('../../models/User');





router.get('/', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  });
  
  // POST Crear usuario
  router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear usuario' });
    }
  });
  
  // PUT Actualizar usuario
  router.put('/:id', async (req, res) => {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  });
  
  // DELETE Eliminar usuario
  router.delete('/:id', async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.json({ message: 'Usuario eliminado' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  });
  
  module.exports = router;














  
  // Rutas
  //router.get('/', userController.getAllUsers);
  //router.post('/', userController.createUser);
  //router.put('/:id', userController.updateUser);
  //router.delete('/:id', userController.deleteUser);
