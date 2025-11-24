import {
  Dashboard,
  DashboardContent,
  DashboardHeader,
  DashboardTitle,
  DashboardDescription,
} from "@/components/dashboard-page";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/custom/password";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

const profileSchema = z.object({
  fullName: z.string().min(2, { message: "Nom complet trop court" }),
  email: z.string().email({ message: "Adresse e‑mail invalide" }),
});

const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, { message: "Mot de passe actuel requis" }),
    newPassword: z
      .string()
      .min(6, { message: "Nouveau mot de passe trop court" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirmez le nouveau mot de passe" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export const ProfilePage = () => {
  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "Alex Martin",
      email: "alex.martin@financeinter.ca",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSaveProfile = (values: z.infer<typeof profileSchema>) => {
    console.log("Profil mis à jour", values);
  };

  const onChangePassword = (values: z.infer<typeof passwordSchema>) => {
    console.log("Mot de passe mis à jour", values);
  };

  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Profil Étudiant</DashboardTitle>
        <DashboardDescription>
          Master Finance Internationale - Gestion de votre dossier académique et
          informations personnelles.
        </DashboardDescription>
      </DashboardHeader>

      <DashboardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-background rounded-md border p-4">
              <span className="text-lg">Informations personnelles</span>
              <Form {...profileForm}>
                <form
                  className="mt-4 flex flex-col gap-4"
                  onSubmit={profileForm.handleSubmit(onSaveProfile)}
                >
                  <FormField
                    name="fullName"
                    control={profileForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Alex Martin" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    control={profileForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse e‑mail universitaire</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="prenom.nom@financeinter.ca"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <Button type="submit">Enregistrer les modifications</Button>
                  </div>
                </form>
              </Form>
            </div>

            <div className="bg-background rounded-md border p-4">
              <span className="text-lg">Sécurité du compte</span>
              <Form {...passwordForm}>
                <form
                  className="mt-4 flex flex-col gap-4"
                  onSubmit={passwordForm.handleSubmit(onChangePassword)}
                >
                  <FormField
                    name="currentPassword"
                    control={passwordForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mot de passe actuel</FormLabel>
                        <FormControl>
                          <Password {...field} placeholder="********" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      name="newPassword"
                      control={passwordForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nouveau mot de passe</FormLabel>
                          <FormControl>
                            <Password {...field} placeholder="********" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="confirmPassword"
                      control={passwordForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirmer le mot de passe</FormLabel>
                          <FormControl>
                            <Password {...field} placeholder="********" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Mettre à jour le mot de passe</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-background rounded-md border p-4">
              <span className="text-lg">Suspension du dossier</span>
              <p className="text-sm text-muted-foreground mt-2">
                Attention : cette action suspend votre inscription au Master et
                supprime l'accès aux ressources pédagogiques.
              </p>
              <Separator className="my-4" />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Suspendre l'inscription</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Suspendre définitivement votre inscription au Master ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action est irréversible. Vous perdrez l'accès à
                      votre dossier académique et aux contenus pédagogiques du
                      programme.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction>
                      Confirmer la suspension
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </DashboardContent>
    </Dashboard>
  );
};
