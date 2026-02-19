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
  const [userStatus, setUserStatus] = useState<UserStats>({
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

        setUserStatus({
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
  })

  return (
    <>
      <div>
        DASHBOARD
      </div>
    </>
  );
}
