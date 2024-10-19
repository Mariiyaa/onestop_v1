
const User = require('../Models/User')
const Agent = require('../models/AgentModel');
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


            if (password.length < 8) {
                return res.json({
                    error: "Password must be at least 8 characters long."
                });
            }

            if (!/[A-Z]/.test(password)) {
                return res.json({
                    error: "Password must contain at least one uppercase letter (A-Z)."
                });
            }

            if (!/[a-z]/.test(password)) {
                return res.json({
                    error: "Password must contain at least one lowercase letter (a-z)."
                });
            }

            if (!/[0-9]/.test(password)) {
                return res.json({
                    error: "Password must contain at least one numeric digit (0-9)."
                });
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


    const registerAgent = async (req,res) => {
        try {
            const {name,email,phoneNo,password} =req.body;
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
                   const exist = await Agent.findOne({email});
                   if(exist) {
                       return res.json ({
                           error: "email already exists"
                       })
                   }


                   if(!phoneNo) {
                    return res.json ({
                        error: "please enter your email"
                    })  
                }


                   //check if name field is not empty
                   if(!password) {
                    return res.json ({
                        error: "please enter your password"
                    })  
                }
    
    
                if (password.length < 8) {
                    return res.json({
                        error: "Password must be at least 8 characters long."
                    });
                }
    
                if (!/[A-Z]/.test(password)) {
                    return res.json({
                        error: "Password must contain at least one uppercase letter (A-Z)."
                    });
                }
    
                if (!/[a-z]/.test(password)) {
                    return res.json({
                        error: "Password must contain at least one lowercase letter (a-z)."
                    });
                }
    
                if (!/[0-9]/.test(password)) {
                    return res.json({
                        error: "Password must contain at least one numeric digit (0-9)."
                    });
                }
                const lastAgent = await Agent.findOne().sort({ agent_id: -1 });

                let newAgentId;
                
                // Check if there are any existing agents
                if (lastAgent) {
                    // Extract the numeric part of the last agent_id (e.g., "A001" -> 1)
                    const lastAgentNumber = parseInt(lastAgent.agent_id.slice(1), 10);
                    // Increment by 1 to create the new agent_id
                    const nextAgentNumber = lastAgentNumber + 1;
                    // Format the new agent_id (e.g., "A002")
                    newAgentId = `A${nextAgentNumber.toString().padStart(3, '0')}`;
                } else {
                    // If no agents exist, start with A001
                    newAgentId = "A001";
                }
                
                 const Newagent = await Agent.create({
                   agent_id : newAgentId,
                   name,
                   email,
                   phone_number:phoneNo,
                   status:"free",
                   password,
                 });
                 return res.json(Newagent) 
                 console.log(Newagent)   
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
                // res.json ("password is correct ")
                res.json({ name: user.name });
                console.log(`${user.name}`)
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



    const LoginAgent = async (req,res) => {
        try {
            const {email,password}= req.body;
            console.log("Email received:", email);

            // check user exists 
            const agent = await Agent.findOne({email});
            if(!agent)  {
                console.log("User not found for email:", email);
                return res.json ({
                    error: "User does not exist .please Sign up"
                }) 
            }

            // check password 
            
              if (password===agent.password) {
                console.log("Password is correct for email:", email);
                // res.json ("password is correct ")
                res.json({ name: agent.name });
                console.log(`${agent.name}`)
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






const Dashboard = async (req, res) => {
        try {
            const { email } = req.params;
            const user = await User.findOne({ email });
    
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            res.json({ name: user.name });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    };


    const updateUserProfile = async (req, res) => {
        const email = req.params.email;
        const user = await User.findOne({ email });
    
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
    
            const updatedUser = await user.save();
    
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    };
    
    const DeleteUser = async (req, res) => {
        try {
            const email = req.params.email; // Retrieve email from route parameters
    
            // Find and delete the user
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            await User.deleteOne({ email: user.email });
    
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'An error occurred while deleting the account' });
        }
    };;

module.exports = {
    test,
    registerUser,
    loginUser,
    Dashboard,
    DeleteUser,
    updateUserProfile,
    registerAgent,
    LoginAgent,

}