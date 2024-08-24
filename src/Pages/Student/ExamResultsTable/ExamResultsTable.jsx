import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamResultsTable.css';

const ExamResultsTable = () => {
  const results = [
    { examName: 'Class Test', subject: 'Mathematics', gradePoint: 4.00, percentFrom: 98.00, percentUpto: 100.00, date: '20/06/2017' },
    { examName: 'Pre Test', subject: 'English', gradePoint: 3.50, percentFrom: 70.00, percentUpto: 100.00, date: '20/06/2017' },
    { examName: 'Class Test', subject: 'Mathematics', gradePoint: 4.00, percentFrom: 98.00, percentUpto: 100.00, date: '20/06/2017' },
    { examName: 'Pre Test', subject: 'English', gradePoint: 3.50, percentFrom: 70.00, percentUpto: 100.00, date: '20/06/2017' },
    { examName: 'Class Test', subject: 'Mathematics', gradePoint: 4.00, percentFrom: 98.00, percentUpto: 100.00, date: '20/06/2017' },
    { examName: 'Pre Test', subject: 'English', gradePoint: 3.50, percentFrom: 70.00, percentUpto: 100.00, date: '20/06/2017' },
    
  ];

  return (
    <div className="exam-results-container">
      <div className="table-responsive">
        <table className="exam-results-table table table-hover table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th colSpan="6" className="exam-results-heading">All Exam Results</th>
            </tr>
            <tr>
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Grade Point</th>
              <th>Percent From</th>
              <th>Percent Upto</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.examName}</td>
                <td>{result.subject}</td>
                <td>{result.gradePoint.toFixed(2)}</td>
                <td>{result.percentFrom.toFixed(2)}</td>
                <td>{result.percentUpto.toFixed(2)}</td>
                <td>{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamResultsTable;
