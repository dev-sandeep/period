import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UseCycle from './../Context/UseCycle'

function SettingModal() {
    const { displaySettingVisibilityStatus, changeSettingeVisibility } = UseCycle();
    
    return (
        <Modal show={displaySettingVisibilityStatus} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Rahmen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Bitte füllen Sie dieses einmalige Formular aus</h4>
                <div className='form'>
                    <Form>
                        <Form.Group controlId="formAge">
                            <Form.Label>Alter</Form.Label>
                            <Form.Control type="text" placeholder="Dein alter" />
                        </Form.Group>

                        <Form.Group controlId="formDays">
                            <Form.Label>Wie lange dauert Ihre Periode?</Form.Label>
                            <Form.Control type="text" placeholder="in tagen" />
                        </Form.Group>

                        <Form.Group controlId="formMonths">
                            <Form.Label>Wie lang sind die Zyklen?</Form.Label>
                            <Form.Control type="text" placeholder="in tagen" />
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={changeSettingeVisibility}>
                    Überspringen
                    </Button>
                <Button variant="primary" onClick={changeSettingeVisibility}>
                    Save
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SettingModal;