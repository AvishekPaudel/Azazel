const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) =>{
    const { email, password: Npassword } = req.body
    if(!email || !Npassword) return res.json({ status: "error", error: "please enter your email and password"});
    else {
        db.query('SELECT email FROM users WHERE email = ?' [email], async (err, result) =>{
        if (err) throw err;
        if (result[0]) return res.json({status: "error", error: "email is already in use"})
        else{
            const password = await bcrypt.hash(Npassword, 0);
            db.query("INSERT INTO users SET ?",{email: email,password: password },(error, results)=> {
                if (error) throw error;
                return res.json({ success: "success", success: "User has been registered"})

            })

        }    
        
    })
}

}
module.exports = register;