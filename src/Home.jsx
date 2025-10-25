import React, { useState } from 'react';
import { addDataAPI } from '../Service/allAPI';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import './index.css'; 

function Home() {
  const [userInput, setUserInput] = useState({
    menu: {
      dish: "",
      category: "",
      availability: "",
      imageUrl: ""
    }
  });

  const addData = async () => {
    const { dish, category, availability, imageUrl } = userInput.menu;
    if (dish && category && availability && imageUrl) {
      const result = await addDataAPI(userInput);
      console.log(result);
      Swal.fire({
        title: "Dish added Successfully",
        icon: "success",
        draggable: true
      });
      setUserInput({
        menu: {
      dish: "",
      category: "",
      availability: "",
      imageUrl: ""
    }

      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!..",
        text: "MENU Adding Failed",
      });
    }
  };

  return (
    <>
      <div
        className="container-fluid smoothscroll home-section"
        style={{
          width: "100%",
          overflowX: "hidden",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1440492248262-6895f9da82fc?ixlib=rb-4.1.0&auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-center text-dark mt-5 shadow-lg p-4 display-5 fw-bold">
            FAST FOOD RESTAURANT</h1>

        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-5 glass-box p-4 rounded-4 shadow-lg">
            <TextField
              type="text"
              label="Enter Dish"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  menu: { ...userInput.menu, dish: e.target.value },
                })
              }
              value={userInput.menu.dish}
              className="mb-4"
            />

            <TextField
              type="text"
              label="Enter Category"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  menu: { ...userInput.menu, category: e.target.value },
                })
              }
              value={userInput.menu.category}
              className="mb-4"
            />

            <TextField
              type="text"
              label="Enter Availability"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  menu: { ...userInput.menu, availability: e.target.value },
                })
              }
              value={userInput.menu.availability}
              className="mb-4"
            />

            <TextField
              type="text"
              label="Enter Image URL"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  menu: { ...userInput.menu, imageUrl: e.target.value },
                })
              }
              value={userInput.menu.imageUrl}
              className="mb-4"
            />
            
            <div className="d-flex justify-content-center gap-4 mt-4">
              <button
                type="button"
                onClick={addData}
                className="custom-btn add-btn shadow"
              >
                ADD
              </button>

              <Link to="/menu">
                <button type="button" className="custom-btn menu-btn shadow">
                  MENU
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
