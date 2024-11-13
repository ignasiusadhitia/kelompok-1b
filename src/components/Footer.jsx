import React from "react";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import reactIcon from "../assets/react-icon.png";
import wordpressIcon from "../assets/wordpress-icon.png";
import wixIcon from "../assets/wix-icon.png";

const Footer = () => {
  return (
    <footer className="bg-dark-blue-100 text-white py-10 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-2 ">
          <h3 className="text-lg font-bold text-white">About Us</h3>
          <hr className="border-2 border-peach-red-100 w-10" />
          <p className="font-light pt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-red-500">
              <img src={linkedinIcon} alt="linkedin-icon" classNameName="w-10 h-10" />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <img src={instagramIcon} alt="linkedin-icon" classNameName="w-10 h-10" />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <img src={facebookIcon} alt="linkedin-icon" classNameName="w-10 h-10" />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <img src={twitterIcon} alt="linkedin-icon" classNameName="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Services</h3>
          <hr className="border-2 border-peach-red-100 w-10" />
          <ul className="space-y-2 pt-4">
            <li>
              <a href="#" className="text-white hover:text-red-500">
                Web Design/Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
                HubSpot Integration
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
                Email Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
                Website Migration
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Career</h3>
          <hr className="border-2 border-peach-red-100 w-10" />
          <ul className="space-y-4 pt-4">
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={reactIcon}
                  alt="ReactJS Developer"
                  className="w-12 h-12 object-contain bg-white rounded-md p-2"
                />
                <div>
                  <h4 className="font-bold text-peach-red-100">ReactJS Dev.</h4>
                  <p className="text-sm">1-5 Years of Exp.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={wordpressIcon}
                  alt="Wordpress Developer"
                  className="w-12 h-12 object-contain bg-white rounded-md p-2"
                />
                <div>
                  <h4 className="font-bold text-peach-red-100">Wordpress Dev.</h4>
                  <p className="text-sm">1-5 Years of Exp.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  src={wixIcon}
                  alt="Python Developer"
                  className="w-12 h-12 object-contain bg-white rounded-md p-2"
                />
                <div>
                  <h4 className="font-bold text-peach-red-100">Python Developer</h4>
                  <p className="text-sm">1-5 Years of Exp.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Subscribe Us</h3>
          <hr className="border-2 border-peach-red-100 w-10" />
          <p className="font-light pt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
          <div className="pt-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-white text-gray-700 px-4 py-2 rounded-md focus:outline-none w-full"
            />
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
