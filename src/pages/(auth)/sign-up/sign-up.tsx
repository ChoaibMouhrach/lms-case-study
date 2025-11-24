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
        <div className="grid grid-cols-2 gap-4">
          <FormField
            name="email_address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Jean" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email_address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Dupont" />
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
              <FormLabel>Adresse e‑mail</FormLabel>
              <FormControl>
                  <Input {...field} placeholder="exemple@exemple.com" />
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
        <span className="text-xs mt-4 text-muted-foreground">
          En vous inscrivant, vous acceptez nos Conditions d’utilisation et
          notre Accord de traitement des données
        </span>

        <Button className="mt-5">S’inscrire</Button>

        <div className="flex items-center gap-4 my-6">
          <Separator className="shrink" />
          <span className="text-sm text-muted-foreground">OU</span>
          <Separator className="shrink" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="secondary">
            <GoogleIcon size={16} />
            Google
          </Button>
          <Button variant="secondary">
            <GithubIcon size={16} /> Github
          </Button>
        </div>

        <div className="text-muted-foreground text-sm mt-4 text-center">
          <span>Vous avez déjà un compte ?</span>{" "}
          <Link to="/sign-in" className="text-foreground">
            Se connecter
          </Link>
        </div>
      </form>
    </Form>
  );
};
