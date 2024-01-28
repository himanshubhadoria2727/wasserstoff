import { memo } from "react";
import "./NavigationBar.css";

const NavigationBar = memo(() => {
  return (
    <header className="navigation-bar">
      <div className="background2" />
      <img
        className="wstf-logo-1-icon"
        loading="eager"
        alt=""
        src="/wstflogo-1.svg"
      />
      <div className="name-wrapper">
        <div className="name1"><a href="/">WASSERSTOFF</a></div>
      </div>
      <div className="search-wrapper">
        <div class="input-group">
          <input type="text" class="form-control" placeholder=" Search" />
        </div>
      </div>
      <div className="label-wrapper">
        <div className="label" id="under">
          <a href="/charts.js">Statistics</a>
        </div>

        <div className="label1" id="under"><a href="/overview">Overview</a></div>

        <div className="label2" id="under"><a href="/dashboard">Dashboard</a></div>
        <div className="label3" id="under"><a href="/analytics">Analytics</a></div>
      </div>
      <div className="end-nav">      
      <div className="profile-wrapper">
        <a>
        <img
          className="profile-icon"
          loading="eager"
          alt=""
          src="/profile.svg"
        />
        </a>
      </div>
      <div className="option-wrapper">
        <a href="option"><img className="option-icon" loading="eager" alt="" src="/option.svg" /></a>
      </div>
      </div>
    </header>
  );
});

export default NavigationBar;
