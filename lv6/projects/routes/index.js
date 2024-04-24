const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/projects', projectController.createProject);

router.put('/projects/:id', projectController.updateProject);

router.delete('/projects/:id', projectController.deleteProject);

router.get('/projects/:id', projectController.getProject);



module.exports = router;
