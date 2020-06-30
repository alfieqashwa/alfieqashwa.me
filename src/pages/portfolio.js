/** @jsx jsx */
import { jsx, Layout as ThemeLayout, Main, Container, Box } from "theme-ui";
import styled from "@emotion/styled";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Paragraph from "@narative/gatsby-theme-novela/src/components/Paragraph";
import Anchor from "@narative/gatsby-theme-novela/src/components/Anchor";
import Image from "@narative/gatsby-theme-novela/src/components/Image";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

import AFK from "../assets/afk.jpeg";
import Sabyan from "../assets/sabyan.jpg";
import Kebab from "../assets/kebab.png";
import TwinHouse from "../assets/twinhouse.png";
import AlhadiKarpet from "../assets/alhadikarpet.png";
import Covid19 from "../assets/covid19.png";

export default () => (
  <Layout>
    <SEO />
    <Section>
      <ThemeLayout>
        <Main>
          <Container>
            <div sx={{ marginTop: "80px" }}>
              <Headings.h1>My Portfolio</Headings.h1>
            </div>
            <Card>
              <H2>Covid-19 Data API</H2>
              <Img src={Covid19} alt="Covid-19 Data API" />
              <P>Create using NextJS & Tailwindcss</P>
              <Anchor>https://covid-19.alfieqashwa.now.sh</Anchor>
            </Card>
            <Card>
              <H2>Alhadi Karpet</H2>
              <Img src={AlhadiKarpet} alt="Alhadi Karpet" />
              <P>Katalog Sajadah, Permadani untuk Masjid</P>
              <Anchor>https://www.alhadikarpet.com</Anchor>
            </Card>
            <Card>
              <H2>AFK Skin Care</H2>
              <Img src={AFK} alt="AFK" />
              <P>Purchase & Sales Management System</P>
              <Anchor>PT Kirana Megah Jaya Estetika</Anchor>
            </Card>
            <Card>
              <H2>Sabyan</H2>
              <Img src={Sabyan} alt="Sabyan Band" />
              <br />
              <Anchor>Since Aug 2018</Anchor>
              <P>Accounting Management System</P>
              <Anchor>Private Link: not allowed to share</Anchor>
            </Card>
            <Card>
              <H2>Kebab Alibaba</H2>
              <Img src={Kebab} alt="Kebab Alibaba" />
              <br />
              <Anchor>Since Sept 2017</Anchor>
              <P>
                Accounting, Manufacturing, Purchases, and Sales Management
                System, 8 Warehouses, 20 Point of Sales.
              </P>
              <Anchor>http://alibabakebab.co</Anchor>
            </Card>
            <Card>
              <H2>Twin House</H2>
              <Img src={TwinHouse} alt="Twin House" />
              <P>2 Point of Sales, 1 Warehouse</P>
              <Anchor>http://twinhouse.co.id/</Anchor>
            </Card>
          </Container>
        </Main>
      </ThemeLayout>
    </Section>
  </Layout>
);

const Card = styled(Box)`
  text-align: center;
  margin-top: 75px;
`;

const H2 = styled(Headings.h1)`
  margin-bottom: 20px;
`;

const Img = styled(Image)`
  width: 400px;
  ${mediaqueries.phablet`
    width: 250px;
  `}
`;

const P = styled(Paragraph)`
  margin-top: 25px;
  margin-bottom: 5px;
`;
