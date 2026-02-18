'use client'
import React, { useState } from "react";
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
export default function DashboardPage() {

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


  const generateImage = async () => {

    return;
  }
  return (
    <>
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

      <PromptInput prompt={prompt}
        setPrompt={setPrompt}
        negativePrompt={negativePrompt}
        setNegativePrompt={setNegativePrompt}
        currentImage={null}
        onDownload={(img) => window.open(img.imageUrl, "_blank")} />


      <ImageHistory
        generatedImages={generatedImages}
        onDownload={(img) => window.open(img.imageUrl, "_blank")}
      />
    </>
  );
}
