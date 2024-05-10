import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import React, { useState, useEffect } from 'react';
import { Box, Flex, Divider, Loader, Center } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconHeart, IconVaccine, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '/', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '/services', label: 'Services' },
  {
    label: 'Resources',
    links: [
      { link: '/referral-letter', label: 'Referral Letter' },
      { link: '/policies', label: 'Policies' },
    ],
  },
  { link: '#team', label: 'Our Team' },
  { link: '#contact', label: 'Contact' },
];

const linksMob = [
  { link: '/', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/referral-letter', label: 'Referral Letter' },
  { link: '/policies', label: 'Policies' },
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
const fetchURL = 'https://webdragon.dev/rubeena.php';
const recaptchaSiteKey = '6LeJAGgpAAAAAJMPwrZeB3H5reXW_CdvDJsrMmfg';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <>
      <Box style={{ opacity: isVisible ? '1' : '0', transition: 'opacity 1.35s ease-in' }}>
    <Block
      type="banner"
      heading="We have recently moved locations!"
      background="navy"
      link="https://www.google.com/maps/place/1039+Upper+James+St,+Hamilton,+ON+L9C+3A6,+Canada/@43.221175,-79.884151,14z/data=!4m6!3m5!1s0x882c9afb17e9091d:0xf6795f7dcc14fe39!8m2!3d43.2211747!4d-79.8841514!16s%2Fg%2F11c43tncmx?hl=en&entry=ttu"
      color="white"
      icon={<IconMap size={20} />}
    />
        <Block
          type="navbar"
          links={isMobile ? linksMob : links}
          image="logo.png"
          heading="Ancaster Central"
          sticky
        />
          <Box>
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
                  heading="Students Welcome"
                  paragraph={["We do take students, medical students, medical residents nurse practitioners, students for electives at our clinic."]}
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
                paragraph={["Dr. Giraldo Salazar went to medical school in Colombia where she was born. She moved to Canada in 2009 and completed her residency in Pediatrics at McMaster University and her Pediatric Respiratory Medicine training at University of Toronto. She is fluent in English and Spanish. Her hobbies include running and mountain biking."]}
              />
            </Flex>
            <Flex direction="column">
              <Block
                type="section"
                variant="B"
                imageCircle
                heading="Dinisha Patel"
                subheading="Nurse Practitioner"
                paragraph={["Immense exposure and background in General Paediatrics. Experience in working with families with young children. Excellent multidisciplinary collaborative approach in treating children and advising their schools and their families. Well rounded management of children presenting with various developmental, behavioural and learning concerns, including assessment of attention, deficit hyperkinetic disorder (ADHD), autism, anxiety, mood disorders, depression, behavioural issues and developmental delays. Excellent in counselling, paediatric behavioural disorders, including temper, tantrums Oppositional, defiant disorders. Experience in paediatric primary care, care of the venue, born and mild, routine preventative vaccinations, and travel vaccinations before making international travel."]}
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
