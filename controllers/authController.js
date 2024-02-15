import userModel from '../models/userModel.js'

export const registerController = async (req, res, next) => {

    const { name, email, password } = req.body
    // validate
    if (!name) {
        return next('Name is Required')
    }
    if (!email) {
        return next('Email is Required')
    }
    if (!password) {
        return next('Password is Required and Greater than 6 charachter')
    }
    const user = await userModel.create({ name, email, password })
    // token 
    const token = user.createJWT()
    res.status(201).send({ 
        success: true, 
        message: 'User Created Succesfully.', 
        user:{
            name:user.name,
            email:user.email,
            lastName:user.lastName,
            location:user.location
        }, 
            token })

}




export const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
     return next("Please Provide All Fields");
    }
    //find user by email
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return next("Invalid Useraname or password");
    }
    //compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next("Invalid Useraname or password");
    }
    user.password = undefined;
    const token = user.createJWT();
    res.status(200).json({
      success: true,
      message: "Login SUccessfully",
      user,
      token
    });
  };