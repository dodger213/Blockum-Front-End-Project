import React from 'react';
import { Modal, Button, ProgressBar } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProposalDetailsModal(props) {
  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={props.visible}
      size="lg"
      style={{ backgroundColor: '#4E4FEB', height: '100vh' }}
    >
      <div
        style={{
          backgroundColor: '#1C1C39',
          color: 'white',
          height: '100vh',
          marginTop: '-3.3vh',
          marginBottom: '-3.3vh',
        }}
      >
        <Modal.Header style={{ border: 'none' }}>
          <Modal.Title
            style={{
              color: 'white',
              backgroundColor: '#1C1C39',
              width: '100%',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '100px',
            }}
          >
            <img
              src={'/images/BlockumDAOLogo.png'}
              style={{ width: '300px' }}
              alt=""
            />
          </Modal.Title>
          <Button
            onClick={() => props.setVisible(false)}
            variant=""
            className="close"
            style={{ color: 'white', backgroundColor: '#1C1C39' }}
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginTop: '30px',
              marginLeft: '70px',
              marginRight: '70px',
              color: 'white',
            }}
          >
            <h1 style={{ color: 'white' }}>PROPOSAL FOR VOTE</h1>
            <label>Title:</label>
            <p>{props.data.title}</p>
            <label>Description:</label>
            <p>{props.data.description}</p>
            <label>Presentation link:</label>
            <p>{props.data.presentationLink}</p>
            <br />
            <h3 style={{ color: 'white' }}>Promote this proposal?</h3>
            <div className="d-flex justify-content-center">
              <Button
                className="font-weight-bold"
                variant="success btn-rounded"
                style={{
                  width: '200px',
                  fontSize: '24px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  marginRight: '30px',
                  marginLeft: '30px',
                }}
                onClick={() => props.handleVoteYesClick(props.data.proposalId)}
              >
                Yes
              </Button>
              <Button
                className="font-weight-bold"
                variant="danger btn-rounded"
                style={{
                  width: '200px',
                  fontSize: '24px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  marginRight: '30px',
                  marginLeft: '30px',
                }}
                onClick={() => props.handleVoteNoClick(props.data.proposalId)}
              >
                No
              </Button>
            </div>
            <p className='d-flex justify-content-end pt-3'>00 days remaining 00h:00m:00</p>
            <div className="d-flex justify-content-between">
              <div>
                <label style={{ fontSize: '14px' }}>Members Quorum</label>
                <ProgressBar
                  style={{ width: '200px' }}
                  now={props.data.memberProgressForProposal}
                  variant="info"
                />
              </div>
              <div>
                <label style={{ fontSize: '14px' }}>Capital Quorum</label>
                <ProgressBar
                  style={{ width: '200px' }}
                  now={props.data.capitalProgressForProposal}
                  variant="info"
                />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <div>
                <p className="mb-0">For Votes: 00</p>
                <p className="mb-0">Against Votes: 00</p>
              </div>
              <div>
                <p className="mb-0">Approved by Community: YES/NO</p>
                <p className="mb-0">Funded: YES/NO</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer
          style={{
            border: 'none',
            marginLeft: '70px',
            marginRight: '70px',
            color: 'white',
          }}
        >

        </Modal.Footer> */}
      </div>
    </Modal>
  );
}

export default ProposalDetailsModal;