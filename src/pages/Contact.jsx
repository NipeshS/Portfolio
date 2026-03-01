import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-5">
      <div className="container py-4">
        <div className="contact-modern-wrapper p-4 p-md-5">
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6 col-lg-6">
              <div className="contact-left-panel h-100 d-flex align-items-center">
                <div>
                <h2 className="fw-bold mb-3">Let's Connect!</h2>
                <p className="contact-left-description mb-4">
                  Feel free to reach out and share your experience with my portfolio! I'd love to hear
                  your feedback and thoughts on how you liked it.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <span className="contact-detail-icon">
                      <FaEnvelope aria-hidden="true" />
                    </span>
                    <a className="text-decoration-none text-reset" href="mailto:nipeshnaresh62@gmail.com">
                      nipeshnaresh62@gmail.com
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="contact-detail-icon">
                      <FaPhoneAlt aria-hidden="true" />
                    </span>
                    <a className="text-decoration-none text-reset" href="tel:+918807716445">
                      +91 88077 16445
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="contact-detail-icon">
                      <FaMapMarkerAlt aria-hidden="true" />
                    </span>
                    <span>Ooty, India</span>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <a
                    className="contact-social-link"
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="contact-social-link"
                    href="https://github.com/NipeshS/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="contact-social-link"
                    href="https://www.instagram.com/_.nipesh._?igsh=d3A1bm12dW1uZTQ2&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="card border-0 shadow-lg contact-form-card h-100">
                <div className="card-body p-4 p-md-5">
                  <h3 className="h4 fw-bold mb-4">Send a Message</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control form-control-lg" id="name" placeholder="Your name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control form-control-lg" id="email" placeholder="you@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input type="text" className="form-control form-control-lg" id="subject" placeholder="Project discussion" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
