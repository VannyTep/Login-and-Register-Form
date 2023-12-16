import "../styles/components/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="Footer">
        <footer>
          <div className="footer">
            <div className="row">
              <ul id="useful-links-list">
                <li>
                  <Link id="useful-links" to="" href="#">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link id="useful-links" to="" href="#">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link id="useful-links" to="" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link id="useful-links" to="" href="#">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link id="useful-links" to="" href="#">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div class="row">
              INFERNO Copyright © 2021 Inferno - All rights reserved || Designed
              By: Mahesh
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
