import Section from '../components/section';
import { Container, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/article'

const Works = () => {
     return (
          <Layout>
               <Container>
                    <Section delay={0.1}>
                         <Heading as="h3" variant="section-title">
                              Works
                         </Heading>
                    </Section>
               </Container>
          </Layout>
     )
}

export default Works