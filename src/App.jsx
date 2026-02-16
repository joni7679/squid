import React from 'react'
import FeatureSection from './components/FeatureSection'
import EcosystemHeroSection from './components/EcosystemHeroSection'
import CompaniesweWorked from './components/CompaniesweWorked'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <main>
        <HeroSection />
        <Dashboard />
        <FeatureSection />
        <EcosystemHeroSection />
        <CompaniesweWorked />
        <ContactSection />
        <Footer />
      </main>

    </>
  )
}

export default App
