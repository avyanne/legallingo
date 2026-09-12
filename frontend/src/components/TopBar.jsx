import React, { useState } from "react";
import { Flame, Gem, Heart, Zap, Sparkles } from "lucide-react";
import { useAuth } from "../lib/auth";
import PremiumModal from "./PremiumModal";

export default function TopBar() {
  const { user } = useAuth();
  const [premiumOpen, setPremiumOpen] = useState(false);
  
  if (!user) return null;

  const chip = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--ll-border)] font-heading font-bold text-sm";

  return (
    <>
      <div className="sticky top-0 z-30 bg-[var(--ll-cream)]/95 backdrop-blur border-b border-[var(--ll-border)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="text-sm font-heading font-bold uppercase tracking-wider text-[var(--ll-text-muted)]">
            Everyday Law
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            <div className={chip} data-testid="stat-streak" title="Streak">
              <Flame size={16} className="text-[var(--ll-fire)]" strokeWidth={2.5} />
              <span>{user.streak}</span>
            </div>
            <div className={chip} data-testid="stat-gems" title="Gems">
              <Gem size={16} className="text-[var(--ll-gem)]" strokeWidth={2.5} />
              <span>{user.gems}</span>
            </div>
            <div className={chip} data-testid="stat-energy" title="Energy">
              <Heart size={16} className="text-[var(--ll-heart)] fill-[var(--ll-heart)]" />
              <span>{user.energy}/{user.energyMax}</span>
            </div>
            <div className={chip} data-testid="stat-xp" title="Total XP">
              <Zap size={16} className="text-[var(--ll-gold)] fill-[var(--ll-gold)]" />
              <span>{user.xp}</span>
            </div>
            <button
              onClick={() => setPremiumOpen(true)}
              data-testid="btn-go-premium"
              className="btn-3d btn-burgundy !px-4 !py-1.5 text-xs flex items-center gap-1"
              title="Unlock Premium"
            >
              <Sparkles size={14} />
              Premium
            </button>
          </div>
        </div>
      </div>
      <PremiumModal isOpen={premiumOpen} onClose={() => setPremiumOpen(false)} />
    </>
  );
}
