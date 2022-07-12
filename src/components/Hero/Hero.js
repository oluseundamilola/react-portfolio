import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Dami Oluseun <br />
        outstanding Web Developer
      </SectionTitle>
      <SectionText>
        Building awesome website sites and apps using React and Angular.
      </SectionText>
      <Button onClick= { () => window.location = 'https://gmail.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;