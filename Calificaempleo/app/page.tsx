'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Registration from './components/Registration'
import Survey from './components/Survey'
import Dashboard from './components/Dashboard'
import Resources from './components/Resources'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('registration')

  const renderPage = () => {
    switch (currentPage) {
      case 'registration':
        return <Registration onComplete={() => setCurrentPage('survey')} />
      case 'survey':
        return <Survey onComplete={() => setCurrentPage('resources')} />
      case 'dashboard':
        return <Dashboard />
      case 'resources':
        return <Resources />
      default:
        return <Registration onComplete={() => setCurrentPage('survey')} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Calificaempleo.ec</h1>
          <nav>
            <Button variant="ghost" onClick={() => setCurrentPage('registration')} className="text-white mr-2">Registro</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('survey')} className="text-white mr-2">Encuesta</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('dashboard')} className="text-white mr-2">Dashboard</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('resources')} className="text-white">Recursos</Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            {renderPage()}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

