import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentCard.css";
import StudentLogo from "../../../../src/assets/studentLogo.png";

const StudentCard = () => {
  return (
    <div className="student-info-container container ">
      <div className="card stdncard">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-white">My Information</h5>
          <div>
            <i className="bi bi-arrow-repeat mx-2 text-success"></i>
            <i className="bi bi-pencil-square mx-2 text-warning"></i>
            <i className="bi bi-x-circle mx-2 text-danger"></i>
          </div>
        </div>
        <div className="card-body">
          <div className="row d-flex flex-column stdnbody">
            <div className="col-md-3 crdimgbody">
              <img
                src={StudentLogo}
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
              />
            </div>
            <div className="d-flex justify-content-between w-50">
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-camera"></i>
              <i className="bi bi-cloud-arrow-down"></i>
              <i className="bi bi-trash"></i>
            </div>
            <div className="col-md-9">
              <ul className="list-group list-group-flush ms-5">
                <li className="list-group-item ">
                  <strong>Name:</strong> Richi Hassan
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> Female
                </li>
                <li className="list-group-item">
                  <strong>Father Name:</strong> Kazi Fahimur Rahman
                </li>
                <li className="list-group-item">
                  <strong>Mother Name:</strong> Richi Akon
                </li>
                <li className="list-group-item">
                  <strong>Date Of Birth:</strong> 03/04/2010
                </li>
                <li className="list-group-item">
                  <strong>Religion:</strong> Islam
                </li>
                <li className="list-group-item">
                  <strong>Father Occupation:</strong> Businessman
                </li>
                <li className="list-group-item">
                  <strong>E-mail:</strong> richihassan@gmail.com
                </li>
                <li className="list-group-item">
                  <strong>Admission Date:</strong> 05/04/2016
                </li>
                <li className="list-group-item">
                  <strong>Class:</strong> 2
                </li>
                <li className="list-group-item">
                  <strong>Section:</strong> A
                </li>
                <li className="list-group-item">
                  <strong>Roll:</strong> 2901
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> Ta-107 Sydney, Australia
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> +88 255600
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
