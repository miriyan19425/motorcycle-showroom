import {useState} from 'react';

import TestRideForm from "./components/TestRideForm";
import TestRidePreview from "./components/TestRidePreview";

function App() {
   const [testRideData, setTestRideData] = useState({color: "Color", model: "Model", dateTime: "", name: "", email: ""});

   function getTestRideData(d) { setTestRideData(d); }
   
   return (
      <div className="body">
         <h1>Motorcycle Showroom</h1>
         <h4>Reserve a Test Ride</h4>
         <TestRideForm />
         <div className="data-view">
            <div className="preview">
               <ul id="preview-list"></ul>
            </div>
            <div className="complete">
               <ul id="complete-list"></ul>
            </div>
         </div>
      </div>
   );
}

export default App;
