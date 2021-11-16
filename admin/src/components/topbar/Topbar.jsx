import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';

function Topbar() {
    return (
        <div className="topbar" >
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Ap.</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <Avatar alt="Ap" sx={{ width: 40, height: 40 }} className="topAvatar" src="/static/images/avatar/1.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
