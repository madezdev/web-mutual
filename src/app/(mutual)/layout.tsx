import { Footer, Sidebar,  Navigation } from "@/components"


export default function MainLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] animate-fade animate-ease-in">
      <Navigation />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}