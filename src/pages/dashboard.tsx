import React from "react";
import { A } from "hookrouter";

const Dashboard = () => {
  return (
    <div>
      <A href={"/screenshots"}>Screenshots</A>
      <br />
      <A href={"/surveys"}>Surveys</A>
    </div>
  );
};

export default Dashboard;
