import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Sector Público', estres: 7.2 },
  { name: 'Sector Privado', estres: 6.8 },
  { name: 'Autónomos', estres: 6.5 },
  { name: 'ONG', estres: 5.9 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard del Ministerio de Trabajo</h2>
      <Card>
        <CardHeader>
          <CardTitle>Nivel de Estrés por Sector</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="estres" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas Generales</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Nivel promedio de estrés: 6.6</li>
              <li>Total de encuestas: 10,000</li>
              <li>Sector más estresado: Público</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Acciones Recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Implementar programas de manejo del estrés en el sector público</li>
              <li>Fomentar el equilibrio trabajo-vida en todos los sectores</li>
              <li>Realizar seguimiento trimestral de niveles de estrés</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

