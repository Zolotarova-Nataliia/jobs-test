import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getJobsList } from "./services/jobsApi";
import JobsListView from "./views/JobsListView/JobsListView";

function App() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    getJobsList().then(({ data }) => setJobs(data));
  }, []);
  return <div className="App">{jobs && <JobsListView jobs={jobs} />}</div>;
}

export default App;
