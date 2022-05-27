import React, { useEffect, useCallback, useState } from "react";
import "./list.css";

import Footer from "../../common/footer/index";
import NavBar from "../../common/navbar/index";
// import { useGetRequest, usePostRequest } from "../../request/api";
import { db, storage } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  // const { getRequest, data } = useGetRequest();
  // const { postRequest } = usePostRequest();

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState();
  const [perc, setPerc] = useState(null);

  useEffect(() => {
    // getRequest("/all-networks");

    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;

            default:
              return;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setFormData({ ...formData, photo: downloadURL });
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  // const reducer = (state, event) => {
  //   return {
  //     ...state,
  //     [event.name]: event.value,
  //   };
  // };

  // const [state, setState] = useReducer(reducer, {});

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      // setState({
      //   name: e.target.name,
      //   value: e.target.value || file
      // });
    },
    [formData]
  );

  console.log(formData);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!state.title || !state.end_date || !state.start_date) {
  //     console.log("empty fields");
  //   } else {
  //     postRequest("/create-nftart", state);
  //   }
  // };

  console.log(uuidv4());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await addDoc(collection(db, "nftLists"), {
        id: uuidv4(),
        approved: false,
        ...formData,
      });

      console.log(data);
      // onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="list-container">
        <div className="list-box">
          <h1 className="text-4xl">Application Form - NearNFT.io</h1>
          <p className="mt-4">
            We look forward to having your project on NearNFT.io!{" "}
          </p>
          <p className="mt-4">
            Please fill out the form below to get listed on Upcoming NFT Drops.
          </p>
          <p className="mt-3">THIS SERVICE IS TOTALLY FREE - 0$</p>
          <form action="" className="form-list-box">
            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Project Name
              </label>
              <input
                type="text"
                name="title"
                // value={formData.text || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            {/* <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Email
              </label>
              <input type="email" className="list-input" />
            </div> */}

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                // value={formData.twitter || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Discord
              </label>
              <input
                type="text"
                name="discord"
                // value={formData.discord || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Website
                <span>If Available</span>
              </label>

              <input
                type="text"
                name="website"
                // value={formData.website || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                // value={formData.price || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            {/* <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Mint Page
              </label>
              <input type="text" className="list-input" />
            </div> */}

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Mint Date
              </label>
              <input
                type="date"
                name="start_date"
                // value={formData.start_date || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Mint Time
              </label>
              <input
                type="date"
                name="end_date"
                // value={formData.end_date || ''}
                onChange={handleChange}
                className="list-input"
              />
            </div>

            {/* <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Contract Address
              </label>
              <input type="text" className="list-input" />
            </div> */}

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Market Place
              </label>
              <select
                type="text"
                name="network_id"
                // value={formData.network_id || ''}
                onChange={handleChange}
                className="list-input"
              >
                <option>---please select an option---</option>
                <option value="Near">Near</option>
                {/* {data &&
                  data.map((item) => {
                    return <option key={item.id}>{item.name}</option>;
                  })} */}
              </select>
            </div>

            {/* <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Project Details
              </label>
              <input type="text" className="list-input" />
            </div> */}

            <div className="list-input-box">
              <label htmlFor="" className="list-label">
                Project Image
              </label>
              <input
                type="file"
                name="photo"
                onChange={(e) => setFile(e.target.files[0])}
                className="list-input"
                accept="image/*"
              />
            </div>

            <div className="list-input-box">
              <label htmlFor="" className="label">
                Description
              </label>

              <textarea
                rows="8"
                type="text"
                name="description"
                // value={formData.description || ''}
                onChange={handleChange}
                className="list-textarea"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="list-form-btn"
              disabled={perc !== null && perc < 100}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
