import Socials from './Socials';

function Footer() {
  return (
    <footer className="footer">
      <section className="subscribe">
        <div className="subscribe__wrapper">
          <h2 className="heading-secondary">Subscribe to our emails</h2>
          <p>
            Be the first who know about new collections and exclusive offers.
          </p>
          <form action="">
            <label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </label>
          </form>
          <Socials />
        </div>
      </section>
      <div className="footer__wrapper">
        <p>Copyright 2000-2022 Ulta Beauty, Inc.</p>
        <ul>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
