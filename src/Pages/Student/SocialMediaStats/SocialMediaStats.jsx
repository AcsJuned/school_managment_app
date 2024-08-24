import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialMediaStats.css";

const SocialMediaStats = () => {
  const socialStats = [
    {
      platform: "Facebook",
      color: "bg-primary",
      icon: "bi-facebook",
      followers: "30,000",
    },
    {
      platform: "Twitter",
      color: "bg-info",
      icon: "bi-twitter",
      followers: "13,000",
    },
    {
      platform: "Google Plus",
      color: "bg-danger",
      icon: "bi-google",
      followers: "9,000",
    },
    {
      platform: "LinkedIn",
      color: "bg-secondary",
      icon: "bi-linkedin",
      followers: "18,000",
    },
  ];

  return (
    <div className="social-media-stats">
      <div className="row">
        {/* First Row - Facebook and Twitter */}
        {socialStats.slice(0, 2).map((stat, index) => (
          <div className="col-md-6" key={index}>
            <div className={`card text-white ${stat.color} mb-3`}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <i className={`bi ${stat.icon} fa-2x`}></i>
                  <p className="card-text">My Followers on {stat.platform}</p>
                </div>
                <h3>{stat.followers}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {/* Second Row - Google Plus and LinkedIn */}
        {socialStats.slice(2, 4).map((stat, index) => (
          <div className="col-md-6" key={index}>
            <div className={`card text-white ${stat.color} mb-3`}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <i className={`bi ${stat.icon} fa-2x`}></i>
                  <p className="card-text">My Followers on {stat.platform}</p>
                </div>
                <h3>{stat.followers}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaStats;
