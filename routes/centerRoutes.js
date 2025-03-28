const express = require('express');
const router = express.Router();
const {
    createCenter,
    getCenters,
    getCenterById,
    updateCenter,
    deleteCenter
} = require('../controllers/centerController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, adminOnly, createCenter);
router.get('/', protect, getCenters);
router.get('/:id', protect, getCenterById);
router.put('/:id', protect, adminOnly, updateCenter);
router.delete('/:id', protect, adminOnly, deleteCenter);

module.exports = router;
