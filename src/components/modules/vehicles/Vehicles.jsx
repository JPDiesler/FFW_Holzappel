import React from "react";

const Vehicles = () => {
  return (
    <div>
      <h1>Unsere Fahrzeuge</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="element d-flex justify-content-center align-items-center ">
              <div className="border rounded-5 d-flex">
                <span className="p-3">
                  <img src="./TLF_3000.png" className="vehicle-img" />
                </span>
                <div className="vr" />
                <span className="p-3 d-flex flex-column bg-secondary-subtle rounded-end-5">
                  <h1>TLF-3000</h1>
                  <h4 className="text-secondary">
                    Florian Diez 15/23-2 <br /> Besatzung: 1/2
                  </h4>
                  <span className="flex-fill d-flex align-items-center">
                    <h5>
                      3000L Wassertank <br />
                      Dachwasserwerfer <br /> Frontsprühbalken <br />{" "}
                      Truppkabine <br /> Allradantrieb
                    </h5>
                  </span>

                  <h5 className="text-secondary">
                    Indienstellung: <br /> 07.10.2023
                  </h5>
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="element d-flex justify-content-center align-items-center ">
              <div className="border rounded-5 d-flex ">
                <div className="p-3 d-flex flex-column justify-content-center">
                  <img src="./TLF_1625.png" className="vehicle-img" />
                </div>
                <div className="vr" />
                <div className="p-3 d-flex flex-column rounded-end-5 bg-secondary-subtle">
                  <h1>TLF-16/25</h1>
                  <h4 className="text-secondary">
                    Florian Diez 15/23-1 <br /> Besatzung: 1/8
                  </h4>
                  <span className="flex-fill d-flex align-items-center">
                    <h5>
                      2500L Wassertank <br />
                      TH-Ausrüstung <br />
                      Gruppenkabine <br /> Allradantrieb
                    </h5>
                  </span>

                  <h5 className="text-secondary">
                    Indienstellung: <br /> 20.12.2005
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="element d-flex justify-content-center align-items-center ">
              <div className="border rounded-5 d-flex">
                <span className="p-3">
                  <img src="./DLK.png" className="vehicle-img-dlk" />
                </span>
                <div className="vr" />
                <span className="p-3 d-flex flex-column bg-secondary-subtle rounded-end-5">
                  <h1>DLK-18/12</h1>
                  <h4 className="text-secondary">
                    Florian Diez 15/33 <br /> Besatzung: 1/2
                  </h4>
                  <span className="flex-fill d-flex align-items-center">
                    <h5>
                      500KG Korb <br />
                      27m Leiterpark <br />
                      Truppkabine
                    </h5>
                  </span>

                  <h5 className="text-secondary">
                    Indienstellung: <br /> 11.06.2022
                  </h5>
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="element d-flex justify-content-center align-items-center ">
              <div className="border rounded-5 d-flex">
                <span className="p-3">
                  <img src="./image.png" className="vehicle-img-dlk" />
                </span>
                <div className="vr" />
                <span className="p-3 d-flex flex-column bg-secondary-subtle rounded-end-5">
                  <h1>MTF</h1>
                  <h4 className="text-secondary">
                    Florian Diez 15/19 <br /> Besatzung: 1/8
                  </h4>
                  <span className="flex-fill d-flex align-items-center">
                    {/* <h5>
                    500KG Korb <br />
                    27m Leiterpark <br />
                    Truppkabine
                  </h5> */}
                  </span>

                  <h5 className="text-secondary">
                    Indienstellung: <br /> 28.04.2011
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Vehicles;
