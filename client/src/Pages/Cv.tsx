import React from 'react';

import {
  Segment, Grid, Header, Icon,
} from 'semantic-ui-react';
import { ResponsiveRail } from '../components/ResponsiveRail';
import { useBreakpoint } from '../contextProviders/MediaContext';

// import Speartip from '../speartip_bold.svg';

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
            <Header subheader>admin@speartipsolutions.co.uk</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centred>
          {!mobile && <Grid.Column />}
          <Grid.Column width={mobile ? 16 : 8}>
            <Header subheader>Software Engineer</Header>
          </Grid.Column>
          <Grid.Column width={mobile ? 16 : 6}>
            <Icon style={{ verticalAlign: 'top', color: '#0a66c2' }} size="large" name="linkedin" />
            <Header
              subheader
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
              <p>
                MPhys Physics background. Expert Node.js experience, Strong Java knowledge, with training in Dev Ops, especially AWS and Docker, databases, React and other front end tools, as well as significant knowledge of Fortran and python.
              </p>
              <p>{useBreakpoint()}</p>
            </Segment>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

            <Segment>
              <ResponsiveRail text="Education" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec efficitur orci. Mauris condimentum enim blandit orci aliquam lacinia sed vitae mauris. Aenean ut ultrices dui. Vivamus fringilla vulputate mauris vel pretium. Suspendisse et mi eu urna laoreet placerat in at ex. Maecenas tortor est, sollicitudin vitae dictum ut, egestas eget augue. Vivamus porttitor nunc dictum turpis vehicula sagittis. Aenean vehicula ac erat ac vestibulum. Nulla euismod laoreet metus vitae facilisis. Ut fringilla euismod turpis nec pharetra. Ut ornare nibh quis nulla viverra suscipit.

                Phasellus elit tortor, ornare et ligula non, rutrum venenatis mi. Ut aliquam faucibus gravida. Ut ultricies tincidunt diam eu consectetur. Curabitur dui sapien, feugiat sit amet porta a, ornare nec neque. Maecenas iaculis eros id lacinia rutrum. Nullam aliquet volutpat turpis, et pellentesque erat. Morbi eget quam dapibus metus gravida aliquet. Nunc nec tincidunt massa. Phasellus quis tellus luctus justo pharetra sagittis eu eget risus. Morbi tincidunt sem a cursus accumsan. Suspendisse bibendum congue justo sed varius. Pellentesque a justo metus. Suspendisse dui velit, placerat non facilisis scelerisque, aliquam aliquam tellus.

                Donec a pharetra orci. Donec feugiat, metus non ultrices vehicula, nulla arcu hendrerit tellus, eget tempus odio magna a ex. Proin vulputate eleifend tellus ut posuere. In tincidunt rutrum massa quis viverra. Praesent tincidunt commodo lectus, eu consectetur ante accumsan ut. Suspendisse condimentum nisl quis molestie ultrices. Nulla nec tincidunt odio, non bibendum justo. Curabitur molestie magna mi, at lacinia elit dignissim eu. Fusce ut lorem lorem.

                Nulla congue velit sed dui egestas, non convallis erat cursus. In egestas lacus luctus ante semper, interdum cursus erat consequat. Ut hendrerit, sem eget ultrices eleifend, tellus sapien tincidunt sem, id imperdiet ipsum felis eu sapien. Vivamus ligula tellus, pellentesque eget dolor dignissim, molestie bibendum lacus. Proin nec turpis laoreet, bibendum neque et, facilisis enim. Vivamus vel turpis non eros blandit luctus in quis elit. Fusce bibendum consequat velit, non consequat tortor. Cras viverra facilisis ligula, ac elementum libero ullamcorper sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eget nulla ut diam rutrum blandit ac eu sem. Morbi luctus non massa in dictum. Cras sodales, tortor sed aliquet tempus, velit diam hendrerit nisi, id ultrices dui ligula quis arcu. Pellentesque vel purus in lacus fermentum commodo sit amet non velit. Mauris ut lorem quis erat porta cursus nec vel risus. Sed iaculis lacus non mi auctor maximus. Praesent posuere, mauris vel eleifend blandit, elit arcu aliquam justo, vitae venenatis arcu nibh et risus.

                Praesent id ultrices ex, vel ultricies odio. Morbi lacinia ipsum lorem, et sodales quam lacinia id. Vestibulum pellentesque semper justo vitae facilisis. Integer eu odio at nisl elementum scelerisque et sit amet ligula. Integer ullamcorper, quam at eleifend scelerisque, nibh felis scelerisque urna, at tempor quam sem et erat. Etiam non cursus metus, quis tincidunt massa. Cras consectetur, arcu vitae pretium suscipit, quam urna faucibus nibh, et gravida lectus lacus in risus. Aenean quis feugiat elit. Curabitur dignissim augue at vulputate volutpat. Suspendisse imperdiet eros sit amet ipsum fringilla, sed posuere ipsum dictum. Nulla viverra ut urna at faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse congue, massa sed lobortis gravida, turpis odio egestas velit, sit amet placerat felis eros at risus. Donec aliquet feugiat orci in mollis. Mauris nec quam ligula.

              </p>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
};

export default CV;
