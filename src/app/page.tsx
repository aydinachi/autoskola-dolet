import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <section id="pocetna">
        <HeroSection />
      </section>
      <section id="kursevi">
        <Featured />
        <OffersSection />
      </section>
      <section id="prednosti">
        <FinancilaFreedom />
        <FinancialFuture />
      </section>
      <section id="cijena">
        <IntroSection />
      </section>
      <section id="o-nama">
        <JoinSection />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="kontakt">
        {/* Contact section - can be added later */}
      </section>
    </main>
  );
}
