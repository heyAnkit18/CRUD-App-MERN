import User from '../Model/userModel.js';

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
    
        if (!userData) {
            return res.status(400).json({ message: "User data is required" }); 
        }
        
        const saveData = await userData.save();
        res.status(201).json(saveData); 
    } catch (error) {
        console.error("Error saving user data:", error); 
        res.status(500).json({ error: error.message }); 
    }
};
