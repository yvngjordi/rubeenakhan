import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconHeart, IconVaccine, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '/', label: 'Home' },
  { link: 'https://rubeenakhanpediatrics.com/#about', label: 'About' },
  { link: '/services', label: 'Services'},
  {
    label: 'Resources',
    links: [
      { link: '/referral-letter', label: 'Referral Letter' },
      { link: '/policies', label: 'Policies' },
    ],
  },
  { link: 'https://rubeenakhanpediatrics.com/#team', label: 'Our Team' },
  { link: '#contact', label: 'Contact' },
];

const linksMob = [
  { link: '/', label: 'Home' },
  { link: 'https://rubeenakhanpediatrics.com/#about', label: 'About' },
  { link: '/services', label: 'Services'},
  { link: '/referral-letter', label: 'Referral Letter' },
  { link: '/policies', label: 'Policies' },
  { link: 'https://rubeenakhanpediatrics.com/#team', label: 'Our Team' },
  { link: '#contact', label: 'Contact' },
];

const data = [
  {
    title: 'Ancaster Central',
    links: [
      { label: 'About Us', link: 'https://rubeenakhanpediatrics.com/#about' },
      { label: 'Our Services', link: '/services' },
      { label: 'Meet Our Team', link: 'https://rubeenakhanpediatrics.com/#team' },
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
          links={isMobile ? linksMob : links}
          image="logo.png"
          heading="Ancaster Central"
          sticky
        />
        <Box mt="-18.6vh">

          <Wrapper
            type="section"
            py={50}
            px={isMobile ? 30 : 200}
          >
          <h1>Services Offered at Ancaster Central Children’s Clinic</h1>
          <header>
              <p>Best way to reach clinic for non urgent matters is via email: <a href="mailto:admin@rubeenakhanpediatrics.ca">admin@rubeenakhanpediatrics.ca</a></p>
              <p>We prefer Email for bookings and non urgent matters</p>
          </header>

          <section>
              <h2>Services Offered</h2>
              <ul>
                  <li>Pediatric Cardiology consultation</li>
                  <li>Echocardiogram</li>
                  <li>ECG</li>
                  <li>Holter</li>
                  <li>Pediatric Respirology and Asthma Consultation</li>
                  <li>General Pediatric Consultations</li>
                  <li>Other pediatric, general pediatric, routine paediatric care, urgent care, services offered at Ancaster central children’s clinic:</li>
                  <ul>
                      <li>Developmental assessment</li>
                      <li>School, learning and behavioural issues</li>
                      <li>ADHD assessment and treatment.</li>
                      <li>Common Pediatric ailments.</li>
                      <li>Infant and premature newborn follow up care.</li>
                      <li>Adolescent and teenager clinic</li>
                      <li>Chest pain, murmur, fainting and suspected heart disease clinic.</li>
                      <li>Asthma allergies and respiratory diseases.</li>
                      <li>Referrals accepted from hospital after discharge or from family doctors if concerned about pediatric ailment.</li>
                  </ul>
                  <li>Newborn Care</li>
                  <li>Well baby care</li>
                  <li>Routine vaccinations</li>
                  <li>Travel advise and vaccination recommendations</li>
                  <li>Walk in urgent care for fever, pneumonia, rashes, ear infections, injury, diarrhea , vomiting, rashes etc</li>
                  <li>Adhd</li>
                  <li>Anxiety</li>
                  <li>Autism assessment</li>
                  <li>Developmental assessment</li>
              </ul>
              <p>All consultations are done only if accompanied with referral from your child's doctor/family doctor/walk in clinic etc</p>
              <p>Walk in urgent care is available from 10 am -4:00 pm on Tuesdays, Thursdays, Fridays, and some Saturdays. Please email or call the clinic prior to arrival.</p>
          </section>
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
          address="26 Legend Court - Units 3 and 4, Ancaster. L9K 1J3"
          title="Ancaster Central Childrens Clinic"
          height={400}
          borderRadius="8px"
        />
      </Wrapper>
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
