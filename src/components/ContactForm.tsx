import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const WHATSAPP_NUMBER = '528342550555';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [problema, setProblema] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let mensaje = `Hola, soy ${nombre}.`;

    if (negocio.trim()) {
      mensaje += ` Tengo un negocio llamado "${negocio}".`;
    }

    if (domicilio.trim()) {
      mensaje += ` Está ubicado en: ${domicilio}.`;
    }

    mensaje += `\n\nTe cuento mi situación:\n${problema}`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setNombre('');
      setNegocio('');
      setDomicilio('');
      setProblema('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 px-6 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="badge text-accent mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            Cu&eacute;ntame qu&eacute; traes entre manos
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
            Sin presi&oacute;n. Me cuentas tu situaci&oacute;n y vemos si puedo ayudarte.
            Te responder&eacute; por WhatsApp para coordinar una pl&aacute;tica.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border bg-secondary/40">
            <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
            <span className="ml-2 text-xs text-muted-foreground font-mono-label">nuevo-proyecto.md</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
            <div className="space-y-1.5">
              <Label htmlFor="nombre" className="text-foreground text-sm font-medium">
                Tu nombre <span className="text-accent">*</span>
              </Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Ej: Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="negocio" className="text-foreground text-sm font-medium">
                Nombre de tu negocio <span className="text-muted-foreground text-xs font-normal">(opcional)</span>
              </Label>
              <Input
                id="negocio"
                type="text"
                placeholder="Ej: Taquería El Compa, Ferretería Martínez..."
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="domicilio" className="text-foreground text-sm font-medium">
                Domicilio de tu negocio <span className="text-muted-foreground text-xs font-normal">(opcional)</span>
              </Label>
              <Input
                id="domicilio"
                type="text"
                placeholder="Ej: Calle Hidalgo 123, Centro, Cd. Victoria"
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="problema" className="text-foreground text-sm font-medium">
                &iquest;Qu&eacute; necesitas? <span className="text-accent">*</span>
              </Label>
              <Textarea
                id="problema"
                placeholder="Cuéntame cómo funciona tu negocio, qué te gustaría automatizar, qué sistema necesitas, o qué problema tienes. Entre más claro, mejor."
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
                required
                rows={5}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:brightness-110 font-medium py-6 text-sm transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Abriendo WhatsApp...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar por WhatsApp
                </span>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-xs">
              Se abrir&aacute; WhatsApp con tu mensaje listo para enviar. No guardamos tus datos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}