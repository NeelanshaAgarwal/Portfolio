const Footer = () => {
    return (
      <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
        <div className="flex gap-2 text-white-500">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <img src="./assets/github.png" alt="github" className="w-10 h-10" />
          </div>
          <div className="social-icon">
            <img src="./assets/linkedin.png" alt="twitter" className="w-10 h-10" />
          </div>
          <div className="social-icon">
            <img src="./assets/instagram.png" alt="instagram" className="w-10 h-10" />
          </div>
        </div>
  
        <p className="text-white-500">© 2025 Neelansha Agarwal. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
