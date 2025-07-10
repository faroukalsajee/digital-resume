import React from 'react'
import Header from '@/components/Header'
import TechnicalSummary from '@/components/TechnicalSummary'
import TechnicalSkills from '@/components/TechnicalSkills'
import ProfessionalExperience from '@/components/ProfessionalExperience'
import TechnicalProjects from '@/components/TechnicalProjects'
import Education from '@/components/Education'
import AdditionalInfo from '@/components/AdditionalInfo'

export default function Home() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <Header />
            <TechnicalSummary />
            <TechnicalSkills />
            <ProfessionalExperience />
            <TechnicalProjects />
            <Education />
            <AdditionalInfo />
        </main>
    )
} 