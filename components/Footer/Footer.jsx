import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.footerLogo}`}>
        <Image src="/logos.png" width={400} height={200} alt="logo" />
      </div>
      <div className={`${styles.footerInfo}`}>
        <div>
          <h5 className="text-uppercase mb-2">Explore LET's GO SHOP</h5>
          <ul className="">
            <li>
              <a href="#" className="text-white">
                Brands
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Clothing
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                New Arrivals
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-uppercase mb-2">CUSTOMER SERVICE</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Shipping and Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-uppercase mb-2">COMPANY INFO</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                News
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-uppercase mb-2">OTHER</h5>
          <ul >
            <li>
              <a href="#" className="text-white">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Become a Member
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Journal
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Send Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
