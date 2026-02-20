import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const galleryPics = [
    {
        title: "The Digital Artist",
        prompt:
            "Three androids in diferent colors on color background",
        tag: "portrait",
        imageSrc: "/android.jpg",
    },
    {
        title: "Metro Station",
        prompt:
            "Metro train station in futuristic city at night ",
        tag: "isometric",
        imageSrc: "/city.jpg",
    },
    {
        title: "Sea fluffy Creature",
        prompt:
            "An nice, fluffy and color alien creature from deep of space ocean ",
        tag: "product",
        imageSrc: "/something.jpg",
    },
];

export const Gallery = () => {
    return (
        <section className="w-full bg-linear-to-br from-indigo-100 to-cyan-100 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">See what You can <span className="bg-linear-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">generate</span></h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Few ideas to get You started.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {galleryPics.map((pic) => (
                        <Card key={pic.title} className="relative overflow-hidden border-slate-200 bg-white backdrop-blur-sm">
                            <div className="p-4">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-indigo-300 to-cyan-300">
                                            <ImageIcon className="h-5 w-5" />
                                        </div>
                                        <p className="font-semibold text-slate-500">{pic.title}</p>
                                    </div>
                                </div>

                                <div className=" overflow-hidden rounded-xl p-4">
                                    <div className="relative aspect-square w-full overflow-hidden rounded-lg ">
                                        <Image src={pic.imageSrc}
                                            alt={pic.title}
                                            fill
                                            unoptimized
                                            className="object-cover" />
                                    </div>
                                </div>

                                <p className="px-4 text-sm text-slate-500">
                                    &ldquo;{pic.prompt}&rdquo;
                                </p>

                            </div>

                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/dashboard/create">
                        <Button className="cursor-pointer gap-2 px-16 py-8 bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-colors duration-300 font-bold text-xl">
                            <Sparkles className="h-8 w-8" />
                            Try it for Free !!!
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
