import React from 'react';

import {
  Segment, Grid, Header, Icon, Table, List,
} from 'semantic-ui-react';
import { ResponsiveRail } from '../components/ResponsiveRail';
import { useBreakpoint } from '../contextProviders/MediaContext';
import { ResponsiveGrid } from '../components/ResponsiveGrid';

import Terraform from '../images/terraform.png';
import Java from '../images/java.png';
import Ansible from '../images/ansible.png';
import AWS from '../images/aws.png';
import Fortran from '../images/fortran.png';
import Python from '../images/python.png';
import ReactLogo from '../images/react.png';
import Docker from '../images/docker.png';
import { WorkItem } from '../components/WorkItem';

const IconsGrid = (
  <ResponsiveGrid columns={3}>
    <Icon style={{ verticalAlign: 'top', color: 'green' }} size="huge" name="node" />
    <img src={Java} alt="java" />
    <img src={Python} alt="python" />
    <img src={Docker} alt="Docker" />
    <img src={Ansible} alt="ansible" />
    <img src={Terraform} alt="terraform" />
    <img src={ReactLogo} alt="React" />
    <img src={AWS} alt="AWS" />
    <img src={Fortran} alt="Fortran" />
  </ResponsiveGrid>
);

const bacon = 'Bacon ipsum dolor amet shoulder picanha fatback jowl pastrami buffalo tail pancetta cupim. Pastrami shankle hamburger bresaola cow boudin corned beef tenderloin capicola chicken frankfurter beef ribs. Porchetta drumstick ham hamburger pig alcatra pancetta. Alcatra tongue corned beef pastrami. Corned beef rump short loin, pork loin shankle burgdoggen meatball picanha cow leberkas meatloaf swine pork pig. Kevin shoulder alcatra, tenderloin landjaeger pork loin frankfurter short ribs cow prosciutto. Flank hamburger doner venison pork.';

const CV: React.FC = () => {
  const breakpoint = useBreakpoint();
  const mobile = breakpoint === 'mobile';
  return (
    <>
      <Grid container className="text" doubling verticalAlign="middle" style={{ paddingTop: '2em' }}>
        <Grid.Row centered>
          <Grid.Column width={mobile ? 16 : 8}>
            <Header size="huge" style={{ whiteSpace: 'nowrap' }}>Samuel Jarvis</Header>
          </Grid.Column>
          <Grid.Column width={mobile ? 16 : 6}>
            <Header sub>admin@speartipsolutions.co.uk</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {!mobile && <Grid.Column />}
          <Grid.Column width={mobile ? 16 : 8}>
            <Header sub>Software Engineer</Header>
          </Grid.Column>
          <Grid.Column width={mobile ? 16 : 6}>
            <Icon style={{ verticalAlign: 'top', color: '#0a66c2' }} size="large" name="linkedin" />
            <Header
              sub
              color="blue"
              as="a"
              href="https://linkedin.com/in/samuel-jarvis-091392124/"
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              LinkedIn
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

            <Segment>
              <ResponsiveRail text="Intro" />
              <ResponsiveRail text="Intro" railProps={{ position: 'right' }} RailReplacementItem={IconsGrid} hide />
              <List size="large" animated bulleted>
                <List.Item>
                  MPhys Physics background.
                </List.Item>
                <List.Item>
                  Expert Node.js experience, Strong Java knowledge
                </List.Item>
                <List.Item>
                  Strong Experience in Dev Ops, especially Ansible, Terraform, and Docker
                </List.Item>
                <List.Item>
                  Cloud Experience, primarily AWS, but also Azure and Oracle
                </List.Item>
                <List.Item>
                  Databases, including Mongo, SQL, DynamoDB
                </List.Item>
                <List.Item>
                  React and other front end tools,
                </List.Item>
                <List.Item>
                  Significant knowledge of Fortran and python.
                </List.Item>
              </List>
            </Segment>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

            <Segment>
              <ResponsiveRail text="Work" />
              <WorkItem jobTitle="Technical Lead" company="BAE Systems" startDate="0519" current>
                {bacon}
              </WorkItem>
              <WorkItem jobTitle="Software Engineer" company="BAE Systems" startDate="0517" endDate="0519">
                {bacon}
              </WorkItem>
              <WorkItem jobTitle="Trainee Software Engineer" company="BAE Systems" startDate="1116" endDate="0517">
                {bacon}
              </WorkItem>
            </Segment>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

            <Table
              as={Segment}
              style={{
                boxShadow: '0 1px 2px 0 rgb(34 36 38 / 15%)',
                padding: useBreakpoint() !== 'desktop' && '1em 0',
              }}
            >
              <ResponsiveRail text="Education" />
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Institution</Table.HeaderCell>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Subject</Table.HeaderCell>
                  <Table.HeaderCell>Grade</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>University of York</Table.Cell>
                  <Table.Cell singleLine>Masters Degree (integrated)</Table.Cell>
                  <Table.Cell>Physics</Table.Cell>
                  <Table.Cell>2:1</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>McAuley Catholic High School</Table.Cell>
                  <Table.Cell>A Levels</Table.Cell>
                  <Table.Cell>Physics, Maths, Further Maths</Table.Cell>
                  <Table.Cell>A,B,B</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>McAuley Catholic High School</Table.Cell>
                  <Table.Cell>GCSEs</Table.Cell>
                  <Table.Cell disabled style={{ fontStyle: 'italic' }}>various</Table.Cell>
                  <Table.Cell singleLine>5 A*, 7A, 2B, C</Table.Cell>

                </Table.Row>
              </Table.Body>
            </Table>

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
};

export default CV;
