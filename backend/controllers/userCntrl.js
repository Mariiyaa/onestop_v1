import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//register user
export const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user");
  
    let { email } = req.body;
    const userExists = await prisma.user.findUnique({ where: { email: email } });
    if (!userExists) {
      const user = await prisma.user.create({ data: req.body });
      res.send({
        message: "User registered successfully",
        user: user,
      });
    } else res.status(201).send({ message: "User already registered" });
  });

//book event
  export const bookPackage = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
  
    try {
         
        await prisma.user.update({
          where: { email: email },
          data: {
            bookedPackage: { push: { id, date } },
          },
        });
        res.send("your Package is booked successfully");
      }
    catch (err) {
      throw new Error(err.message);
    }
  });

//get all bookings
  export const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
      const bookings = await prisma.user.findUnique({
        where: { email },
        select: { bookedPackage: true },
      });
      res.status(200).send(bookings);
    } catch (err) {
      throw new Error(err.message);
    }
  });

  //cancel bookings
  export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
        select: { bookedPackage: true },
      });
  
      const index = user.bookedPackage.findIndex((book) => book.id === id);
  
      if (index === -1) {
        res.status(404).json({ message: "Booking not found" });
      } else {
        user.bookedPackage.splice(index, 1);
        await prisma.user.update({
          where: { email },
          data: {
            bookedPackage: user.bookedPackage,
          }
        });
  
        res.send("Booking cancelled successfully");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  });
  