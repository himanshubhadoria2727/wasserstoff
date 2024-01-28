import NavigationBar from "../components/NavigationBar";
import InformerInfoWithIcon from "../components/InformerInfoWithIcon";
import HexMapIcon from "../components/HexMapIcon";
import MapPinPinWithName from "../components/MapPinPinWithName";
import WidgetLSizeTimelineCha from "../components/WidgetLSizeTimelineCha";
import "./WorldHexagonMap.css";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Lund } from "../charts";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const WorldHexagonMap = () => {
  return (
  <>
    <div className="world-hexagon-map">
      <NavigationBar />
      <main className="wstf-front-end-hackathon-parent">
        <div className="wstf-front-end-hackathon">WSTF FRONT-END HACKATHON</div>
        <section className="frame-parent">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="widget-m-size-big-circle-c-parent">
                <div className="widget-m-size-big-circle-c">
                  <div className="background-parent">
                    {/* <div className="background" /> */}
                    <div className="percent-parent">
                      <div className="percent">
                        
                        <span className="span">67</span>
                      </div>
                      <div className="progress" />
                    </div>
                    </div>
                  <div className="amount-parent">
                    <div className="amount">22,652</div>
                    <div className="detail">New users</div>
                  </div>
                </div>
                <div className="frame-container">
                  <div className="frame-div">
                    <div className="name-parent">
                      <div className="name">All users</div>
                      <div className="detail-parent">
                        <b className="detail1">Detail</b>
                        <img
                          className="arow-icon"
                          loading="eager"
                          alt=""
                          src="/arow.svg"
                        />
                      </div>
                    </div>
                    <div className="amount1">2,431,340</div>
                  </div>
                  <div className="side-indicators">
                    <InformerInfoWithIcon
                      iconImageUrl="/icon-1.svg"
                      dataLabel="Total earning"
                      earningValue="540,549"
                      iconLabel="pending_I637:18762;636:18580"
                    />
                    <InformerInfoWithIcon
                      iconImageUrl="/icon-2.svg"
                      dataLabel="Sales"
                      earningValue="1,205,677"
                      iconLabel="pending_I637:18790;636:18580"
                    />
                    <InformerInfoWithIcon
                      iconImageUrl="/icon-3.svg"
                      dataLabel="Purchase"
                      earningValue="48,430,039"
                      iconLabel="pending_I637:18813;636:18580"
                    />
                  </div>
                  <div className="widget-m-size-big-circle-c1">
                    <div className="percent-group">
                      <div className="percent1">
                        <span className="span1">27</span>%
                      </div>
                      <div className="background-group">
                        <div className="background1" />
                        <div className="progress1" />
                      </div>
                    </div>
                    <div className="amount-group">
                      <div className="amount2">92,980</div>
                      <div className="detail2">Active users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="wrapper-hex-map-parent">
                <div className="wrapper-hex-map">
                  <HexMapIcon />
                </div>
                <div className="frame-parent2">
                  <div className="map-pin-pin-with-name-wrapper">
                    <div className="map-pin-pin-with-name">
                      <div className="tooltip">
                        <img
                          className="indicator-icon"
                          alt=""
                          src="/indicator.svg"
                        />
                        <div className="title-parent">
                          <div className="title">Berlin</div>
                          <input
                            className="amount3"
                            placeholder="76,541,106"
                            type="text"
                          />
                        </div>
                        <img className="arrow-icon" alt="" src="/arrow.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="map-pin-pin-with-name-parent">
                    <MapPinPinWithName
                      indicatorText="/indicator-1.svg"
                      locationName="Chicago"
                      numberValue="98,320,300"
                    />
                    <div className="frame-wrapper1">
                      <div className="frame-parent3">
                        <div className="map-pin-pin-with-name-container">
                          <div className="map-pin-pin-with-name1">
                            <div className="tooltip1">
                              <img
                                className="indicator-icon1"
                                alt=""
                                src="/indicator-2.svg"
                              />
                              <div className="title-group">
                                <div className="title1">Giza</div>
                                <input
                                  className="amount4"
                                  placeholder="10,547,980"
                                  type="text"
                                />
                              </div>
                            </div>
                            <img
                              className="arrow-icon1"
                              alt=""
                              src="/arrow.svg"
                            />
                          </div>
                        </div>
                        <MapPinPinWithName
                          indicatorText="/indicator-3.svg"
                          locationName="Shanghai"
                          numberValue="239,570,110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-pin-pin-with-name-frame">
                  <div className="map-pin-pin-with-name2">
                    <div className="tooltip2">
                      <img
                        className="indicator-icon2"
                        alt=""
                        src="/indicator-4.svg"
                      />
                      <div className="title-container">
                        <div className="title2">Manaus</div>
                        <input
                          className="amount5"
                          placeholder="12,320,300"
                          type="text"
                        />
                      </div>
                      <img className="arrow-icon2" alt="" src="/arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-pin-pin-with-name3">
                <div className="tooltip3">
                  <img
                    className="indicator-icon3"
                    alt=""
                    src="/indicator-5.svg"
                  />
                  <div className="title-parent1">
                    <div className="title3">Queensland</div>
                    <input
                      className="amount6"
                      placeholder="6,097,321"
                      type="text"
                    />
                  </div>
                  <img className="arrow-icon3" alt="" src="/arrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <WidgetLSizeTimelineCha />
        </section>
      </main>
      <footer className="footer-parent">
        <div className="footer">
          <div className="bg" />
          <b className="orion-data-visualisation">Orion data visualisation</b>
          <b className="b">2019</b>
        </div>
        <div className="footer1">
          <div className="bg1" />
          <b className="description">Orion data visualisation</b>
          <b className="b1">2022</b>
        </div>
      </footer>
    </div>
   
    </>
  );
};

export default WorldHexagonMap;
