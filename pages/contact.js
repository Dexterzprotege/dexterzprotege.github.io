import Section from "../components/section";
import {
  Container,
  Heading,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { AiOutlineMail } from "react-icons/ai";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
          <p>
            Hi! How are you? Thank you for visiting my site. If you have any
            inquiries or feedback, please don&apos;t hesitate to reach out. I am
            available at the following social media outlets:
          </p>
          <br />
          <SimpleGrid columns={5}>
            <Link
              href="mailto:sharath.kamlekar@outlook.com"
              isExternal
              color="teal"
            >
              <AiOutlineMail size="3rem" />
            </Link>
            <Link
              href="https://github.com/Dexterzprotege"
              isExternal
              color="teal"
            >
              <IoLogoGithub size="3rem" />
            </Link>
            <Link
              href="https://www.instagram.com/sharath.exe/"
              isExternal
              color="teal"
            >
              <IoLogoInstagram size="3rem" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/skamlekar/"
              isExternal
              color="teal"
            >
              <IoLogoLinkedin size="3rem" />
            </Link>
            <Link
              href="https://twitter.com/sharathkamlekar"
              isExternal
              color="teal"
            >
              <IoLogoTwitter size="3rem" />
            </Link>
          </SimpleGrid>
          <br />
          <p>
            I am currently available for freelance work. My scope of work
            includes but not limited to:
            <UnorderedList>
              <ListItem>Website Development</ListItem>
              <ListItem>AWS Integration</ListItem>
              <ListItem>Data analytics</ListItem>
              <ListItem>Application Development</ListItem>
            </UnorderedList>
          </p>
          <br />
          <NextLink href="/resume.pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
          &nbsp;&nbsp;
          <NextLink href="/coverletter.pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Cover Letter
            </Button>
          </NextLink>
        </Section>
      </Container>
    </Layout>
  );
};

export default Contact;
