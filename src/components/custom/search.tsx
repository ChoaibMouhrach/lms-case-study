import React, { useId } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchProps = React.ComponentProps<"input">;

export const Search: React.FC<SearchProps> = (props) => {
  const customId = useId();
  const id = props.id || customId;

  return (
    <div className={cn("relative bg-background", props.className)}>
      <Input placeholder="Recherche" {...props} id={id} className="peer ps-9" />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <SearchIcon size={16} aria-hidden="true" />
      </div>
    </div>
  );
};
