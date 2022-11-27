import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
const Wrapper = styled.div`
  height: 417px;
  background-color: #0d263b;
`;
const Container = styled.div`
  padding: var(--padding);
  padding-top: 48px;
  width: 100%;
  min-width: 1440px;

  display: flex;
  justify-content: space-between;
`;
const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

Part.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Part.Subtitle = styled.a`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  display: flex;
  align-items: center;
  /* Color / 5 */
  margin-bottom: 20px;
  color: #ffffff;
`;
Part.Icons = styled.div`
  display: flex;
  gap: 37px;
  margin-top: 10px;
`;
const BottomCon = styled.div`
  margin: var(--padding);
  border-top: 1px solid rgba(255, 255, 255, 0.3); ;
`;
const Icon = styled.div``;

Icon.Location = styled(GrLocation)`
  & path {
    fill: #ffffff;
  }
  font-size: 23px;
  margin-right: 22px;
`;
Icon.Phone = styled(GrPhone)`
  & path {
    fill: #ffffff;
  }
  font-size: 23px;
  margin-right: 22px;
`;
Icon.Mail = styled(GrMail)`
  & path {
    fill: #ffffff;
  }
  font-size: 23px;
  margin-right: 22px;
`;
Icon.Twitter = styled(GrTwitter)`
  & path {
    fill: #ffffff;
  }
  font-size: 18px;
`;
Icon.Facebook = styled(GrFacebookOption)`
  & path {
    fill: #ffffff;
  }
  font-size: 18px;
`;
Icon.Instagram = styled(GrInstagram)`
  & path {
    fill: #ffffff;
  }
  font-size: 18px;
`;
Icon.Linkedin = styled(GrLinkedinOption)`
  & path {
    fill: #ffffff;
  }
  font-size: 18px;
`;

export { BottomCon, Container, Wrapper, Part, Icon };
