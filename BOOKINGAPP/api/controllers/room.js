import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "./../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
  } catch (err) {
    next(err);
  }
};
