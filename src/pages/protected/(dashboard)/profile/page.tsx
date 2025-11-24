import { Dashboard, DashboardContent, DashboardHeader, DashboardTitle, DashboardDescription } from "@/components/dashboard-page";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/custom/password";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
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
    currentPassword: z.string().min(6, { message: "Mot de passe actuel requis" }),
    newPassword: z.string().min(6, { message: "Nouveau mot de passe trop court" }),
    confirmPassword: z.string().min(6, { message: "Confirmez le nouveau mot de passe" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export const ProfilePage = () => {
  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: { fullName: "Alex Martin", email: "alex.martin@example.com" },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
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
        <DashboardTitle>Profil</DashboardTitle>
        <DashboardDescription>
          Gérez vos informations personnelles, votre e‑mail et votre mot de passe.
        </DashboardDescription>
      </DashboardHeader>

      <DashboardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-start-1 col-end-3 flex flex-col gap-6">
            <div className="bg-background rounded-md border p-4">
              <span className="text-lg">Informations personnelles</span>
              <Form {...profileForm}>
                <form className="mt-4 flex flex-col gap-4" onSubmit={profileForm.handleSubmit(onSaveProfile)}>
                  <FormField
                    name="fullName"
                    control={profileForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Votre nom" />
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
                        <FormLabel>Adresse e‑mail</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="exemple@exemple.com" />
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
              <span className="text-lg">Changer le mot de passe</span>
              <Form {...passwordForm}>
                <form className="mt-4 flex flex-col gap-4" onSubmit={passwordForm.handleSubmit(onChangePassword)}>
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
                  <div className="grid grid-cols-2 gap-4">
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

          <div className="col-start-3 col-end-4 flex flex-col gap-6">
            <div className="bg-background rounded-md border p-4">
              <span className="text-lg">Supprimer le compte</span>
              <p className="text-sm text-muted-foreground mt-2">
                Cette action est définitive. Toutes vos données associées seront supprimées.
              </p>
              <Separator className="my-4" />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Supprimer le compte</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Supprimer définitivement votre compte ?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action est irréversible. Confirmez la suppression de votre compte.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction>Confirmer la suppression</AlertDialogAction>
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

