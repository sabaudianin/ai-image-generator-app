"use server"
import { UserButton } from "@daveyplate/better-auth-ui";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar"
import { User, Sparkles, Settings } from "lucide-react";
import Link from "next/link";

export default async function AppSidebar() {
    return (
        <Sidebar className="border-r-0 bg-linear-to-b from-background to-muted">
            <SidebarContent className='px-3'>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-primary mt-6 mb-8 flex flex-col items-start justify-start px-2">
                        <Link href="/" className="mb-1 flex cursor-pointer items-center gap-2">
                            <Sparkles className="text-primary" />
                            <p className="font-bold tracking-tight text-2xl">AI Image </p>
                            <p className="ml-8 text-sm font-medium tracking-wide">Generator</p>
                        </Link>
                    </SidebarGroupLabel>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="mb-3 flex w-full items-center justify-center gap-2 text-xs"></div>
                <UserButton variant="outline" className="border-muted/20 w-full transition-colors" disableDefaultLinks={true} additionalLinks={[{ label: "Customer Portal", href: "/dashboard/customer-portal", icon: <User className="h-4 w-4" /> }, { label: "Settings", href: "/dashboard/settings", icon: <User className="h-4 w-4" /> }]} />
            </SidebarFooter>
        </Sidebar>
    )
}
