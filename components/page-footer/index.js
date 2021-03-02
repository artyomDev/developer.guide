import { FooterWrap } from './style.js';
import './carbon.scss';

const PageFooter = () => (
  <FooterWrap className="border-top">
    <div className="container">
      <div className="foot-cols-wrap row">
        <div className="site-meta-wrap col-12 col-sm-12 col-lg col-xl col-md-12">
          <div className="site-meta">
            <div className="brand-detail">
              <a href="/" className='brand'><img src="/brand.png" alt="" /> developer.guide </a>
            </div>
            <div className="brand-explanation">
              <p>Community created guides, articles, resources and journeys to help you choose your path and grow in your career.</p>
            </div>
            <p className='meta-links'>
              &copy; developer.guide &middot;
              &nbsp; <a href="/about">FAQ</a> &middot;
              &nbsp; <a href="/terms">Terms</a> &middot;
              &nbsp; <a href="/privacy">Privacy</a>
            </p>
          </div>
        </div>
        <div className="site-contribute foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className='foot-header'>About</li>
            <li><a href='/about'>About this Site</a></li>
          </ul>
        </div>
        <div className="site-learn foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className="foot-header">Learn</li>
            <li><a href="/guides">Read Guides</a></li>
            <li><a href="/podcasts">Podcasts</a></li>
          </ul>
        </div>
        <div className="site-learn foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className="foot-header">Most Visited</li>
            <li><a href="/frontend">Frontend Guide</a></li>
            <li><a href="/backend">Backend Guide</a></li>
            <li><a href="/devops">DevOps Guide</a></li>
            <li><a href="/roadmaps">Upcoming</a></li>
          </ul>
        </div>
      </div>
    </div>


  </FooterWrap>
);

export default PageFooter;
