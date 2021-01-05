import React, { Component } from 'react'
import { SectionHeading, SubHead, UnorderedList, ListItem } from '../styles/about';
import { Grid, Row, Col } from '../styles/grid';

export default class Skills extends Component {
  render() {
    return (
      <Grid>
        <Row height={100}>
          <Col size={1}></Col>
            <Col size={3}>
              <SectionHeading>Skills and Interests</SectionHeading>
            </Col>
        </Row>
        <Row height={500}>
          <Col size={1}></Col>
          <Col size={2}>
            <SubHead>Technical Skills</SubHead>
            <UnorderedList>
              <ListItem>Data Analysis</ListItem>
              <ListItem>Machine learning</ListItem>
              <ListItem>Data visualization</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>R</ListItem>
              <ListItem>SQL</ListItem>
            </UnorderedList>
          </Col>
          <Col size={2}>
            <SubHead>Interests</SubHead>
            <UnorderedList>
              <ListItem>AI Ethics</ListItem>
              <ListItem>Human Computer Interaction</ListItem>
              <ListItem>Mentorship</ListItem>
              <ListItem>Technology for social good</ListItem>
            </UnorderedList>
          </Col>
        </Row>
      </Grid>
    )
  }
}
