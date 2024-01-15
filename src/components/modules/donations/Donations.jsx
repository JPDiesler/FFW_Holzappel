import React from "react";
import PropTypes from "prop-types";
import "./Donations.scss";

const Donations = (props) => {
  return (
    <div className="bg-body border rounded-5 p-5 position-relative">
      <button
        className="btn btn-close position-absolute left-top-corner"
        onClick={() => props.onClose(false)}
      />
      <div className="d-flex gap-5">
        <span>
          <h2 className="fw-bold">
            Du möchtest uns bei der <br /> Anschaffung von <br />
            Ausrüstung & Material unterstützen?
          </h2>
          <h4 className="text-secondary mt-4 mb-4">
            Mit einer Spende an den Förderverein, <br /> der Freiwilligen
            Feuerwehr Holzappel <br />
            kannst du das tun!
          </h4>
          <h5 className="text-primary mb-5">Ganz einfach via PayPal</h5>
          <div className="d-flex mt-5">
            <button className="btn btn-primary flex-fill fw-bold fs-4">
              Jetzt spenden!
            </button>
          </div>
        </span>
        <img
          src="src/components/modules/donations/img/thinking.png"
          height={400}
        />
      </div>
    </div>
  );
};

Donations.propTypes = { onClose: PropTypes.func.isRequired };

export default Donations;
