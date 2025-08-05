import { cn } from "@/lib/utils";

export default function PageWrapper({ children, className }) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
