import React from "react";
import "./NoticeBoard.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRegCommentDots,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

function NoticeBoard() {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-gradient-info text-white d-flex justify-content-between">
        <h5 className="mb-0">Notice Board</h5>
        <div>
          <button className="btn btn-link p-0 me-2 text-white">
            <FaCheckCircle />
          </button>
          <button className="btn btn-link p-0 me-2 text-white">
            <FaTimesCircle />
          </button>
        </div>
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          <li
            className="mb-4 p-3 rounded shadow-sm"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <small className="text-muted">16 May, 2017</small>
            <div className="d-flex align-items-center">
              <FaRegCommentDots className="me-2 text-primary" size={20} />
              <p className="mb-0">
                <strong>Jennyfar Lopez</strong>{" "}
                <span className="text-muted">5 min ago</span>
              </p>
            </div>
            <p className="mt-2">
              Great School management system, simply dummy text of the printing.
            </p>
          </li>
          <li
            className="mb-4 p-3 rounded shadow-sm"
            style={{ backgroundColor: "#ffebee" }}
          >
            <small className="text-muted">16 May, 2017</small>
            <div className="d-flex align-items-center">
              <FaHeart className="me-2 text-danger" size={20} />
              <p className="mb-0">
                <strong>Killar Miller</strong>{" "}
                <span className="text-muted">55 min ago</span>
              </p>
            </div>
            <p className="mt-2">
              Great School management system, simply dummy text of the printing.
            </p>
          </li>
          <li
            className="mb-4 p-3 rounded shadow-sm"
            style={{ backgroundColor: "#fff8e1" }}
          >
            <small className="text-muted">16 May, 2017</small>
            <div className="d-flex align-items-center">
              <FaUserCircle className="me-2 text-warning" size={20} />
              <p className="mb-0">
                <strong>Mike Hussey</strong>{" "}
                <span className="text-muted">5 min ago</span>
              </p>
            </div>
            <p className="mt-2">
              Great School management system, simply dummy text of the printing.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoticeBoard;
