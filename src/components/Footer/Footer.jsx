import './Footer.css';
import logo from '../../assets/logo_SO_HAM.webp';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='item'>
        <a href='#'><i class="fa-brands fa-instagram icon"></i></a>
      </div>
      <div className='footer-contact-container'>

        {/* WhatsApp */}
        <a
          className='footer-contact textmobile'
          href="https://wa.me/33695199023" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-phone footer-icon" aria-hidden="true"></i>
          0695199023 (Whatsapp)
        </a>

        {/* Email */}
        <a
          className='footer-contact textmobile'
          href="mailto:sohammassage.contact@gmail.com"
        >
          <i className="fa-solid fa-envelope footer-icon" aria-hidden="true"></i>
          sohammassage.contact@gmail.com
        </a>

        {/* Adresse (juste texte) */}
        <p className='footer-contact textmobile'>
          <i className="fa-solid fa-location-dot footer-icon" aria-hidden="true"></i>
          LA MABILAIS, Rennes Centre
        </p>
      </div>

      <img src={logo} alt="Logo Maison So Ham" className="footer-logo" />
      <p className="footer-small smallmobile">
        © 2025 Maison So Ham. Tous droits réservés.
      </p>
    </footer>
  );
}
