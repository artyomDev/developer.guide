import { AboutHeaderWrap } from './style';
import siteConfig from "content/site";

const AboutHeader = () => (
  <AboutHeaderWrap>
    <div className="container container-small">
      <div className="author-info">
        <img className='author-img d-none d-sm-none d-md-block d-lg-block d-xl-block' src="/artem.jpeg" />
        <div className="author-msg">
          <h1>Hello, I'm Artem Medianyk.</h1>
          <p>I created <span className='flow-black'>developer's guide</span> to help developers find their path if they are confused and help them grow in their career.</p>
          <div className="author-links">
            <a href="https://github.com/artyomDev/developer.guide">artyomDev</a>
          </div>
        </div>
      </div>
    </div>
  </AboutHeaderWrap>
);

export default AboutHeader;
