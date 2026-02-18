import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  variant?: "light" | "dark";
  subtitle?: string;
}

export function Logo({
  className,
  size = "md",
  href = "/",
  variant = "light",
  subtitle,
}: LogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl md:text-4xl",
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const content = (
    <div
      className={cn(
        "flex flex-col select-none",
        "transition-all duration-300",
        "group-hover:scale-[1.02]",
        className,
      )}
    >
      <div
        className="flex items-center gap-0"
        style={{ fontFamily: "Corpta, sans-serif" }}
      >
        <span
          className={cn(
            sizes[size],
            "font-normal tracking-tight",
            "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent",
          )}
        >
          {"{"}
        </span>
        <span
          className={cn(
            sizes[size],
            "font-normal tracking-tight",
            "bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent",
          )}
        >
          {"}"}
        </span>
        <span
          className={cn(
            sizes[size],
            "font-normal tracking-tight",
            "ml-0.5",
            variant === "light" ? "text-slate-800" : "text-white",
          )}
        >
          SoftAcademy
        </span>
      </div>
      {subtitle && (
        <span
          className={cn(
            subtitleSizes[size],
            "font-medium tracking-wider uppercase -mt-0.5 ml-0.5",
            variant === "light" ? "text-slate-500" : "text-slate-400",
          )}
        >
          {subtitle}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
