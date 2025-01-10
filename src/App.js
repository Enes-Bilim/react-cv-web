import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaCode, FaDatabase, FaServer } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Header = styled.header`
  background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
  color: white;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  a {
    color: white;
    font-size: 1.8rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      color: #e5e7eb;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #3b82f6;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: #e5e7eb;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #3b82f6;
  }
`;

function App() {
  return (
    <Container>
      <Header>
        <Name>Enes Bilim</Name>
        <ContactInfo>
          <ContactItem>
            <FaEnvelope />
            enesbilim06@hotmail.com
          </ContactItem>
          <ContactItem>
            <FaPhone />
            +90 541 860 0890
          </ContactItem>
        </ContactInfo>
        <SocialLinks>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialLinks>
      </Header>

      <Section>
        <SectionTitle>Eğitim Bilgileri</SectionTitle>
        <Timeline>
          <TimelineItem>
            <h3>Kapadokya Üniversitesi</h3>
            <p>Bilgisayar Programcılığı</p>
            <p>2023-2025</p>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>İş Deneyimi</SectionTitle>
        <Timeline>
          <TimelineItem>
            <h3>Frontend Developer</h3>
            <p>HD Bilişim</p>
            <p>2023-2025</p>
            <p>React ve modern web teknolojileri ile uygulama geliştirme.</p>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Yetenekler</SectionTitle>
        <SkillsGrid>
          <SkillItem>
            <FaCode />
            <h4>Frontend</h4>
            <p>React.js, JavaScript, HTML5, CSS3</p>
          </SkillItem>
          <SkillItem>
            <FaServer />
            <h4>Backend</h4>
            <p>Node.js</p>
          </SkillItem>
          <SkillItem>
            <FaDatabase />
            <h4>Diğer</h4>
            <p>Git, VS Code</p>
          </SkillItem>
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Hobiler ve İlgi Alanları</SectionTitle>
        <ul>
          <li>Spor</li>
          <li>Yeni Teknolojileri Takip Etme</li>
          <li>Kitap Okuma</li>
        </ul>
      </Section>
    </Container>
  );
}

export default App;