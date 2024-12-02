import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="../src/images/alex.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                  About me
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Frontend Development</li>
                  <li>✓ Backend Development</li>
                  <li>✓ UI/UX Design</li>
                  <li>✓ Software Development</li>
                </ul>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}