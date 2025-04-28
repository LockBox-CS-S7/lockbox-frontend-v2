import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingScreenProps {
    /**
     * The size of the loading spinner
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "xl"
    /**
     * Optional text to display below the spinner
     */
    text?: string
    /**
     * Optional className for additional styling
     */
    className?: string
}

export function LoadingScreen({ size = "md", text, className }: LoadingScreenProps) {
    // Map size to appropriate classes
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
    }

    return (
        <div
            className={cn("flex min-h-[200px] w-full flex-col items-center justify-center gap-4", className)}
            aria-live="polite"
            aria-busy="true"
        >
            <Loader2 className={cn("animate-spin text-muted-foreground", sizeClasses[size])} />
            {text && <p className="text-sm text-muted-foreground">{text}</p>}
            <span className="sr-only">Loading</span>
        </div>
    )
}
