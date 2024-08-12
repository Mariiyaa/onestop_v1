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




module.exports = {
    test,
    registerUser,
    loginUser,
}