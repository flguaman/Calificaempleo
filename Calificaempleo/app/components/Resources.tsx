import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, PhoneCall, FileText } from 'lucide-react'

export default function Resources() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Recursos para el Bienestar</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Técnicas de Manejo del Estrés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Practicar mindfulness diariamente</li>
              <li>Ejercicios de respiración profunda</li>
              <li>Establecer límites en el trabajo</li>
              <li>Hacer ejercicio regularmente</li>
              <li>Mantener una dieta equilibrada</li>
            </ul>
            <Button className="mt-4 w-full">Ver más técnicas</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PhoneCall className="mr-2" />
              Servicios de Apoyo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="outline" className="w-full justify-start">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Línea de Ayuda Psicológica
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Asesoramiento Laboral
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Guía de Derechos Laborales
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

