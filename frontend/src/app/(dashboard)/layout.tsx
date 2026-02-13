import "@/styles/globals.css";
import { Providers } from "@/provider/Providers";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import { BreadcrumbPageclient } from "@/components/sidebar/breadcrumb-page-client";

export const metadata: Metadata = {
  title: "AI Image Generator App",
  description: "AI Image Generator- turn text prompt into image",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <SidebarProvider>
        <SidebarInset className="flex h-screen flex-col">
          <header className="bg-background/95 supports-backgrop-filter:bg-background/60 border-border/40 sticky top-0 z-10 border-b px-6 py-3 shadow-md backdrop-blur" >
            <div className="flex shrink-0 grow items-center gap-3">
              <SidebarTrigger className="hover:bg-muted -ml-1 h-8 w-8 transition-colors" />
              <Separator orientation="vertical" className="mr-2 h-6 data-[orientation=vertical]:h-6" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                  </BreadcrumbItem>
                  <BreadcrumbPageclient />
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <main className="from-background to-muted/20 flex-1 overflow-y-auto bg-linear-to-br p-6">

            {children}
          </main>
        </SidebarInset>


      </SidebarProvider>
      <Toaster />
    </Providers>);
}
