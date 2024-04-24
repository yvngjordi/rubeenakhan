import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import React, { useState, useEffect } from 'react';
import { Box, Flex, Divider, Loader, Center } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconHeart, IconVaccine, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '/', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '/services', label: 'Services'},
  { link: '#team', label: 'Our Team' },
  { link: '#contact', label: 'Contact' },
];

const data = [
  {
    title: 'Ancaster Central',
    links: [
      { label: 'About Us', link: '#about' },
      { label: 'Our Services', link: '/services' },
      { label: 'Meet Our Team', link: '#team' },
      { label: 'Contact', link: '#contact' },
    ],
  },
];

const dropdownOptions = [
  { value: 'general-inquiry', label: 'General inquiry' },
  { value: 'customer-support', label: 'Customer support' },
  { value: 'booking-time', label: 'Booking a time'}
];

const imageSrc = 'bg3.jpg';
const fetchURL = 'https://webdragon.dev/contact.php';
const recaptchaSiteKey = '6LfGF8UpAAAAAO1Yj4CLSC_ojg7HYXoRATMNX0mU';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <Box>
    <Block
      type="banner"
      heading="We have recently moved locations!"
      background="navy"
      color="white"
      icon={<IconMap size={20} />}
    />
        <Block
          type="navbar"
          links={links}
          image="logo.png"
          heading="Ancaster Central"
          sticky
        />
        {isLoading && (
          <Center style={{ width: '98vw', height: '50vh' }}>
            <Loader size="sm" />
          </Center>
        )}
          <Box style={{opacity: isLoading ? '0' : '1'}}>
        <Box mt="-18.6vh">
          <Wrapper
            type="section"
            py={120}
            px={isMobile ? 20 : 200}
            background="url('bg4.jpg')"
            fill={true}
          >
          <Block
            type="section"
            heading="Dedicated to Your Child's Health"
            subheading="Expert Care for Every Child"
            paragraph="At Ancaster Central Children's Clinic, we offer a wide range of pediatric services tailored to meet the unique needs of your child. From routine checkups to specialized cardiac care, our experienced team is here to support your family."
            button={{ color: 'white', backgroundColor: 'navy', text: 'Discover Our Services', onClick: () => window.location.href = '/services' }}
            textCenter
            variant="A"
          />
          <div id="about"></div>
          </Wrapper>
          <Wrapper
            type="section"
            py={20}
            px={isMobile ? 20 : 200}
          >
          <Block
            type="section"
            variant="C"
            heading="Why Choose Us"
            subheading="A Commitment to Excellence"
            paragraph={["Ancaster Central Children's Clinic is led by Dr. Rubeena Khan, a pediatrician with a specialty in pediatric cardiology. Our clinic provides a comprehensive approach to pediatric care, ensuring that every child receives the highest standard of medical attention."]}
            list={
              [
                "Specialized Pediatric Cardiology Care", "Experienced Pediatricians", "Family-Friendly Environment"
              ]
            }
            image="logo-full.png"
            button={{ color: 'white', backgroundColor: 'navy', text: 'Services', onClick: () => window.location.href = '/services', border: 'none' }}
            button2={{ color: 'black', backgroundColor: 'gray', text: 'Contact Us', onClick: () => window.location.href = '#contact', border: 'none' }}
          />
          </Wrapper>
          <Wrapper
            type="section"
            py={60}
            background="url('bg4.jpg')"

            px={isMobile ? 20 : 240}
            fill={true}
          >
                <Block
                  type="section"
                  variant="A"
                  heading="Now serving students!"
                  paragraph={["Come by our clinic where we're dedicated to serving students as well as your children. We'll address what you need help with and work alongside you."]}
                  image="bag.png"
                  textLeft
                />
                <div id="services"></div>
          </Wrapper>
          <Wrapper
            type="section"
            py={50}
            px={isMobile ? 30 : 200}
          >
            <Wrapper
              type="grid"
              heading="Our Services"
              columns={4}
              spacing="md"
              verticalSpacing={{ base: 'sm', lg: 'md' }}
            >
            <Block
              type="feature"
              icon={<IconHeart size={44} />}
              textCenter
              stack
              heading="Pediatrics"
              subheading="Expert Heart Care"
              paragraph="Cardiology consultations, ECGs, and echocardiograms for your children."
            />
            <Block
              type="feature"
              icon={<IconVaccine size={44} />}
              textCenter
              stack
              heading="Immunizations"
              subheading="Protect Your Child"
              paragraph="Complete vaccination services to protect against childhood diseases."
            />
            <Block
              type="feature"
              icon={<IconApple size={44} />}
              textCenter
              stack
              heading="Nutrition"
              subheading="Healthy Development"
              paragraph="Guidance on nutrition and growth to ensure your child's healthy development."
            />
            <Block
              type="feature"
              icon={<IconNotebook size={44} />}
              textCenter
              stack
              heading="Screening"
              subheading="Early Detection"
              paragraph="Screenings to identify developmental delays early and provide timely interventions."
            />
            </Wrapper>
            <div id="team"></div>
          </Wrapper>
          <Wrapper
            type="section"
            py={60}
            px={isMobile ? 20 : 200}
          >
          <Flex direction="column" >
          <Block

            type="section"
            heading="Meet Our Dedicated Team"
            paragraph="Our clinic is home to a team of experienced pediatricians and healthcare professionals who are passionate about providing the best care for your child."
            textCenter
          />
          <Wrapper
            type="carousel"
            seconds={10}
            fill
            transitionEffect="opacity"
            >
            <Flex direction="column">
              <Block
                type="section"
                variant="B"
                imageCircle
                heading="Dr. Rubeena Khan"
                subheading="Pediatric Cardiologist"
                paragraph={["Leading our clinic, Dr. Khan brings extensive experience in pediatric cardiology to provide specialized care."]}
                image="https://via.placeholder.com/150"
              />
            </Flex>
            <Flex direction="column">
              <Block
                type="section"
                variant="B"
                imageCircle
                heading="Dinisha Patel"
                subheading="Nurse Practitioner"
                paragraph={["Dinisha Patel offers expert care and advice for children and their families, focusing on general pediatrics and developmental concerns."]}
                image="team/1.jpeg"
              />
            </Flex>
            <Flex direction="column">
              <Block
                type="section"
                variant="B"
                imageCircle
                heading="Dr. Juliana Giraldo Salazar"
                subheading="Pediatric Respirologist"
                paragraph={["Dr. Giraldo Salazar specializes in treating asthma, allergies, and respiratory diseases in children."]}
                image="team/2.jpg"
              />
            </Flex>
          </Wrapper>
          </Flex>
          <div id="contact"></div>
        </Wrapper>
      </Box>
        <Wrapper
          type="section"
          py={20}
          px={isMobile ? 10 : 100}
        >
        <Block
          type="contact"
          dropdown={dropdownOptions}
          image={imageSrc}
          fetchLink={fetchURL}
          captcha
          siteKey={recaptchaSiteKey}
          heading="Get in Touch"
          paragraphs={[
              "Feel free to reach out with any questions you might have. We look forward to hearing from you!",
          ]}
          buttonLabel="Submit"
          button={{ backgroundColor: 'navy', color: '#FFFFFF' }}
      />
      </Wrapper>
      <Wrapper
        type="section"
        py={40}
        px={isMobile ? 20 : 200}
      >
        <Block
          type="map"
          address="1039 Upper James St. Hamilton Ontario"
          title="Ancaster Central Childrens Clinic"
          height={400}
          borderRadius="8px"
        />
      </Wrapper>
      </Box>
        <Block
          type="footer"
          data={data}
          image="logo.png"
          phone="905-304-8881"
          fax="289-919-2511"
          copyright="Ancaster Central Children's Clinic © 2024 | All rights reserved"
          heading="Ancaster Central Children's Clinic"
          paragraph={["Providing compassionate and comprehensive pediatric care in Ancaster, Ontario. Our team is dedicated to supporting your child's health and well-being."]}
        />
      </Box>
    </>
  );
}
