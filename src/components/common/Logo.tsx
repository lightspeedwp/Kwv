import React from 'react';
import { COLORS } from '../../constants/theme';

interface LogoProps {
  color?: string;
  className?: string;
}

/**
 * KWV Main Logo
 * 
 * The primary KWV emblem with the roof/pediment structure.
 * 
 * @param {LogoProps} props - Color and ClassName overrides.
 */
export const KWVLogo: React.FC<LogoProps> = ({ color = COLORS.wineRed, className }) => {
  return (
    <svg 
      viewBox="0 0 240 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="KWV Logo"
    >
       {/* Roof / Pediment Structure */}
       {/* Top heavy line */}
       <path 
         d="M120 10 L220 45 L220 52 L120 18 L20 52 L20 45 L120 10Z" 
         fill={COLORS.gold} 
       />
       {/* Inner lighter line - creating a double roof effect */}
       <path 
         d="M120 25 L205 55 L120 32 L35 55 L120 25Z" 
         fill="none" 
         stroke={COLORS.gold} 
         strokeWidth="1.5"
       />

       {/* KWV Text */}
       {/* Using standard text element assuming Playfair Display is loaded globally */}
       <text 
         x="120" 
         y="100" 
         textAnchor="middle" 
         fill={color} 
         fontFamily="'Playfair Display', serif" 
         fontSize="72" 
         fontWeight="700" 
         letterSpacing="4"
       >
         KWV
       </text>

       {/* Bottom structure */}
       <line x1="20" y1="115" x2="220" y2="115" stroke={COLORS.gold} strokeWidth="2" />
       <text 
         x="120" 
         y="132" 
         textAnchor="middle" 
         fill={COLORS.gold} 
         fontFamily="'Open Sans', sans-serif" 
         fontSize="11" 
         fontWeight="600" 
         letterSpacing="3"
       >
         ESTABLISHED 1918
       </text>
       <line x1="20" y1="138" x2="220" y2="138" stroke={COLORS.gold} strokeWidth="1" />
    </svg>
  );
};

/**
 * KWV Shop Logo
 * 
 * Variant of the logo for the Online Shop header.
 * Includes the vertical divider and "SHOP ONLINE" text.
 * 
 * @param {LogoProps} props - Color and ClassName overrides.
 */
export const KWVShopLogo: React.FC<LogoProps> = ({ color = COLORS.white, className }) => {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
        {/* Use the main logo but slightly smaller */}
        <KWVLogo color={color} className="h-12 w-auto" />
        
        {/* Vertical Divider */}
        <div className="h-10 w-[1px] bg-white/20"></div>
        
        {/* SHOP Text */}
        <div className="flex flex-col justify-center">
            <span 
                className="text-2xl font-serif tracking-widest leading-none"
                style={{ color: COLORS.gold, fontFamily: '"Playfair Display", serif' }}
            >
                SHOP
            </span>
            <span 
                className="text-[10px] uppercase tracking-[0.3em] leading-none mt-1 opacity-80"
                style={{ color: color, fontFamily: '"Open Sans", sans-serif' }}
            >
                ONLINE
            </span>
        </div>
    </div>
  );
};

/**
 * KWV Experiences Logo
 * 
 * Variant of the logo for the Experiences section.
 * Includes "EXPERIENCES - VISIT US" text.
 * 
 * @param {LogoProps} props - Color and ClassName overrides.
 */
export const KWVExperiencesLogo: React.FC<LogoProps> = ({ color = COLORS.white, className }) => {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
        {/* Use the main logo but slightly smaller */}
        <KWVLogo color={color} className="h-12 w-auto" />
        
        {/* Vertical Divider */}
        <div className="h-10 w-[1px] bg-white/20"></div>
        
        {/* EXPERIENCES Text */}
        <div className="flex flex-col justify-center">
            <span 
                className="text-xl font-serif tracking-widest leading-none uppercase"
                style={{ color: COLORS.gold, fontFamily: '"Playfair Display", serif' }}
            >
                EXPERIENCES
            </span>
            <span 
                className="text-[10px] uppercase tracking-[0.2em] leading-none mt-1 opacity-80"
                style={{ color: color, fontFamily: '"Open Sans", sans-serif' }}
            >
                VISIT US
            </span>
        </div>
    </div>
  );
};

/**
 * KWV Events Logo
 * 
 * Variant of the logo for the Events section.
 * Includes "EVENTS - CALENDAR" text.
 * 
 * @param {LogoProps} props - Color and ClassName overrides.
 */
export const KWVEventsLogo: React.FC<LogoProps> = ({ color = COLORS.white, className }) => {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
        {/* Use the main logo but slightly smaller */}
        <KWVLogo color={color} className="h-12 w-auto" />
        
        {/* Vertical Divider */}
        <div className="h-10 w-[1px] bg-white/20"></div>
        
        {/* EVENTS Text */}
        <div className="flex flex-col justify-center">
            <span 
                className="text-xl font-serif tracking-widest leading-none uppercase"
                style={{ color: COLORS.gold, fontFamily: '"Playfair Display", serif' }}
            >
                EVENTS
            </span>
            <span 
                className="text-[10px] uppercase tracking-[0.2em] leading-none mt-1 opacity-80"
                style={{ color: color, fontFamily: '"Open Sans", sans-serif' }}
            >
                CALENDAR
            </span>
        </div>
    </div>
  );
};

/**
 * KWV Wine Club Logo
 * 
 * Variant of the logo for the Wine Club section.
 * Includes "WINE CLUB - MEMBERSHIP" text.
 * 
 * @param {LogoProps} props - Color and ClassName overrides.
 */
export const KWVWineClubLogo: React.FC<LogoProps> = ({ color = COLORS.white, className }) => {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
        {/* Use the main logo but slightly smaller */}
        <KWVLogo color={color} className="h-12 w-auto" />
        
        {/* Vertical Divider */}
        <div className="h-10 w-[1px] bg-white/20"></div>
        
        {/* WINE CLUB Text */}
        <div className="flex flex-col justify-center">
            <span 
                className="text-xl font-serif tracking-widest leading-none uppercase whitespace-nowrap"
                style={{ color: COLORS.gold, fontFamily: '"Playfair Display", serif' }}
            >
                WINE CLUB
            </span>
            <span 
                className="text-[10px] uppercase tracking-[0.2em] leading-none mt-1 opacity-80"
                style={{ color: color, fontFamily: '"Open Sans", sans-serif' }}
            >
                MEMBERSHIP
            </span>
        </div>
    </div>
  );
};
