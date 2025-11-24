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
              <FormLabel className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <span>Mot de passe</span>
                <Link to="/" className="text-primary text-sm">
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
          <span>Vous n'avez pas de compte ?</span>{" "}
          <Link
            to="/sign-up"
            className="text-foreground underline underline-offset-2"
          >
            Créer un compte
          </Link>
        </div>
      </form>
    </Form>
  );
};
