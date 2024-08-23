import React, { useState } from "react";
import "./Admin.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import FeeCollectionAndExpenses from "./FeeCollectionAndExpenses/FeeCollectionAndExpenses";
import EventCalendar from "./EventCalendar/EventCalendar";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import RecentActivities from "./RecentActivities/RecentActivities";
import { PiStudentFill,  } from "react-icons/pi";
import {
   
    FaChalkboardTeacher,
    
  } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Admin() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container-fluid admin">
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card text-white bg-success ">
            <div className="card-body crdbody">
                <div className="d-flex flex-column ">
                <PiStudentFill className="icons fs-1 ms-4" />
                <h4 className="card-title">Students</h4>
                </div>
                <div class="vl"></div>
              
              <h2 className="ms-5">50,000</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card text-white bg-primary">
            <div className="card-body crdbody">
                <div className="d-flex flex-column">
                <FaChalkboardTeacher className="icons fs-1 ms-4" />
                <h4 className="card-title">Teachers</h4>
                </div>


              <div class="vl"></div>
              <h2>10,000</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card text-white bg-info">
            <div className="card-body crdbody">
              <h4 className="card-title">Parents</h4>
              <h2>15,000</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card text-white bg-warning">
            <div className="card-body crdbody">
              <h4 className="card-title crdtitle">Total Earnings</h4>
              
              <h2> | $30,000</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <FeeCollectionAndExpenses />
        <EventCalendar />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <NoticeBoard />
        </div>
        <div className="col-lg-6">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}

export default Admin;
