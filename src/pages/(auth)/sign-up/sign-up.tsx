import z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleIcon } from "@/components/icons/google";
import { GithubIcon } from "@/components/icons/github";
import { Link } from "@tanstack/react-router";
import { Password } from "@/components/custom/password";

const schema = z.object({
  first_name: z.string().min(2, { message: "Prénom requis" }),
  last_name: z.string().min(2, { message: "Nom de famille requis" }),
  email_address: z.email(),
  password: z.string(),
});

export const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Alex" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="last_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de famille</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Martin" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="email_address"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Adresse e‑mail universitaire</FormLabel>
              <FormControl>
                <Input {...field} placeholder="prenom.nom@financeinter.ca" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Password {...field} placeholder="********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className="text-xs mt-4 text-muted-foreground leading-relaxed">
          En créant votre compte, vous acceptez le Règlement du Master Finance
          Internationale et la Politique de confidentialité universitaire.
        </span>

        <Button className="mt-5">Créer mon dossier d'inscription</Button>

        <div className="flex items-center gap-4 my-6">
          <Separator className="shrink" />
          <span className="text-sm text-muted-foreground">OU</span>
          <Separator className="shrink" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Button variant="secondary" className="w-full">
            <GoogleIcon size={16} />
            <span className="ml-2">Google</span>
          </Button>
          <Button variant="secondary" className="w-full">
            <GithubIcon size={16} />
            <span className="ml-2">Github</span>
          </Button>
        </div>

        <div className="text-muted-foreground text-sm mt-6 text-center">
          <span>Déjà inscrit au programme ?</span>{" "}
          <Link
            to="/sign-in"
            className="text-foreground underline underline-offset-2"
          >
            Accéder à mon dossier
          </Link>
        </div>
      </form>
    </Form>
  );
};
