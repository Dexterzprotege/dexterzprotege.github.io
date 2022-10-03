import NextLink from 'next/link';
import Layout from '../components/layouts/article'
import { Container, Box, Heading, Image, useColorModeValue, chakra, Button, Link, List, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import Section from '../components/section';
import { AiOutlineMail } from 'react-icons/ai'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
     shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Page = () => {
     return (
          <Layout>
               <Container>

                    <br />
                    <Box display={{ md: 'flex' }}>
                         <Box flexGrow={1}>
                              <Heading as="h2" variant="page-title">
                                   Sharath Kamlekar
                              </Heading>
                              <p>Software Engineer | Competitive Programmer | Developer</p>
                         </Box>


                         <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                              <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
                                   <ProfileImage src="/sharath.png" alt="Profile image" boxSize='150px' borderRadius="full" width="100%" height="100%" />
                              </Box>
                         </Box>
                    </Box>


                    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} textAlign="center">
                         <Wave role="img" aria-label="Hand wave">👋</Wave>
                         &nbsp; Hello, I&apos;m an Software Engineer, currently working at Amazon
                    </Box>

                    {/* Work related information */}
                    <Section delay={0.1}>
                         <Heading as="h3" variant="section-title">
                              Work
                         </Heading>
                         <Paragraph>I am a Software Engineer and a full-stack developer and have great passion for computers and anything tech. I really enjoy competitive programming, and try to participate as much as I can. In my free time, I enjoy participating in Quizzing other Trivia competitions. Hit me up, if you have anything in common and want to discuss!</Paragraph>
                         <Box align="center" my={4}>
                              <NextLink href="/works">
                                   <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                        My portfolio
                                   </Button>
                              </NextLink>
                         </Box>
                    </Section>

                    {/* Bio related information */}
                    <Section delay={0.2}>
                         <Heading as="h3" variant="section-title">
                              Bio
                         </Heading>
                         <BioSection>
                              <BioYear>Jun 1999</BioYear>
                              Born in Hyderabad, India
                         </BioSection>
                         <BioSection>
                              <BioYear>Jun 2020</BioYear>
                              Completed internship with Amazon
                         </BioSection>
                         <BioSection>
                              <BioYear>Aug 2020</BioYear>
                              Graduated with a Bachelor&apos;s degree in Computer Science and Engineering from Jawaharlal Nehru Technological University Hyderabad
                         </BioSection>
                         <BioSection>
                              <BioYear>Aug 2020 - present</BioYear>
                              Working as a System Development Engineer at Amazon
                         </BioSection>
                    </Section>

                    {/* Interests */}
                    <Section delay={0.3}>
                         <Heading as="h3" variant="section-title">
                              I ❤️
                         </Heading>
                         <Paragraph>
                              Geography, Trivia,{' '}
                              <Link href="https://gazings.blogspot.com/" target="_blank">
                                   Writing poems and haikus
                              </Link>
                              , History,{' '}
                              <Link href="https://myanimelist.net/animelist/skamleka" target="_blank">
                                   Anime
                              </Link>
                              , Cooking
                         </Paragraph>
                    </Section>

                    <Section delay={0.3}>
                         <Heading as="h3" variant="section-title">
                              On the web
                         </Heading>
                         <List>
                              <ListItem>
                                   <Link href="mailto:sharath.kamlekar@outlook.com" target="_blank">
                                        <Button
                                             variant="ghost"
                                             colorScheme="teal"
                                             leftIcon={<AiOutlineMail />}
                                        >
                                             sharath.kamlekar@outlook.com
                                        </Button>
                                   </Link>
                              </ListItem>
                              <ListItem>
                                   <Link href="https://github.com/Dexterzprotege" target="_blank">
                                        <Button
                                             variant="ghost"
                                             colorScheme="teal"
                                             leftIcon={<IoLogoGithub />}
                                        >
                                             @Dexterzprotege
                                        </Button>
                                   </Link>
                              </ListItem>
                              <ListItem>
                                   <Link href="https://www.linkedin.com/in/skamlekar/" target="_blank">
                                        <Button
                                             variant="ghost"
                                             colorScheme="teal"
                                             leftIcon={<IoLogoLinkedin />}
                                        >
                                             Sharath Kamlekar
                                        </Button>
                                   </Link>
                              </ListItem>
                              <ListItem>
                                   <Link href="https://twitter.com/craftzdog" target="_blank">
                                        <Button
                                             variant="ghost"
                                             colorScheme="teal"
                                             leftIcon={<IoLogoTwitter />}
                                        >
                                             @craftzdog (日本語)
                                        </Button>
                                   </Link>
                              </ListItem>
                              <ListItem>
                                   <Link href="https://www.instagram.com/sharath.exe/" target="_blank">
                                        <Button
                                             variant="ghost"
                                             colorScheme="teal"
                                             leftIcon={<IoLogoInstagram />}
                                        >
                                             @sharath.exe
                                        </Button>
                                   </Link>
                              </ListItem>
                         </List>
                    </Section>
               </Container>
          </Layout>
     )
}

export default Page;

const Wave = styled.span`
     animation-name: wave-animation;
     animation-duration: 2.5s;
     animation-iteration-count: infinite;
     transform-origin: 70% 70%;
     display: inline-block;

     @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg);}
        }
`;

const Paragraph = styled.p`
        text-aligh: justify;
        text-indent: 1em;
`

const BioSection = styled(Box)`
padding-left: 6em;
text-indent: -6em;
text-align: justify;
`

const BioYear = styled.span`
font-weight: bold;
margin-right: 1em;
`