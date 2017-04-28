import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="outer-footer">
        <div className="inner-footer">
          <div className="footer-left-side">
            <p>This is a Moktar Jama production</p>
            <p>Done for the lulz/educational purposes</p>
          </div>
          <div className="footer-right-side">
            <p>And this is where I would put my links</p>
            <p>...if I had any</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
