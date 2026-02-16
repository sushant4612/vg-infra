
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
    project: {
        name: string;
        location: string;
        type: string;
        status: string;
        tagColor: string;
        images: string[];
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent link click if wrapped
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="group relative bg-white border border-[#E4E4E7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
            <div className="relative h-64 md:h-72 w-full overflow-hidden bg-[#18181B]">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={project.name}
                    fill
                    className="object-contain transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Status Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#18181B] flex items-center gap-2 z-10 shadow-sm rounded-sm">
                    <span className={`w-2 h-2 rounded-full ${project.tagColor} animate-pulse`}></span>
                    {project.status}
                </div>

                {/* Carousel Controls - Only show if > 1 image */}
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#18181B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-lg"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#18181B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-lg"
                            aria-label="Next Image"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                        {/* Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-white w-3" : "bg-white/50"}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-1">{project.type}</span>
                        <h3 className="text-xl md:text-2xl font-serif text-[#18181B] leading-tight">{project.name}</h3>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[#71717A] text-sm mb-6 mt-auto">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                </div>

                <a
                    href="https://wa.me/919711154000?text=Hello%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20VG%20Infra%E2%80%99s%20real%20estate%20investment%20opportunities.%20Kindly%20guide%20me%20on%20the%20next%20steps."
                    target="_blank"
                    className="w-full inline-flex justify-center items-center gap-2 py-3 border border-[#E4E4E7] text-[#18181B] text-xs uppercase tracking-widest font-semibold hover:bg-[#18181B] hover:text-white hover:border-[#18181B] transition-all duration-300 group/btn"
                >
                    Request Prospectus
                    <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
    );
}
