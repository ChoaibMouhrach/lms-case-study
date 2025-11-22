import { cn } from "@/lib/utils";

interface DashboardProps {
  children: React.ReactNode;
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn("flex flex-col gap-8 py-8 container mx-auto", className)}
    >
      {children}
    </div>
  );
};

interface DashboardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  children,
  className,
}) => {
  return <div className={cn("flex-1", className)}>{children}</div>;
};

interface DashboardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-2 shrink-0", className)}>
      {children}
    </div>
  );
};

interface DashboardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardTitle: React.FC<DashboardTitleProps> = ({
  children,
  className,
}) => {
  return <span className={cn("text-3xl", className)}>{children}</span>;
};

interface DashboardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardDescription: React.FC<DashboardDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("text-muted-foreground max-w-lg", className)}>
      {children}
    </div>
  );
};
