import React from 'react';
import Link from 'gatsby-link';
import {SectionsContainer, Section} from 'react-fullpage';

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '50px', // the section top padding
  sectionPaddingBottom: '50px', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};

const IndexPage = () => (
  <SectionsContainer {...options}>
    <Section>Page 1</Section>
    <Section>Page 2</Section>
    <Section>Page 3</Section>
  </SectionsContainer>
);

export default IndexPage;
