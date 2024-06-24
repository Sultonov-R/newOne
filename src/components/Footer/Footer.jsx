import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer_wrapper">
      <div className="contacts">
        <div>
          <h2>Reach Us</h2>
        </div>
        <div className="contacts_info">
          <div className="detailed_contact">
            <img width={26} src="../../phone.png" alt="phone tel" />
            <p>+10123456789</p>
          </div>
          <div className="detailed_contact">
            <img width={26} src="../../email.png" alt="phone email" />
            <p>demo@gmail.com</p>
          </div>
          <div className="detailed_contact">
            <img width={26} src="../../location.png" alt="phone tel" />
            <p>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>
        <div className="social_group">
          <a href="https://x.com/">
            <img src="../../logo-twitter.png" alt="twitter" />
          </a>
          <a href="https://facebook.com/">
            {" "}
            <img src="../../logo-facebook.png" alt="twitter" />
          </a>
          <a href="https://instagram.com">
            <img src="../../logo-instagram.png" alt="twitter" />
          </a>
          <a href="https://linkedin.com">
            <img src="../../logo-linkedin.png" alt="twitter" />
          </a>
        </div>
      </div>
      <div className="directions">
        <div className="about_company">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="about_legal">
          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
            <li>Terms of Use</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="about_legal">
          <ul>
            <li>Quick Links</li>
            <li>Techlabz Keybox</li>
            <li>Downloads</li>
            <li>Forum</li>
          </ul>
        </div>
      </div>
      <div className="emails">
        <h2>Bizga qo'shiling</h2>
        <div className="email-btn">
          <input type="email" placeholder="Sizning pochta manzilingiz" />
          <button>Obuna bo'ling</button>
        </div>
        <p>
          * Tizimni yaxshiroq boshqarish uchun sizga haftalik yangilanishlarni
          yuboriladi
        </p>
      </div>
    </div>
  );
}

export default Footer;
