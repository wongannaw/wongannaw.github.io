import React, { Component } from 'react'
import { SectionHeading, SubHead, UnorderedList, ListItem } from '../styles/content';
import { Grid, Row, Col } from '../styles/grid';

export default class Skills extends Component {
  render() {
    return (
      <Grid>
        <Row height={100}>
          <Col size={1}></Col>
            <Col size={2}>
              <SectionHeading>Skills and Interests</SectionHeading>
            </Col>
            <Col size={1}></Col>
        </Row>
        <Row height={500}>
          <Col size={1}></Col>
          <Col size={2}>
            <SubHead marginLeft='35%'>Technical Skills</SubHead>
            <UnorderedList marginLeft='35%'>
              <ListItem>Data Analysis</ListItem>
              <ListItem>Machine learning</ListItem>
              <ListItem>Data visualization</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>R</ListItem>
              <ListItem>SQL</ListItem>
            </UnorderedList>
          </Col>
          <Col size={2}>
            <SubHead marginLeft='10%'>Interests</SubHead>
            <UnorderedList marginLeft='10%'>
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
