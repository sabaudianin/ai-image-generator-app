'use client';

import { Button } from "../ui/button";
import { Crown, Sparkles } from "lucide-react";
import { authClient } from "@/lib/auth-client";


export default function UpgradePlan() {

    const upgrade = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await authClient.checkout({
            products: [
                "8bd6201b-fc5c-4d32-bbdb-d56d6eccdd37",
                "4ea7422b-b01d-4494-a634-158ac44dda01",
                "90340625-ac22-4c05-a401-24b80ad504c5"
            ]
        })
    }
    return (
        <Button variant="outline"
            size="sm"
            onClick={upgrade}
            className="group relative overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 text-orange-500/70 tranistion-all duration-300 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500">
            <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-medium">Upgrade Plan</span>
                <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity" />
            </div>
            <div className="absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Button>
    )
}
