import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useFadeInScale } from '@/hooks/useAnimations';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Atmos Remake',
    description: 'An atmospheric Unity game with immersive gameplay',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    github: 'https://github.com/AlexPurcell',
    demo: '/game',
    tags: ['Unity', 'C#', 'WebGL'],
    isUnityGame: true,
  },
  {
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    github: 'https://github.com/AlexPurcell',
    demo: 'https://example.com',
    tags: ['React', 'TypeScript', 'Redux'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['React', 'Chart.js', 'Tailwind'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => {
              const { ref, style } = useFadeInScale(index * 0.2);
              
              return (
                <motion.div
                  key={project.title}
                  ref={ref}
                  style={style}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          {project.isUnityGame ? (
                            <Link to={project.demo}>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="bg-background/20 backdrop-blur-sm"
                              >
                                Play Game
                              </Button>
                            </Link>
                          ) : (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="bg-background/20 backdrop-blur-sm"
                              >
                                View Project
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          {project.isUnityGame ? (
                            <Link
                              to={project.demo}
                              className="flex items-center gap-2"
                            >
                              <Gamepad2 className="h-4 w-4" />
                              Play Game
                            </Link>
                          ) : (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </a>
                          )}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}