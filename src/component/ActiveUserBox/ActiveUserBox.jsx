import React from 'react'
import './style.css'
import UserLogo from '../../assests/userlogo.png'
import { Eye } from 'lucide-react'
const ActiveUserBox = ({odd}) => {
  return (
    <div className={`active-user-box-container  ${odd ? 'odd-background' : 'even-background'}`}>
         <div className="active-user-left">
            <span>001</span>
            <div className="left-user">
                <img src={UserLogo} alt="" />
                <span>Amir</span>
            </div>
         </div>
         <div className="active-user-right">
          <span>Male</span>
          <span>Male</span>
          <span>172 cm</span>
          <span>4 lbs</span>
          <span>Single</span>
          <span>New York</span>
          <span> <Eye /> </span>
         </div>
    </div>
  )
}

export default ActiveUserBox