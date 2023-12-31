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
import { Button } from '@mui/material';
import Image1Image from 'src/assets/images/Home_image_1.png';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const Home1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
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

const Image1 = styled('img')({
  height: `844px`,
  width: `559px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-57px`,
  top: `0px`,
});

const Frame1 = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `390px`,
  height: `147px`,
  left: `0px`,
  top: `495px`,
  overflow: `hidden`,
});

const Button1 = styled(Button)(({ theme }) => ({
  width: `321px`,
  height: `58px`,
  position: `absolute`,
  left: `34px`,
  top: `16px`,
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

const Button2 = styled(Button)(({ theme }) => ({
  width: `321px`,
  height: `58px`,
  position: `absolute`,
  left: `34px`,
  top: `90px`,
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

const Frame2 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 0.5)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `390px`,
  height: `89px`,
  left: `0px`,
  top: `196px`,
  overflow: `hidden`,
});

const WelcomeToPrague = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Compact Rounded`,
  fontWeight: `900`,
  fontSize: `32px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  textShadow: `0px 10px 10px rgba(0, 0, 0, 0.25)`,
  width: `387px`,
  height: `56px`,
  position: `absolute`,
  left: `3px`,
  top: `-4px`,
});

const ExploreOurHotelsAndA = styled('div')({
  textAlign: `center`,
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
  textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  width: `288px`,
  height: `47px`,
  position: `absolute`,
  left: `53px`,
  top: `42px`,
});

function Home(props) {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/activities`;
    navigate(path);
  }

  return (
    <Home1 className={props.className}>
      <Image1 src={Image1Image} loading="lazy" alt={'image 1'} />
      <Frame1>
        <Button1
          size={'large'}
          color={'warning'}
          disabled={false}
          variant={'contained'}
          onClick={() => routeChange('')}
        >
          Activities
        </Button1>
        <Button2
          size={'large'}
          color={'warning'}
          disabled={false}
          variant={'contained'}
        >
          {'Hotel Information'}
        </Button2>
      </Frame1>
      <Frame2>
        <WelcomeToPrague>{`Welcome to Prague!`}</WelcomeToPrague>
        <ExploreOurHotelsAndA>
          {`Explore our Hotels and Activities`}
        </ExploreOurHotelsAndA>
      </Frame2>
    </Home1>
  );
}

export default Home;
