// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  serverlessLogo: require("../assets/serverlessLogo.png"),
  twitterLogo: require("../assets/twitter-logo-black.png"),
  sshHell: require("../assets/sshhell.jpg"),
  sadParrot: require("../assets/sadparrot.gif"),
  lair: require("../assets/lair.jpg"),
  groupInitial: require("../assets/group-initial.jpg"),
  groupEmoji: require("../assets/group-emoji.jpg"),
  xkcd: require("../assets/xkcd.png"),
  emojiArchitecture: require("../assets/emoji-architecture.jpg"),
  sparrow: require("../assets/House_sparrow04.jpg"),
  hypeCurve: require("../assets/hype-curve.png"),
  clientServer: require("../assets/clientserver.svg"),
  clientServerLess: require("../assets/clientbaas.svg"),
  paas: require("../assets/paas.png"),
  redBadger: require("../assets/red-badger.png"),
  hype: require("../assets/hype.gif"),
  johnmckim: require("../assets/johnmckim.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#191919",
  secondary: "white",
  tertiary: "#FFD426",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.serverlessLogo} />
          <Heading size={1} fit caps textColor="seconday" margin="40px 0">
              Hype or substance?
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} caps textColor="black" bgColor="tertiary" margin={10} padding={"5px 0"}>
                @marcelcutts <Image src={images.twitterLogo} height="30px" margin="3px 0 0 0"/>
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.hypeCurve} width="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary"
          notes="Serverless the architecture vs serverless the framework"
        >
          <Image src={images.serverlessLogo} />
          <Heading size={3} caps textColor="secondary" margin="40px 0">
               or
          </Heading>
          <Heading size={2} caps textColor="secondary" margin="40px 0">
              Serverless?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
               A bit of history.... 📜
          </Heading>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" notes={`
          Very stressful. Lot of SSH. Keep machines up to date
          Oh no, is Database running out of memory? Did we keep
          all the same settings from the test box with one of everyone?
          Do we have a script to provision a new server?`}
        >
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            History of Devops
          </Heading>
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
            Physical Machines
          </Heading>
          <List>
            <ListItem>Under Desk or in ☁️</ListItem>
            <ListItem>Slow iteration</ListItem>
            <ListItem>Slow deployment</ListItem>
            <ListItem>Stress generators</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.sshHell} />

        <Slide transition={["fade"]} bgImage={images.sshHell} bgDarken={0.5}>
          <Image src={images.sadParrot} height="400px"/>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lair} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            History of Devops
          </Heading>
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
            Virtual Machines
          </Heading>
          <List>
            <ListItem>Probably in ☁️</ListItem>
            <ListItem>Consistent Deploys!</ListItem>
            <ListItem>Multiple tenant one 1 physical machine!</ListItem>
            <ListItem>Faster iterations / deploys!</ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            History of Devops
          </Heading>
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
            Containers
          </Heading>
          <List>
            <ListItem>Probably in ☁️</ListItem>
            <ListItem>Shareable images!</ListItem>
            <ListItem>Quick deploys!</ListItem>
            <ListItem>Test and Production Stages easy!</ListItem>
            <ListItem>Easy to have many services in a swarm!</ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            History of Devops
          </Heading>
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
            Serverless
          </Heading>
          <List>
            <ListItem>Almost certainly in ☁️</ListItem>
            <ListItem>Runs only when needed!</ListItem>
            <ListItem>Infinitely Scalable!</ListItem>
            <ListItem>Trivial deploys/updates!</ListItem>
            <ListItem>Cheap!</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="tertiary" margin="40px 0">
            OK how does that work?
          </Heading>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            "Traditional" Architecture
          </Heading>
          <Image src={images.clientServer} width="100%" />
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Serverless Architecture
          </Heading>
          <Image src={images.clientServerLess} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Serverless Architecture
          </Heading>
          <List>
            <ListItem>Faster time to market</ListItem>
            <ListItem>No scaling concerns</ListItem>
            <ListItem>Reduced operational costs</ListItem>
            <ListItem>No maintenance</ListItem>
            <ListItem>Insane hipster cred!</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Wait, isn't this just PAAS?
          </Heading>
          <List>
            <ListItem>Still needs scaling (how many Dynos)</ListItem>
            <ListItem>Monolithic unit of deployment</ListItem>
            <ListItem>Steers technical decisions</ListItem>
            <ListItem>Always running</ListItem>
            <ListItem>No hipster cred</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Wait, isn't this just PAAS?
          </Heading>
          <Image src={images.paas} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Great! But what about...
          </Heading>
          <List>
            <ListItem>Application Bundling</ListItem>
            <ListItem>Configuration</ListItem>
            <ListItem>Monitoring</ListItem>
            <ListItem>Logging</ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>Testing</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.serverlessLogo} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Demo #1
          </Heading>
          <Heading size={1} fit caps textColor="secondary" margin="40px 0">
            Serverless create!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Demo #2 - Emoji Faceswap
          </Heading>
          <Heading size={1} caps textColor="secondary" margin="40px 0">
            😊☹️😢😒
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Demo #2 - Emoji Faceswap
          </Heading>
          <Image src={images.groupEmoji} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Demo #2 - Emoji Faceswap
          </Heading>
          <Image src={images.groupInitial} width="100%"/>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Demo #2 - Emoji Faceswap
          </Heading>
          <Image src={images.emojiArchitecture} width="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.xkcd} height="600px"/>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.sparrow} />

        <Slide transition={["fade"]} bgImage={images.sparrow} bgDarken={0.5}>
          <Appear>
            <Heading size={3} fit caps textColor="secondary" margin="20px 0">
              Bird: 97% Confidence
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} fit caps textColor="secondary" margin="20px 0">
              Sparrow: 97% Confidence
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.johnmckim} />
          <Heading fit caps margin="40px 0" >
            John Mckim
          </Heading>
          <Heading size={4} textColor="secondary">
            @johncmckim
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.serverlessLogo} />
          <Heading fit caps margin="40px 0" >
            Is it for me?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary" margin="40px 0">
            Drawbacks
          </Heading>
          <List>
            <ListItem>Vendor lock in</ListItem>
            <ListItem>Not feasible for long running tasks</ListItem>
            <ListItem>Overhead increase due to no "local calls"</ListItem>
            <ListItem><s>Cold start time</s></ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.redBadger} width="70%" />
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.serverlessLogo} />
          <Heading fit caps margin="40px 0" >
            Serverless Hype Train Checklist
          </Heading>
          <List>
            <ListItem>Event driven application ✅ </ListItem>
            <ListItem>Short running tasks ✅</ListItem>
            <ListItem>Man bun / Fixie bike ✅</ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgImage={images.hype} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="seconday" margin="40px 0">
              Thanks!
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} caps textColor="black" bgColor="tertiary" margin={10} padding={"5px 0"}>
                @marcelcutts <Image src={images.twitterLogo} height="30px" margin="3px 0 0 0"/>
              </Heading>
            </Fill>
          </Layout>
        </Slide>

      </Deck>
    );
  }
}
