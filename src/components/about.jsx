import React, { Component } from 'react'
import { SectionHeading, LeftImage, SubHead, RightP } from '../styles/about';
import { Grid, Row, Col } from '../styles/grid';
import { GlobalStyle } from '../styles/globalStyles';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Row height={100}>
          <Col size={1}></Col>
          <Col size={3}>
            <SectionHeading>Howdy World! I'm Anna</SectionHeading>
          </Col>
        </Row>
        <Row height={500}>
          <Col size={1}></Col>
          <Col size={2}>
            <LeftImage></LeftImage>
          </Col>
          <Col size={2}>
            <SubHead>About Me</SubHead>
              <RightP>
                Currently I am a Data Scientist working for IBM in Austin, TX.
                I graduated from Carnegie Mellon University in 2018 with a BSc in Statistics and Machine Learning.
              </RightP>
          </Col>
        </Row>
      </Grid>
    )
  }
}
