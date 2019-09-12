import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AppContext from '../Context/AppContext'


export const CycleSelectModal = (show = false) => (
    <AppContext.Consumer>
        {(context) =>
            <Modal show={context.dayModalVisibilityStatus} onHide={() => (context.dayModalVisibility(false))} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => (context.dayModalVisibility(false))}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={() => (context.dayModalVisibility(false))}>
                            Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        }
    </AppContext.Consumer>
)