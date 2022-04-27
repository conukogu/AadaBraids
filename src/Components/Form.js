import React, {useState, useEffect} from "react";
import Axios from "axios";

function Form() {
   const [firstName, setfirstName] = useState("");
   const [lastName, setlastName] = useState("");
   const [email, setemail] = useState("");
   const [phoneNumber, setphoneNumber] = useState("");
   const [message, setmessage] = useState("");

  const [formList, setFormList] = useState([]);

  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    Axios.get("https://aadabraids.herokuapp.com/api/formList").then(
      (response) => {
        // console.log(response.data[response.data.length-2]);
        setFormList(response.data);
      }
    );
  }, [formList]);

  const [phoneSize, setPhoneSize] = useState(660 > window.innerHeight);

  const updateMedia = () => {
    setPhoneSize(660 > window.innerHeight);
  };

  useEffect(() => {
    // Applying on mount
    {
      phoneSize
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    }
  }, []);

  const submitFullForm = (e) => {
    e.preventDefault();
    Axios.post("https://aadabraids.herokuapp.com/api/formInsert", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    }).then(() => {
      alert("Sucsessful Insert!");
    });
    setConfirmation(true);
  };

  const FormOk = (e) => {
    e.preventDefault();
    setConfirmation(false);
  };

  return (
    <>
      {confirmation === false ? (
        <form className="contactForm">
          <label>First Name:</label>
          <input
            name="fName"
            type="text"
            required
            onChange={(e) => setfirstName(e.target.value)}
          ></input>

          <label>Last Name:</label>
          <input
            name="lName"
            type="text"
            required
            onChange={(e) => setlastName(e.target.value)}
          ></input>

          <label>Email:</label>
          <input
            name="emailAdd"
            type="email"
            required
            onChange={(e) => setemail(e.target.value)}
          ></input>

          <label>Phone Number:</label>
          <input
            name="telNum"
            type="tel"
            required
            onChange={(e) => setphoneNumber(e.target.value)}
          ></input>

          <label className="areaLabel">
            Anything else you would like us to know?
          </label>
          <textarea
            name="message"
            type="text"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>

          <button type="submit" onClick={submitFullForm}>
            Submit
          </button>
        </form>
      ) : (
        <div className="check">
          <h1>Here is you sent info!</h1>
          <div>{formList[formList.length - 1].FirstName}</div>
          <div>{formList[formList.length - 1].LastName}</div>
          <div>{formList[formList.length - 1].Email}</div>
          <div>{formList[formList.length - 1].PhoneNumber}</div>
          <div>{formList[formList.length - 1].Message}</div>

          <button type="submit" onClick={FormOk}>
            OK
          </button>
        </div>
      )}
    </>
  );
}

export default Form;
