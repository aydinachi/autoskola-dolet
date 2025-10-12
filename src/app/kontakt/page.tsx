'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: var(--Background);
  color: var(--white);
  padding: 1rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--light-bordo);
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    color: var(--link-color);
    margin-bottom: 1.5rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bordo);
  color: var(--white);
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--light-bordo);
    transform: translateY(-1px);
  }
`;

const ContactCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid rgba(139, 0, 0, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(165, 42, 42, 0.05) 100%);
    border-radius: 1.5rem;
    pointer-events: none;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  font-size: 1rem;
  color: var(--white);
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:focus {
    outline: none;
    border-color: var(--light-bordo);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.2);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: rgba(139, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
    font-weight: 400;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  position: relative;
  z-index: 1;
  
  &:focus {
    outline: none;
    border-color: var(--light-bordo);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.2);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: rgba(139, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
    font-weight: 400;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--bordo) 0%, var(--light-bordo) 100%);
  color: var(--white);
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 0, 0, 0.4);
    background: linear-gradient(135deg, var(--light-bordo) 0%, var(--bordo) 100%);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(139, 0, 0, 0.3);
  }
  
  &:disabled {
    background: #333;
    cursor: not-allowed;
    opacity: 0.5;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: var(--white);
  padding: 0.8rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
`;

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
  color: var(--white);
  padding: 0.8rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
`;

const ContactInfo = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 0, 0, 0.2);
  
  h3 {
    color: var(--light-bordo);
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p {
    color: var(--link-color);
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <BackButton href="/">
          ← Povratak na početnu
        </BackButton>
        <h1>Kontakt - Auto škola Dolet</h1>
        <p>Kontaktirajte nas za sve informacije o obuci i upisu</p>
      </ContactHeader>

      <ContactCard>
        {submitStatus === 'success' && (
          <SuccessMessage>
            Hvala vam! Vaša poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.
          </SuccessMessage>
        )}
        
        {submitStatus === 'error' && (
          <ErrorMessage>
            Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.
          </ErrorMessage>
        )}

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ime i prezime *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Unesite vaše ime i prezime"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email adresa *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="vas.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Broj telefona</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+387 XX XXX XXX"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Predmet *</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="O čemu se radi?"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Poruka *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Opišite vaš upit ili problem..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Šalje se...' : 'Pošalji poruku'}
          </SubmitButton>
        </form>

        <ContactInfo>
          <h3>Kontakt informacije</h3>
          <p><strong>Telefon:</strong> +387 XX XXX XXX</p>
          <p><strong>Email:</strong> info@autoskoladolet.ba</p>
          <p><strong>Adresa:</strong> Ul. Primjera 123, Sarajevo</p>
          <p><strong>Radno vrijeme:</strong> Pon-Pet: 08:00-18:00, Sub: 08:00-14:00</p>
        </ContactInfo>
      </ContactCard>
    </ContactContainer>
  );
}
