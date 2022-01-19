import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Welcome! My name is Oroghene Emudainohwo. I am currently studying Electrical Engineering in Drexel University with a minor in computer science. I have a greater passion for computer science, but electrical engineering is also an exciting field. I am a student of the Pennoni Honors College where I have explored fascinating thought-provoking topics such as fashion and history.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;