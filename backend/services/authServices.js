const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (name, email, password) => {
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return user;
};

const login = async (email, password) => {
    const user = await User.findOne({email});
    if(!user) throw new error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) throw new error('Password is incorrect');

    const accessToken = jwt.sign({_id: user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1d'})

    return { user, accessToken };
}

module.exports = { register, login };