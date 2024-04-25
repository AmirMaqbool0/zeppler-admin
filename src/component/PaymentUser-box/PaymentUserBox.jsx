import React from 'react'
import './style.css'
import UserLogo from '../../assests/userlogo.png'
import { Ellipsis } from 'lucide-react'
const PaymentUserBox = ({odd}) => {
  return (
    <div className={`payment-user-box-container ${odd ? 'odd-background' : 'even-background'}`}>
        <span>001</span>
        <div className="payment-user" style={{width:'150px'}}>
            <img src={UserLogo} alt="" />
            <span>Ehtisham</span>
        </div>
        <span style={{width:'150px'}}>MarilynLevin@example.com</span>
        <span>$99.00</span>
        <span>Paid</span>
        <span><Ellipsis/></span>
    </div>
  )
}

export default PaymentUserBox