import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-fill d-flex align-items-center gap-5 p-5">
        <a href="https://www.vgdiez.de/vg_diez/">
          <img
            src="https://www.vgdiez.de/vg_diez/vg_diez_logo.svg"
            alt="VG Diez Logo"
            height={"128px"}
          />
        </a>
        <div className="d-flex flex-column align-items-center gap-2">
          <h5>Unsere Social Media Links</h5>
          <a
            className="p-1 rounded text-bg-primary d-flex gap-2 align-items-center fw-semibold text-decoration-none"
            href="https://www.facebook.com/"
          >
            <i className="bi bi-facebook fs-5"></i>
            Facebook
          </a>
          <a
            className="p-1 rounded instagram-gradient d-flex gap-2 align-items-center fw-semibold text-decoration-none"
            href="https://www.instagram.com/"
          >
            <i className="bi bi-instagram fs-5"></i>
            Instagram
          </a>
          <a
            className="p-1 rounded text-bg-black d-flex gap-2 align-items-center fw-semibold text-decoration-none"
            href="https://www.tiktok.com/"
          >
            <i className="bi bi-tiktok fs-5"></i>
            Tiktok
          </a>
        </div>
        <div className="ms-auto">
          <h5>Kontakt</h5>
          <span className="">
            Horhäuserweg <br /> 56379 Holzappel
          </span>
          <span className="d-flex gap-4 border-top pt-2 mt-2">
            <span className="fw-semibold">
              Wehrführer <br />
              Alexander Ott <br />
              <a
                className="icon-link text-decoration-none"
                href="mailto:feuerwehr-holzappel@vgdiez.de"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                feuerwehr-holzappel@vgdiez.de
              </a>
            </span>
            <span className="fw-semibold">
              1. Vorsitzender <br />
              Detleff Ott <br />
              <a
                className="icon-link text-decoration-none"
                href="mailto:mail@mail.de"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                mail@mail.de
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
