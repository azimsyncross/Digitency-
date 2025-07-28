import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function HeadquartersSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-extrabold text-foreground mb-4">Digitency Headquarters</h2>
                        <p className="text-lg text-muted-foreground mb-8">We're located in the heart of the tech hub, but our reach is global. Come say hello!</p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Our Office</h4>
                                    <p className="text-muted-foreground">
                                        Northeast Alberta Street 6250,<br />
                                        Portland, OR 97218,<br />
                                        United States of America
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Email Us</h4>
                                    <p className="text-muted-foreground">perryalexanderojd163@hotmail.com</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Call Us</h4>
                                    <p className="text-muted-foreground">+1 612-355-8326</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="h-80 lg:h-96 bg-background rounded-lg p-4 border border-border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Dummy map representation */}
                        <div className="w-full h-full bg-secondary/30 rounded-md relative overflow-hidden">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <MapPin className="h-10 w-10 text-primary" />
                                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
