import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { Moon, Monitor, SunIcon } from "lucide-react";
import { Ring } from "@/components/icons/ranks";

const navigations: { to: string; title: string }[] = [];

export const Navigation = () => {
  return (
    <div className="border-b bg-background">
      <div className="py-4 flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/dashboard">
          <Logo className="w-16 sm:w-20 md:w-24" />
        </Link>
        <div className="flex-1 px-2 sm:px-4 flex gap-2 text-sm text-muted-foreground">
          {navigations.map((navigation) => (
            <Link
              key={navigation.to}
              to={navigation.to}
              className="hidden sm:block"
            >
              {navigation.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Profile />
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <Avatar className="w-7 h-7 sm:w-8 sm:h-8">
            <AvatarImage src="https://i.pravatar.cc/300" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="shrink-0">
              <Ring size={46} />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/profile">Profil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
        <DropdownMenuSeparator />
        <ThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="px-2 py-1">
      <ToggleGroup
        size="sm"
        type="single"
        value={theme}
        variant="default"
        className="w-full grid grid-cols-3 gap-1"
        onValueChange={(value) => value && setTheme(value)}
      >
        <ToggleGroupItem
          value="light"
          aria-label="Thème clair"
          className="px-2"
        >
          <SunIcon size={14} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Thème sombre"
          className="px-2"
        >
          <Moon size={14} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="system"
          aria-label="Thème système"
          className="px-2"
        >
          <Monitor size={14} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
