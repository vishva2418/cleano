import React from "react";
import "../css/Team.css"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamMember1 from "../Images/image-5.jpeg"; 
import teamMember2 from "../Images/image-6.jpeg";
import teamMember3 from "../Images/image-8.jpeg";
import teamMember4 from "../Images/image-9.webp";
import teamMember5 from "../Images/image-11.jpeg";  
import teamMember6 from "../Images/image-11.jpeg";  

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <p>Our dedicated professionals work hard to provide the best cleaning services with excellence and reliability.</p>

      <div className="team-grid">
        {/* Team Member 1 */}
        <div className="team-member">
          <img src={teamMember1} alt="John Doe" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
          <p className="team-bio">With 15+ years in the industry, John is dedicated to creating a spotless world with a strong team.</p>
          <div className="team-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <img src={teamMember2} alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Operations Manager</p>
          <p className="team-bio">Jane ensures smooth workflows and top-quality services, handling staff training and client satisfaction.</p>
          <div className="team-social">
          <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-member">
          <img src={teamMember3} alt="Michael Lee" />
          <h3>Michael Lee</h3>
          <p>Lead Cleaner</p>
          <p className="team-bio">Michael specializes in deep cleaning, eco-friendly products, and advanced sanitization techniques.</p>
          <div className="team-social">
          <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="team-member">
          <img src={teamMember4} alt="Sarah Williams" />
          <h3>Sarah Williams</h3>
          <p>Customer Relations</p>
          <p className="team-bio">Sarah ensures excellent customer service, handling client inquiries and service follow-ups.</p>
          <div className="team-social">
          <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Team Member 5  */}
        <div className="team-member">
          <img src={teamMember5} alt="David Brown" />
          <h3>David Brown</h3>
          <p>Marketing Manager</p>
          <p className="team-bio">David drives our marketing strategies, bringing CleanO services to more homes and businesses.</p>
          <div className="team-social">
          <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        
      </div>

     
    </div>
  );
};

export default Team;
