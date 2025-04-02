import React from 'react';
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
    <div className='features_main_container'>
        <div className='features_title'>
          <h1>Feature</h1>
          <img src={MedReminder} alt="" />
        </div>
        <div>
          <div className="feature_container">
            <img src={ActivityTracking} alt="" />
          </div>
          <div className="feature_container">
            <img src={CaretakerChat} alt="" />
          </div>
          <div className="feature_container">
            <img src={DoctorReminder} alt="" />
          </div>
          <div className="feature_container">
            <img src={Glucoselevel} alt="" />
          </div>
          <div className="feature_container">
            <img src={Heartrate} alt="" />
          </div>
          <div className="feature_container">
            <img src={PatientLocation} alt="" />
          </div>
          <div className="feature_container">
            <img src={BodyTemp} alt="" />
          </div>
          <div className="feature_container">
            <img src={RespiratoryRate} alt="" />
          </div>
          <div className="feature_container">
            <img src={BloodOxygen} alt="" />
          </div>
          <div className="feature_container">
            <img src={BloodPressure} alt="" />
          </div>
          <div className="feature_container">
            <img src={Weight} alt="" />
          </div>
          <div className="feature_container">
            <img src={StressLevel} alt="" />
          </div>
          <div className="feature_container">
            <img src={SleepTracker} alt="" />
          </div>
          <div className="feature_container">

          </div>
          <div className="feature_container">

          </div>
        </div>
    </div>
    </>
  )
}

export default Feature