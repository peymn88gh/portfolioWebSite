import React from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { jobId } = useParams();

  // Fetch job details using the jobId, e.g., from an API

  return (
    <div>
      <h2>Job Details</h2>
      <p>Details for Job</p>
      {/* Display job details */}
    </div>
  );
}

export default JobDetail;
