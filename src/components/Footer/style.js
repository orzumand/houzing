import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
const Wrapper = styled.div`
  height: 417px;
  background-color: #0d263b;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--padding);
  margin-top: 80px;
`;
const Container = styled.div`
  padding-top: 48px;
  width: 100%;
  max-width: 1440px;
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
const BottomCon = styled.div`
  margin: var(--padding);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  text-align: center;
`;

const LogoTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: auto;
`;
const ToTop = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  width: 45px;
  height: 45px;
  background-color: #0061df;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;
Logo.Arrow = styled(IoIosArrowUp)``;
export {
  BottomCon,
  Container,
  Wrapper,
  Part,
  Icon,
  Logo,
  LogoTitle,
  LogoWrapper,
  ToTop,
};
