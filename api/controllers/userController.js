import User from "../models/user.js";

export const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updateUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("Requested user deleted.");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};
export const getAllUser = async (req, res) => {
  try {
    const allusers = await User.find();
    return res.status(200).json(allusers);
  } catch (err) {
    return res.status(500).json(err);
  }
};
