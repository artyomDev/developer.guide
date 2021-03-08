import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faHackerNewsSquare, faRedditSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { getContributionUrl } from "lib/guide";
import {
  getTwitterUrl
} from "lib/url";
import {
  AuthorBio,
  AuthorImg,
  AuthorInfoWrap,
  AuthorMeta,
  ContributeIcon,
  FooterBg,
  FooterContainer,
  FooterWrap,
  ShareIcons,
  ShareWrap
} from './style';


const GuideFooter = ({
  guide,
  guide: {
    author = {}
  } = {}
}) => (
  <FooterWrap>
    <FooterBg className="border-top">
      <FooterContainer>
        <AuthorInfoWrap>
          <AuthorImg src={ author.picture } alt={ author.name }/>
          <AuthorMeta>
            <h4><a href={ getTwitterUrl(author.twitter) } target="_blank">{ author.name }</a></h4>
            <AuthorBio>{ author.bio }</AuthorBio>
          </AuthorMeta>
        </AuthorInfoWrap>
      </FooterContainer>
    </FooterBg>
  </FooterWrap>
);

export default GuideFooter;
