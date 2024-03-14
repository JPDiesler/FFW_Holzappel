import React from "react";
import Carousel from "../../carousel/Carousel";
import Vehicle from "./Vehicle";

const Vehicles = () => {
  const tlfw_details = (
    <>
      <span>3000L Wassertank</span>
      <span>Dachwasserwerfer</span>
      <span>Frontsprühbalken</span>
      <span>Truppkabine</span>
      <span>Allradantrieb</span>
      <span>Waldbrandausrüstung</span>
    </>
  );

  const tlfw = (
    <Vehicle
      imgSrc="./TLF_3000.png"
      title="TLF-3000"
      callsign="Florian Diez 15/23-2"
      crew="1/2"
      details={tlfw_details}
      date="07.10.2023"
      carrier="Rhein-Lahn-Kreis"
    />
  );

  const dlk_details = (
    <>
      500KG Korb <br />
      27m Leiterpark <br />
      Truppkabine
    </>
  );

  const dlk = (
    <Vehicle
      imgSrc="./DLK.png"
      title="DLAK-18/12"
      callsign="Florian Diez 15/33"
      crew="1/2"
      details={dlk_details}
      date="11.06.2022"
      carrier="VG Diez"
    />
  );

  const hlf_details = (
    <>
      2500L Wassertank <br />
      TH-Ausrüstung <br />
      Gruppenkabine <br /> Allradantrieb
    </>
  );

  const hlf = (
    <Vehicle
      imgSrc="./TLF_1625.png"
      title="TLF-16/25"
      callsign="Florian Diez 15/23-1"
      crew="1/8"
      details={hlf_details}
      date="20.12.2005"
      carrier="VG Diez"
    />
  );

  const mtf_details = (
    <>
      GAMS+ Satz <br /> Taktikboard <br /> Wasserrettungssatz <br /> Pavillion
    </>
  );
  const mtf = (
    <Vehicle
      title="MTF"
      callsign="Florian Diez 15/19"
      crew="1/8"
      details={mtf_details}
      date="28.04.2011"
      carrier="VG Diez"
    />
  );

  const sga_details = <>24 KVA Leistung</>;
  const sga = (
    <Vehicle
      title="SGA 24"
      callsign={null}
      crew={null}
      details={sga_details}
      date="28.04.2011"
      carrier="Förderverein"
    />
  );

  const vehicles = [tlfw, dlk, hlf, mtf, sga];

  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <h1 className="title mb-5">Unsere Einsatzfahrzeuge</h1>
      <Carousel className="border">
        {vehicles.map((vehicle, index) => {
          return (
            <div className="" key={index}>
              {vehicle}
            </div>
          );
        })}
      </Carousel>
      <a
        className="icon-link icon-link-hover lh-1"
        href="https://de.wikipedia.org/wiki/Feuerwehrfahrzeuge_in_Deutschland#Normung"
        target="_blank"
        rel="noopener noreferrer"
      >
        Erfahre mehr über Feuerwehrfahrzeuge
        <i className="bi bi-wikipedia"></i>
      </a>
    </div>
  );
};

export default Vehicles;
