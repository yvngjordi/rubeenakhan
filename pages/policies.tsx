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
          <Box>
          <h1>Please Read the Below Clinic Policies Carefully:</h1>
          <ul>
              <li><strong>Do not use email to discuss medical issues.</strong> Emails should only be used for inquiries about appointments. We are not responsible for any data breaches that occur through email communication.</li>
              <li>We reserve the right to reschedule echocardiograms if the appointment has not been confirmed by the patient at least one day before the scheduled appointment.</li>
              <li>A 72-hour notice is required for cancellation or rebooking of echocardiogram appointments. There is a $300 fee for no-shows for echocardiograms with consults.</li>
              <li>We do not discuss reports via email or phone. If you have concerns or questions, please schedule an appointment to discuss the results.</li>
          </ul>
          <p><strong>Confidential patient information should not be discussed over email.</strong> Email is not a secure platform and may be susceptible to data breaches. Personal health information must be protected from any potential breaches. We communicate with our patients through email solely to schedule appointments. Personal health information includes, but is not limited to, full name, date of birth, health card information, details of the patient's family doctor, medical conditions, diagnoses, and genetic concerns related to the patient.</p>
          <p>At Ancaster Central Children’s Clinic, we are committed to protecting your personal health information. If you have any questions or concerns, please do not hesitate to contact us below.</p>

          </Box>
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
