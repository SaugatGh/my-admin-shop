import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
const UserList = () => {
const [data,setData]=useState(userRows)

const handleDelte=(id)=>{
    setData(data.filter(item=>item.id !== id ))
}
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: " User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "status",

      width: 90,
    },
    {
      field: "transactions",
      headerName: "Transactions volume",
      description: "This column has a value getter and is not sortable.",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete"  onClick={()=>handleDelte(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid 
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;