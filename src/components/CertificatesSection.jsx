import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
    {
        title: "MTCNA – Network Associate",
        year: 2024,
        description: "Basic MikroTik networking certificate.",
        image: "/certificates/mtcna.png",
    },
    {
        title: "MTCTCE – Traffic Control Engineer",
        year: 2024,
        description: "Traffic control and QoS certificate.",
        image: "/certificates/mtctce.png",
    },
    {
        title: "MTCUME – User Management Engineer",
        year: 2024,
        description: "Certificate for user management, AAA, and MikroTik User Manager.",
        image: "/certificates/mtcume.png",
    },
];


export default function CertificatesSection() {
    const [active, setActive] = useState(null);

    return (
        <section className="relative z-10 container mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold mb-10">
                Achievements & Certificates
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {certificates.map((cert, i) => (
                    <div
                        key={i}
                        onClick={() => setActive(cert)}
                        className="cursor-pointer relative rounded-2xl border p-6 bg-background/80 backdrop-blur transition-transform hover:-translate-y-2 hover:shadow-xl transition"
                    >
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-2xl opacity-0 hover:opacity-100 transition" />
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            MikroTik • {cert.year}
                        </p>
                        <p className="mt-4 text-sm">{cert.description}</p>
                        <p className="mt-4 text-xs text-primary">Click to view certificate</p>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActive(null)}
                        aria-modal="true"
                        role="dialog"
                    >
                        <motion.div
                            className="relative bg-background rounded-xl w-auto max-w-[90vw] max-h-[90vh] overflow-auto p-4 flex flex-col items-center"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                                onClick={() => setActive(null)}
                            >
                                ✕
                            </button>

                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-auto max-w-[90vw] h-auto max-h-[80vh] object-contain rounded-lg"
                            />

                            <p className="mt-4 text-center font-medium">{active.title}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
