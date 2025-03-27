import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="hero_top_container">
        <div>
          {/* For the background blur filter */}
          <div className="absolute w-[70px] h-[600px] rounded-full blur-[180px] bg-orange-300"></div>
          <div className="absolute w-[70px] h-[600px] rounded-full blur-[180px] ml-200 bg-green-300"></div>
          <h1 className="hero_headline">
            All-in-One Care for Your Loved Ones <br /> Health, Reminders &
            Well-being in One
          </h1>
          <p className="hero_subheading">
            "Effortlessly manage your elderly loved one's health with real-time
            statistics,
            <br /> medication reminders, alarms, and essential care features—all
            in one convenient and secure platform."
          </p>

          {/* Buttons */}
          <div className="hero_button_container">
            <button className="hero_button_one">
              View Demo
            </button>
            <button className="hero_button_two border">
              Download Docs
            </button>
          </div>

          <img
            src=""
            alt=""
            className="w-[800px] h-[500px] mt-8 rounded-2xl object-contain ml-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
