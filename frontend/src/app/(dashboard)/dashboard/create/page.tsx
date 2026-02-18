"use client";

import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  generateImage as generateImageAction,
  getUserImageProjects,
} from "@/actions/textToImage";
import { toast } from "sonner";

import { ImageSettings } from "@/components/createImage/imageSettings";
import { PromptInput } from "@/components/createImage/promptInput";
import { ImageHistory } from "@/components/createImage/imageHistory";

export interface GeneratedImage {
  s3_key: string;
  imageUrl: string;
  prompt: string;
  negativePrompt?: string | null;
  width: number;
  height: number;
  numInferenceSteps: number;
  guidanceScale: number;
  seed: number;
  modelId: string;
  timestamp: Date;
}

export default function CreatePage() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [numInferenceSteps, setNumInferenceSteps] = useState(9);
  const [guidanceScale, setGuidanceScale] = useState(0);
  const [seed, setSeed] = useState("");
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [currentImage, setCurrentImage] = useState<GeneratedImage | null>(null);

  useEffect(() => {
    const initilizeData = async () => {
      try {
        //run all fetching data for faster loading
        const [, projectsResult] = await Promise.all([
          authClient.getSession(),
          getUserImageProjects(),
        ]);

        //load image 
        if (projectsResult.success && projectsResult.imageProjects) {
          const mappedProjects = projectsResult.imageProjects.map(
            (project) => ({
              s3_key: project.s3Key,
              imageUrl: project.imageUrl,
              prompt: project.prompt,
              negativePrompt: project.negativePrompt,
              width: project.width,
              height: project.height,
              numInferenceSteps: project.numInferenceSteps,
              guidanceScale: project.guidanceScale,
              seed: project.seed,
              modelId: project.modelId,
              timestamp: new Date(project.createdAt),
            }),
          );
          setGeneratedImages(mappedProjects);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error iniitializint data", error);
        setIsLoading(false);
      }
    }
    void initilizeData();
  }, [])


  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt!");
      return;
    }
    setIsGenerating(true);
    try { } catch (error) {
      console.error("Generation Error", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      toast.error(errorMessage);
    } finally {
      setIsGenerating(false)
    }
  }


  return (<>

    <RedirectToSignIn />
    <SignedIn>
      <ImageSettings
        prompt={prompt}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        numInferenceSteps={numInferenceSteps}
        setNumInferenceSteps={setNumInferenceSteps}
        guidanceScale={guidanceScale}
        setGuidanceScale={setGuidanceScale}
        seed={seed}
        setSeed={setSeed}
        isGenerating={isGenerating}
        onGenerate={generateImage}
      />

      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        negativePrompt={negativePrompt}
        setNegativePrompt={setNegativePrompt}
        currentImage={currentImage}
        onDownload={(img) => window.open(img.imageUrl, "_blank")}
      />

      <ImageHistory
        generatedImages={generatedImages}
        onDownload={(img) => window.open(img.imageUrl, "_blank")}
      />
    </SignedIn>
  </>
  )
}
