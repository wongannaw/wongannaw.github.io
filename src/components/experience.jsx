import React, { Component } from 'react'
import { Grid, Row, Col } from '../styles/grid';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { SectionHeading } from '../styles/content';
import 'react-vertical-timeline-component/style.min.css';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SchoolIcon from '@material-ui/icons/School';

export default class Experience extends Component {
  render() {
    return (
      <Grid>
        <Row height={100}>
          <Col size={1}></Col>
          <Col size={2}>
            <SectionHeading>Experience</SectionHeading>
          </Col>
          <Col size={1}></Col>
        </Row>
        <Row height={500}>
          <Col size={1}></Col>
          <Col size={4} marginLeft="15%">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 - present"
                iconStyle={{ background: '#0f62fe', color: '#fff' }}
                icon={<EqualizerIcon />}
              >
                <h3 className="vertical-timeline-element-title">Data Scientist @ IBM</h3>
                <h4 className="vertical-timeline-element-subtitle" color="#fff">CIO Data Insights</h4>
                <p>
                  Data : Analysis | Warehousing | Modeling | Visualization<br />
                  Python: sklearn | pandas | numpy | plotly<br />
                  SQL: Presto | MySQL | postgreSQL
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - 2020"
                iconStyle={{ background: '#0f62fe', color: '#fff' }}
                icon={<EqualizerIcon />}
              >
                <h3 className="vertical-timeline-element-title">Data Scientist @ IBM</h3>
                <h4 className="vertical-timeline-element-subtitle">Data Science and Insights for Customer Success</h4>
                <p>
                  Data : Pipelines | Mining | Prediction<br />
                  Python : pySpark | sklearn | pandas | numpy
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2018"
                iconStyle={{ background: '#cc002b', color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Statistics and Machine Learning</h3>
                <h4 className="vertical-timeline-element-subtitle">Carnegie Mellon University</h4>
                <p>
                  Statistics : Regression | Data Mining | Stochastic Modeling | Probability<br />
                  Machine Learning : Natural Language Processing | Artificial Intelligence<br />
                  Human Computer Interaction : User-Centered Research and Evaluation | Interface Programming

                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
          <Col size={1}></Col>
        </Row>
      </Grid>
    )
  }
}
