import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'

const Login = () => {
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const navigate = useNavigate();

const handleLogin = (e)=> {
  e.preventDefault();
  console.log("I HAVE BEEN CLICKED")

  localStorage.getItem("User")
  const userDetails = JSON.parse(localStorage.getItem("user"))
  console.log(userDetails)
  // if(!userDetails){
  //   alert("Please register first before proceeding")
  // }
  if(userDetails.email === email && userDetails.password === password){
    alert("Login successful")
    navigate('/home')
}}
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "50%",
        backgroundColor: "#f4f4f4",
        margin: "50px auto",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "12px",
          "&:hover": {
            borderColor: 'blue'
          }
          
        }}
      >
        <h2
          style={{
            color: "black",
            marginBottom: "12px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Login
        </h2>
        <form onSubmit={handleLogin} style={{
              padding: "12px",
              margin: "12px",
            }}>
        <div style={{ marginBottom: "12px" }}
            
            >
              <label
                style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                  display: "flex",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder= "Enter your email address"
                value = {email}
                onChange={(e) => setemail(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  width: "100%",
                  padding: "6px",
                  borderRadius: "5px",
                  borderColor: "#ccc",
                }}
              />
            </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "6px",
                display: "flex",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Please enter your registered password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              style={{
                flexGrow: 1,
                width: "100%",
                padding: "6px",
                borderRadius: "5px",
                "&:focus": {
                  borderColor: "#4CAF50",
                }
                
              }}
            />
          </div>
          <button  type="submit" 
          style={{
            marginTop: "12px",
            marginBottom: "12px",
           
            padding: "8px",
            width: "40%",
            backgroundColor: "#4CAF50",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    
            outline: "none",
            transition: "background-color 0.3s",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
          >Login</button>
          
                <p>
                    Do not have an account? <Link to="/register">Sign Up</Link>
                </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
