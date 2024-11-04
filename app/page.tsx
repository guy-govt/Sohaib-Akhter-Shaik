"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ChevronDown, Menu, Globe, BookOpen, Gamepad2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Portfolio = () => {
  const skills = [
    { name: "Python", proficiency: 100, color: "bg-blue-500" },
    { name: "Java", proficiency: 75, color: "bg-red-500" },
    { name: "JavaScript", proficiency: 65, color: "bg-yellow-500" },
    { name: "TensorFlow", proficiency: 90, color: "bg-green-500" },
    { name: "PyTorch", proficiency: 70, color: "bg-purple-500" },
    { name: "scikit-learn", proficiency: 90, color: "bg-pink-500" },
    { name: "React", proficiency: 70, color: "bg-cyan-500" },
    { name: "SQL", proficiency: 85, color: "bg-orange-500" },
    { name: "MongoDB", proficiency: 65, color: "bg-teal-500" }
  ];

  const projects = [
    {
      title: "Predictive Analytics Model",
      description: "Designed and implemented a machine learning model capable of predicting sales trends with over 90% accuracy using Python, pandas, and scikit-learn.",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "Customer Support Chatbot",
      description: "Developed an NLP-based chatbot using TensorFlow and Python to automate customer support and handle queries effectively.",
      tags: ["NLP", "TensorFlow", "Python"],
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      quote: "Sohaib demonstrated an excellent grasp of AI/ML concepts and a knack for delivering results. His work on predictive analytics really helped us understand our sales better.",
      author: "Former Client",
      color: "bg-gradient-to-br from-pink-500 to-red-500"
    },
    {
      quote: "Working with Sohaib on our chatbot project was an absolute pleasure. He not only met our expectations but exceeded them by delivering a highly effective solution.",
      author: "Business Owner",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  const hobbies = [
    { name: "Traveling", icon: Globe, description: "Exploring different cultures and places" },
    { name: "Game", icon: Gamepad2, description: "Improving strategic thinking skills" },
    { name: "Blogging", icon: BookOpen, description: "Writing about technology trends" }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Sohaib.dev
        </span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="hover:bg-primary/10"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-primary/5 to-background pt-16">
        <div className="space-y-6">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Sohaib Akhter Shaik
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg opacity-20 blur-xl" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI/ML Software Engineer
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="hover:bg-purple-500/10 transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-500/10 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-green-500/10 transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">About Me</h2>
        <Card className="overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 opacity-50" />
          <CardContent className="pt-6 relative">
            <p className="text-lg leading-relaxed">
              Hello! I&apos;m Sohaib Akhter Shaik, a dedicated software engineer passionate about harnessing the power of Artificial Intelligence and Machine Learning. My career goal is to contribute to innovative projects that push the boundaries of technology, ultimately aiming to make a significant impact in the AI/ML landscape.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Skills</h2>
        <div className="grid gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${project.color}`} />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-muted/50">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Hobbies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <Card key={hobby.name} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <hobby.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold">{hobby.name}</h3>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${testimonial.color}`} />
              <CardContent className="pt-6 relative">
                <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-medium text-right">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto text-center bg-gradient-to-b from-background to-primary/5">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Get in Touch</h2>
        <p className="text-lg mb-6">
          Interested in collaborating or learning more? Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
            <Mail className="mr-2 h-4 w-4" /> Email Me
          </Button>
          <Button variant="outline" className="border-purple-500/20 hover:bg-purple-500/10">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
