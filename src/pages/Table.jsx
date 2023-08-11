import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
import axios from "axios";
import ProductTableAdmin from "components/ProductTable/ProductTableAdmin";
import { useAlertContext } from "utils/alertUtils";


function Table() {
  const [sidebarToggle] = useOutletContext();

  const [userTableLoading, setUserTableLoading] = useState(true);
  const [productAdminTableLoading, setProductAdminTableLoading] = useState(true);
  const [productAdminTableContent, setProductAdminTableContent] = useState([]);
  const {showAlert} = useAlertContext();
  const userDataHeader = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "username",
      label: "Username",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "action",
      label: "Aksi",
    },
  ];

  const productAdminDataHeader = [
    {
      key: "productName",
      label: "productName",
    },
    {
      key: "productDescription",
      label: "product description",
    },
    {
      key: "categoryId",
      label: "category id",
    },
    {
      key: "userId",
      label: "user id",
    },
    {
      key: "keySearch",
      label: "key search",
    },
    {
      key: "productStatus",
      label: "product status",
    },
    {
      key: "id",
      label: "id",
    },
    {
      key: "status",
      label: "status",
    },
    {
      key: "action",
      label: "Aksi",
    },
  ];

  async function handleDelete (param){
    try{
      const deleteResponse = await axios.delete(`${process.env.REACT_APP_BASE_URL}/ProductAsync/${param}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if(deleteResponse.statusText==='OK') {
        setProductAdminTableLoading(true);
      }
    }
    catch(err){
      showAlert('failed', `${err.message}`)
    }
   
  };
  
  const userData = [
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "indahsdev01",
      roles: [{ name: "Admin" }, { name: "Writer" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "maheeend01",
      roles: [{ name: "Editor" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "uujang44",
      roles: [{ name: "Writer" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "indahsdev01",
      roles: [{ name: "Admin" }, { name: "Writer" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "maheeend01",
      roles: [{ name: "Editor" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "uujang44",
      roles: [{ name: "Writer" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
  ];
  useEffect(()=>{
    if(productAdminTableLoading){
      setProductAdminTableLoading(true);
      axios.get('https://digitara.azurewebsites.net/api/ProductAsync/Get', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res=>{
        setProductAdminTableContent(res.data)
      }).catch((err)=>console.log(err.message)).finally(()=>setProductAdminTableLoading(false))
    }
  },[productAdminTableLoading])
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          <h1 className="mb-8">Administrative User Table</h1>
            <UserTable
              loading={userTableLoading}
              dataHeader={userDataHeader}
              data={userData}
              handleDelete={handleDelete}
            />
          </div>

          <div className="border w-full border-gray-200 bg-white py-4 px-6 mt-6 rounded-md">
            <h1 className="mb-8">Administrative Product Table</h1>
            <ProductTableAdmin
              loading={productAdminTableLoading}
              dataHeader={productAdminDataHeader}
              data={productAdminTableContent}
              handleDelete={handleDelete}
            />
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Table;
