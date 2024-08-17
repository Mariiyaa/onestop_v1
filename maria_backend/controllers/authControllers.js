const User = require('../Models/User')
const {hashPassword,comparePasswords} = require('../Helpers/auth')
const test = (req,res) => {
    res.json('test is working')
}


const registerUser = async (req,res) => {
    try {
        const {name,email,password} =req.body;
                //check if name feild is not empty
                if(!name) {
                    return res.json ({
                        error: "please enter your name"
                    })  
                }

               //check email 
               //check if name field is not empty
               if(!email) {
                return res.json ({
                    error: "please enter your email"
                })  
            }
               const exist = await User.findOne({email});
               if(exist) {
                   return res.json ({
                       error: "email already exists"
                   })
               }

               //check if name field is not empty
               if(!password) {
                return res.json ({
                    error: "please enter your password"
                })  
            }
            const hashedPassword = await hashPassword(password);
             const Newuser = await User.create({
               name,
               email,
               password : hashedPassword,
             });
             return res.json(Newuser)    
    }
     catch (error) {
 
            console.log("error in authControllers.js",error);
        }
    }


// Login 
    const loginUser = async (req,res) => {
        try {
            const {email,password}= req.body;
            console.log("Email received:", email);

            // check user exists 
            const user = await User.findOne({email});
            if(!user)  {
                console.log("User not found for email:", email);
                return res.json ({
                    error: "User does not exist .please Sign up"
                }) 
            }

            // check password 
            const match = await comparePasswords(password,user.password)
              if (match) {
                console.log("Password is correct for email:", email);
                res.json ("password is correct ")
                }
                else{
                    console.log("Wrong password for email:", email);
                return res.json ({
                    error: "wrong password !!!!"
                }) 
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const updateUserProfile = asyncHandler(async (req, res) => {
    //     const user = await User.findById(req.user._id);
    
    //     if (user) {
    //         user.name = req.body.name || user.name;
    //         user.email = req.body.email || user.email;
    //         if (req.body.password) {
    //             user.password = req.body.password;
    //         }
    
    //         const updatedUser = await user.save();
    
    //         res.json({
    //             _id: updatedUser._id,
    //             name: updatedUser.name,
    //             email: updatedUser.email,
    //             token: generateToken(updatedUser._id),
    //         });
    //     } else {
    //         res.status(404);
    //         throw new Error('User not found');
    //     }
    // });
    
    // // @desc    Delete user account
    // // @route   DELETE /api/users/delete
    // // @access  Private
    // const deleteUser = asyncHandler(async (req, res) => {
    //     const user = await User.findById(req.user._id);
    //     if (!user) {
    //         res.status(404);
    //         throw new Error('User not found');
    //     }
    //     await User.deleteOne({ _id: req.user._id });
    //     res.status(200).json({ message: 'User deleted successfully' });
    // });



module.exports = {
    test,
    registerUser,
    loginUser,
    // updateUserProfile,
    // deleteUser

}