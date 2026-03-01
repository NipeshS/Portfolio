import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactDetails = [
  {
    label: "Phone Number",
    value: "+91 88077 6445",
    icon: FaPhoneAlt
  },
  {
    label: "Email Address",
    value: "nipeshnaresh62@gmail.com",
    icon: FaEnvelope
  },
  {
    label: "Location",
    value: "Ooty, India",
    icon: FaMapMarkerAlt
  }
];

function ContactInfo() {
  return (
    <>
      <div className="row g-3 mb-4">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          return (
            <div className="col-12 col-md-4" key={item.label}>
              <div className="card border-0 shadow-sm h-100 contact-info-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <span className="icon-circle">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted mb-1 small">{item.label}</p>
                    <p className="mb-0 fw-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h3 className="h5 mb-3">Social Media</h3>
          <div className="d-flex gap-3">
            <a
              className="social-icon-link"
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="social-icon-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon-link"
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
