const express = require('express');
const paintingsController = require('../controllers/paintingsController');

const router = express.Router();

router.get('/', paintingsController.getAllPaintings);
router.get('/:id', paintingsController.getPaintingById);
router.post('/', paintingsController.createPainting);
router.patch('/:id', paintingsController.updatePainting);
router.delete('/:id', paintingsController.deletePainting);

module.exports = router;
