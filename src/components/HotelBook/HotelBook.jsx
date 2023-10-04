/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { SvgIcon, Button } from '@mui/material';
import Vector1Image from 'src/assets/images/HotelBook_Vector_1.png';
import Vector3Image from 'src/assets/images/HotelBook_Vector_3.png';
import Vector4Image from 'src/assets/images/HotelBook_Vector_4.png';
import Vector2Image from 'src/assets/images/HotelBook_Vector_2.png';
import { styled } from '@mui/material/styles';
import PayPal from 'src/components/PayPal/PayPal';
import GooglePay from 'src/components/GooglePay/GooglePay';
import Visa from 'src/components/Visa/Visa';
import MasterCard from 'src/components/MasterCard/MasterCard';
import Discover from 'src/components/Discover/Discover';

const HotelBook1 = styled('div')({
  backgroundColor: `rgba(186, 186, 186, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `844px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const PersonalInformation = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `390px`,
  height: `44px`,
  position: `absolute`,
  left: `0px`,
  top: `9px`,
});

const WeWillUseYourEmailAn = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `359px`,
  height: `48px`,
  position: `absolute`,
  left: `16px`,
  top: `53px`,
});

const Frame64 = styled('div')({
  backgroundColor: `rgba(221, 221, 221, 1)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `353px`,
  height: `214px`,
  left: `16px`,
  top: `102px`,
  overflow: `hidden`,
});

const FirstName = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `78px`,
  height: `18px`,
  position: `absolute`,
  left: `18px`,
  top: `8px`,
});

const Email = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `78px`,
  height: `18px`,
  position: `absolute`,
  left: `18px`,
  top: `67px`,
});

const PhoneNumber = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `127px`,
  height: `18px`,
  position: `absolute`,
  left: `18px`,
  top: `141px`,
});

const LastName = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `78px`,
  height: `18px`,
  position: `absolute`,
  left: `189px`,
  top: `8px`,
});

const Vector1 = styled('img')({
  height: `0px`,
  width: `110px`,
  position: `absolute`,
  left: `18px`,
  top: `50px`,
});

const Vector3 = styled('img')({
  height: `0px`,
  width: `310px`,
  position: `absolute`,
  left: `18px`,
  top: `111px`,
});

const Vector4 = styled('img')({
  height: `0px`,
  width: `310px`,
  position: `absolute`,
  left: `18px`,
  top: `183px`,
});

const Vector2 = styled('img')({
  height: `0px`,
  width: `139px`,
  position: `absolute`,
  left: `189px`,
  top: `50px`,
});

const YourTicketsOverview = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `242px`,
  height: `36px`,
  position: `absolute`,
  left: `18px`,
  top: `330px`,
}));

const Payment = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `242px`,
  height: `36px`,
  position: `absolute`,
  left: `18px`,
  top: `525px`,
}));

const Frame65 = styled('div')({
  backgroundColor: `rgba(221, 221, 221, 1)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `351px`,
  height: `149px`,
  left: `18px`,
  top: `371px`,
  overflow: `hidden`,
});

const BestOfPragueBoatTour = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `335px`,
  height: `41px`,
  position: `absolute`,
  left: `11px`,
  top: `5px`,
}));

const SundaySept32023 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `208px`,
  height: `32px`,
  position: `absolute`,
  left: `41px`,
  top: `50px`,
});

const Calendar = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `11px`,
  top: `51px`,
});

const Line1 = styled('div')({
  border: `1px solid rgba(0, 0, 0, 1)`,
  width: `313px`,
  height: `0px`,
  position: `absolute`,
  left: `15px`,
  top: `101px`,
});

const Q1HourPassAdultAge15 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `210px`,
  height: `16px`,
  position: `absolute`,
  left: `17px`,
  top: `114px`,
});

const Q8181Us = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `95px`,
  height: `17px`,
  position: `absolute`,
  left: `248px`,
  top: `113px`,
});

const Button1 = styled(Button)(({ theme }) => ({
  width: `346px`,
  height: `60px`,
  position: `absolute`,
  left: `22px`,
  top: `758px`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
}));

const Frame71 = styled('div')({
  backgroundColor: `rgba(221, 221, 221, 1)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `347px`,
  height: `168px`,
  left: `22px`,
  top: `568px`,
  overflow: `hidden`,
});

const Frame70 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `33px`,
  top: `583px`,
});

const Frame66 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Circle = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const PayPal1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `189px`,
  height: `32px`,
  margin: `0px 0px 0px 12px`,
}));

const PayPal2 = styled(PayPal)(({ theme }) => ({
  width: `29px`,
  height: `29px`,
  margin: `0px 0px 0px 12px`,
}));

const Frame67 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `7px 0px 0px 0px`,
});

const Circle1 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const GooglePay1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `189px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
}));

const GooglePay2 = styled(GooglePay)(({ theme }) => ({
  width: `35px`,
  height: `35px`,
  margin: `0px 0px 0px 10px`,
}));

const Frame69 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `7px 0px 0px 0px`,
});

const Circle2 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const CreditCard = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  width: `138px`,
  height: `32px`,
  margin: `0px 0px 0px 10px`,
}));

const Frame68 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 10px`,
});

const Visa1 = styled(Visa)(({ theme }) => ({
  width: `39px`,
  height: `39px`,
  margin: `0px`,
}));

const MasterCard1 = styled(MasterCard)(({ theme }) => ({
  width: `39px`,
  height: `39px`,
  margin: `0px 0px 0px 8px`,
}));

const Discover1 = styled(Discover)(({ theme }) => ({
  width: `42px`,
  height: `42px`,
  margin: `0px 0px 0px 8px`,
}));

function HotelBook(props) {
  return (
    <HotelBook1 className={props.className}>
      <SvgIcon
        component={ChevronLeftIcon}
        htmlColor={`rgba(0, 0, 0, 1)`}
      ></SvgIcon>
      <PersonalInformation>{`Personal Information`}</PersonalInformation>
      <WeWillUseYourEmailAn>
        {`We will use your email and phone number to deliver the tickets and send occasional inspiration and ideas for your future trips!`}
      </WeWillUseYourEmailAn>
      <Frame64>
        <FirstName>{`First name`}</FirstName>
        <Email>{`Email`}</Email>
        <PhoneNumber>{`Phone number`}</PhoneNumber>
        <LastName>{`Last name`}</LastName>
        <Vector1 src={Vector1Image} loading="lazy" alt={'Vector 1'} />
        <Vector3 src={Vector3Image} loading="lazy" alt={'Vector 3'} />
        <Vector4 src={Vector4Image} loading="lazy" alt={'Vector 4'} />
        <Vector2 src={Vector2Image} loading="lazy" alt={'Vector 2'} />
      </Frame64>
      <YourTicketsOverview>{`Your tickets overview`}</YourTicketsOverview>
      <Payment>{`Payment`}</Payment>
      <Frame65>
        <BestOfPragueBoatTour>
          {`Best of Prague: Boat Tours`}
        </BestOfPragueBoatTour>
        <SundaySept32023>{`Sunday, Sept 3, 2023`}</SundaySept32023>
        <Calendar>{`􀉉`}</Calendar>
        <Line1></Line1>
        <Q1HourPassAdultAge15>
          {`1 hour pass - Adult (Age 15^)x1`}
        </Q1HourPassAdultAge15>
        <Q8181Us>{`81,81 US$`}</Q8181Us>
      </Frame65>
      <Button1
        size={'large'}
        color={'warning'}
        disabled={false}
        variant={'contained'}
      >
        {'submit'}
      </Button1>
      <Frame71></Frame71>
      <Frame70>
        <Frame66>
          <Circle>{`􀀀`}</Circle>
          <PayPal1>{`PayPal`}</PayPal1>
          <PayPal2 />
        </Frame66>
        <Frame67>
          <Circle1>{`􀀀`}</Circle1>
          <GooglePay1>{`Google Pay`}</GooglePay1>
          <GooglePay2 />
        </Frame67>
        <Frame69>
          <Circle2>{`􀀀`}</Circle2>
          <CreditCard>{`Credit Card`}</CreditCard>
          <Frame68>
            <Visa1 />
            <MasterCard1 />
            <Discover1 />
          </Frame68>
        </Frame69>
      </Frame70>
    </HotelBook1>
  );
}

export default HotelBook;
