import Head from "next/head";
import { Grommet } from "grommet/components/Grommet";
import { ResponsiveContext } from "grommet/contexts/ResponsiveContext";
import { Box } from "grommet/components/Box";
import { List } from "grommet/components/List";
import { Heading } from "grommet/components/Heading";
import { Meter } from "grommet/components/Meter";
import { Clock } from "grommet/components/Clock";
import { grommet } from "grommet/themes";

const linkStyle = { display: "block", textDecoration: "none", flex: 1 };

const sites = [
  {
    status: "✅",
    name: "mael.xyz",
    link: "https://mael.xyz",
    description: "This"
  },
  {
    status: "✅",
    name: "cv",
    link: "https://cv.mael.xyz",
    description: "My CV hosted online"
  },
  {
    status: "✅",
    name: "ping",
    link: "https://ping.mael.xyz",
    description: "Simple ping service for testing infrastructure"
  },
  {
    status: "✅",
    name: "shorty",
    link: "https://l.mael.xyz",
    description: "Link shortener service"
  },
  {
    status: "✅",
    name: "pocketcraft",
    link: "https://pocketcraft.mael.xyz",
    description: "FFXIV crafting helper"
  },
  {
    status: "🚧",
    progress: 90,
    name: "copycat",
    link: "https://copycat.mael.xyz",
    description: "Game of guessing who is trying to copy the rest"
  },
  {
    status: "✅",
    name: "presentations",
    link: "https://presentations.mael.xyz",
    description: "A collection of presentations"
  },
  {
    status: "✅",
    name: "blog",
    link: "https://blog.mael.xyz",
    description: "A blog with nothing on it"
  },
  {
    status: "🚧",
    progress: 10,
    name: "friendagon",
    link: "https://friendagon.mael.xyz",
    description: "Online competitive super hexagon"
  },
  {
    status: "🚧",
    progress: 10,
    name: "secretsanta",
    link: "https://secretsanta.mael.xyz",
    description: "Secret Santa organiser"
  },
  {
    status: "💭",
    progress: 1,
    name: "maestro",
    link: "https://maestro.mael.xyz",
    description: "Tool to help learn to sight read sheet music"
  },
  {
    status: "💭",
    progress: 1,
    name: "pingo",
    link: "https://pingo.mael.xyz",
    description: "Bingo for parties"
  },
  {
    status: "💭",
    progress: 1,
    name: "flitter",
    link: "https://flitter.mael.xyz",
    description:
      "A temporary image upload service, that removes an image after a set time"
  },
  {
    status: "💭",
    progress: 1,
    name: "mashboard",
    link: "https://mashboard.mael.xyz",
    description: "A dashboard for just my life"
  },
  {
    status: "💭",
    progress: 1,
    name: "mansions",
    link: "https://mom.mael.xyz",
    description: "A monster reference for Mansions of Madness 2nd Edition"
  }
];

const apps = [
  {
    status: "🚧",
    name: "[Android] Ruff Judge",
    link: "https://play.google.com/store/apps/details?id=tech.mael.ruff_judge",
    description: "An android app to help learn about dogs"
  },
  {
    status: "✅",
    name: "[Android] Squadolo",
    link:
      "https://play.google.com/store/apps/details?id=tech.mael.squadolo&hl=en",
    description: "A more colourful, customizable version of the Piccolo app"
  }
];

function Home() {
  return (
    <Grommet theme={grommet}>
      <Head>
        <title>Matthew Elphick</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Heading level={1} margin="none" style={{ maxWidth: "initial" }}>
        <span style={{ flex: 1 }}>Matthew Elphick</span>
        <Clock type="digital" style={{ float: "right" }} />
      </Heading>

      <Heading level={2} margin="none">
        Projects
      </Heading>
      <Heading level={3} margin="none">
        Web
      </Heading>
      <Box pad="xxsmall">
        <List
          data={sites}
          children={item => (
            <div
              key={item.name}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <a style={linkStyle} href={item.link}>
                {item.status}{" "}
                {[item.name, item.description].filter(Boolean).join(" - ")}
              </a>
              {item.progress ? (
                <ResponsiveContext.Consumer>
                  {size =>
                    ["small", "xsmall"].includes(size) ? null : (
                      <Meter
                        background="#EEEEEE"
                        values={[{ value: item.progress }]}
                        margin="none"
                        thickness="small"
                      />
                    )
                  }
                </ResponsiveContext.Consumer>
              ) : null}
            </div>
          )}
          pad="xxsmall"
        />
      </Box>
      <Heading level={3} margin="none">
        Apps
      </Heading>
      <Box pad="xxsmall">
        <List
          data={apps}
          children={item => (
            <a style={linkStyle} href={item.link}>
              {item.status}{" "}
              {[item.name, item.description].filter(Boolean).join(" - ")}
            </a>
          )}
          pad="xxsmall"
        />
      </Box>
    </Grommet>
  );
}

export default Home;
