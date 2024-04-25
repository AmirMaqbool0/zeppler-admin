import React from 'react'
import './style.css'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import { Lock } from 'lucide-react'
const Settings = () => {
  return (
    <div className='settings-container'>
        <DashboardHeader />
        <div className="settings-content">
            <div className="setting-content-heading">
                <span>Settings</span>
            </div>
            <div className="settings-password-box">
                <div className="settings-passwords-text">
                    <span>Change Password</span>
                </div>
                <div className="settings-password-inputs">
                    <div className="settings-password-input">
                        <Lock size={18}/>
                        <input type="password" placeholder='Current Password' />
                    </div>
                </div>
                <div className="settings-password-inputs">
                    <div className="settings-password-input">
                        <Lock size={18}/>
                        <input type="password" placeholder='New Password' />
                    </div>
                </div>
                <div className="settings-password-inputs">
                    <div className="settings-password-input">
                        <Lock size={18}/>
                        <input type="password" placeholder='Confirm New Password' />
                    </div>
                    <div className="settings-btn">
                    <button>Update Password</button>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Settings