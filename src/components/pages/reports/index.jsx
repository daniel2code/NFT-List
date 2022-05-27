import React, { useReducer } from "react";
import "./report.css";
import Navbar from "../../common/navbar/index";
import Footer from "../../common/footer/index";
import { usePostRequest } from "../../request/api";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Index = () => {
  const { data, postRequest, loading } = usePostRequest();

  const reducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [state, setState] = useReducer(reducer, {});

  const handleChange = (event) => {
    setState({
      name: event.target.name,
      value: event.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!state.firstName || !state.lastName || !state.message) {
  //     console.log("input field is empty");
  //   } else {
  //     postRequest("/create-report", state);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "reports"), {
        ...state,
      });
      // onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="report-box">
        <div className="report-one"></div>
        <div className="report-two">
          <div className="form-container">
            <h1 className="page-title">Report Issues</h1>

            <form action="" className="form-box">
              <div className="input-box">
                <label htmlFor="" className="label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="input-box">
                <label htmlFor="" className="label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="input-box2">
                <label htmlFor="" className="label">
                  Message (Issue)
                </label>

                <textarea
                  rows="8"
                  type="text"
                  name="message"
                  onChange={handleChange}
                  className="textarea"
                />
              </div>

              <button
                disabled={loading}
                className="form-btn"
                onClick={handleSubmit}
              >
                Send Report
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
