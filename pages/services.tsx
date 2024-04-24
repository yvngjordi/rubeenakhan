import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconHeart, IconVaccine, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '/', label: 'Home' },
  { link: 'https://rubeenakhanpediatrics.health/#about', label: 'About' },
  { link: '/services', label: 'Services'},
  { link: 'https://rubeenakhanpediatrics.health/#team', label: 'Our Team' },
  { link: '#contact', label: 'Contact' },
];

const data = [
  {
    title: 'Ancaster Central',
    links: [
      { label: 'About Us', link: 'https://rubeenakhanpediatrics.health/#about' },
      { label: 'Our Services', link: '/services' },
      { label: 'Meet Our Team', link: 'https://rubeenakhanpediatrics.health/#team' },
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
const recaptchaSiteKey = '6Lfi0cQpAAAAADBMtv-9-m4pTm8RBeF0pD-5JHg2';

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
          links={links}
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
          <h2>Pediatric Cardiology Clinic</h2>
          <p>Headed by Dr. Khan, who has experience in pediatric cardiology dating back to 2007 when she was a fellow at hospitals for children, University of Toronto. She continued her pediatric cardiology training and electives at Master Children’s Hospital cardiology department during her residency from 2012 to 2016. She has been independently practicing as a community-based pediatrician with a focus in pediatric cardiology.</p>
          <h3>Services offered:</h3>
          <ul>
              <li>Cardiology consultation</li>
              <li>Electrocardiogram (ECG)</li>
              <li>Cardiac examination, assessment, and evaluation for pediatric cardiology referrals</li>
              <li>Pre-sports participation screening</li>
              <li>Holter monitoring</li>
              <li>2D and colour Doppler paediatric trans thoracic echocardiograms</li>
          </ul>
          <h2>Other Services Offered</h2>
          <ul>
              <li>Developmental assessment</li>
              <li>School, learning, and behavioural issues</li>
              <li>ADHD assessment and treatment</li>
              <li>Common Pediatric ailments</li>
              <li>Infant and premature newborn follow-up care</li>
              <li>Adolescent and teenager clinic</li>
              <li>Chest pain, murmur, fainting, and suspected heart disease clinic</li>
              <li>Asthma, allergies, and respiratory diseases</li>
              <li>Referrals accepted from hospital after discharge or from family doctors if concerned about pediatric ailment</li>
          </ul>
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
