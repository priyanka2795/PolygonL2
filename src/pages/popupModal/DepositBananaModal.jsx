import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import ethereum from '../../assets/images/eth_big.png'
import banana from '../../assets/images/banana.png'
import {MdSwapVerticalCircle} from 'react-icons/md'
function DepositBananaModal(props) {
    return (
        <>

            <Modal show={props.show} onHide={props.handleClose} className="depositBanana">
                <Modal.Header className="depositBanana_modal_header">
                    <div onClick={props.handleClose} class="modal-close">✖</div>
                </Modal.Header>
                <Modal.Body className="depositBanana_modal_body">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="deposit_content">
                                    <div className="deposit_head">Deposit</div>

                                    <div className="deposit_text">Enter the amount you want to deposit from Mainnet to Polygon</div>

                                    <div className="deposit_from">From</div>

                                    <div className="deposit_mainnet">MAINNET</div>

                                    <div className="deposit_input_field">
                                        <input type="text" placeholder='0' />
                                        <div className="deposit_max_div">
                                            <div className="max text-white">MAX</div>
                                            {/* <img src={banana} alt="banana" className='img-fluid' /> */}
                                            <img src={ethereum} alt="polygon" className='img-fluid' />
                                        </div>
                                    </div>

                                    <div className="available_balance">AVAILABLE BALANCE: 0.0000</div>

                                    <div className="switch">
                                        <div className="switch_img">
                                            <MdSwapVerticalCircle/>
                                        </div>
                                        <div className="switch_text">SWITCH</div>
                                    </div>

                                    <div className="deposit_to">To</div>

                                    <div className="deposit_polygon">POLYGON</div>

                                    <div className="deposit_input_field">
                                        {/* <input type="text" placeholder='0' /> */}
                                        <div></div>
                                        <div className="deposit_max_div">
                                           
                                            {/* <img src={banana} alt="banana" className='img-fluid' /> */}
                                            <img src={ethereum} alt="polygon" className='img-fluid' />
                                        </div>
                                    </div>

                                    <div className="available_balance">AVAILABLE BALANCE: 0.0000</div>

                                    <div className="deposit_bridge">
                                        <button className='bridge_btn'>BRIDGE</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default DepositBananaModal