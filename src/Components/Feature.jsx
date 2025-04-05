import React from "react";
import MedReminder from "../assets/icons/features/medreminder.svg";
import ActivityTracking from "../assets/icons/features/activitytracking.svg";
import CaretakerChat from "../assets/icons/features/caretakerchat.svg";
import DoctorReminder from "../assets/icons/features/doctorreminder.svg";
import Glucoselevel from "../assets/icons/features/glucoselevel.svg";
import Heartrate from "../assets/icons/features/heartrate.svg";
import PatientLocation from "../assets/icons/features/patientlocation.svg";
import BodyTemp from "../assets/icons/features/bodytemp.svg";
import RespiratoryRate from "../assets/icons/features/respiratoryrate.svg";
import BloodOxygen from "../assets/icons/features/bloodoxygen.svg";
import BloodPressure from "../assets/icons/features/bloodpressure.svg";
import Weight from "../assets/icons/features/weight.svg";
import StressLevel from "../assets/icons/features/stresslevel.svg";
import SleepTracker from "../assets/icons/features/sleeptracker.svg";

function Feature() {
  return (
    <>
      <div className="features_main_container">
        {/* Feature Title */}
        <div className="features_title">
          <h1>Applicaiton Features</h1>
        </div>
        {/* Feature Icons */}
        <div className="features_icon">
          <div className="feature_icon_container">
            <img src={MedReminder} alt="" />
            <p className="feature_name">Meds Reminder</p>
          </div>
          <div className="feature_icon_container">
            <img src={ActivityTracking} alt="" />
            <p className="feature_name">Activity Tracking</p>
          </div>
          <div className="feature_icon_container">
            <img src={CaretakerChat} alt="" />
            <p className="feature_name">Caretaker Chat</p>
          </div>
          <div className="feature_icon_container">
            <img src={DoctorReminder} alt="" />
            <p className="feature_name">Doctor Reminder</p>
          </div>
          <div className="feature_icon_container">
            <img src={Glucoselevel} alt="" />
            <p className="feature_name">Glucose Level</p>
          </div>
          <div className="feature_icon_container">
            <img src={Heartrate} alt="" />
            <p className="feature_name">Heart Rate</p>
          </div>
          <div className="feature_icon_container">
            <img src={PatientLocation} alt="" />
            <p className="feature_name">Patient Location</p>
          </div>
          <div className="feature_icon_container">
            <img src={BodyTemp} alt="" />
            <p className="feature_name">Body Temp</p>
          </div>
          <div className="feature_icon_container">
            <img src={RespiratoryRate} alt="" />
            <p className="feature_name">Respiratory Rate</p>
          </div>
          <div className="feature_icon_container">
            <img src={BloodOxygen} alt="" />
            <p className="feature_name">Blood Oxygen</p>
          </div>
          <div className="feature_icon_container">
            <img src={BloodPressure} alt="" />
            <p className="feature_name">Blood Pressure</p>
          </div>
          <div className="feature_icon_container">
            <img src={Weight} alt="" />
            <p className="feature_name">Weight</p>
          </div>
          <div className="feature_icon_container">
            <img src={StressLevel} alt="" />
            <p className="feature_name">Stress Level</p>
          </div>
          <div className="feature_icon_container">
            <img src={SleepTracker} alt="" />
            <p className="feature_name">Sleep Tracker</p>
          </div>
          <div className="feature_icon_container"></div>
          <div className="feature_icon_container"></div>
        </div>
        <div className="feature_desc">
          <p>
            <span className="feature_desc_strong">
              Imagine all your loved ones real time health status at your
              disposal.,
            </span>
            <br />
            No need to worry about missing any appointments and medication.{" "}
            <br />
            Its all at one place at the simplest form you can imagine. <br />{" "}
            <br />
            Each feature with its own unique resources from to present and the
            past. <br />
            Imagine the impact on your life when you get the right tool to know{" "}
            <br />
            everything about your loved once.
          </p>
        </div>
      </div>
    </>
  );
}

export default Feature;
