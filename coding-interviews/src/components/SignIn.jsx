import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const user = { fullname, email, phone, password };

    // Save user in local storage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! 🎉 You can now log in.");
    navigate("/"); // Navigate without passing user data in URL
  };

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
            borderColor: "blue",
          },
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
          SIGN UP
        </h2>
        <form
          style={{
            padding: "12px",
            margin: "12px",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "6px",
                display: "flex",
              }}
            >
              FULL NAME
            </label>
            <input
              type="text"
              name="Fullname"
              placeholder="Enter you full name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
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

          <div style={{ marginBottom: "12px" }}>
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
              placeholder="Enter a valid email please"
              value={email}
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
          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "6px",
                display: "flex",
              }}
            >
              PHONE
            </label>
            <input
              type="phone"
              name="Phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
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
              placeholder="Enter a password"
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
                },
              }}
            />
          </div>
          <button
            onClick={handleRegister}
            type="submit"
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
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
