"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { SmileAssistant } from "@/components/ai/SmileAssistant";
import {
  AIAssistantProvider,
  useAIAssistant,
} from "@/components/ai/AIAssistantProvider";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { isOpen, setOpen } = useAIAssistant();

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
      <SmileAssistant externalOpen={isOpen} onExternalOpenChange={setOpen} />
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <AIAssistantProvider>
      <ShellContent>{children}</ShellContent>
    </AIAssistantProvider>
  );
}
