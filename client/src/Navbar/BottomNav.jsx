import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="bottom-nav-container">
            <ul className="bottom-nav-list-items">
            <Link to="/projects" style={{color: '#fff', textDecoration: 'none'}}>
                <li className="bottom-nav-link">
                <WorkIcon fontSize="small" className="bottom-nav-icon" />
                    Projects       
                </li>
                </Link>
                <Link to="/about" style={{color: '#fff', textDecoration: 'none'}}>
                <li className="bottom-nav-link">
                <AssignmentIndIcon fontSize="small" className="bottom-nav-icon" />
                    About
                </li>
                </Link>
                {/* <li className="bottom-nav-link connect-dropdown-nav">
                <GroupAddIcon fontSize="small" className="bottom-nav-icon" />
                    Connect
                <ArrowDropDownIcon fontSize="small" className="bottom-nav-icon"/>
                </li> */}
            </ul>
        </div>
    )
}

export default BottomNav
