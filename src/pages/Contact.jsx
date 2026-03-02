import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_t8m86r7";
const EMAILJS_TEMPLATE_ID = "template_2jdkgas";
const EMAILJS_PUBLIC_KEY = "G-iyWMRIylFmsv0sf";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({
      type: "",
      message: ""
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: "success",
        message: "Your message was sent successfully."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="subject"
                        name="subject"
                        placeholder="Project discussion"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    {submitStatus.message ? (
                      <div
                        className={`alert ${
                          submitStatus.type === "success" ? "alert-success" : "alert-danger"
                        }`}
                        role="alert"
                      >
                        {submitStatus.message}
                      </div>
                    ) : null}
                    <button type="submit" className="btn btn-primary btn-lg w-100" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
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
