"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex flex-col items-center gap-4">
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
            <h1 className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent text-center">
              Welcome back {user?.name ?? ""} !</h1>
            <p className="text-muted-foreground text-base sm:text-lg text-center">
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

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {userStats.thisWeek}
                </div>
                <p className="text-muted-foreground text-xs">Recent activity</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Member Since
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {user?.createdAt
                    ? new Date(
                      user.createdAt as string | number | Date,
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                    : "N/A"}
                </div>
                <p className="text-muted-foreground text-xs">Account created</p>
              </CardContent>
            </Card>
          </div>

          {/* actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Sparkles className="text-primary h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Button
                  asChild
                  className="group h-auto flex-col gap-2 bg-purple-600 p-6 hover:bg-purple-700"
                >
                  <Link href="/dashboard/create">
                    <ImageIcon className="h-8 w-8 transition-transform group-hover:scale-110" />
                    <div className="text-center">
                      <div className="font-semibold">Text-to-Image</div>
                      <div className="text-xs opacity-80">
                        Generate images from a prompt
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group hover:bg-muted h-auto flex-col gap-2 p-6"
                >
                  <Link href="/dashboard/projects">
                    <ImageIcon className="h-8 w-8 transition-transform group-hover:scale-110" />
                    <div className="text-center">
                      <div className="font-semibold">View All Images</div>
                      <div className="text-xs opacity-70">
                        Browse your image library
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group hover:bg-muted h-auto flex-col gap-2 p-6"
                >
                  <Link href="/dashboard/settings">
                    <Settings className="h-8 w-8 transition-transform group-hover:scale-110" />
                    <div className="text-center">
                      <div className="font-semibold">Account Settings</div>
                      <div className="text-xs opacity-70">
                        Manage your profile
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Gallery */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-purple-600" />
                Recent Image Projects
              </CardTitle>
              {imageProjects.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-purple-600 hover:text-purple-700"
                >
                  <Link href="/dashboard/projects">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {imageProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="relative mb-4">
                    <div className="border-muted bg-muted/20 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed">
                      <ImageIcon className="text-muted-foreground h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    No image projects yet
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Start generating images from text prompts
                  </p>
                  <Button
                    asChild
                    className="gap-2 bg-purple-600 hover:bg-purple-700"
                  ><Link href="/dashboard/create">
                      <ImageIcon className="h-4 w-4" />
                      Create Your First Image
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {imageProjects.slice(0, 5).map((project) => (
                    <div
                      key={project.id}
                      className="group hover:bg-muted/50 flex items-center gap-4 rounded-lg border p-4 transition-all hover:shadow-sm"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border bg-purple-100">
                        <Image
                          src={project.imageUrl}
                          alt={project.prompt}
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium">
                          {project.name ??
                            project.prompt.substring(0, 60) +
                            (project.prompt.length > 60 ? "..." : "")}
                        </h4>
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-muted-foreground text-xs">
                            {project.width}×{project.height}
                          </p>
                          <span className="text-muted-foreground text-xs">
                            •
                          </span>
                          <p className="text-muted-foreground text-xs">
                            {new Date(project.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.imageUrl} target="_blank" rel="noopener noreferrer">Open</a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

        </section>
      </SignedIn>
    </>
  );
}
