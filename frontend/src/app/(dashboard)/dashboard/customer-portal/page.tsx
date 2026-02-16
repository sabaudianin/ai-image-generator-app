import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { CustomerPortalRedirect } from "@/components/sidebar/customerPortalRedirect"



export default async function CustomerPortal() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/auth/sign-in")
    }

    return (
        <CustomerPortalRedirect />
    )
}
