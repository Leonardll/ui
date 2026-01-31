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
                width="40"
                height="40"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
            >
                {/* Left Framing Bracket - White/Foreground */}
                <path
                    d="M54 12L12 54L54 96"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                />
                {/* Right Framing Bracket - Grey/Muted */}
                <path
                    d="M66 12L108 54L66 96"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                />
                {/* Internal 'L' (Upper) - White/Foreground */}
                <path
                    d="M42 40V66H68"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                />
                {/* Internal 'L' (Lower) - Grey/Muted + Node */}
                <path
                    d="M78 68V42H52"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                />
                {/* Branding Node Circle */}
                <circle
                    cx="52"
                    cy="42"
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
