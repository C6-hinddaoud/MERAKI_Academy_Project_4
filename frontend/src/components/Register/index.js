import React from "react";
import "./style.css";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
const Register = () => {
  const [specialt, setSpecialt] = useState([]);
  const [specialty, setDdl] = useState("");
  const [ddlName, setDdlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [Qualification, setQualification] = useState("");

  const [message, setMesage] = useState("");

  const GettALLspic = (req, res) => {
    axios
      .get(`http://localhost:5000/specialties`)
      .then((result) => {
        // console.log(result.data.specialt
        //   )
        setSpecialt(result.data.specialt);
        setMesage(result.data.message);
      })
      .catch((err) => {
        throw err;
      });
  };

  const addDoctor = (req, res) => {
    console.log("jkjhj");
    axios
      .post(`http://localhost:5000/doctors`, {
        name,
        salary,

        email,
        password,
        Qualification,

        specialty,
      })
      .then((result) => {
        console.log(result);
        //GettALLspic()
      // setSpecialt(result.data.specialt);
      setMesage(result.data.message)
      })
      .catch((err) => {
        setMesage(err.response.data.message)
        throw err;
      });
  };

  useEffect(() => {
    GettALLspic();
  }, []);

  return (
    <div className="mainIntroDev">
      <div className="imgregester">
        <img  className="imgReg" src="./assets/images/doctors-1.jpg" alt="pic"></img>
      </div>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label>
          <b>Doctor Name</b>
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter Doctor Name"
          name="email"
          required
        ></input>

        <label>
          <b> Qualification</b>
        </label>
        <input
          onChange={(e) => {
            setQualification(e.target.value);
          }}
          type="text"
          placeholder="Enter  Qualification"
          name="email"
          required
        ></input>

        <label for="email">
          <b>Salary</b>
        </label>
        <input
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          type="text"
          placeholder="Enter Sallary"
          name="email"
          required
        ></input>
        {/*  */}
        <div style={{ margin: "60px" }}>
          <label>
            <b>specialty</b>
          </label>
          <input
            value={ddlName}
            type="text"
            placeholder="specialty"
            required
          ></input>

          <select
            onChange={(e) => {
              setDdl(e.target.value);
            }}
          >
            { specialt.length>0&&  specialt.map((elem, i) => {
              return (
                <option
                  value={elem._id}

                  // textContent={elem.specialty}
                >
                  {elem.specialty}
                </option>
              );
            })}
          </select>

          {/*  */}
        </div>
        <label for="email">
          <b>Email</b>
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label >
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        ></input>

        <label >
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        ></input>
        <hr></hr>
        <p>{message}</p>

        <button onClick={addDoctor} className="registerbtn">
          Register
        </button>
      </div>
    </div>
  );
};
export default Register;
