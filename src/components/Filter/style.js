import styled from "styled-components";

import { ReactComponent as Search } from "../../assets/icons/SearchSearch.svg";
import { ReactComponent as Group } from "../../assets/icons/Group.svg";
import { ReactComponent as Home } from "../../assets/icons/SearchHome.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  margin: 10px 0px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 20px;
`;
const Icons = styled.div``;

Icons.Search = styled(Search)`
  margin-right: 8px;
`;
Icons.Group = styled(Group)`
  margin-right: 8px;
`;
Icons.Home = styled(Home)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: #ffff;
  padding-bottom: 0px;
  font-weight: 600;
`;
const Sec = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 0px 10px;
  width: fit-content;
`;
const BottomSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  justify-content: flex-end;
  background-color: #f6f8f9;
`;
const MenuTitle = styled.div`
  //styleName: Paragraph/Medium/Semibold;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
`;
export {
  Container,
  Wrapper,
  Icons,
  MenuWrapper,
  Sec,
  BottomSection,
  MenuTitle,
};
