import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { Polar } from "@polar-sh/sdk";
import { env } from "@/env";
import { checkout, polar, portal, webhooks } from "@polar-sh/better-auth";
import { db } from "@/server/db";

const polarClient = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "8bd6201b-fc5c-4d32-bbdb-d56d6eccdd37",
              slug: "basic",
            },
            {
              productId: "90340625-ac22-4c05-a401-24b80ad504c5",
              slug: "standard",
            },
            {
              productId: "4ea7422b-b01d-4494-a634-158ac44dda01",
              slug: "premium",
            },
          ],
          successUrl: "/dashboard",
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          secret: env.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer id found.");
            }

            const productId = order.data.productId;

            let creditsToAdd = 0;

            switch (productId) {
              case "8bd6201b-fc5c-4d32-bbdb-d56d6eccdd37":
                creditsToAdd = 50;
                break;
              case "90340625-ac22-4c05-a401-24b80ad504c5":
                creditsToAdd = 200;
                break;
              case "4ea7422b-b01d-4494-a634-158ac44dda01":
                creditsToAdd = 400;
                break;
            }

            await db.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: {
                  increment: creditsToAdd,
                },
              },
            });
          },
        }),
      ],
    }),
  ],
});
