import React from 'react'
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div>
            <div className="rn-not-found-area rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-not-found-wrapper">
                                <h2 className="large-title">404</h2>
                                <h3 className="title">Page not found!</h3>
                                <p>The page you are looking for not available.</p>
                                <Link to="/" className="btn btn-primary btn-large">Go Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content share-wrapper">
                        <div className="modal-header share-area">
                            <h5 className="modal-title">Share this NFT</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="social-share-default">
                                <li><a href="#/"><span className="icon"><i data-feather="facebook" /></span><span className="text">facebook</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="twitter" /></span><span className="text">twitter</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="linkedin" /></span><span className="text">linkedin</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="instagram" /></span><span className="text">instagram</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="youtube" /></span><span className="text">youtube</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p>Describe why you think this item should be removed from marketplace</p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea name="message" placeholder="Write issues" defaultValue={""} />
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                                    <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;
