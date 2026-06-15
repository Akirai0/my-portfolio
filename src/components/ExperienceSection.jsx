import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. จำลองข้อมูล (เพิ่มฟิลด์ images เข้ามา)
const experiences = [
    {
        id: 1,
        role: "Web Developer & Assistant Trainer Intern",
        company: "AmartCloud",
        date: "Apr 2025 - Jun 2025",
        type: "Internship",
        description: [
            "Developed and maintained web applications, assisting in various frontend and backend tasks.",
            "Served as an assistant trainer for MikroTik workshops, assisting participants with router configurations, network troubleshooting, and answering technical inquiries.",
        ],
        tech: ["Html", "Tailwind CSS", "Mikrotik", "Networking", "Configurationx"],
        images: [
            "/experience/e1.jpg",
            "/experience/e2.jpg",
            "/experience/e3.jpg",
            "/experience/e4.jpg",
        ]
    },
    {
        id: 2,
        role: "Brand Shop Manager",
        company: "vivo (Lotus's Aranyaprathet Branch)",
        date: "Mar 2024 - May 2024",
        type: "Work Experience",
        description: [
            "Managed overall store operations and sales strategies to consistently meet brand targets and performance standards.",
            "Supervised and trained store staff, while providing technical guidance and exceptional customer service regarding vivo smartphones and product ecosystems.",
            "Oversaw inventory management, conducted stock audits, and generated monthly sales analysis reports to evaluate store performance.",
        ],
        tech: ["Manager", "Customer Service", "Sales"],
        // ตัวอย่างประสบการณ์ที่ "ไม่มีรูป" โค้ดก็จะไม่พังครับ
    }
];

export default function ExperienceSection() {
    // State สำหรับจัดการเวลากดขยายดูรูปเต็มๆ
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Work Experience & Internships
            </h2>

            {/* เส้น Timeline */}
            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative pl-8 md:pl-10"
                    >
                        {/* ไอคอนบนเส้น Timeline */}
                        <div className="absolute -left-[17px] top-1 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-md border-4 border-background">
                            <Briefcase size={14} />
                        </div>

                        <Card className="bg-background/80 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                {/* ส่วนหัว */}
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <h4 className="text-primary font-medium">{exp.company}</h4>
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit">
                                        {exp.type}
                                    </span>
                                </div>

                                {/* สถานที่และเวลา */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        <span>{exp.date}</span>
                                    </div>
                                </div>

                                {/* รายละเอียด (Bullet points) */}
                                <ul className="list-disc list-outside ml-4 text-sm space-y-1.5 mb-6 text-muted-foreground">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                {/* ---------- ส่วนแสดงรูปภาพ (Gallery) ---------- */}
                                {exp.images && exp.images.length > 0 && (
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold mb-2">Activity Photos</p>
                                        <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                                            {exp.images.map((imgSrc, imgIdx) => (
                                                <img
                                                    key={imgIdx}
                                                    src={imgSrc}
                                                    alt={`Experience photo ${imgIdx + 1}`}
                                                    onClick={() => setSelectedImage(imgSrc)}
                                                    className="w-40 h-28 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity snap-start shrink-0 border border-muted"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* --------------------------------------------- */}

                                {/* ป้ายบอกทักษะ */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2.5 py-1 rounded-md border border-primary/20 bg-muted/50 text-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* ---------- Modal สำหรับดูรูปขยายใหญ่ ---------- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)} // กดที่พื้นหลังสีดำเพื่อปิด
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้กดโดนรูปแล้วปิด
                        >
                            <Button 
                                variant="ghost" 
                                size="icon"
                                className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={24} />
                            </Button>
                            <img 
                                src={selectedImage} 
                                alt="Expanded view" 
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* ----------------------------------------------- */}

        </section>
    );
}