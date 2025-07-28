import { motion } from "framer-motion";
import SectionHeader from "./section-header";

export default function MapSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto max-w-7xl px-4">
                <SectionHeader
                    tagline="Our Location"
                    title="Visit Our Office"
                    description="Visit us in person or get directions to our location in Seattle."
                />
                <motion.div 
                    className="mt-12 h-[450px] w-full rounded-lg overflow-hidden border border-border"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.436322889297!2d-122.35334468436946!3d47.61491177918512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490410858142a5f%3A0x8663a8a31383794!2s2226%20Elliott%20Ave%2C%20Seattle%2C%20WA%2098121%2C%20USA!5e0!3m2!1sen!2s!4v1678886450123!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale invert-[90%] contrast-125"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}