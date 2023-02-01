import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>Guest</User>@<WebsiteName>eteim-terminal-portfolio</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
