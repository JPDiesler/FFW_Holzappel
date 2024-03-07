import React from "react";
import "./deploymentTypes.scss";
import PropTypes from "prop-types";

const DeploymentTypes = (props) => {
  return (
    <div className="bg-body rounded border p-2 overflow-y-scroll types scrollbar">
      <button className="btn btn-danger" onClick={() => props.onClickClose()}>
        <i className="bi bi-x-lg"></i>
      </button>
      <table className="border rounded fw-semibold align-middle">
        <tbody>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-brands fa-gripfire red fs-3"></i>
                <span className="vertical-text fs-5">Brand</span>
              </div>
            </td>
            <td className="p-0">
              <table className="border-start  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5 m-0">B1</td>
                    <td>
                      <table className="border-start subtypes-table">
                        <tbody>
                          <tr className="border-bottom">
                            <td>01</td>
                            <td className="border-start">Müllbrand</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>02</td>
                            <td className="border-start">Flächenbrand klein</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>03</td>
                            <td className="border-start">
                              Fahrzeugbrand klein
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>04</td>
                            <td className="border-start">Brandnachschau</td>
                          </tr>
                          <tr>
                            <td>05</td>
                            <td className="border-start">
                              Rauchentwicklung im Freien
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">B2</td>
                    <td>
                      <table className="border-start subtypes-table">
                        <tbody>
                          <tr className="border-bottom">
                            <td>01</td>
                            <td className="border-start">
                              Rauchentwicklung Gebäude
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>02</td>
                            <td className="border-start">Flächenbrand groß</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>03</td>
                            <td className="border-start">Fahrzeugbrand groß</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>04</td>
                            <td className="border-start">Kaminbrand</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>05</td>
                            <td className="border-start">Nebengebäudebrand</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>06</td>
                            <td className="border-start">Rauchwarnmelder</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>07</td>
                            <td className="border-start">Brandmeldeanlage</td>
                          </tr>
                          <tr>
                            <td>08</td>
                            <td className="border-start">Wohnungsbrand</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">B3</td>
                    <td>
                      <table className="border-start subtypes-table">
                        <tbody>
                          <tr className="border-bottom">
                            <td>01</td>
                            <td className="border-start">Gebäudebrand</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>02</td>
                            <td className="border-start">
                              Versammlungsstättenbrand
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>03</td>
                            <td className="border-start">Industriebrand</td>
                          </tr>
                          <tr>
                            <td>04</td>
                            <td className="border-start">Explosion</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">B4</td>
                    <td className="p-0">
                      <table className="border-start subtypes-table m-0">
                        <tbody>
                          <tr className="">
                            <td> </td>
                            <td colSpan="1" className="border-start">
                              Großbrand
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-car-burst blue fs-3"></i>
                <span className="vertical-text fs-5">Hilfeleistung</span>
              </div>
            </td>
            <td className="p-0">
              <table className="  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5">H1</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">H2</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">H3</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">H4</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-biohazard yellow fs-3"></i>
                <span className="vertical-text fs-5">Gefahrstoff</span>
              </div>
            </td>
            <td className="p-0">
              <table className="  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5">G1</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">G2</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">G3</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">G4</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-water dark-blue fs-3"></i>
                <span className="vertical-text fs-5">Wasser</span>
              </div>
            </td>
            <td className="p-0">
              <table className="  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5">W1</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">W2</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">W3</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">W4</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-handshake-angle green fs-3"></i>
                <span className="vertical-text fs-5">Unterstüzung</span>
              </div>
            </td>
            <td className="p-0">
              <table className="  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5">U1</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">U2</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">U3</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">U4</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="">
              <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-circle-exclamation violet fs-3"></i>
                <span className="vertical-text fs-5">Sonder</span>
              </div>
            </td>
            <td className="p-0">
              <table className="  m-0">
                <tbody>
                  <tr className="border-bottom">
                    <td className="fs-5">S1</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">S2</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">S3</td>
                    <td>5</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="fs-5">S4</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DeploymentTypes.propTypes = {
  onClickClose: PropTypes.func.isRequired,
};

export default DeploymentTypes;
