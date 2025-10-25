import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { deleteDataAPI, getDataAPI, getSingleDataAPI, updateDataAPI } from '../Service/allAPI';
import { useState } from 'react';
import Swal from 'sweetalert2';



function Menu() {
const [menuData,setMenuData]=useState("")
const [showEditForm, setShowEditForm] = useState(false);

const [EditMenuData, setEditMenuData] = useState({
  
    menu: {
      dish: "",
      category: "",
      availability: "",
      imageUrl: ""
    }
  });
 const fetchData = async()=>{
    const result = await getDataAPI()
    if(result.status === 200){
      setMenuData(result.data)    
       
    }else{
      console.log("error Fetching Data",result)
    }
  }

useEffect(()=>{
 
  fetchData()
},[])

const editData = async(id)=>{
    const result = await getSingleDataAPI(id)
    if(result.status===200){
      setEditMenuData(result.data)
      setShowEditForm(true)    
    }else{
      console.log("error");
    }  

}
const updateData = async()=>{
  const result= await updateDataAPI(EditMenuData.id,EditMenuData)
  if(result.status===200){
    Swal.fire({
  title: "Data Updated Succcessfully",
  icon: "success",
  draggable: true
});
    fetchData()
    setEditMenuData({
      id:"",
      menu:{dish:"",category:"",availability:"",imageUrl:""},
    })
  setShowEditForm(false)
    }else{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Data updaton failed",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    }
    
  }

  const deleteData = async(id)=>{
   const result = await deleteDataAPI(id)
  if(result.status===200){
     Swal.fire({
      title: "Deleted Successfully",
      icon: "success"
    });
    fetchData()
  }else{
    Swal.fire({
      title: "Deletion Failed",
      icon: "error"
    });
  }
    
  }

 return (
  <>
    <div
   

      className="container-fluid"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/13800738/pexels-photo-13800738.jpeg')",
        width: "100%",
        overflowX: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <h1 className="text-center text-light m-5 p-5">MENU DETAILS</h1>

   
      {showEditForm && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-light p-4 rounded shadow "
          style={{
            zIndex: 1050,
            width: "400px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            
            
          }}
        >
          <h4 className="text-center mb-3">Edit Menu Item</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Dish</label>
              <input
                type="text"
                className="form-control"
                value={EditMenuData.menu.dish}
                onChange={(e) =>
                  setEditMenuData({
                    ...EditMenuData,
                    menu: { ...EditMenuData.menu, dish: e.target.value },
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={EditMenuData.menu.category}
                onChange={(e) =>
                  setEditMenuData({
                    ...EditMenuData,
                    menu: { ...EditMenuData.menu, category: e.target.value },
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Availability</label>
              <input
                type="text"
                className="form-control"
                value={EditMenuData.menu.availability}
                onChange={(e) =>
                  setEditMenuData({
                    ...EditMenuData,
                    menu: { ...EditMenuData.menu, availability: e.target.value },
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={EditMenuData.menu.imageUrl}
                onChange={(e) =>
                  setEditMenuData({
                    ...EditMenuData,
                    menu: { ...EditMenuData.menu, imageUrl: e.target.value },
                  })
                }
              />
            </div>

            <button
              type="button"
              className="btn btn-success w-100 mt-2"
              onClick={updateData}
              
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary w-100 mt-2"
              onClick={() => setShowEditForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

     
      <div className="row justify-content-center gap-4">
        {Array.isArray(menuData) &&
          menuData.map((item, index) => (
            <div key={index} className="col-md-3">
              <Card sx={{ maxWidth: 350, boxShadow: 5, borderRadius: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="280"
                    image={item.menu.imageUrl}
                    alt={item.menu.dish}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.menu.dish}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category: {item.menu.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Availability: {item.menu.availability}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <button
                  type="button"
                  onClick={() => editData(item.id)}
                  className="btn btn-outline-warning ms-3 px-4 mt-3 mb-3"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger px-4 mt-3 mb-3 ms-5"
                  onClick={()=>deleteData(item.id)}
                >
                  Delete
                </button>
              </Card>
            </div>
          ))}
      </div>
    </div>
  </>
);

}

export default Menu
