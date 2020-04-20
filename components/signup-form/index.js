import { SignUpWrap, Title, Subtitle, Textbox, Button } from './style';

const SignUpForm = () => (
  <SignUpWrap>
    <Title>Subscribe</Title>
    <Subtitle>Enter your email below to get notified about the new roadmaps, guides and updates</Subtitle>
    <form action="https://developerguide.heroku.com" target="_blank" method="post">
      <Textbox type="email" name="EMAIL" required placeholder="Your email" />
      <div style={{position: 'absolute', left: '-5000px'}}>
        <input type="text" name="b_6f57b741a6a939744f1f203a0_f9ca4d6aee" tabIndex="-1" />
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  </SignUpWrap>
);

export default SignUpForm;
