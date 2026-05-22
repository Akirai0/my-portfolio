import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
    {
        title: "Kana Taisen Typing Battle Game (Thesis Project)",
        short: "typing game for learning Japanese Hiragana.",
        description:
            "This Unity-based game helps players practice Hiragana, Katakana, Kanji, and N5 vocabulary through real-time typing mechanics, combo systems, and audio feedback.",
        tech: ["Unity", "C#", "TextMeshPro"],
        role: "Game Developer, Game Design, Sound Design, QA",
        screenshots: [
            "/screenshots/1.png",
            "/screenshots/2.png",
            "/screenshots/3.png",
            "/screenshots/4.png",
        ],
        features: [
            "Romaji to Hiragana conversion",
            "Combo & scoring system",
            "Audio-based typing mode",
        ],
        download: "https://drive.google.com/file/d/1svZu8ret-R0VCFmeAP4W-XlaBPsLR57R/view?usp=drive_link",
    },
    {
        title: "P'Bit Nong Brite",
        short: "a educational game designed to help children learn through fun and engaging gameplay.",
        description: "Responsible for testing the P'Bit Nong Brite game system, ensuring a smooth and enjoyable gaming experience for children. Conducted comprehensive testing to identify and resolve bugs, improve gameplay mechanics, and enhance overall user experience.",
        tech: "",
        role: "QA",
        screenshots: [
            "/screenshots/p1.png",
            "/screenshots/p2.png",
            "/screenshots/p3.png",
            "/screenshots/p4.png",
            "/screenshots/p5.png",
            "/screenshots/p6.png",
            "/screenshots/p7.png",
            "/screenshots/p8.png",
            "/screenshots/p9.png",
        ],
        features: [],
        download: "pbit-nongbrite-project-frontend-2.vercel.app",

    },
    {
        title: "Animal hotel booking system (Mini Project)",
        short: "A hotel booking system for animals.",
        description:
            "This project is a hotel booking system for animals, designed to manage reservations, check-ins, and check-outs efficiently. It includes features such as room availability tracking, customer management, and booking history.",
        tech: ["Java", "Sql"],
        role: "Backend Developer",
        screenshots: [
            "/screenshots/h1.png",
            "/screenshots/h2.png",
            "/screenshots/h3.png",
            "/screenshots/h4.png",
            "/screenshots/h5.png",
            "/screenshots/h6.png",
            "/screenshots/h7.png",
        ],
        features: [],
    },
    {
        title: "Basic Computer Skills Game",
        short: "A basic computer skills educational game.",
        description:
            "",
        tech: ["Unity", "C#", "TextMeshPro"],
        role: "Game Design, Programming",
        screenshots: [
            "/screenshots/s1.png",
            "/screenshots/s2.png",
            "/screenshots/s3.png",
            "/screenshots/s4.png",
            "/screenshots/s5.png",
        ],
        features: [],
        download: "https://drive.google.com/file/d/1l1ljALbS5TnGV_eSHlpIbCN-eFJKoQyR/view?usp=sharing",
    },
];

export default function ProjectsSection() {
    const [active, setActive] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryRef = useRef(null);

    const scrollToIndex = (index) => {
        if (!galleryRef.current || !active?.screenshots) return;
        const max = active.screenshots.length - 1;
        const clamped = Math.max(0, Math.min(index, max));
        const child = galleryRef.current.children[clamped];
        child?.scrollIntoView({ behavior: "smooth", inline: "center" });
        setCurrentIndex(clamped);
    };

    const handleScroll = () => {
        if (!galleryRef.current) return;
        const children = [...galleryRef.current.children];
        const center = galleryRef.current.scrollLeft + galleryRef.current.offsetWidth / 2;
        const index = children.findIndex(
            (el) => el.offsetLeft <= center && el.offsetLeft + el.offsetWidth >= center
        );
        if (index !== -1) setCurrentIndex(index);
    };

    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setActive(project);
                            setCurrentIndex(0);
                        }}
                        className="cursor-pointer"
                    >
                        <Card className="h-full bg-background/80 backdrop-blur shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.short}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-background max-w-lg w-full rounded-xl p-6 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <button
                                className="absolute top-3 right-3 text-muted-foreground"
                                onClick={() => setActive(null)}
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
                            <p className="text-sm mb-4 text-muted-foreground">
                                {active.description}
                            </p>

                            <p className="font-semibold mb-1">Role</p>
                            <p className="text-sm mb-4">{active.role}</p>

                            {active.screenshots && (
                                <>
                                    <p className="font-semibold mb-2">Screenshots</p>

                                    <div className="relative mb-4">
                                        <div
                                            ref={galleryRef}
                                            onScroll={handleScroll}
                                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
                                        >
                                            {active.screenshots.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    className="w-64 h-36 object-cover rounded-lg snap-center shrink-0 shadow-md"
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => scrollToIndex(currentIndex - 1)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border rounded-full p-2 shadow-md hover:bg-primary hover:text-primary-foreground transition"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        <button
                                            onClick={() => scrollToIndex(currentIndex + 1)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border rounded-full p-2 shadow-md hover:bg-primary hover:text-primary-foreground transition"
                                        >
                                            <ChevronRight size={20} />
                                        </button>

                                    </div>

                                    <div className="flex justify-center gap-2 mb-4">
                                        {active.screenshots.map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? "bg-primary" : "bg-muted"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            <p className="font-semibold mb-1">Key Features</p>
                            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                                {active.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {active.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {/* ปุ่ม Download (ไม่ปิด Modal) */}
                                {active.download && (
                                    <a
                                        href={active.download}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block"
                                    >
                                        <Button className="w-full">
                                            Download
                                        </Button>
                                    </a>
                                )}

                                {/* ปุ่ม Close (สำหรับปิด Modal) */}
                                <Button
                                    className="w-full"
                                    variant="outline" /* แนะนำให้ใช้ variant แบบโปร่ง หรือสีเทา เพื่อให้ปุ่ม Download เด่นกว่า */
                                    onClick={() => setActive(null)}
                                >
                                    Close
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
