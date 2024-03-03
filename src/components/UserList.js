import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/moptro.png";
import UserLogo from "../Assets/User.png";
import "./UserList.css";
import { FaHome, FaUsers } from "react-icons/fa";

const UserList = () => {
  const navigate = useNavigate();
  const notificationCount = 4;
  const userList = [
    { id: 1, name: "Arjun", dob: "16-11-2000", role: "software engineer" },
    { id: 2, name: "Mahesh", dob: "15-01-2000", role: "Web developer" },
    // { id: 3, name: 'Aniket', dob: '15-01-2000', role: 'Web Designer' },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const redirectToUserList = () => {
    navigate("/user-list");
  };
  const redirectToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="user-list-container">
      <div className="user-header">
        <img src={logo} alt="logo"></img>

        <div className="notification-badge">{notificationCount}</div>
      </div>
      <div className="logo-container" onClick={redirectToUserList}>
        <img src={UserLogo} alt="user-logo" />
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
      <div className="user-cards-container">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <p>Employment ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>
              DOB: <span className="user-dob-value">{user.dob}</span>
            </p>
            <p>
              Role: <span className="user-role-value">{user.role}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="bottom-navigation">
        <FaHome onClick={redirectToDashboard} size={25} />
        <FaUsers onClick={redirectToUserList} size={25} />
      </div>
    </div>
  );
};

export default UserList;
