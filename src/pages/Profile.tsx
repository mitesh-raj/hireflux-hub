import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from '@/components/ui/badge';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { User, Briefcase, GraduationCap, Award, MapPin, Clock, Github, Linkedin, FileText, AtSign, Phone, Building } from 'lucide-react';

// Form schema for personal information
const personalInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(2, { message: "Please enter your location." }),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  portfolio: z.string().url().optional().or(z.literal('')),
  about: z.string().max(500, { message: "Bio cannot exceed 500 characters." }).optional(),
});

// Form schema for education
const educationSchema = z.object({
  degree: z.string().min(2, { message: "Degree is required." }),
  fieldOfStudy: z.string().min(2, { message: "Field of study is required." }),
  institution: z.string().min(2, { message: "Institution is required." }),
  startDate: z.string().min(2, { message: "Start date is required." }),
  endDate: z.string().min(2, { message: "End date is required." }),
  gpa: z.string().optional(),
  description: z.string().max(300).optional(),
});

// Form schema for work experience
const experienceSchema = z.object({
  title: z.string().min(2, { message: "Job title is required." }),
  company: z.string().min(2, { message: "Company is required." }),
  location: z.string().min(2, { message: "Location is required." }),
  startDate: z.string().min(2, { message: "Start date is required." }),
  endDate: z.string().min(2, { message: "End date is required." }),
  current: z.boolean().default(false),
  description: z.string().min(10, { message: "Please provide some details about your role." }),
});

// Form schema for skills
const skillsSchema = z.object({
  skills: z.string().min(2, { message: "Please enter at least one skill." }),
});

const Profile = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("personal");
  
  // Personal info form
  const personalForm = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: user?.name || "",
      email: user?.email || "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
      about: "",
    },
  });

  // Education form
  const educationForm = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      degree: "",
      fieldOfStudy: "",
      institution: "",
      startDate: "",
      endDate: "",
      gpa: "",
      description: "",
    },
  });

  // Experience form
  const experienceForm = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  });

  // Skills form
  const skillsForm = useForm({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      skills: "",
    },
  });

  // Dummy data for education and experience to show in the UI
  const [educations, setEducations] = useState([
    {
      id: "1",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      institution: "University of Technology",
      startDate: "2016-09",
      endDate: "2020-06",
      gpa: "3.8",
      description: "Focused on algorithms and software engineering",
    }
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "2020-08",
      endDate: "2022-12",
      current: false,
      description: "Developed and maintained web applications using React, Redux, and TypeScript. Collaborated with design and backend teams to implement new features.",
    }
  ]);

  const [skills, setSkills] = useState([
    "React", "TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"
  ]);

  const handlePersonalSubmit = (data) => {
    console.log("Personal data:", data);
    updateUser({ 
      name: data.fullName,
      profileCompleted: true 
    });
    
    toast({
      title: "Personal information updated",
      description: "Your profile has been updated successfully",
    });
    
    setActiveTab("education");
  };

  const handleEducationSubmit = (data) => {
    console.log("Education data:", data);
    setEducations([...educations, { id: Date.now().toString(), ...data }]);
    educationForm.reset();
    
    toast({
      title: "Education added",
      description: "Your education details have been added successfully",
    });
  };

  const handleExperienceSubmit = (data) => {
    console.log("Experience data:", data);
    setExperiences([...experiences, { id: Date.now().toString(), ...data }]);
    experienceForm.reset();
    
    toast({
      title: "Experience added",
      description: "Your work experience has been added successfully",
    });
  };

  const handleSkillsSubmit = (data) => {
    console.log("Skills data:", data);
    const newSkills = data.skills.split(',').map(skill => skill.trim());
    setSkills([...skills, ...newSkills]);
    skillsForm.reset();
    
    toast({
      title: "Skills updated",
      description: "Your skills have been updated successfully",
    });
  };
  
  const handleCompleteProfile = () => {
    updateUser({ profileCompleted: true });
    
    toast({
      title: "Profile completed",
      description: "Your profile has been marked as complete. You can now apply for jobs!",
    });
  };
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Complete Your Profile
        </h1>
        <p className="text-center text-gray-600 mb-8">
          An updated profile increases your chances of getting hired
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <Badge className={user?.profileCompleted ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                {user?.profileCompleted ? "Profile Complete" : "Profile Incomplete"}
              </Badge>
            </div>
            
            <div className="mt-6 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: user?.profileCompleted ? '100%' : '25%' }}></div>
            </div>
            <p className="text-right text-sm text-gray-600 mt-1">
              {user?.profileCompleted ? 'All set!' : 'Profile completion: 25%'}
            </p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
            <TabsTrigger value="personal" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <GraduationCap className="h-4 w-4 mr-2" />
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
              <Award className="h-4 w-4 mr-2" />
              Skills
            </TabsTrigger>
          </TabsList>
          
          {/* Personal Information Tab */}
          <TabsContent value="personal">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Personal Information</CardTitle>
                <CardDescription>Add your personal details to help employers contact you</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...personalForm}>
                  <form onSubmit={personalForm.handleSubmit(handlePersonalSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={personalForm.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="San Francisco, CA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn</FormLabel>
                            <FormControl>
                              <Input placeholder="linkedin.com/in/johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub</FormLabel>
                            <FormControl>
                              <Input placeholder="github.com/johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>Portfolio Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://johndoe.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={personalForm.control}
                        name="about"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>About Me</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Write a short bio about yourself..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Brief introduction that will appear at the top of your profile
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                      >
                        Save & Continue
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Education</CardTitle>
                <CardDescription>Add your educational background</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...educationForm}>
                  <form onSubmit={educationForm.handleSubmit(handleEducationSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={educationForm.control}
                        name="degree"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree</FormLabel>
                            <FormControl>
                              <Input placeholder="Bachelor of Science" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="fieldOfStudy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Field of Study</FormLabel>
                            <FormControl>
                              <Input placeholder="Computer Science" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution</FormLabel>
                            <FormControl>
                              <Input placeholder="University of Technology" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="gpa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GPA (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="3.8" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date</FormLabel>
                            <FormControl>
                              <Input type="month" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                              <Input type="month" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={educationForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your studies, achievements, etc." 
                                className="min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                      >
                        Add Education
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Display existing education */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Your Education</h3>
              {educations.map((edu) => (
                <Card key={edu.id} className="border-none shadow-sm bg-white/90">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-purple-800">{edu.degree} in {edu.fieldOfStudy}</CardTitle>
                    <CardDescription className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1 text-purple-400" />
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1 text-purple-400" />
                      {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - 
                      {new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                      {edu.gpa && <span className="ml-2">• GPA: {edu.gpa}</span>}
                    </div>
                    {edu.description && <p className="text-sm text-gray-600">{edu.description}</p>}
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => setActiveTab("experience")}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                >
                  Continue to Experience
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Experience Tab */}
          <TabsContent value="experience">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Work Experience</CardTitle>
                <CardDescription>Add your professional experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...experienceForm}>
                  <form onSubmit={experienceForm.handleSubmit(handleExperienceSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={experienceForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Frontend Developer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Tech Solutions Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="San Francisco, CA or Remote" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center h-10 mt-8">
                        <input
                          type="checkbox"
                          id="current"
                          {...experienceForm.register("current")}
                          className="mr-2"
                        />
                        <Label htmlFor="current">I currently work here</Label>
                      </div>
                      
                      <FormField
                        control={experienceForm.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date</FormLabel>
                            <FormControl>
                              <Input type="month" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                              <Input 
                                type="month" 
                                {...field} 
                                disabled={experienceForm.watch("current")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your responsibilities and achievements..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                      >
                        Add Experience
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Display existing experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Your Experience</h3>
              {experiences.map((exp) => (
                <Card key={exp.id} className="border-none shadow-sm bg-white/90">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-purple-800">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Building className="h-4 w-4 mr-1 text-purple-400" />
                      {exp.company}
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1 text-purple-400" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1 text-purple-400" />
                      {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - 
                      {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => setActiveTab("skills")}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                >
                  Continue to Skills
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Skills</CardTitle>
                <CardDescription>Add your technical and professional skills</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...skillsForm}>
                  <form onSubmit={skillsForm.handleSubmit(handleSkillsSubmit)} className="space-y-4">
                    <FormField
                      control={skillsForm.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skills</FormLabel>
                          <FormControl>
                            <Input placeholder="React, TypeScript, UI/UX, Leadership" {...field} />
                          </FormControl>
                          <FormDescription>
                            Enter skills separated by commas
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end mt-4">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                      >
                        Add Skills
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Display skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Your Skills</h3>
              <Card className="border-none shadow-sm bg-white/90">
                <CardContent className="py-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 hover:from-purple-200 hover:to-blue-200 transition-colors border-none px-3 py-1 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-end mt-6">
                <Button 
                  onClick={handleCompleteProfile}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  Complete Profile
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
