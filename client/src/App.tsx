import React, { useState, FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createMedia } from '@artsy/fresnel';
import './App.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { MediaContextProviderProps, MediaProps } from '@artsy/fresnel/dist/Media';
import Speartip from './speartip_bold.svg';
import SpeartipFade from './speartip_fade.svg';
import './animation.css';
import Home from './Pages/Home';

interface FixedCreateMedia {
  MediaContextProvider: React.ComponentType<MediaContextProviderProps<'mobile' | 'tablet' | 'desktop'>>
  Media: React.ComponentType<MediaProps<'mobile' | 'tablet' | 'desktop', never>& {as?:any}>
}

const { MediaContextProvider, Media }:FixedCreateMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },
});

interface HeadingProps {
  mobile?:boolean,
}

const HomepageHeading: FunctionComponent<HeadingProps> = ({ mobile = false }) => (
  <Container
    text
    style={mobile ? {
      backgroundImage: `url(${SpeartipFade})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'bottom 100px right 100px',
    } : undefined}
  >
    <Header
      as="h1"
      content="Speartip Solutions"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="I am not a designer. Don't hate me."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size="huge" href="/CV">
      Get Started
      <Icon name="arrow right" />
    </Button>
  </Container>
);

HomepageHeading.defaultProps = {
  mobile: false,
};

const DesktopContainer: FunctionComponent = ({ children }) => {
  const [navOpen, setNav] = useState(false);
  const { pathname } = useLocation();
  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setNav(true)}
        onBottomPassedReverse={() => setNav(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={pathname === '/' ? {
            minHeight: 700,
            padding: '1em 0em',
            backgroundImage: `url(${SpeartipFade})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom 100px right 100px',
          } : {
            padding: '1em 0em 2px 0em',
          }}
          vertical
        >
          <Menu
            fixed={navOpen ? 'top' : undefined}
            inverted={!navOpen}
            pointing={!navOpen}
            secondary={!navOpen}
            size="large"
          >
            <Container>
              <Image height={50} src={Speartip} style={{ paddingRight: 20 }} />
              <Menu.Item as={Link} active={pathname === '/'} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} active={pathname === '/portfolio'} to="/portfolio">
                Portfolio
              </Menu.Item>
              <Menu.Item as={Link} active={pathname === '/cv'} to="/cv">CV</Menu.Item>
              <Menu.Item position="right">
                <Button as={Link} to="/login" inverted={!navOpen} primary={navOpen}>
                  Log in
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          {pathname === '/' && <HomepageHeading />}
        </Segment>
      </Visibility>
      {children}
    </Media>
  );
};

const MobileContainer:FunctionComponent = ({ children }) => {
  const [sidebarOpen, setSidebar] = useState(false);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebar(false)}
          vertical
          visible={sidebarOpen}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">CV</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpen}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 300, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => setSidebar(true)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer: FunctionComponent = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

const HomepageLayout = () => {
  const location = useLocation();
  return (
    <Router>
      <ResponsiveContainer>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="fade"
            timeout={300}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cv">
                <div>hello</div>
              </Route>

            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </ResponsiveContainer>
    </Router>
  );
};

const RouterWrapper = () => (
  <Router>
    <HomepageLayout />
  </Router>
);
export default RouterWrapper;
