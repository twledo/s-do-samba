import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "motion/react"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#b8ef4a]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[#5cf0cb]",
        outline: "border border-paper/30 text-foreground hover:border-lime hover:text-lime",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        dark: "bg-ink text-paper hover:bg-ink2",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>

const tap = { scale: 0.96 }
const tapTransition = { type: "spring", stiffness: 600, damping: 30 } as const

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & ButtonVariantProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

/** Link com cara de botão e retorno ao toque. */
function ButtonLink({
  className,
  variant,
  size,
  ...props
}: HTMLMotionProps<"a"> & ButtonVariantProps) {
  return (
    <motion.a
      data-slot="button"
      whileTap={tap}
      transition={tapTransition}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, ButtonLink, buttonVariants }
