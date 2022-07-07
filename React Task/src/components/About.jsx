import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                         When it comes to searching for books, there is only one place to turn to – the THE BOOK MART. We are India’s largest online book store and rightly so. Having served some of the best in the industry for over 70 years – we are your one stop solution for all your book needs. We have a veritable collection of books that span categories as diverse as you could possibly expect. From segments like accountancy, to parenting and pregnancy, to banking and finance, to even topics on yoga and meditation – almost any category you seek – you will find with us at Jain Book Agency. In the rare case that you do not find the book you’re looking for, you can always place a request in our wish list section. We are India’s largest online book store – not only do we have the largest book collection, we also are diligent about updating customers all the time.With an easy payment gateway and a well designed shopping cart, you can shop with great ease and without worry. Ours is a VeriSign secured site that ensures that your sensitive credit card information is absolutely safe with us. All information is encrypted to ensure privacy of your information. We accept all the major credit cards like MasterCard, VISA, Diners Club, Citibank, AMEX etc. What’s more, we also accept cards from a variety of banks like ICICI, Citibank, HDFC, IDBI, iConnect, Centurion Bank and Federal Bank etc. Come THE BOOK MART - India’s largest online book store and experience a superior shopping experience.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
