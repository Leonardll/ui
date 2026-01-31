"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10"
            >
                {/* Diamond Frame / White Segment (Stylized L) */}
                <path
                    d="M60 10L10 60L60 110V90L30 60L60 30V10Z"
                    fill="currentColor"
                    className="text-foreground"
                />
                {/* Silver/Grey Segment (Stylized L with Node) */}
                <path
                    d="M60 10V30L90 60L60 90V110L110 60L60 10Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                />
                {/* Logic Node */}
                <circle
                    cx="105"
                    cy="60"
                    r="6"
                    fill="currentColor"
                    className="text-muted-foreground"
                />
            </svg>
            {showText && (
                <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground uppercase">
                    Leonard <span className="text-primary">Lator</span>
                </span>
            )}
        </div>
    );
}
