import User from "../model/User";

// login callback
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      message:"login sucessfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:"something wrong",
      error,
    });
  }
};

//Register Callback
export const registerController = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      message:"register sucessfully",
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:"something wrong",
      error,
    });
  }
};
