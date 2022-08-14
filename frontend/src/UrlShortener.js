import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UrlShortener() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

	const [shortLink, setShortLink] = useState("");

  function handleClose() {
    setShow(false);
    handleClear();
	}
  
	async function handleShow() {
		await fetch('http://127.0.0.1:51956/create-short-url', 
		{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ long_url: value, user_id: 'e0dba740-fc4b-4977-872c-d360239e6b10' }),
    })
		.then(response => response.json())
		.then(function(json) {
			console.log(json);
			setShortLink(json['short_url']);
		});

		setShow(true);
	}

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
            <Button style={{"backgroundColor": "brown", "borderColor": "brown"}} onClick={handleShow}>
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
            <Modal.Title>Link generated below:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
							<a href={"http://127.0.0.1:51956/" + shortLink}>
								http://127.0.0.1:51956/{shortLink}
								</a>
						</Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default UrlShortener;