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

export const SignIn = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col">
        <FormField
          name="email_address"
          control={form.control}
          render={({ field }) => (
            <FormItem>
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
              <FormLabel>
                <span>Mot de passe</span>

                <Link to="/" className="text-primary ml-auto">
                  Mot de passe oublié ?
                </Link>
              </FormLabel>
              <FormControl>
                <Password {...field} placeholder="********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-5">Se connecter</Button>

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
          <span>Vous n’avez pas de compte ?</span>{" "}
          <Link to="/sign-up" className="text-foreground">
            Créer un compte
          </Link>
        </div>
      </form>
    </Form>
  );
};
