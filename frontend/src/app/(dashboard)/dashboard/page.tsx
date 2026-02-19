"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";
import {
  Loader2,
  Sparkles,
  Calendar,
  TrendingUp,
  Star,
  ArrowRight,
  Image as ImageIcon,
  Settings,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { getUserImageProjects } from "@/actions/textToImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { string } from "zod";

interface ImageProject {
  id: string;
  name: string | null;
  prompt: string;
  negativePrompt: string | null;
  imageUrl: string;
  s3Key: string;
  width: number;
  height: number;
  numInferenceSteps: number;
  guidanceScale: number;
  seed: number;
  modelId: string;
  userId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface UserStats {
  totalImageProjects: number;
  thisMonth: number;
  thisWeek: number;
}




export default function DashboardPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [imageProjects, setImageProjects] = useState<ImageProject[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    totalImageProjects: 0,
    thisMonth: 0,
    thisWeek: 0,
  })
  const [user, setUser] = useState<{
    name?: string;
    createdAt?: string | Date
  } | null>(null)

  const router = useRouter();

  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        const [sessionResult, imageResult] = await Promise.all([
          authClient.getSession(),
          getUserImageProjects(),
        ])
        //setUser
        if (sessionResult?.data?.user) {
          setUser(sessionResult.data.user)
        }
        //setImage
        if (imageResult.success && imageResult.imageProjects) {
          setImageProjects(imageResult.imageProjects as ImageProject[])
        }
        //setUSer Stats
        const images = (imageResult.imageProjects as ImageProject[]);
        const now = new Date();
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

        setUserStats({
          totalImageProjects: images.length,
          thisMonth: images.filter(img => new Date(img.createdAt) >= thisMonth).length,
          thisWeek: images.filter(img => new Date(img.createdAt) >= thisWeek).length
        })

      } catch (error) {
        console.error("Failed initialized Dashbord", error)
      } finally {
        setIsLoading(false)
      }
    }
    void initializeDashboard();
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="flex flex-col items center gap-4">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
          <p className="text-muted-foreground text-sm">
            Loading Dashboard....
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <RedirectToSignIn />
      <SignedIn>
        <section className="space-y-8">
          <div className="space-y-2">
            <h1 className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              Welcome back{user?.name ?? ""}</h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Here is an overview of your workspace
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Total Images
                </CardTitle>
                <ImageIcon className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-500 ">
                  {userStats.totalImageProjects}
                </div>
                <p className="text-muted-foreground">Image Generation</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  This Month
                </CardTitle>
                <Calendar className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {userStats.thisMonth}
                </div>
                <p className="text-muted-foreground text-xs">
                  Projects created
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </SignedIn>
    </>
  );
}
