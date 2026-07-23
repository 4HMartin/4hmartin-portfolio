'use client'

import { useRef, MouseEvent } from 'react';

export function CrosshairSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const vLineRef = useRef<HTMLDivElement>(null);
    const hLineRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Direct DOM manipulation - no re-render
        if (vLineRef.current) {
            vLineRef.current.style.left = `${x}px`;
        }
        if (hLineRef.current) {
            hLineRef.current.style.top = `${y}px`;
        }
    };

    const handleMouseEnter = () => {
        vLineRef.current?.style.setProperty('opacity', '1');
        hLineRef.current?.style.setProperty('opacity', '1');
    };

    const handleMouseLeave = () => {
        vLineRef.current?.style.setProperty('opacity', '0');
        hLineRef.current?.style.setProperty('opacity', '0');
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-screen overflow-hidden bg-slate-50"
        >
            {/* Vertical dashed line */}
            <div
                ref={vLineRef}
                className="absolute top-0 bottom-0 w-px border-l border-dashed border-slate-400 pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {/* Horizontal dashed line */}
            <div
                ref={hLineRef}
                className="absolute left-0 right-0 h-px border-t border-dashed border-slate-400 pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {/* Your content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold">Move your cursor</h1>
            </div>
        </div>
    );
}