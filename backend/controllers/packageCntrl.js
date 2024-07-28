import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//register Package
export const createPackage = asyncHandler(async (req, res) => {
    const{title ,
        description,
        price,
        image,
        services,
        userEmail}=req.body.data

    console.log(req.body.data)
    
    try {
        const packages = await prisma.package.create({
          data: {
            title ,
    description,
    price,
    image,
    services,
    userEmail
          },
    
  });
  res.send({ message: "Package created successfully" });
} catch (err) {
  if (err.code === "P2002") {
    throw new Error("A Package already there");
  }
  throw new Error(err.message);
}
});


//get all packages

export const getAllPackages = asyncHandler(async (req, res) => {
    const packages = await prisma.package.findMany({
      
    });
    res.send(packages);
  });
  
  //specific package

  // function to get a specific document/residency
export const getPackage = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const packages = await prisma.package.findUnique({
        where: { id },
      });
      res.send(packages);
    } catch (err) {
      throw new Error(err.message);
    }
  });
  