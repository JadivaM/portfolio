import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const BottomNav = () => {
    return (
        <div className="bottom-nav-container">
            <ul className="bottom-nav-list-items">
                <li className="bottom-nav-link">
                <WorkIcon fontSize="small" className="bottom-nav-icon" />
                    Projects
                </li>
                <li className="bottom-nav-link">
                <AssignmentIcon fontSize="small" className="bottom-nav-icon" />
                    Resume
                </li>
                <li className="bottom-nav-link">
                <AssignmentIndIcon fontSize="small" className="bottom-nav-icon" />
                    About
                </li>
                <li className="bottom-nav-link">
                <QuestionAnswerIcon fontSize="small" className="bottom-nav-icon" />
                    Contact
                </li>
                <li className="bottom-nav-link">
                <GroupAddIcon fontSize="small" className="bottom-nav-icon" />
                    Connect
                </li>
            </ul>
        </div>
    )
}

export default BottomNav
