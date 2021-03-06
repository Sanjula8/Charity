import React from "react";
import Navbar from "../components/Nav/index";
import "./contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <section id="contact" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <br></br>
                <h2>Get In Touch</h2>
              </div>
            </div>

            <div className="col-md-7 col-sm-10">
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form id="contact-form" action="#" method="get">
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required=""></textarea>
                  </div>
                  <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control"
                      name="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5 col-sm-8">
              <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                <div className="section-title">
                  <h2>Contact Us!</h2>
                  <p>
                    Lorem ipsum dolor sit consectetur adipiscing morbi venenatis
                    et tortor consectetur adipisicing lacinia tortor morbi
                    ultricies.
                  </p>
                </div>

                <p>
                  <i className="fa fa-map-marker"></i> 456 New Street 22000, New
                  York City, USA
                </p>
                <p>
                  <i className="fa fa-comment"></i>{" "}
                  <a href="mailto:info@company.com">info@company.com</a>
                </p>
                <p>
                  <i className="fa fa-phone"></i> 010-020-0340
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;

{
  /* <div className="container">
				<div className="row">
					<div className="col">1 of 2</div>
					<div class="col">
						<ContactForm />
					</div>
				</div>
			</div> */
}
