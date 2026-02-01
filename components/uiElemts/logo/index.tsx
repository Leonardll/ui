"use client";

import { cn } from "@/lib/utils";
import { LogoIcon } from "./LogoIcon";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <LogoIcon className={cn("h-7 md:h-10 w-auto")} />
            {showText && (
                <span className="font-display font-bold text-lg md:text-xl tracking-tight whitespace-nowrap text-foreground uppercase">
                    Leonard <span className="text-primary">Lator</span>
                </span>
            )}
        </div>
    );
}
