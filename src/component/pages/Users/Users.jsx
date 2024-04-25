import React, { useState } from "react";
import "./style.css";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import ActiveUserBox from "../../ActiveUserBox/ActiveUserBox";
import {NavLink} from 'react-router-dom'
const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderUsers = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = Math.min(startIndex + usersPerPage, 10);

    return Array.from({ length: endIndex - startIndex }, (_, index) => (
    <NavLink to={'/users/:id'} style={{textDecoration:'none'}}> <div>
      <ActiveUserBox key={startIndex + index} odd={index % 2 === 0} />
      </div> </NavLink>
    ));
  };

  return (
    <div className="users-container">
      <DashboardHeader />
      <div className="users-top">
        <span>Users</span>
        <div className="users-top-search">
          <input type="text" placeholder="Search..." />
          <Search size={16} />
        </div>
      </div>
      <div className="users-box">
        <div className="users-user-header">
          <div className="users-user-header-left">
            <span>S.No.</span>
            <span>Users</span>
          </div>
          <div className="users-user-header-right">
            <span>Gender</span>
            <span>Date of Birth</span>
            <span>Height</span>
            <span>Weight</span>
            <span>Martial Status</span>
            <span>Location</span>
            <span>Action</span>
          </div>
        </div>
        <div className="users-user-boxs">{renderUsers()}</div>
      </div>
      <div className="users-pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}><ChevronLeft /></button>
        <button className={currentPage === 1 ? "active" : ""} onClick={() => goToPage(1)}>1</button>
        <button className={currentPage === 2 ? "active" : ""} onClick={() => goToPage(2)}>2</button>
        <button onClick={handleNextPage} disabled={currentPage === 2 / usersPerPage}><ChevronRight /></button>
      </div>
    </div>
  );
};
export default Users;
