import React from "react";
import "@styles/css/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} JANNI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
