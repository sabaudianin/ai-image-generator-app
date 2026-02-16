'use client';
import { X } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";


export const MobileSidebarClose = () => {
    const { setOpenMobile, isMobile } = useSidebar();

    if (!isMobile) {
        return null;
    }


    return (
        <div className="absolute top-0 right-0 z-50 p-3">
            <Button variant="ghost"
                size="sm"
                onClick={() => setOpenMobile(false)} className="hover:bg-muted/50 h-10 w-10 " aria-label="Close sidebar">
                <X className="h-5 w-5 font-bold" />
            </Button></div>
    )
}
