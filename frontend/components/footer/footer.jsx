import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="outer-footer">
        <div className="inner-footer">
          <div className="footer-left-side">
            <p>This is a Moktar Jama production</p>
            <a target="_blank" className="footer-link "href="http://www.moktarjama.com">Check out my site!</a>
          </div>
          <div className="footer-right-side">
            <ul className="icons">
              <li><a target="_blank" href="https://github.com/pojibuh" className="icon fa fa-github circle"></a></li>
              <li><a target="_blank" href="https://angel.co/moktar-jama-1" className="icon fa fa-angellist circle"></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/moktar-jama-40631094/" className="icon fa fa-linkedin-square circle"></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
