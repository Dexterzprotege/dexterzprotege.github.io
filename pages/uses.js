import Section from "../components/section";
import { UsesGridItem } from "../components/grid-item";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import styled from "@emotion/styled";

import macbook from "../public/uses/macbook.jpeg";
import monterey from "../public/uses/monterey.png";
import acer from "../public/uses/acer.png";
import logitech from "../public/uses/logitech.png";

const Paragraph = styled.p`
  text-align: justify;
`;

const Uses = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Uses
          </Heading>
          <Paragraph>
            As a developer, the tools are bread and butter for daily life. Often
            when people ask me what do I use in day-to-day life, this page
            precisely tells that. I am going to attach all the things that I
            use. I am not saying my setup is perfect, I am trying to make it
            very accessible and affordable and will update them as I myself get
            updated. Feel free to reach out to me if you need info on anything.
          </Paragraph>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <UsesGridItem
              title="Primary Computer"
              thumbnail={macbook}
              lenk="https://www.apple.com/in/shop/buy-mac/macbook-pro/16-inch-space-grey-10-core-cpu-16-core-gpu-512gb"
            >
              MacBook Pro M1 16&apos;
            </UsesGridItem>
          </Section>
          <Section>
            <UsesGridItem
              title="Operating System"
              thumbnail={monterey}
              lenk="https://www.apple.com/in/macos/monterey/"
            >
              macOS Monterey v12.6 (21G115)
            </UsesGridItem>
          </Section>
          <Section>
            <UsesGridItem
              title="Monitor"
              thumbnail={acer}
              lenk="https://www.acer.com/ac/en/GB/content/model/UM.HE3EE.005"
            >
              Acer ED273 27&apos; Curved Display
            </UsesGridItem>
          </Section>
          <Section>
            <UsesGridItem
              title="Keyboard and Mouse"
              thumbnail={logitech}
              lenk="https://www.logitech.com/en-in/products/combos/mk345-keyboard-mouse-wireless.920-006491.html"
            >
              Logitech MK345 Comfort Wireless
            </UsesGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Uses;
