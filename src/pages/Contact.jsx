import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
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

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedData.name || !trimmedData.email || !trimmedData.subject || !trimmedData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in Name, Email, Subject, and Message before submitting."
      });
      return;
    }

    if (!emailPattern.test(trimmedData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

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
          name: trimmedData.name,
          email: trimmedData.email,
          subject: trimmedData.subject,
          message: trimmedData.message
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
    <section className="section-block contact-section">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-stretch">
          <div className="col-md-6 col-lg-6">
            <div className="contact-left-panel h-100 d-flex align-items-center reveal contact-reveal-left">
              <div>
                <h2 className="section-title fw-bold mb-3">Get in Touch</h2>
                <p className="contact-left-description mb-4">
                  I am open to full stack roles, freelance projects, and collaborations. Send me a
                  message and I will get back to you soon.
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
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="card border-0 shadow-lg contact-form-card h-100 reveal contact-reveal-right">
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
    </section>
  );
}

export default Contact;
