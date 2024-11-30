import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

interface RegistrationProps {
  onComplete: () => void;
}

export default function Registration({ onComplete }: RegistrationProps) {
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registered with:', { email, isVerified });
    onComplete();
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="w-full md:w-1/2">
        <Image
          src="https://www.eluniversal.com.mx/resizer/v2/COJDOJLSRVCHBFILXEOKJFLQRI.jpg?auth=80e82609ea6f38b00821cd4e935139598cfa1b79a7967272705e8340dbe2d9ea&smart=true&width=1100&height=666"
          alt="Registro de usuario"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="verified"
              checked={isVerified}
              onCheckedChange={() => setIsVerified(!isVerified)}
              className="h-5 w-5 rounded-md text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <Label htmlFor="verified" className="text-sm text-gray-600">Verificar identidad (opcional)</Label>
          </div>
          <Button type="submit" className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">Registrarse</Button>
        </form>
      </div>
    </div>
  );
}

