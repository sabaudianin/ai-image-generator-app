"use client";

import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";
import {
    Loader2,
    Search,
    Calendar,
    Trash2,
    Download,
    Plus,
    Image as ImageIcon,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

import Image from "next/image";


import {
    deleteImageProject,
    getUserImageProjects,
} from "@/actions/textToImage";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";

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
    createdAt: Date;
    updatedAt: Date;
}

type SortBy = "newest" | "oldest" | "name";



export default function ProjectPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [imageProjects, setImageProjects] = useState<ImageProject[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<ImageProject[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortBy>("newest");
    const router = useRouter();
    return (
        <div>page</div>
    )
}
