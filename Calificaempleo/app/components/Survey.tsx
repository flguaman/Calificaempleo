import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'

interface SurveyProps {
  onComplete: () => void
}

export default function Survey({ onComplete }: SurveyProps) {
  const [stressLevel, setStressLevel] = useState(5)
  const [jobSatisfaction, setJobSatisfaction] = useState('')
  const [workLifeBalance, setWorkLifeBalance] = useState('')
  const [careerGrowth, setCareerGrowth] = useState('')
  const [workEnvironment, setWorkEnvironment] = useState('')
  const [comments, setComments] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Survey submitted:', { 
      stressLevel, 
      jobSatisfaction, 
      workLifeBalance, 
      careerGrowth, 
      workEnvironment, 
      comments 
    })
    onComplete()
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/26/66538f8630838.jpeg"
            alt="Encuesta de empleo y estrés laboral"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Encuesta de Empleo y Estrés Laboral</h2>
          <p className="text-gray-600 mb-4">Por favor, responda a las siguientes preguntas sobre su situación laboral actual.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="stress-level">Nivel de Estrés Laboral (1-10)</Label>
          <Slider
            id="stress-level"
            min={1}
            max={10}
            step={1}
            value={[stressLevel]}
            onValueChange={(value) => setStressLevel(value[0])}
            className="my-4"
          />
          <div className="text-center mt-2 font-bold text-2xl">{stressLevel}</div>
        </div>

        <div>
          <Label>Satisfacción Laboral</Label>
          <RadioGroup value={jobSatisfaction} onValueChange={setJobSatisfaction} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="muy-insatisfecho" id="muy-insatisfecho" />
              <Label htmlFor="muy-insatisfecho">Muy insatisfecho</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="insatisfecho" id="insatisfecho" />
              <Label htmlFor="insatisfecho">Insatisfecho</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="neutral" id="neutral" />
              <Label htmlFor="neutral">Neutral</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="satisfecho" id="satisfecho" />
              <Label htmlFor="satisfecho">Satisfecho</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="muy-satisfecho" id="muy-satisfecho" />
              <Label htmlFor="muy-satisfecho">Muy satisfecho</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="work-life-balance">Equilibrio Trabajo-Vida Personal</Label>
          <Select value={workLifeBalance} onValueChange={setWorkLifeBalance}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Seleccione una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="muy-malo">Muy malo</SelectItem>
              <SelectItem value="malo">Malo</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="bueno">Bueno</SelectItem>
              <SelectItem value="excelente">Excelente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Oportunidades de Crecimiento Profesional</Label>
          <RadioGroup value={careerGrowth} onValueChange={setCareerGrowth} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="muy-limitadas" id="muy-limitadas" />
              <Label htmlFor="muy-limitadas">Muy limitadas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="limitadas" id="limitadas" />
              <Label htmlFor="limitadas">Limitadas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderadas" id="moderadas" />
              <Label htmlFor="moderadas">Moderadas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buenas" id="buenas" />
              <Label htmlFor="buenas">Buenas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="excelentes" id="excelentes" />
              <Label htmlFor="excelentes">Excelentes</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="work-environment">Ambiente Laboral</Label>
          <Select value={workEnvironment} onValueChange={setWorkEnvironment}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Seleccione una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="muy-negativo">Muy negativo</SelectItem>
              <SelectItem value="negativo">Negativo</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
              <SelectItem value="positivo">Positivo</SelectItem>
              <SelectItem value="muy-positivo">Muy positivo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="comments">Comentarios Adicionales</Label>
          <Textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Proporcione contexto adicional sobre su situación laboral..."
            className="w-full mt-2"
          />
        </div>

        <Button type="submit" className="w-full">Enviar Encuesta</Button>
      </form>
    </div>
  )
}

