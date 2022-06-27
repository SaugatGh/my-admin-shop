import React, { useEffect, useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { getUsers, deleteUser } from "../../redux/apiCalls";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log("users", users);
  useEffect(() => {
    getUsers(dispatch);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: " User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
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
      field: "isAdmin",
      headerName: "Admin",
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
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users || []}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
