const Center = require('../models/Center');

// Create a new center
const createCenter = async (req, res) => {
    const { name, address, image } = req.body;

    try {
        const newCenter = new Center({
            name,
            address,
            image
        });

        await newCenter.save();
        res.status(201).json(newCenter);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all centers
const getCenters = async (req, res) => {
    try {
        const centers = await Center.find();
        res.status(200).json(centers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get center by ID
const getCenterById = async (req, res) => {
    try {
        const center = await Center.findById(req.params.id);
        
        if (center) {
            res.status(200).json(center);
        } else {
            res.status(404).json({ message: 'Center not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update center details
const updateCenter = async (req, res) => {
    const { name, address, image } = req.body;

    try {
        const center = await Center.findById(req.params.id);
        
        if (center) {
            center.name = name || center.name;
            center.address = address || center.address;
            center.image = image || center.image;
            
            const updatedCenter = await center.save();
            res.status(200).json(updatedCenter);
        } else {
            res.status(404).json({ message: 'Center not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a center
const deleteCenter = async (req, res) => {
    try {
        const center = await Center.findById(req.params.id);
        
        if (center) {
            await center.deleteOne();
            res.status(200).json({ message: 'Center deleted successfully' });
        } else {
            res.status(404).json({ message: 'Center not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createCenter,
    getCenters,
    getCenterById,
    updateCenter,
    deleteCenter
};
