import Link from "next/link";
import {
  Sparkles,
  Zap,
  Star,
  ArrowRight,
  Scissors,
  Expand,
  Target,
  Download,
  CheckCircle2,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gallery } from "@/components/gallery/gallery";





const features = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Prompt-to-Image",
    description: "Turn any idea into an image with a simple text prompt.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: <Expand className="h-8 w-8" />,
    title: "Flexible Settings",
    description:
      "Control size, steps, guidance, and seed for repeatable results.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Creative Control",
    description:
      "Use negative prompts and iterate quickly to refine your style.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description:
      "Generate high-quality images in seconds with optimized AI infrastructure.",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
];

const testimonials = [
  {
    name: "Sarah Conan Doyle",
    role: "Designer",
    content:
      "This tool has revolutionized my workflow. Generating concept art that used to take hours now takes minutes!",
    rating: 5,
  },
  {
    name: "Magic Johnson Jr.",
    role: "Content Creator",
    content:
      "Perfect for content creation. I can generate consistent visuals for thumbnails and posts fast.",
    rating: 5,
  },
  {
    name: "Robert Rodriguez",
    role: "Founder",
    content:
      "The quality is incredible. I can explore styles and iterate quickly until it looks right.",
    rating: 5,
  },
];

const pricingFeatures = [
  "Text-to-Image Generation",
  "Prompt + Negative Prompt",
  "Custom Sizes",
  "High-Quality Image Downloads",
  "Fast Processing",
  "Cloud Storage",
];

export default function HomePage() {
  return (
    <main className="h-screen grid place-items-center">


      <Gallery />

    </main>
  );
}
