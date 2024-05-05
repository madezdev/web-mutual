import { Footer } from "@/components"
import { Navigation } from "@/components/ui/Navigation"

export default function MainLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] animate-fade animate-ease-in">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}