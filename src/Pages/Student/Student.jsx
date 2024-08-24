import React from "react";
import "./Student.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import StudentCard from "../Student/StudentCard/StudentCard";
import ExamResultsTable from "../Student/ExamResultsTable/ExamResultsTable";
import NoticeBoard from "../Admin/NoticeBoard/NoticeBoard";
import SocialMediaStats from "../Student/SocialMediaStats/SocialMediaStats";

const Student = () => {
  const cardData = [
    {
      color: "bg-success",
      icon: "bi-pencil-square",
      text: "Upcoming Exam",
      value: "05",
    },
    {
      color: "bg-danger",
      icon: "bi-cash-coin",
      text: "Due Fees",
      value: "$1,500",
    },
    {
      color: "bg-primary",
      icon: "bi-flag",
      text: "Events",
      value: "10",
    },
    {
      color: "bg-warning",
      icon: "bi-folder2",
      text: "Documents",
      value: "02",
    },
  ];

  return (
    <div className="container my-4 student-page">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className={`card text-white ${card.color} mb-3`}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <i className={`bi ${card.icon} fa-2x ms-2`}></i>
                  <p className="card-text fs-5">{card.text}</p>
                  
                </div>
                <div className="vl ms-4"></div>
                <h3>{card.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-6">
          <StudentCard />
        </div>
        <div className="col-md-6">
          <NoticeBoard />
          <SocialMediaStats />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ExamResultsTable />
        </div>
      </div>
    </div>
  );
};

export default Student;
