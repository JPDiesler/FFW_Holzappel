import React from "react";
import "./Footer.scss";
import Socials from "../../socials/Socials";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column">
      <div className="flex-fill d-flex justify-content-center align-items-center p-5 gap-5 flex-wrap">
        <div className="d-flex gap-4 align-items-center">
          <a href="http://www.holzappel-herthasee.de/">
            <img
              src="HOLZAPPEL-transparent-gerade.png"
              alt="Geimeinde Holzappel Wappen"
            />
          </a>
          <div className="vr" />
          <a href="https://www.vgdiez.de/vg_diez/">
            <img
              src="https://www.vgdiez.de/vg_diez/vg_diez_logo.svg"
              alt="VG Diez Logo"
              height={"128px"}
            />
          </a>
        </div>
        <a
          href="https://fm.rlp.de/fileadmin/04/Themen/Baurecht_und_Bautechnik/Bauvorschriften/Rauchwarnmelder/FAQ_Rauchmelderpflicht_in_RLP_Stand_20_12_04__003_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light d-flex flex-column align-items-center gap-2 text-decoration-none fw-semibold"
        >
          <img src="rauchmelderpflicht-de1.png" width={250} />
          <h3>in Rheinland-Pfalz</h3>
        </a>
        <img src="112.png" alt="112 Logo" width={250} />
        <div className="ms-auto me-auto">
          <Socials darkMode={false} />
        </div>

        <div className="ms-auto d-flex gap-4 align-items-start flex-wrap text-light">
          <div>
            <h3>Impressum</h3>
            <h5>
              Verein der Freunde & Förderer der <br />
              Freiwilligen Feuerwehr Holzappel e.V.
            </h5>
            <h5>Freiherr von Stein Str. 18</h5>
            <h5>56379 Holzappel</h5>
            <a href="mailto:info@feuerwehrholzappel.de">
              <h5>info@feuerwehrholzappel.de</h5>
            </a>
            <h6 className="pointer">Haftung für Inhalte</h6>
            <h6 className="pointer">Haftung für Links</h6>
            <h6 className="pointer">Urheberrecht</h6>
            <h6 className="pointer">Datenschutzerklärung</h6>
          </div>
          <div className="vr" />
          <div>
            <h3>
              Verantwortlich für den <br />
              Inhalt der Website
            </h3>
            <h5>1. Vorsitzender</h5>
            <h5>Detlef Ott</h5>
            <a href="mailto:d.ott@feuerwehrholzappel.de">
              <h5>d.ott@feuerwehrholzappel.de</h5>
            </a>
            <h5 className="mt-3 pt-3 border-top">2. Vorsitzender</h5>
            <h5>Jörg Glauer</h5>
            <a href="mailto:info@feuerwehrholzappel.de">
              <h5>j.glauer@feuerwehrholzappel.de</h5>
            </a>
          </div>
        </div>
      </div>
      <a
        className="text-decoration-none text-dark"
        href="https://www.flaticon.com/free-icons/fire"
        title="fire icons"
      >
        Fire icons created by Freepik - Flaticon
      </a>
    </div>
  );
};

export default Footer;
