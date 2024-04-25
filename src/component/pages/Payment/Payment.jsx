import React, { useState } from 'react';
import './style.css';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import PaymentUserBox from '../../PaymentUser-box/PaymentUserBox';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Payment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [show,setShow] = useState(false)
  const usersPerPage = 7; // Number of users per page

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPaymentUsers = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = Math.min(startIndex + usersPerPage, 12); // Assuming there are 100 users

    return Array.from({ length: endIndex - startIndex }, (_, index) => (
      <PaymentUserBox key={startIndex + index} odd={index % 2 === 0} />
    ));
  };

  return (
    <div className='payment-container'>
      <DashboardHeader />
      <div className="payment-top">
        <span>Payment</span>
        <button onClick={() =>setShow(!show)}>Change Fees</button>
      </div>
      <div className="payment-box">
        <div className="payment-box-header">
          <span>S.No.</span>
          <span style={{ width: '150px' }}>Users</span>
          <span style={{ width: '150px' }}>Email</span>
          <span>Fee</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        <div className="payment-users-boxs">{renderPaymentUsers()}</div>
      </div>
      <div className="users-pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}> <ChevronLeft/> </button>
        <button className={currentPage === 1 ? "active" : ""} onClick={() => goToPage(1)}>1</button>
        <button className={currentPage === 2 ? "active" : ""} onClick={() => goToPage(2)}>2</button>
        <button onClick={handleNextPage} disabled={currentPage === 100 / usersPerPage}> <ChevronRight /> </button>
      </div>
      {
        show ? (
            <div className="fee-popup">
            <div className="fee-popup-card">
                <div className="popup-card-heading">
                    <span>Change Fees</span>
                </div>
                <input type="number" placeholder='Enter Amount' />
                <button>Update</button>
                <div className="cut-btn" onClick={() => setShow(!show)}>
                    <X />
                </div>
            </div>
          </div>
        ):(null)
      }
      
    </div>
  );
}

export default Payment;
