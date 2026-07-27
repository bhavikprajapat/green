import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddTeam = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>નવી ટીમ ઉમેરો</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label>ટીમનું નામ</label>
            <input
              className="form-control"
              placeholder="ટીમનું નામ"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>ટીમ લીડર</label>
            <select className="form-select">
              <option>લીડર પસંદ કરો</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>ઝોન</label>
            <select className="form-select">
              <option>ઝોન પસંદ કરો</option>
            </select>
          </div>

          <div className="col-md-12">
            <label>વર્ણન</label>
            <textarea
              rows={4}
              className="form-control"
              placeholder="ટીમનું વર્ણન"
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setShow(false)}
        >
          રદ કરો
        </Button>

        <Button variant="success">
          ટીમ સાચવો
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTeam;