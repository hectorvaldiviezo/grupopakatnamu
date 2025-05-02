import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Scale } from "lucide-react";

// Define the schema with Zod
const formSchema = z.object({
  descripcion: z.string().min(1, "La descripción es requerida"),
  correo: z.string().email("Debe ser un correo válido"),
});

type FormValues = z.infer<typeof formSchema>;

const LineaEticaModal: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descripcion: "",
      correo: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="lg" className="ps-2">
          <Scale className="mr-3 min-h-6 min-w-6" />
          Línea Ética
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Línea Ética Grupo Pakatnamu</DialogTitle>
          <DialogDescription className="text-justify">
            Estimado Cliente, este canal de comunicación es solo para denuncias
            de Línea Ética de acuerdo a nuestra norma interna
            RI.2023.CCE.001.001 Línea Ética, por tanto esta vía de denuncias no
            corresponde de ninguna manera ni reemplaza al LIBRO DE RECLAMACIONES
            de la empresa, por lo que si desea registrar un reclamo o denuncia
            sobre algún producto comprado o referente al servicio recibido, debe
            solicitar el Libro de Reclamaciones respectivo de acuerdo a lo que
            estipula el Codigo de Defensa y Protección al Consumidor Ley 29571;
            por otro lado, este canal no atiende requerimientos de información
            por parte de clientes u organismos gubernamentales peruanos ya que
            estos se realizan de manera directa y previa notificación, a las
            direcciones geográficas institucionales que aparecen en nuestras
            páginas web u otros medios de difusión de información de las
            empresas del Grupo Pakatnamu. Ud. puede realizar aquí una denuncia
            anónima y confidencial completando el formulario web o utilizando
            alguno de los demás medios disponibles. No olvide incluir la mayor
            cantidad de información sobre los hechos. Ante cualquier consulta o
            verificar si su caso fue atendido, por favor, escribenos a
            denuncialineaetica@grupopakatnamu.com.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Denuncia aquí</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Escribe aquí tu denuncia..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormDescription>
                    Para recibir información del avance de tu denuncia, por
                    favor registra un email anónimo o personal.
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Escribe tu correo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LineaEticaModal;
