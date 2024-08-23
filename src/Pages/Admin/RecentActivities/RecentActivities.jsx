import React from 'react';
import "./RecentActivities.css";
import { FaEllipsisH, FaUserCircle, FaTrashAlt } from 'react-icons/fa';

function RecentActivities() {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header bg-gradient-warning text-white d-flex justify-content-between">
                <h5 className="mb-0">Recent Activities</h5>
                <div>
                    <button className="btn btn-link p-0 me-2 text-white"><FaEllipsisH /></button>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-unstyled">
                    <li className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#e8f5e9' }}>
                        <small className="text-muted">9 minutes ago</small>
                        <div className="d-flex align-items-center">
                            <FaUserCircle className="me-2 text-success" size={20} />
                            <p className="mb-0"><strong>Olivia Williamson</strong> <span className="text-muted">You followed</span></p>
                        </div>
                    </li>
                    <li className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#ffe0b2' }}>
                        <small className="text-muted">20 minutes ago</small>
                        <div className="d-flex align-items-center">
                            <FaUserCircle className="me-2 text-primary" size={20} />
                            <p className="mb-0"><strong>Harold Fuller</strong> <span className="text-muted">You Subscribed to</span></p>
                        </div>
                    </li>
                    <li className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#f3e5f5' }}>
                        <small className="text-muted">30 minutes ago</small>
                        <div className="d-flex align-items-center">
                            <FaUserCircle className="me-2 text-info" size={20} />
                            <p className="mb-0"><strong>You</strong> <span className="text-muted">updated your profile picture</span></p>
                        </div>
                    </li>
                    <li className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#ffcdd2' }}>
                        <small className="text-muted">40 minutes ago</small>
                        <div className="d-flex align-items-center">
                            <FaTrashAlt className="me-2 text-danger" size={20} />
                            <p className="mb-0"><strong>Barry Allen</strong> <span className="text-muted">deleted a comment</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RecentActivities;
