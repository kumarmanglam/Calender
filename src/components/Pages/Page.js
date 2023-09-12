import React from "react";
import Calender from "../Calender/Calender";
import "./pageStyle.css";

function Page() {
  //it is single page to show the calender.
  return (
    <div className="page">
      <div>
        <p className="pageTitle">Calender</p>
      </div>
      <Calender />
    </div>
  );
}

export default Page;
