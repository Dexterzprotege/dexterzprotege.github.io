import Section from "../components/section";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { UsesGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import styled from "@emotion/styled";

import jobhunt from "../public/job-hunt.png";

const Paragraph = styled.p`
  text-align: justify;
`;

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Blog
          </Heading>
          <Paragraph>
            I will be sharing content to help fellow developers learn, grow and
            give something back to the community what I have learnt.
          </Paragraph>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <UsesGridItem
              title="Software Engineer Resume"
              thumbnail={jobhunt}
              lenk="https://sharath-kamlekar.medium.com/create-an-effective-software-engineer-r%C3%A9sum%C3%A9-and-land-jobs-at-faang-e2474d5e610d"
            >
              Create an Effective Software Engineer Résumé and land jobs at
              FAANG!
            </UsesGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Posts;
