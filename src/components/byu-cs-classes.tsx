import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Aperture,
  BookOpen,
  Box,
  Clipboard,
  Briefcase,
  CheckCircle,
  Code,
  Cpu,
  Database,
  FileText,
  Film,
  GitBranch,
  Globe,
  Laptop,
  Layers,
  Layout,
  Mic,
  Puzzle,
  Server,
  Shield,
  Smartphone,
  Terminal,
  TrendingUp,
  Type,
  Users,
  Eye,
} from "lucide-react";

export function ByuCsClasses() {
  const classes = [
    {
      icon: <Briefcase />,
      class_name: "Academic Internship",
      class_code: "C S 199R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Internships or cooperative education experiences with organizations outside BYU.",
      when_taught: "Contact Department",
    },
    {
      icon: <Cpu />,
      class_name: "Advanced Algorithms and Problem Solving",
      class_code: "C S 393",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 312 - Algorithm Design and Analysis"],
      description:
        "This course will help students to become better at problem solving, increasing their ability to excel at technical/coding interviews (a challenging part of the hiring/interviewing process).  Students will build on the algorithms and problem-solving strategies that they were taught and had limited practice with in CS 312. learning primarily through targeted practice.  This will result in (1) strengthened skills in each style of problem-solving strategy and (2) the ability to quickly decide which strategy(ies) to apply to a given problem.  Students are expected to spend 6+ hours outside of class each week solving interview-type problems. ",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Cpu />,
      class_name: "Advanced Machine Learning",
      class_code: "C S 473",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 270 - Introduction to Machine Learning\n",
        "MATH 213 - Elementary Linear Algebra\n",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Understand the fundamental models of machine learning, such as neural networks, decision trees, data mining, clustering, Bayesian learning, ensembles, reinforcement learning, and deep learning. Work with data and machine learning tools in real world applications.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Layers />,
      class_name: "Advanced Shading",
      class_code: "CSANM 454",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Advanced shading, rendering, and lighting methods for creating virtual scenes that emphasize story and innovatively meet an art director's vision through traditional and procedural methods.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Advanced Software Construction",
      class_code: "C S 240",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 235 - Data Structures and Algorithms"],
      description:
        "Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.",
      when_taught: "All Semesters/Terms",
    },
    {
      icon: <Laptop />,
      class_name: "Advanced Techniques in Human Computer Interaction",
      class_code: "C S 356",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 256 - Introduction to Human Computer Interaction",
        "C S 260 - Web Programming",
      ],
      description:
        "This class combines designing the user experience with implementing the technology. Students learn website design, information architecture, and how to design for the broader ecosystem of use. Finally, students will learn principles specifically relevant to website design and information architecture. Web design is one of the most common UX jobs and so this makes their skills highly marketable.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Layers />,
      class_name: "Advanced Topics in Computer Science",
      class_code: "C S 501R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Advanced undergraduate- and graduate-level subjects as announced before each semester.",
      when_taught: "Fall",
    },
    {
      icon: <Cpu />,
      class_name: "Algorithm Design and Analysis",
      class_code: "C S 312",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 236 - Discrete Structures"],
      description:
        "A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <GitBranch />,
      class_name: "Algorithmic Languages and Compilers",
      class_code: "C S 431",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 340 - Software Design"],
      description:
        "Formal description of algorithmic languages and techniques used in their compilation:  semantics, ambiguities, procedures, replication, iteration, recursion.",
      when_taught: "Contact Department",
    },
    {
      icon: <Film />,
      class_name: "Animated Film Production 1",
      class_code: "CSANM 352",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Early development of a film, including character design, environments, pipeline, visual effects, and the look and feel the film. All pre-visualization of the film. Practice collaborative production processes through interdisciplinary creative works or experiences.",
      when_taught: "Winter",
    },
    {
      icon: <Film />,
      class_name: "Animated Film Production 2",
      class_code: "CSANM 450",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "In-depth experiences creating computer animations and visual effects.  Senior film front-end development and introduction to full animation production.",
      when_taught: "Fall",
    },
    {
      icon: <Film />,
      class_name: "Animated Film Production 3",
      class_code: "CSANM 452",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Portfolio development based on advanced animation/design projects. Senior film production and post production.",
      when_taught: "Winter",
    },
    {
      icon: <Briefcase />,
      class_name: "BFA Final Project",
      class_code: "CSANM 497R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Advanced individual project with minimum guidance, showing high degree of competence within chosen major.",
      when_taught: "Contact Department",
    },
    {
      icon: <Box />,
      class_name: "Blockchain Technologies",
      class_code: "C S 466",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 312 - Algorithm Design and Analysis"],
      description:
        "Technical underpinnings of blockchain-based systems, including cryptocurrency, smart contracts, decentralized finance (De-Fi), and Web3. Explores which problems are suitable for a blockchain-based solution and discusses arguments in favor and against blockchain systems.",
      when_taught: "Winter",
    },
    {
      icon: <FileText />,
      class_name: "Business Career Essentials in Science and Math",
      class_code: "C S 500",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Introduction for science, math, and statistics majors to careers in industry. Project planning, oral and written business presentations, business accounting, and technology readiness.",
      when_taught: "Winter",
    },
    {
      icon: <Clipboard />,
      class_name: "Capstone 1",
      class_code: "C S 494",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
      when_taught: "Contact Department",
    },
    {
      icon: <Clipboard />,
      class_name: "Capstone 2",
      class_code: "C S 495",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "The second semester of a culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
      when_taught: "Contact Department",
    },
    {
      icon: <Users />,
      class_name: "Careers in Computer Science",
      class_code: "C S 291",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 111 - Introduction to Computer Science",
        "C S 191 - Exploring Computer Science",
      ],
      description:
        "Career advising for students in computer science. Advice on resumes, applications, and interviews for internships, full-time jobs, and graduate school. Opportunities to network with other students and with employers.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Database />,
      class_name: "Computer Communications and Networking",
      class_code: "C S 460",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 324 - Systems Programming "],
      description:
        "Introduction to data communications and computer networking.  Communications fundamentals, computer networks, software, architecture, telecommunications, regulation, standards.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Cpu />,
      class_name: "Computer Graphics",
      class_code: "C S 455",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 355 - Interactive Graphics and Image Processing",
        "MATH 213 - Elementary Linear Algebra",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Interactive computer graphics systems programming and architecture.",
      when_taught: "Winter",
    },
    {
      icon: <Shield />,
      class_name: "Computer Security",
      class_code: "C S 465",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 324 - Systems Programming"],
      description:
        "Introduction to computer security fundamentals: confidentiality, integrity, authentication, and access control. Secret key and public key cryptography, network security protocols, viruses, and fire walls. ",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Eye />,
      class_name: "Computer Vision",
      class_code: "C S 450",
      class_type: "",
      emphasis: "None",
      pre_req: [
        " C S 312 - Algorithm Design and Analysis\n",
        "MATH 213 - Elementary Linear Algebra\n",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Introduction to fundamental concepts and algorithms of computer vision, including feature extraction, detection, segmentation, registration, recognition, motion, 3D vision, and image understanding. Applies techniques from image processing, geometry, Bayesian methods, optimization, and machine learning to computer vision problems.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Computing Competitions",
      class_code: "C S 493R",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Students work in teams to prepare for and compete in computer science competitions in areas such as programming, data science, and ethical hacking.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Concepts of Programming Languages",
      class_code: "C S 330",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 236 - Discrete Structures",
        "C S 260 - Web Programming",
        "C S 224 - Introduction to Computer Systems",
        "MATH 290 - Fundamentals of Mathematics",
        "C S 235 - Data Structures and Algorithms",
      ],
      description:
        "Principles and concepts characterizing high-level computer programming languages, process and data abstration, encapsulation, inheritance, functional programming, logic programming, scanners, and parsers.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Creating and Managing a Software Business",
      class_code: "C S 405",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 240 - Advanced Software Construction",
        "WRTG 316 - Technical Communication",
      ],
      description:
        "Entrepreneurship, idea/opportunity generation, strategic planning, legal organization, product development, marketing/sales, customer support, fund raising, and effective management.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Data Science Capstone 1",
      class_code: "C S 482",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 240 - Advanced Software Construction",
        "C S 312 - Algorithm Design and Analysis",
      ],
      description:
        "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Data Science Capstone 2",
      class_code: "C S 483",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 482 - Data Science Capstone 1"],
      description:
        "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Data Structures and Algorithms",
      class_code: "C S 235",
      class_type: "",
      emphasis: "None",
      pre_req: [
        " C S 142 - Introduction to Computer Programming",
        "C S 111 - Introduction to Computer Science",
      ],
      description:
        "Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.",
      when_taught: "Fall, Winter, Spring",
    },
    {
      icon: <Code />,
      class_name: "Database Modeling Concepts",
      class_code: "C S 452",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Database models:  relational, deductive, object-oriented.  Integrity constraints, query languages, database design.",
      when_taught: "Fall, Winter, and Spring",
    },
    {
      icon: <Code />,
      class_name: "Discrete Structures",
      class_code: "C S 236",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 235 - Data Structures and Algorithms"],
      description:
        "Introduction to grammars and parsing; predicate and propositional logic; proof techniques; sets, functions, relations, relational data model; graphs and graph algorithms. ",
      when_taught: "Fall, Winter, Spring",
    },
    {
      icon: <Code />,
      class_name: "Ethics and Computers in Society",
      class_code: "C S 404",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Societal impact of computer technology, the computer scientist's place in society, ethical issues.  Reading, discussion, and writing seminar.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Exploring Computer Science",
      class_code: "C S 191",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Introduction to the discipline of computer science and its fields. Lectures will provide an accessible introduction to the fields of computer science for those who are new to the discipline.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Fundamentals of Information Retrieval",
      class_code: "C S 453",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "Expand All",
        "\n                  Prerequisites\n                  \n                 ",
        "\n      Prerequisites\n      \n     ",
        "\n              C S 240 - Advanced Software Construction\n            ",
      ],
      description:
        "Concepts and terminology of information retrieval (IR) systems.  Design methodologies and issues.  Fundamental IR models examined:  Boolean, Vector Space, Probabilistic models, and evaluation strategies.",
      when_taught: "Spring Term",
    },
    {
      icon: <Code />,
      class_name: "How to Program",
      class_code: "C S 110",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Introduction to programming and computer science for those with no prior programming experience. Focuses on the basic aspects of programming, with an emphasis on core principles. Labs provide a supportive environment to learn how to program with peers. Weekly discussions will introduce some of the many ways computer science interacts with society. Programming assignments will demonstrate how to use computing in a variety of disciplines. \\n",
      when_taught: "Fall, Winter, Spring",
    },
    {
      icon: <Code />,
      class_name: "Interactive Graphics and Image Processing",
      class_code: "C S 355",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 240 - Advanced Software Construction",
        "MATH 213 - Elementary Linear Algebra",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Introduces basic concepts of computer graphics and image processing. Includes characteristics of physical cameras and displays; color models; basic image processing algorithms: 2D and 3D homogeneous coordinate transformations; fundamentals of 3D rendering geometry; lighting and shading: image warping and texture mapping; and frequency-domain processing.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Intermediate Three-Dimensional Computer Graphics",
      class_code: "CSANM 250",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Fundaments of building three-dimensional computer models and setting up model rigs for mobility.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Artificial Intelligence",
      class_code: "C S 470",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 312 - Algorithm Design and Analysis",
        "MATH 215 - Computational Linear Algebra",
        "STAT 121 - Introduction to Statistical Data Analysis",
      ],
      description:
        "Introduction to core areas of artifical intelligence; intelligent agents, problem solving and search, knowledge-based systems and inference, planning, uncertainty, learning, and perception. ",
      when_taught: "Fall, Winter, and Spring",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Computational Theory",
      class_code: "C S 252",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Finite state automata, regular languages, lexical analysis; push-down automata, context-free languages, parsing; Turing machines and unrestricted grammars; computability complexity, NP-completeness.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Computer Programming",
      class_code: "C S 142",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Introduction to object-oriented program design and development.  Principles of algorithm formulation and implementation.",
      when_taught: "Contact Department",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Computer Science",
      class_code: "C S 111",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
      when_taught: "All Semesters/Terms",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Computer Systems",
      class_code: "C S 224",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 235 - Data Structures and Algorithms"],
      description:
        "How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.\\n",
      when_taught: "Fall, Winter, Summer",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Data Science",
      class_code: "C S 180",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "This course is a broad, interdisciplinary look at the field of data science, and how to derive insight from data.  It will develop technical skills (including some python programming, statistics, linear algebra, machine learning, data cleaning and visualization) as well as data literacy (mental frameworks for decomposing data science problems, critical thinking about potential conclusions of an analysis, and potential pitfalls of overreliance on unreliable data).",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Data Science",
      class_code: "STAT 180",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "statistics; linear algebra; machine learning; data cleaning and visualization; data literacy; decomposing data science problems; critical thinking about analysis; potential pitfalls in data science",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Deep Learning",
      class_code: "C S 474",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 312 - Algorithm Design and Analysis",
        "C S 270 - Introduction to Machine Learning",
        "MATH 320 - Algorithm Design and Optimization 1",
      ],
      description:
        "Understand theory and practice of deep learning, drawing material from machine vision, machine translation, dynamical systems, audio processing, neural computing and human perception. Learn supporting mathematical concepts, including linear algebra, stochastic optimization, and hardware acceleration.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Game Design",
      class_code: "CSANM 340",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "This is an introductory elective course in game design.  We will cover foundational game elements and the processes for designing game experiences. These principles are ubiquitously foundational to all parts of the video game development pipeline. This class helps students develop understanding and intuition for the techniques that make gameplay and accompanying worlds successful. \\n",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Graph Data Science",
      class_code: "C S 575",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 312 - Algorithm Design and Analysis"],
      description:
        "Use graph structures to explore labeled data and discover network relationships within the data. Understand network relationships, learn graph models of common network structures, identify network communities and influential members, and work with knowledge graphs.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Human Computer Interaction",
      class_code: "C S 256",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Design user experiences with technology that make a meaningful difference in people\u2019s lives. Methods to establish user needs, derive designs, assess tradeoffs, and report results. Develop and iterate prototypes with feedback from representative users.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Machine Learning",
      class_code: "C S 270",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 111 - Introduction to Computer Science",
        "MATH 112 - Calculus 1",
      ],
      description:
        "Understand the fundamental models of machine learning, such as neural networks, decision trees, data mining, clustering, Bayesian learning, ensembles, reinforcement learning, and deep learning. Work with data and machine learning tools in real world applications.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Machine Translation",
      class_code: "C S 479",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Evolution of machine translation technologies and algorithms, with a foundation in basic algorithms, human-machine interaction, automatic adaptation, statistical and neural models, multilingual models, multimodal models, quality evaluation and estimation, and speech-to-speech translation.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Three-Dimensional Animation",
      class_code: "CSANM 252",
      class_type: "",
      emphasis: "None",
      pre_req: ["CSANM 250 - Intermediate Three-Dimensional Computer Graphics"],
      description:
        "Foundational principles and techniques of three-dimensional animation, including timing and pacing,  character setup, and dynamics.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Introduction to Three-Dimensional Computer Graphics",
      class_code: "CSANM 150",
      class_type: "",
      emphasis: "None",
      pre_req: ["DESAN 101 - Introduction to Drawing for Pre-Animation"],
      description:
        "Fundamentals of modeling, texturing, lighting, and rendering used in exploring principles and elements of three-dimensional design.",
      when_taught: "Fall Term 1; Fall Term 2; Winter Term 1; Winter Term 2.",
    },
    {
      icon: <Code />,
      class_name: "Job Search Strategies",
      class_code: "C S 502",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Course will assist graduating students in identifying and connecting to potential employers.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Large-Scale Distributed System Design",
      class_code: "C S 462",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 324 - Systems Programming"],
      description:
        "Principles and concepts of designing and building distributed systems.  Introduction to architectures for distributed computation.  Reliability, availability, and scalability of large applications.  Cloud computing and APIs.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Lighting for Three-Dimensional Graphics",
      class_code: "CSANM 351R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Developing lighting and color, and the compiling of the various elements for final images for use in three-dimensional applications.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Linear Programming and Convex Optimization",
      class_code: "C S 412",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "MATH 213 - Elementary Linear Algebra",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Optimization, problem formulation, and solution algorithms, including simplex and interior point methods.  Applications from control, data mining, finance, game theory, learning, network flow, operations research, and statistical estimation.",
      when_taught: "Contact Department",
    },
    {
      icon: <Code />,
      class_name: "Materials and Surfacing",
      class_code: "CSANM 354",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Shading and rendering techniques for the attainment of desired visual effects:  use of shading languages for the realization of both photorealistic and non-photorealistic imaging.",
      when_taught: "Winter",
    },
    {
      icon: <Smartphone />,
      class_name: "Mobile and Ubiquitous Human-Computer Interaction",
      class_code: "C S 456",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 356 - Advanced Techniques in Human Computer Interaction"],
      description:
        "Iterative user experience design for mobile and ubiquitous computing with an emphasis on conceptualization and prototyping in specific contexts. Complete an open-ended project from initial design through functional prototype, with design and critique sessions.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Operating Systems Design",
      class_code: "C S 345",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 224 - Introduction to Computer Systems",
        "C S 240 - Advanced Software Construction",
      ],
      description:
        "Principles and concepts of operating systems design and the implementation of an operating system.",
      when_taught: "Contact Department",
    },
    {
      icon: <Code />,
      class_name: "Photography for Animation",
      class_code: "CSANM 355",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Layout, references, camera technology and terminology, application of composition, lighting, and core art skills emphasized.",
      when_taught: "Spring Term",
    },
    {
      icon: <Code />,
      class_name: "Previsualization",
      class_code: "CSANM 353",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "CSANM 250 - Intermediate Three-Dimensional Computer Graphics",
        "CSANM 252 - Introduction to Three-Dimensional Animation",
      ],
      description:
        "This class teaches the art and technical aspects of previsualization using 3D software and cameras. This technique is crucial to the modern filmmaking process, and students will learn the process through principles and experience. ",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Real-time Techniques",
      class_code: "CSANM 342",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "This class introduces students to real-time applications. It provides principles foundational for creating video games and other real-time media. Students learn how to mock up basic game mechanics in a realtime engine, such as Unreal Engine, and create basic environments and characters for a real time engine. This is meant to be an introduction to a variety of skills that students can take further and deeper on future projects.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name:
        "Research Methods and Study Design in Human-Computer Interaction",
      class_code: "C S 556",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 356 - Advanced Techniques in Human Computer Interaction"],
      description:
        "Understand and use qualitative and quantitative methods for human-computer interaction research, such as interviews, observations, surveys, and measurements. Learn to choose study designs, analyze data, and consider ethical implications of involving human participants in research.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Robust Control",
      class_code: "C S 513",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "MATH 213 - Elementary Linear Algebra",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        "Introduction to the analysis and design of feedback systems guaranteed to perform well in spite of model uncertainty.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Scripting for Animation",
      class_code: "CSANM 258",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Developing basic scripting skills to procedurally build intricate systems of models, rigs, and animation.  Students learn how to reduce manual hours and efficiently create simple to complex effects.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Secondary Minor Student Teaching",
      class_code: "C S 477R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Supervised, full-day, four week experience to develop and demonstrate competence in teaching minor area course content in the secondary classroom.",
      when_taught: "Fall, Winter, Spring",
    },
    {
      icon: <Layout />,
      class_name: "Software Design",
      class_code: "C S 340",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 240 - Advanced Software Construction",
        "C S 260 - Web Programming",
      ],
      description:
        "Use design, development, testing and refactoring techniques to build and evolve reliable, maintainable and scalable software systems. Covers a wide range of design patterns and principles. Also introduces students to software architecture and architectural patterns.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Server />,
      class_name: "Software Engineering",
      class_code: "C S 428",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 340 - Software Design"],
      description:
        "Analysis, design, implementation, and testing of significant software systems.",
      when_taught: "Contact Department",
    },
    {
      icon: <Layers />,
      class_name: "Software Engineering Capstone 1",
      class_code: "C S 480",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 329 - Testing, Analysis, and Verification",
        "C S 340 - Software Design",
      ],
      description:
        "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.\\n",
      when_taught: "Fall",
    },
    {
      icon: <Layers />,
      class_name: "Software Engineering Capstone 2",
      class_code: "C S 481",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 480 - Software Engineering Capstone 1"],
      description:
        "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
      when_taught: "Winter",
    },
    {
      icon: <Layers />,
      class_name: "Software Engineering Lab 1",
      class_code: "C S 202",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 142 - Introduction to Computer Programming",
        "C S 111 - Introduction to Computer Science",
      ],
      description:
        "The first of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. In addition to hands-on lab experiences, this course contains lecture and assigned reading content that will provide an understanding of what a software engineering career is and what roles and responsibilities are available to software engineers. ",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Layers />,
      class_name: "Software Engineering Lab 2",
      class_code: "C S 203",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 202 - Software Engineering Lab 1",
        "C S 235 - Data Structures and Algorithms",
      ],
      description:
        "The second of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. The lab experiences in this course build on those learned in CS 202 and focus on tools and techniques for source code testing, automated source code analysis, and source code build and dependency management. ",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Layers />,
      class_name: "Software Engineering Lab 3",
      class_code: "C S 204",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 203 - Software Engineering Lab 2",
        "C S 240 - Advanced Software Construction",
      ],
      description:
        "The third of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. The lab experiences in this course build on those learned in CS 202 and CS 203 and focus on tools and techniques for cloud development and Agile programming. ",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Film />,
      class_name: "Special Problems in Animation",
      class_code: "CSANM 494R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description: "Individual study in area of special interest.",
      when_taught: "Contact Department",
    },
    {
      icon: <TrendingUp />,
      class_name: "Special Topics in Advanced Graphics",
      class_code: "CSANM 453R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Researching new technologies in animation and visualization.  Topics might include real-time technologies, three-dimensional data acquisition, performance capture, or new entertainment platforms.",
      when_taught: "Fall",
    },
    {
      icon: <Terminal />,
      class_name: "Systems Programming",
      class_code: "C S 324",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 224 - Introduction to Computer Systems"],
      description:
        "Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <CheckCircle />,
      class_name: "Testing, Analysis, and Verification",
      class_code: "C S 329",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems. Practical application to software artifacts and algorithm implementation connects the course material to real world application in the field.",
      when_taught: "Fall and Winter",
    },
    {
      icon: <Code />,
      class_name: "Theory of Predictive Modeling",
      class_code: "C S 580",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "MATH 213 - Elementary Linear Algebra",
        "MATH 215 - Computational Linear Algebra",
      ],
      description:
        " Mathematical, computational, and philosophical foundations of machine learning, control, and physical modeling.  Introduction to system identification, causality, uncertainty, model approximation, and information geometry.",
      when_taught: "Fall",
    },
    {
      icon: <Aperture />,
      class_name: "Three-Dimensional Visual Effects",
      class_code: "CSANM 458R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Exploring procedural and three-dimensional animation methods to create realistic special effects.  Applying a large spectrum of animation principles to integrate their effects aesthetically and convincingly into a live action or animated environment.",
      when_taught: "Spring Term",
    },
    {
      icon: <BookOpen />,
      class_name: "Topics in Computer Science",
      class_code: "C S 301R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description: "Undergraduate-level topics as announced.",
      when_taught: "Fall",
    },
    {
      icon: <BookOpen />,
      class_name: "Topics in Computer Science",
      class_code: "C S 401R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Undergraduate level subjects as announced before each semester.",
      when_taught: "Winter",
    },
    {
      icon: <BookOpen />,
      class_name: "Topics in Computer Science",
      class_code: "C S 201R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Undergraduate level subjects as announced before each semester.",
      when_taught: "Fall",
    },
    {
      icon: <Type />,
      class_name: "Transformer Models for Natural Language Processing",
      class_code: "C S 574",
      class_type: "",
      emphasis: "None",
      pre_req: [
        "C S 270 - Introduction to Machine Learning",
        "C S 312 - Algorithm Design and Analysis",
      ],
      description:
        "Understand and learn how to use state of the art transformer language models for many Natural Language Processing and Understanding tasks, such as text classification, text generation, question answering, machine translation, and many other tasks.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Undergraduate Research",
      class_code: "C S 497R",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Students receive course credit for doing undergraduate research under the supervision of a faculty mentor.",
      when_taught: "All Semesters/Terms",
    },
    {
      icon: <Puzzle />,
      class_name: "Undergraduate Special Projects",
      class_code: "C S 498R",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 240 - Advanced Software Construction"],
      description:
        "Students identify an interesting problem in computer science and solve it with the aid of faculty members.",
      when_taught: "All Semesters/Terms",
    },
    {
      icon: <Shield />,
      class_name: "Verification and Validation",
      class_code: "C S 486",
      class_type: "",
      emphasis: "None",
      pre_req: ["C S 312 - Algorithm Design and Analysis"],
      description:
        "Foundational topics in verification and validation; the application of logic to building correct systems. Covers logics to formally specify properties of systems, verifications of basic systems, and advanced topics in formal verification for complex systems.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Video Game Production 1",
      class_code: "CSANM 459",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Using prototyping to develop game experience ideas by building a minimal viable product around a core experience idea. Participating in a team and coordinating tasks, including white-boxing, concept design, modeling, layout, rigging, and tool building.",
      when_taught: "Fall",
    },
    {
      icon: <Code />,
      class_name: "Video Game Production 2",
      class_code: "CSANM 460",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Polishing a video game for production as a team, including texturing, animation, FX, lighting, tool applications, AI, UI, and gameplay mechanics.",
      when_taught: "Winter",
    },
    {
      icon: <Code />,
      class_name: "Visual Narrative for Animation",
      class_code: "CSANM 210",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "This class teaches foundational skills that animation students require when working in a shot-based production environment. Cinematography, layout, composition and storytelling techniques will be a focus of study.",
      when_taught: "Fall",
    },
    {
      icon: <Mic />,
      class_name: "Voice User Interfaces",
      class_code: "C S 471",
      class_type: "",
      emphasis: "test",
      pre_req: [],
      description:
        "Methods and development platforms for Voice User Interfaces. Principles of effective design; differences from visual or menu-based interfaces\u2019 mechanics of automatic speech recognition, intent detection, slot filling, dialog state tracking, text generation, and knowledge representation.",
      when_taught: "Winter",
    },
    {
      icon: <Globe />,
      class_name: "Web Programming",
      class_code: "C S 260",
      class_type: "",
      emphasis: "None",
      pre_req: [],
      description:
        "Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
      when_taught: "Fall and Winter",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [emphasisFilter, setEmphasisFilter] = useState("All");
  const [sortBy, setSortBy] = useState("code");

  const filteredAndSortedClasses = classes
    .filter(
      (cls) =>
        cls.class_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.class_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (cls) =>
        semesterFilter === "All" || cls.when_taught.includes(semesterFilter)
    )
    .filter(
      (cls) => emphasisFilter === "All" || cls.emphasis.includes(emphasisFilter)
    )
    .sort((a, b) => {
      if (sortBy === "code") return a.class_code.localeCompare(b.class_code);
      if (sortBy === "name") return a.class_name.localeCompare(b.class_name);
      return 0;
    });

  const allEmphases = Array.from(
    new Set(classes.flatMap((cls) => cls.emphasis))
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
          <nav className=" flex gap-4 sm:gap-6">
            <div className="relative group items-center justify-center">
              <button style={{ backgroundColor: "#002E5D", color: "white" }} className="flex items-center gap-2">
                Programs
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Undergraduate Programs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Graduate Programs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Certificate Programs
                </a>
              </div>
            </div>

            <div className="relative group">
              <button style={{ backgroundColor: "#002E5D", color: "white" }} className="flex items-center gap-2">
                Classes & Emphases
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Classes
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Emphases
                </a>
              </div>
            </div>
            <div className="relative group">
              <button style={{ backgroundColor: "#002E5D", color: "white" }} className="flex items-center gap-2">
                Faculty & Research
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Faculty
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Research Projects
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    BYU Computer Science Classes
                  </h1>
                  <p
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                    style={{ margin: "auto" }}
                  >
                    Explore our diverse range of computer science courses
                    designed to prepare you for the digital future.
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Input
                  placeholder="Search classes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm mx-auto"
                />
                <div className="flex flex-wrap justify-center gap-4">
                  <Select
                    value={semesterFilter}
                    onValueChange={setSemesterFilter}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Semesters</SelectItem>
                      <SelectItem value="Fall">Fall</SelectItem>
                      <SelectItem value="Winter">Winter</SelectItem>
                      <SelectItem value="Spring">Spring</SelectItem>
                      <SelectItem value="Summer">Summer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={emphasisFilter}
                    onValueChange={setEmphasisFilter}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by emphasis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Emphases</SelectItem>
                      {allEmphases.map((emphasis) => (
                        <SelectItem key={emphasis} value={emphasis}>
                          {emphasis}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="code">Sort by Code</SelectItem>
                      <SelectItem value="name">Sort by Name</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                {filteredAndSortedClasses.map((cls) => (
                  <Card key={cls.class_code}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {cls.icon}
                        <span>{cls.class_code}</span>
                      </CardTitle>
                      <CardDescription>{cls.class_name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{cls.description.slice(0, 150)}...</p>
                      <div className="mt-2">
                        <strong>Offered:</strong> {cls.when_taught}
                      </div>
                      {cls.emphasis !== "None" && (
                        <div>
                          <strong>Emphasis:</strong> {cls.emphasis}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Learn More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2023 Brigham Young University Computer Science Department. All
            rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
