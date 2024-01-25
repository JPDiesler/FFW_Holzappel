import React from "react";
import "./Vehicles.scss";

export const tlfw = (
  <div className="border rounded-5 d-flex vehicle_container overflow-hidden">
    <div className="flex-fill p-3 d-flex flex-column justify-content-center align-items-center">
      <img src="./TLF_3000.png" className="vehicle_img" />
    </div>
    <div className="vr" />
    <span className="flex-fill p-3 d-flex flex-column vehicle_details">
      <h1>TLF-3000</h1>
      <h4 className="text-secondary">
        Florian Diez 15/23-2 <br /> Besatzung: 1/2
      </h4>
      <span className="flex-fill d-flex align-items-center">
        <h5>
          3000L Wassertank <br />
          Dachwasserwerfer <br /> Frontsprühbalken <br /> Truppkabine <br />{" "}
          Allradantrieb
        </h5>
      </span>

      <h5 className="text-secondary">
        Indienstellung: <br /> 07.10.2023
      </h5>
    </span>
  </div>
);

export const dlk = (
  <div className="border rounded-5 d-inline-flex vehicle_container">
    <div className="flex-fill p-3 d-flex flex-column justify-content-center align-items-center">
      <img src="./DLK.png" className="vehicle_img" />
    </div>
    <div className="vr" />
    <span className="p-3 d-flex flex-column vehicle_details rounded-end-5">
      <h1>DLK-18/12</h1>
      <h4 className="text-secondary">
        Florian Diez 15/33 <br /> Besatzung: 1/2
      </h4>
      <span className="flex-fill d-flex align-items-center">
        <h5></h5>
      </span>

      <h5 className="text-secondary">
        Indienstellung: <br /> 11.06.2022
      </h5>
    </span>
  </div>
);

export const hlf = (
  <div className="border rounded-5 d-flex vehicle_container">
    <div className="flex-fill p-3 d-flex flex-column justify-content-center align-items-center">
      <img src="./TLF_1625.png" className="vehicle_img" />
    </div>
    <div className="vr" />
    <div className="p-3 d-flex flex-column rounded-end-5 vehicle_details">
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
);

export const mtf = (
  <div className="border rounded-5 d-inline-flex vehicle_container border border-danger">
    <div className="flex-fill p-3 d-flex flex-column justify-content-center align-items-center">
      <img src="./image.png" className="vehicle-img-dlk" />
    </div>
    <div className="vr" />
    <span className="p-3 d-flex flex-column rounded-end-5 vehicle_details">
      <h1>MTF</h1>
      <h4 className="text-secondary">
        Florian Diez 15/19 <br /> Besatzung: 1/8
      </h4>
      <span className="flex-fill d-flex align-items-center"></span>

      <h5 className="text-secondary">
        Indienstellung: <br /> 28.04.2011
      </h5>
    </span>
  </div>
);
