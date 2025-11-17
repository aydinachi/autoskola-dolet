'use client';
import {
  Wrapper,
  Inner,
  Header,
  SectionLabel,
  IntroText,
  ContentGrid,
  InfoCard,
  ReasonsCard,
  ReasonsList,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import {
  desktopHeaderPhrases,
  introParagraphs,
  infoSections,
  reasons,
} from './constants';

const OffersSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <SectionLabel>Auto škola DOLET</SectionLabel>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          <IntroText>
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </IntroText>
        </Header>
        <ContentGrid>
          {infoSections.map((section, index) => (
            <InfoCard key={index}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </InfoCard>
          ))}
        </ContentGrid>
        <ReasonsCard>
          <h3>Zašto izabrati Auto Školu DOLET?</h3>
          <ReasonsList>
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ReasonsList>
        </ReasonsCard>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
