import { cn } from "@/lib/utils"

/* ---------- Button ---------- */

type ButtonVariant = "lime" | "brand" | "ghost-dark" | "ghost-light"

// Each variant carries the ring-offset color of the surface it is usually placed on.
const buttonVariants: Record<ButtonVariant, string> = {
  lime: "bg-lime text-ink hover:bg-lime-hover focus-visible:ring-offset-ink",
  brand: "bg-brand text-white hover:bg-[#5249F0] focus-visible:ring-offset-white",
  "ghost-dark": "border border-white/15 text-white hover:bg-white/5 hover:border-white/30 focus-visible:ring-offset-ink",
  "ghost-light":
    "border border-line text-text-dark hover:border-text-dark/30 hover:bg-offwhite focus-visible:ring-offset-white",
}

type ButtonSize = "md" | "lg"

export function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-60",
    size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-5 text-sm",
    buttonVariants[variant],
    className,
  )
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function ButtonLink({ variant = "brand", size = "md", className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({ variant = "brand", size = "md", type = "button", className, children, ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

/* ---------- Badge ---------- */

type BadgeTone = "soon" | "brand" | "success" | "warning" | "neutral" | "dark"

const badgeTones: Record<BadgeTone, string> = {
  soon: "bg-lime/15 text-[#4E6B00] ring-1 ring-inset ring-lime/60",
  brand: "bg-brand-soft text-brand",
  success: "bg-success/10 text-success",
  warning: "bg-amber-500/10 text-amber-600",
  neutral: "bg-offwhite text-text-muted ring-1 ring-inset ring-line",
  dark: "bg-white/10 text-white/80 ring-1 ring-inset ring-white/15",
}

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none whitespace-nowrap",
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ---------- Eyebrow & SectionHeading ---------- */

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.14em]",
        dark ? "text-brand-light" : "text-brand",
      )}
    >
      {children}
    </p>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  dark?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-[52px]",
          dark ? "text-white" : "text-text-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/65" : "text-text-muted")}>
          {description}
        </p>
      )}
    </div>
  )
}

/* ---------- Container ---------- */

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8", className)}>{children}</div>
}
