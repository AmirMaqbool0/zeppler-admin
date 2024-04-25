import React from 'react'
import './style.css'
import UserLogo from '../../assests/userlogo.png'
import { Ellipsis } from 'lucide-react'
const MatchesUserBox = ({odd}) => {
  return (
    <div className={`matches-user-box-container ${odd ? 'odd-background' : 'even-background'}`}>
        <span>001</span>
        <div className="matches-user-box-user">
            <img src={UserLogo} alt="" />
            <span>Amir</span>
        </div>
        <div className="matches-user-box-user">
            <img src={UserLogo} alt="" />
            <span>Amir</span>
        </div>
        <span>Single</span>
        <span>Los Angeles</span>
        <span> <Ellipsis /> </span>
        
    </div>
  )
}

export default MatchesUserBox