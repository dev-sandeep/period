import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import UseCycle from '../Context/UseCycle'
import Form from 'react-bootstrap/Form'

const CycleSelectModal = () => {
    const { dayModalVisibilityStatus, changeSelectDateVisibility, createEvent, tempEvent } = UseCycle();

    const saveEvent = () => {
        createEvent(tempEvent);
        console.log(tempEvent);
        changeSelectDateVisibility();
    }

    return (
        <Modal show={dayModalVisibilityStatus} onHide={changeSelectDateVisibility} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Have your period started on this day?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Fill up few details before you <b>save this date:</b>
                <hr />
                <div className='form'>
                    <Form>
                        <Form.Group controlId="formAge">
                            <Form.Label>Have you experienced Pain?</Form.Label>
                            <Form.Control as="select">
                                <option>Excess Pain</option>
                                <option>Little Pain</option>
                                <option>No Pain</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDays">
                            <Form.Label>Have you experienced mood swings?</Form.Label>
                            <Form.Control as="select">
                                <option>A lot</option>
                                <option>A Little</option>
                                <option>No Mood Swings</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDays">
                            <Form.Label>Have you experienced excess bleeding?</Form.Label>
                            <Form.Control as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" >
                    Cancel
                    </Button>
                <Button variant="primary" onClick={saveEvent}>
                    Save
                    </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CycleSelectModal;