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
          <ul className="socials">
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="45"
                  viewBox="0 0 24 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8936 45V25.3182H22.4363L23.681 17.1682H15.8936V11.8822C15.8936 9.65809 16.9866 7.47969 20.4629 7.47969H23.9998V0.548409C23.9998 0.548409 20.7816 0 17.7152 0C11.3244 0 7.13467 3.8998 7.13467 10.9529V17.153H0V25.303H7.13467V44.9848H15.9088L15.8936 45Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_34_3)">
                    <path
                      d="M35.2073 8.3855C33.7187 8.3855 32.5145 9.61515 32.5145 11.1351C32.5145 12.6551 33.7187 13.8848 35.2073 13.8848C36.6959 13.8848 37.9001 12.6551 37.9001 11.1351C37.9001 9.61515 36.6959 8.3855 35.2073 8.3855Z"
                      fill="currentColor"
                    />
                    <path
                      d="M23.1984 11.9209C16.943 11.9209 11.8584 17.1128 11.8584 23.5001C11.8584 29.8875 16.943 35.0793 23.1984 35.0793C29.4537 35.0793 34.5383 29.8875 34.5383 23.5001C34.5383 17.1128 29.4537 11.9209 23.1984 11.9209ZM23.1984 30.9122C19.201 30.9122 15.9395 27.5819 15.9395 23.5001C15.9395 19.4184 19.201 16.088 23.1984 16.088C27.1958 16.088 30.4573 19.4184 30.4573 23.5001C30.4573 27.5819 27.1958 30.9122 23.1984 30.9122Z"
                      fill="currentColor"
                    />
                    <path
                      d="M32.1967 47H13.832C6.20519 47 0 40.6639 0 32.8761V14.1239C0 6.33612 6.20519 0 13.832 0H32.2134C39.8403 0 46.0455 6.33612 46.0455 14.1239V32.8932C46.0455 40.681 39.8403 47.0171 32.2134 47.0171L32.1967 47ZM13.832 4.42333C8.59694 4.42333 4.33192 8.77834 4.33192 14.1239V32.8932C4.33192 38.2387 8.59694 42.5938 13.832 42.5938H32.2134C37.4486 42.5938 41.7136 38.2387 41.7136 32.8932V14.1239C41.7136 8.77834 37.4486 4.42333 32.2134 4.42333H13.832Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_3">
                      <rect width="46.0288" height="47" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="37"
                  height="42"
                  viewBox="0 0 37 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.0091 16.9933C35.6593 17.0201 35.323 17.047 34.9733 17.047C31.1801 17.047 27.6424 15.1409 25.5709 11.9732V29.2349C25.5709 36.2819 19.8406 42 12.7787 42C5.71679 42 0 36.2819 0 29.2349C0 22.1879 5.73024 16.4832 12.7922 16.4832C13.0612 16.4832 13.3168 16.5101 13.5858 16.5235V22.8054C13.3302 22.7785 13.0612 22.7248 12.7922 22.7248C9.18722 22.7248 6.26829 25.6376 6.26829 29.2349C6.26829 32.8322 9.18722 35.745 12.7922 35.745C16.3971 35.745 19.5851 32.9128 19.5851 29.3154L19.6523 0H25.6785C26.2434 5.39597 30.6017 9.61074 36.0225 10V16.9933"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
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
