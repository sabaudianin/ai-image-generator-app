"use client";


import { authClient } from '@/lib/auth-client'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'

export const CustomerPortalRedirect = () => {

    useEffect(() => {
        const portal = async () => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            await authClient.customer.portal();
        }
        void portal();
    }, [])

    return (
        <div className="flex min-h-[400px]items-center justify-center"><div className="flex flex-col items-center gap-4">
            <Loader2 className="text-primary h-8 w-8 animate-spin" />
            <p className="text-muted-foreground text-sm">Loading customer portal...</p>
        </div>
        </div>
    )
}
