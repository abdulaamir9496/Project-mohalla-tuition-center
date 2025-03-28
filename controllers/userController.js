const User = require('../models/User');

// Get user details by ID
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
            if (user) {
                res.status(200).json(user);
            } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user profile
const updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.params.id);
        
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            
            if (password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
            }
        
            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getUser, updateUser };
