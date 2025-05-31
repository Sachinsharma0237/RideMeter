const authService = require('../services/authServices');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await authService.register(name, email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {user, accessToken} = await authService.login(email, password);
        res.status(200).json({message: 'Login successful', user, accessToken})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { register, login };