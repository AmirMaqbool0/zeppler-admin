import React, { useState } from 'react';
import './style.css';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import MatchesUserBox from '../../MatchesUserBox/MatchesUserBox';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Matches = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const renderMatchesUserBoxes = () => {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = Math.min(startIndex + 8, 20);

    return Array.from({ length: endIndex - startIndex }, (_, index) => (
      <MatchesUserBox key={index} odd={index % 2 === 0} />
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='matches-container'>
      <DashboardHeader />
      <div className="matches-top">
        <span>Matches</span>
        <div className="matches-top-btn">
          <span 
            className={filter === 'All' ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
          >
            All
          </span>
          <span 
            className={filter === 'Approved' ? 'active' : ''}
            onClick={() => handleFilterChange('Approved')}
          >
            Approved
          </span>
        </div>
      </div>
      <div className="matches-users-box">
         <div className="matches-users-box-header">
            <span>S.No.</span>
            <span>User 1</span>
            <span>User 2</span>
            <span>Martial Status</span>
            <span>Location</span>
            <span>Action</span>
         </div>
         <div className="matches-users">
            {renderMatchesUserBoxes()}
         </div>
         <div className="pagination">
           <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> <ChevronLeft/> </button>
           <button className={currentPage === 1 ? 'active' : ''} onClick={() => handlePageChange(1)}>1</button>
           <button className={currentPage === 2 ? 'active' : ''} onClick={() => handlePageChange(2)}>2</button>
           <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 10}> <ChevronRight /> </button>
         </div>
      </div>
    </div>
  );
}

export default Matches;
