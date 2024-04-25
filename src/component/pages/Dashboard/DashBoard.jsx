import React from 'react'
import './style.css'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import { Heart, HeartCrack, Users,CalendarClock } from 'lucide-react'
import ActiveUserBox from '../../ActiveUserBox/ActiveUserBox'
const DashBoard = () => {
  return (
    <div className='dashboard-container'>
        <div className="dashboard-content">
            <DashboardHeader />
            <div className="dashboard-stats-boxs">
             <div className="dashboard-stats-box">
                <div className="stats-box-logo">
                   <Users  color='#FFB049' size={30}/>
                </div>
                <div className="stats-box-text">
                    <h1>120</h1>
                    <span>Total Users</span>
                </div>
             </div>

             <div className="dashboard-stats-box">
                <div className="stats-box-logo">
                   <CalendarClock   color='#FFB049' size={30}/>
                </div>
                <div className="stats-box-text">
                    <h1>97</h1>
                    <span>Total Interviews</span>
                </div>
             </div>

             <div className="dashboard-stats-box">
                <div className="stats-box-logo">
                   <Heart  color='#FFB049' size={30}/>
                </div>
                <div className="stats-box-text">
                    <h1>63</h1>
                    <span>Total Matches</span>
                </div>
             </div>

             <div className="dashboard-stats-box">
                <div className="stats-box-logo">
                   <HeartCrack  color='#FFB049' size={30}/>
                </div>
                <div className="stats-box-text">
                    <h1>100</h1>
                    <span>Unmatched Users</span>
                </div>
             </div>
            </div>
            <div className="active-user-box">
                <div className="active-user-heading">
                    <span>Active Users</span>
                </div>
                <div className="active-user-header">
                <div className="active-user-header-left">
                 <span>S.No.</span>
                 <span>Users</span>
                </div>
                <div className="active-user-header-right">
                 <span>Gender</span>
                 <span>Date of Birth</span>
                 <span>Height</span>
                 <span>Weight</span>
                 <span>Martial Status</span>
                 <span>Location</span>
                 <span>Action</span>
                </div>
            </div>
            <div className="active-users">
                {
                    Array(7).fill().map((item,index)=>(
                    <ActiveUserBox odd={index % 2 == 0} />
                    ))
                }
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default DashBoard