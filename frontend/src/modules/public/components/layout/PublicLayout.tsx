import type { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="">
        {children}
      </main>
      
      <footer className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-xl font-semibold mb-4">brandidos</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Transformamos ideas en experiencias digitales extraordinarias. 
                Especialistas en diseño gráfico, desarrollo web y branding.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Diseño Gráfico</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Branding</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Marketing Digital</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">hola@brandidos.com</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">+502 1234 5678</a></li>
                <li><span className="text-white/60 text-sm">Guatemala, GT</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © 2025 Brandidos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;