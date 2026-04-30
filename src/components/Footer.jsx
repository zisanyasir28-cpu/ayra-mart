import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer-inner">
        <div className="footer-brand">
          <Logo size={46} />
          <p className="footer-about">
            সিরাজগঞ্জের সেরা অনলাইন বাজার। তাজা শাকসবজি থেকে শুরু করে মাছ, মাংস, চাল, ডাল — সবকিছু এক ছাদের নিচে।
          </p>
          <p className="footer-about en">
            Sirajganj's best online super shop — fresh vegetables, fish, meat, rice, oil and all daily necessities delivered to your door.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn fb">f</a>
            <a href="#" className="social-btn yt">▶</a>
            <a href="#" className="social-btn wa">💬</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {['Vegetables & Fruits','Fish & Seafood','Meat & Poultry','Rice & Dal','Oil & Spices','Snacks','Household'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            {['My Account','Track Order','Return Policy','Delivery Info','Help Center','Contact Us','About Us'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <MapPin size={16} />
              <span>Sirajganj Market, Sirajganj Sadar, Sirajganj-6700</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+880 1700-000000</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>hello@sirajganjbazar.com</span>
            </div>
          </div>
          <div className="footer-pay">
            <h5>We Accept</h5>
            <div className="pay-icons">
              <span>bKash</span>
              <span>Nagad</span>
              <span>Rocket</span>
              <span>Card</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <p>© 2025 Sirajganj Bazar. All rights reserved. Made with ❤️ in Bangladesh</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
