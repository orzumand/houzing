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

export { Container, Wrapper, Icons };
