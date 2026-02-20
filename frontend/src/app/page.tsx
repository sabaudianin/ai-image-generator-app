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


const steps = [
  {
    step: "01",
    title: "Write Your Prompt",
    description:
      "Describe what you want to see. Add details like style, lighting, camera, and mood.",
  },
  {
    step: "02",
    title: "Pick Your Settings",
    description:
      "Set image size and generation parameters, then iterate quickly until it looks right.",
  },
  {
    step: "03",
    title: "Generate & Download",
    description:
      "Get your image in seconds. Download or save it to your projects.",
  },
]

const stats = [
  { label: "Images Generated", value: "5K+", color: "text-indigo-600" },
  { label: "Active Users", value: "1K+", color: "text-purple-600" },
  { label: "Uptime", value: "99.9%", color: "text-cyan-600" },
  { label: "User Rating", value: "4.8★", color: "text-amber-500" },
  { label: "Support", value: "24/7", color: "text-blue-600", class: "col-span-2 sm:col-span-1" },]


const features = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Prompt to Image",
    description: "Turn any idea into an image just with a simple text prompt.",
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
    title: "Incredible Fast",
    description:
      "Generate high-quality images in seconds with optimized AI infrastructure.",
    color: "text-amber-600",
    bgColor: "bg-amber-100 ",
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
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50/20 to-slate-100">

      <nav className="sticky top-0 border-b border-slate-200 bg-linear-to-br from-indigo-100 to-cyan-100 backdrop-blur z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-center w-full py-2 md:py-0">


            <div className="order-1 md:order-2 flex-1">
              <div className="group md:p-6 flex items-center justify-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 shadow-lg">
                  <Sparkles className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-45" />
                </div>
                <span className="py-4 bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-2xl md:text-4xl font-extrabold text-transparent tracking-widest ">
                  AI Image Generator
                </span>
              </div>


              <div className="hidden md:flex justify-center items-center gap-12 md:gap-24 font-semibold pb-4 ">
                <Link href="#features" className="text-slate-600 transition-colors hover:text-indigo-600">Features</Link>
                <Link href="#pricing" className="text-slate-600 transition-colors hover:text-indigo-600">Pricing</Link>
                <Link href="#testimonials" className="text-slate-600 transition-colors hover:text-indigo-600">Reviews</Link>
              </div>
            </div>


            <div className="order-2 md:order-1 flex justify-between md:block px-4 md:px-0 ">
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

      <main className="relative overflow-hidden py-20 md:py-32">

        <div className="absolute top-0 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 rounded-full bg-linear-to-tr from-indigo-100/40 to-purple-100/40 blur-3xl" />
        <div className="absolute -top-24 right-0 -z-10 h-100 w-100 rounded-full bg-cyan-50/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">


            <div className="group mb-10 inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-white/80 px-4 py-1.5 text-sm backdrop-blur-sm shadow-sm transition-all hover:border-indigo-300">
              <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
              <span className="font-semibold text-indigo-800">
                Powered by ZImage AI
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Turn Text into{" "}
              <span className="relative">
                <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Images
                </span>

                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-indigo-600/10" />
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Create high-quality images from text prompts in a moment. Save generations to your
              <span className="font-medium text-slate-900"> private library</span> and build something amazing.
            </p>


            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group cursor-pointer gap-2 px-8 py-7 text-base bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-9 duration-300"
                >
                  <Sparkles className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                  Try to Generate Now
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer gap-2 px-8 py-7 text-base border-slate-200 hover:bg-slate-50 transition-all"
                >
                  <Play className="h-5 w-5 fill-current" />
                  See AI in Action
                </Button>
              </Link>
            </div>


            <div className="mt-24">
              <p className="mb-10 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Trusted by thousands of creators
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {stats.map((stat, i) => (
                  <div key={i} className={`group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 ${stat.class ?? ""}`}>
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>


      <Gallery />

      <section id="features" className="relative bg-slate-50 py-24 sm:py-32">

        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">

            <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase text-indigo-600">
              Features
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Powerful AI Images at Your{" "}
              <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Fingertips
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything you need to create, manage, and scale your creative process with the power of artificial intelligence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-slate-200/60 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <CardContent className="p-8 text-center">

                  <div
                    className={`${feature.bgColor} ${feature.color} mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >

                    {feature.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>


                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-12 ">

        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-linear-to-l from-indigo-50/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase text-cyan-600">
              Workflow
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Simple. Fast.{" "}
              <span className="bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Professional.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Get professional AI-generated results in three simple steps. No complex setup required.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="group relative">

                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-12 hidden h-0.5 w-full bg-slate-100 md:block">
                    <div className="h-full w-0 bg-linear-to-r from-indigo-500 to-cyan-500 transition-all duration-1000 group-hover:w-full" />
                  </div>
                )}

                <div className="relative z-10">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-600 text-xl font-bold text-white shadow-xl shadow-indigo-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {step.step}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                  {/* efekt  ghosta */}
                  <div className="absolute -top-4 -left-4 -z-10 select-none text-8xl font-bold text-slate-100/50 transition-colors group-hover:text-indigo-50/50">
                    0{step.step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="testimonials" className="relative bg-white py-24 sm:py-32 overflow-hidden">
        {/* Subtelne tło dekoracyjne */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-50/20 via-transparent to-transparent -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Loved by{" "}
              <span className="bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Creators
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Join thousands of satisfied users who are already transforming their ideas into stunning visuals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative border-slate-200/60 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <CardContent className="p-8">

                  <div className="absolute top-6 right-8 text-slate-100 group-hover:text-indigo-100 transition-colors duration-300">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                      <path d="M12.5 0c-6.9 0-12.5 5.6-12.5 12.5v17.5h15v-17.5h-10c0-4.1 3.4-7.5 7.5-7.5v-5zm22.5 0c-6.9 0-12.5 5.6-12.5 12.5v17.5h15v-17.5h-10c0-4.1 3.4-7.5 7.5-7.5v-5z" />
                    </svg>
                  </div>


                  <div className="mb-6 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Number(testimonial.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                          }`}
                      />
                    ))}
                  </div>


                  <p className="relative z-10 mb-8 text-slate-600 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>


                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white shadow-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm font-medium text-indigo-600/80">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section id="pricing" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">

        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,#eef2ff_0%,#f8fafc_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Start Creating{" "}
              <span className="bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                For Free
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Experience the full power of ZImage AI without any upfront cost.
              Start generating images in seconds.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <Card className="group relative overflow-hidden border-0 bg-white/80 p-1 backdrop-blur-xl shadow-2xl shadow-indigo-100 transition-all duration-300 hover:shadow-indigo-200">

              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-cyan-500 opacity-20 transition-opacity group-hover:opacity-30" />

              <CardContent className="relative rounded-xl bg-white p-8 sm:p-10">

                <div className="absolute top-0 right-0 rounded-bl-2xl bg-linear-to-r from-indigo-600 to-cyan-600 px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Free Starter</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tight text-slate-900">$0</span>
                    <span className="text-slate-500 font-medium">/forever</span>
                  </div>
                  <p className="mt-4 text-slate-600 text-sm">
                    Perfect for exploring AI-powered creativity with no strings attached.
                  </p>
                </div>

                <div className="mb-8 space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/dashboard">
                  <Button
                    className="group/btn w-full cursor-pointer gap-2 bg-slate-900 py-7 text-lg font-bold text-white transition-all hover:bg-indigo-600"
                    size="lg"
                  >
                    <Sparkles className="h-5 w-5 transition-transform group-hover/btn:rotate-12" />
                    Get Started Now
                  </Button>
                </Link>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                  <Zap className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>10 free credits included • No credit card required</span>
                </div>
              </CardContent>
            </Card>


            <p className="mt-8 text-center text-sm text-slate-500">
              Need more? <span className="font-semibold text-indigo-600">Pro plans coming soon!</span>
            </p>
          </div>
        </div>
      </section>

    </section>
  );
}
