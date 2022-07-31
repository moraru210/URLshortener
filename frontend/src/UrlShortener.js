import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UrlShortener() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => {
      setShow(false);
      handleClear();
    }
  const handleShow = () => setShow(true);

  const handleInput = (e) => setValue(e.target.value);
  const handleClear = () => setValue("");

  return (
    <>
        <form>
            <label>
                <div style={{ padding: "1vh" }}>
                    <input style={{width: "80vh", height: "4vh", fontSize: "3vh"}} type="text" value={value} onChange={handleInput}/>
                </div>
            </label>
            <div style={{ padding: "1vh" }}>
            <Button variant="primary" onClick={handleShow}>
                Generate Short Link
            </Button>
            </div>
        </form>

        <Modal show={show} 
        onHide={handleClose} 
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered
        >
            <Modal.Header closeButton>
            <Modal.Title>Link Generated Below:</Modal.Title>
            </Modal.Header>
            <Modal.Body>{value}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default UrlShortener;