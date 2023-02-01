import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan> Youdiowei Eteimorde </HighlightSpan> or Just <HighlightSpan> Eteims </HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt> software developer</HighlightAlt> who is passionate about all things <HighlightSpan> computing </HighlightSpan>.
      </p>
      
      <p>
        I'm curious by nature and my favorite question is <HighlightAlt>How does it work?</HighlightAlt>
      </p>

      <p>
        Currently exploring the world of computers from Deep Neural Networks to servers. 
      </p>

    </AboutWrapper>
  );
};

export default About;
