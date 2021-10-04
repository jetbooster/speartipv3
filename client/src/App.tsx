import React, { useState, FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { createMedia } from '@artsy/fresnel';
import './App.css';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { MediaContextProviderProps, MediaProps } from '@artsy/fresnel/dist/Media';
import Speartip from './speartip_bold.svg';
import SpeartipFade from './speartip_fade.svg';
import Home from './Pages/Home';
import Cv from './Pages/Cv';
import { useDelayedMount } from './utils/useDelayedMount';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/portfolio', name: 'Portfolio', Component: () => <div>Test</div> },
  { path: '/cv', name: 'CV', Component: Cv },
];

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
  open: boolean
}

const HomepageHeading: FunctionComponent<HeadingProps> = ({ mobile = false, open }) => {
  const [shouldMount, shouldVisible] = useDelayedMount(open, 200, 600);
  const defaultcontainerStyle = {
    height: open ? '25em' : '0',
    transition: 'height 0.6s ease-out 0s',
  };
  const mountedStyle = { opacity: 1, transition: 'opacity 500ms ease-in' };
  const unmountedStyle = { opacity: 0, transition: 'opacity 500ms ease-in' };
  const chosenStyle = shouldVisible ? mountedStyle : unmountedStyle;
  return (
    <Container
      text
      style={mobile ? {
        ...defaultcontainerStyle,
        backgroundImage: `url(${SpeartipFade})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'bottom 10px right 100px',
      } : defaultcontainerStyle}
    >
      {shouldMount && (
        <>
          <Header
            as="h1"
            content="Speartip Solutions"
            inverted
            style={{
              ...chosenStyle,
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
              ...chosenStyle,
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button primary size="huge" href="/CV" style={chosenStyle}>
            Get Started
            <Icon name="arrow right" />
          </Button>
        </>
      )}
    </Container>
  );
};

HomepageHeading.defaultProps = {
  mobile: false,
};

const DesktopContainer: FunctionComponent = ({ children }) => {
  const [navOpen, setNav] = useState(false);
  const { pathname } = useLocation();

  const defaultSegmentStyle = {
    transition: 'height 0.4s ease-in-out 0s',
  };

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
            ...defaultSegmentStyle,
            height: 700,
            padding: '1em 0em',
            backgroundImage: `url(${SpeartipFade})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom 100px right 100px',
          } : {
            ...defaultSegmentStyle,
            height: '5em',
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
              {routes.map(({ name, path }) => (
                <Menu.Item
                  key={path}
                  as={NavLink}
                  active={pathname === path}
                  to={path}
                  activeClassName="active"
                  exact
                >
                  {name}
                </Menu.Item>
              ))}
              <Menu.Item position="right">
                <Button as={Link} to="/login" inverted={!navOpen} primary={navOpen}>
                  Log in
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading open={pathname === '/'} />
        </Segment>
      </Visibility>
      {children}
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Media>
  );
};

const MobileContainer:FunctionComponent = ({ children }) => {
  const [sidebarOpen, setSidebar] = useState(false);
  const { pathname } = useLocation();

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
          {routes.map(({ name, path }) => (
            <Menu.Item
              key={path}
              as={NavLink}
              active={pathname === path}
              to={path}
              activeClassName="active"
              onClick={() => setSidebar(false)}
              exact
            >
              {name}
            </Menu.Item>
          ))}
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
            <HomepageHeading mobile open={pathname === '/'} />
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

const HomepageLayout = () => (
  <Router>
    <ResponsiveContainer>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </ResponsiveContainer>
  </Router>
);

const RouterWrapper = () => (
  <Router>
    <HomepageLayout />
  </Router>
);
export default RouterWrapper;
