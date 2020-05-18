import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <footer>
        <hr />
        <table className="table-footer">
          <tr>
            <th>Customer Care</th>
            <th>Customer Service</th>
            <th>Shipment Operational Hours</th>
            <th>We Accept:</th>
          </tr>
          <tr>
            <td>How to order</td>
            <td>
              <i className="fas fa-phone-alt"></i> 081289879972
            </td>
            <td>Monday - Friday: 08.00 AM - 05.00 PM</td>
            <td>
              <i className="fab fa-cc-visa"></i>{" "}
              <i className="fab fa-cc-mastercard"></i>
            </td>
          </tr>
          <tr>
            <td>FAQs</td>
            <td>
              <i className="fas fa-envelope"></i> custservice@semerbak.com
            </td>
          </tr>
          <tr>
            <td>Privacy policy</td>
            <td>
              <i className="fas fa-map-marker-alt"></i> Jakarta
            </td>
            <td></td>
            <th>Social Media:</th>
          </tr>
          <tr>
            <td>Terms and Conditions</td>
            <td></td>
            <td></td>
            <td>
              <i className="fab fa-twitter"></i>{" "}
              <i className="fab fa-facebook-f"></i>{" "}
              <i className="fab fa-instagram"></i>
            </td>
          </tr>
          <tr>
            <td>Contact us</td>
          </tr>
        </table>
      </footer>
    </div>
  );
};

export default Footer;
