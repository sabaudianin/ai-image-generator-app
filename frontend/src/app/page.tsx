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
  LogIn
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
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50/20 to-slate-100">

      <nav className="sticky top-0 border-b border-slate-200 bg-slate-50/80 backdrop-blur z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-center w-full py-2 md:py-0">


            <div className="order-1 md:order-2 flex-1">
              <div className="p-4 md:p-6 flex items-center justify-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-2xl md:text-3xl font-bold text-transparent tracking-widest">
                  AI Image Generator
                </span>
              </div>


              <div className="hidden md:flex justify-center items-center gap-12 md:gap-24 font-semibold pb-4 ">
                <Link href="#features" className="text-slate-600 transition-colors hover:text-indigo-600">Features</Link>
                <Link href="#pricing" className="text-slate-600 transition-colors hover:text-indigo-600">Pricing</Link>
                <Link href="#testimonials" className="text-slate-600 transition-colors hover:text-indigo-600">Reviews</Link>
              </div>
            </div>


            <div className="order-2 md:order-1 flex justify-between md:block px-4 md:px-0 pb-4 md:pb-0">
              <Link href="/auth/sign-in">
                <Button variant="ghost" className="cursor-pointer text-slate-600 hover:text-indigo-600">
                  Sign In
                  <LogIn className="ml-2 h-4 w-4" />
                </Button>
              </Link>


              <div className="md:hidden">
                <Link href="/dashboard">
                  <Button size="sm" className="bg-linear-to-r from-indigo-500 to-purple-500">
                    Try Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>


            <div className="hidden md:order-3 md:block">
              <Link href="/dashboard">
                <Button size="sm" className="cursor-pointer bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-colors duration-300">
                  Try Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </nav>

      <Gallery />

    </main >
  );
}
