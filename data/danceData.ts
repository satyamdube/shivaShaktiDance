export interface DanceClass {
  id: string;
  number: string;
  title: string;
  category: "classical" | "contemporary" | "kids";
  level: string;
  ageGroup: string;
  duration: string;
  description: string;
  longDescription: string;
  highlights: string[];
  prerequisites: string;
  attire: string;
  image: string;
}

export interface ScheduleItem {
  id: string;
  day: "Weekdays (Tue & Thu)" | "Weekends (Sat & Sun)";
  time: string;
  className: string;
  category: string;
  level: string;
  instructor: string;
  status: "Open" | "Few Seats Left" | "Filling Fast";
  studioRoom: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  lineage: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "stage" | "rehearsal" | "arangetram" | "mudras";
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProgressionStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  milestone: string;
}

export const DANCE_CLASSES: DanceClass[] = [
  {
    id: "bharatanatyam",
    number: "01",
    title: "Bharatanatyam",
    category: "classical",
    level: "Beginner to Advanced",
    ageGroup: "Ages 6+ & Adults",
    duration: "75 mins / session (2x weekly)",
    description: "A classical South Indian dance form built on devotion, precision, mudras and storytelling.",
    longDescription:
      "Rooted in the Natya Shastra, Bharatanatyam trains students in pure rhythmic movement (Nritta), expressive storytelling (Abhinaya), and musicality. Students progress from fundamental adavus to full Margam repertoire and Arangetram preparation.",
    highlights: ["Adavu fundamentals (all 10 series)", "Hastha Mudras & Viniyogas", "Tala recitation & Solkattu", "Full Margam repertoire & Arangetram guidance"],
    prerequisites: "No prior experience required for Beginner batch. Discipline and passion to learn.",
    attire: "Traditional cotton practice saree or comfortable dance kurta-pyjama with Ghungroo (bells).",
    image: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "bollywood-semiclassical",
    number: "02",
    title: "Bollywood & Semi-Classical",
    category: "contemporary",
    level: "All Levels Welcome",
    ageGroup: "Teens & Adults",
    duration: "60 mins / session (2x weekly)",
    description: "Fun, energetic choreography that blends contemporary flair with classical roots.",
    longDescription:
      "A dynamic fusion curriculum that marries graceful classical mudras, neck & eye movements, and spins with cinematic Bollywood and folk rhythms. Ideal for fitness, stage presence, and pure expressive joy.",
    highlights: ["Cinematic song routines & lyrical choreography", "Semi-classical grace, footwork & spins", "Performance conditioning & flexibility", "Annual stage showcase & video captures"],
    prerequisites: "Open to complete beginners and seasoned dancers alike.",
    attire: "Comfortable workout clothes, leggings, or loose kurti allowing free movement.",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kids-dance",
    number: "03",
    title: "Kids Dance Foundations",
    category: "kids",
    level: "Beginner",
    ageGroup: "Ages 5–12",
    duration: "60 mins / session (2x weekly)",
    description: "Specially designed lessons that build rhythm, confidence and stage presence early.",
    longDescription:
      "Tailored for young minds and energetic feet, our kids' program fosters body posture, musicality, flexibility, and collaborative teamwork in an uplifting, creative classroom environment.",
    highlights: ["Rhythm & beat recognition through play", "Coordination, balance & flexibility drills", "Kids folk dances & energetic Bollywood routines", "Stage poise & confidence building"],
    prerequisites: "Ages 5 to 12. Enthusiasm and love for music!",
    attire: "Comfortable t-shirt and track pants or tights.",
    image: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kathak-basics",
    number: "04",
    title: "Kathak & Classical Footwork",
    category: "classical",
    level: "Foundational to Intermediate",
    ageGroup: "Ages 8+ & Adults",
    duration: "75 mins / session (2x weekly)",
    description: "Master rhythmic Tatkar, chakras (pirouettes), ghungroo nuances and lyrical expressions.",
    longDescription:
      "Hailing from Northern India's temple and court traditions, our Kathak classes focus on swift pirouettes, complex rhythmic syllables (Padhant), and subtle emotive facial expressions (Abhinaya).",
    highlights: ["Tatkar & intricate footwork timing", "Swift Chakars (pirouettes) & balance", "Padhant (oral rhythmic recitation)", "Tarana, Thumri & Bhajan choreography"],
    prerequisites: "Basic rhythm sense encouraged. Beginners welcome in foundational batch.",
    attire: "Cotton Anarkali kurta with churidar, dupatta, and Ghungroos (minimum 50 bells per leg).",
    image: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: "s1",
    day: "Weekdays (Tue & Thu)",
    time: "4:30 PM – 5:30 PM",
    className: "Kids Dance Foundations",
    category: "Kids",
    level: "Beginners (Ages 5-10)",
    instructor: "Priya Sengupta",
    status: "Filling Fast",
    studioRoom: "Studio A (Nataraja Hall)",
  },
  {
    id: "s2",
    day: "Weekdays (Tue & Thu)",
    time: "5:45 PM – 7:00 PM",
    className: "Bharatanatyam (Junior)",
    category: "Classical",
    level: "Foundations & Adavus",
    instructor: "Guru Vidushi Meenakshi",
    status: "Open",
    studioRoom: "Studio A (Nataraja Hall)",
  },
  {
    id: "s3",
    day: "Weekdays (Tue & Thu)",
    time: "7:15 PM – 8:30 PM",
    className: "Bollywood & Semi-Classical",
    category: "Contemporary",
    level: "Teens & Adults",
    instructor: "Rajesh Rawat",
    status: "Few Seats Left",
    studioRoom: "Studio B (Rhythm Lounge)",
  },
  {
    id: "s4",
    day: "Weekends (Sat & Sun)",
    time: "9:00 AM – 10:30 AM",
    className: "Bharatanatyam (Advanced)",
    category: "Classical",
    level: "Varnams & Margam",
    instructor: "Guru Vidushi Meenakshi",
    status: "Open",
    studioRoom: "Studio A (Nataraja Hall)",
  },
  {
    id: "s5",
    day: "Weekends (Sat & Sun)",
    time: "10:45 AM – 12:00 PM",
    className: "Kathak & Classical Footwork",
    category: "Classical",
    level: "Foundational & Intermediate",
    instructor: "Shalini Dixit",
    status: "Filling Fast",
    studioRoom: "Studio A (Nataraja Hall)",
  },
  {
    id: "s6",
    day: "Weekends (Sat & Sun)",
    time: "4:00 PM – 5:30 PM",
    className: "Weekend Adult Bollywood & Folk",
    category: "Contemporary",
    level: "Recreational & Fitness",
    instructor: "Rajesh Rawat",
    status: "Few Seats Left",
    studioRoom: "Studio B (Rhythm Lounge)",
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "f1",
    name: "Vidushi Meenakshi Sharma",
    role: "Founder & Artistic Director",
    specialty: "Bharatanatyam & Natya Shastra",
    experience: "22+ Years",
    bio: "Trained under legendary stalwarts of the Kalakshetra tradition, Vidushi Meenakshi has performed across 14 countries. She founded Shiv Shakti Academy to nurture the divine essence of classical dance with authentic rigor and maternal care.",
    lineage: "Kalakshetra Style Linage & Gandharva Mahavidyalaya",
    image: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "f2",
    name: "Rajesh Rawat",
    role: "Senior Choreographer",
    specialty: "Bollywood, Semi-Classical & Contemporary",
    experience: "14+ Years",
    bio: "A renowned performer and stage director in New Delhi, Rajesh brings electrifying energy and precision to cinematic dance. His choreography seamlessly weaves classical hand gestures with modern cinematic musicality.",
    lineage: "Sangeet Natak Akademi Certified Choreographer",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "f3",
    name: "Shalini Dixit",
    role: "Kathak Master Instructor",
    specialty: "Kathak (Jaipur & Lucknow Gharana)",
    experience: "12+ Years",
    bio: "Specializing in lightning-fast Tatkar footwork, lyrical Abhinaya, and complex rhythmic mathematics (Layakari), Shalini guides students through the rich traditions of North Indian classical dance.",
    lineage: "Pracheen Kala Kendra Visharad",
    image: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "f4",
    name: "Priya Sengupta",
    role: "Head of Kids & Junior Pedagogy",
    specialty: "Early Childhood Movement & Folk Traditions",
    experience: "9+ Years",
    bio: "Priya combines patience, storytelling, and rhythmic games to make dance a joyful ritual for young children. Under her mentorship, shy children transform into confident stage performers.",
    lineage: "Diploma in Classical Arts & Child Psychology",
    image: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    src: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Alarippu Margam Recital",
    category: "stage",
    description: "Annual recital opening invocation at Kamani Auditorium, New Delhi.",
  },
  {
    id: "g2",
    src: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Semi-Classical Fusion Ensemble",
    category: "stage",
    description: "Ensemble performance celebrating spring with intricate mudras and synchronized footwork.",
  },
  {
    id: "g3",
    src: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Kids Stage Debut",
    category: "stage",
    description: "Our junior batch dancers making their delightful stage debut in full traditional costume.",
  },
  {
    id: "g4",
    src: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Kathak Pirouette (Chakar)",
    category: "rehearsal",
    description: "Studio practice capturing the graceful momentum of a continuous 27-chakar series.",
  },
  {
    id: "g5",
    src: "https://images.pexels.com/photos/31880387/pexels-photo-31880387.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Arangetram Solo Repertoire",
    category: "arangetram",
    description: "Senior student Ananya completing her 2-hour solo debut performance with live Carnatic orchestra.",
  },
  {
    id: "g6",
    src: "https://images.pexels.com/photos/7872076/pexels-photo-7872076.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Hastha Mudra Expressions",
    category: "mudras",
    description: "A close study of Pataka, Tripataka, and Mayura mudras during advanced Abhinaya masterclass.",
  },
];

export const PROGRESSION_STEPS: ProgressionStep[] = [
  {
    step: "01",
    title: "Aramandi & Adavu Foundations",
    duration: "Months 1 – 6",
    description: "Developing the fundamental demi-plié posture (Aramandi), body geometry, eye-hand alignment, and the first 5 series of adavus.",
    milestone: "Certificate in Foundational Adavu series",
  },
  {
    step: "02",
    title: "Taal, Jathis & Rhythm Mastery",
    duration: "Months 7 – 18",
    description: "Mastering complex rhythmic patterns (Tisra, Chatusra, Khanda), reciting Solkattu with cymbals, and introduction to Hastha Mudra viniyogas.",
    milestone: "Level 1 Classical Examination",
  },
  {
    step: "03",
    title: "Abhinaya & Full Margam Items",
    duration: "Years 2 – 4",
    description: "Immersion into expressive storytelling (Navarasas), learning Alarippu, Jatiswaram, Shabdam, and the centerpiece Varnam.",
    milestone: "Auditorium Stage Recital",
  },
  {
    step: "04",
    title: "Arangetram & Professional Artistry",
    duration: "Years 5+",
    description: "Complete mastery of the full Margam, performance with live Carnatic orchestra, and graduation into an accomplished solo classical dancer.",
    milestone: "Solo Arangetram Debut & Senior Diploma",
  },
];

export const COMPARISON_DATA = [
  {
    feature: "Instructor Pedagogy",
    academy: "Certified Gurus with 12–22 yrs performance lineage",
    casual: "Casual hobbyists or rotating trainers",
  },
  {
    feature: "Batch Size",
    academy: "Capped at 10–12 dancers for individualized correction",
    casual: "25–35 people crowded together",
  },
  {
    feature: "Curriculum Structure",
    academy: "Systematic graded progression based on Natya Shastra",
    casual: "Random choreography without technical fundamentals",
  },
  {
    feature: "Live Stage Opportunities",
    academy: "Annual auditorium recitals with professional lighting & sound",
    casual: "Rare or studio-only showcases",
  },
  {
    feature: "Certification & Exams",
    academy: "Recognized classical board examination preparation",
    casual: "No formal credentialing",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need prior dance experience to join?",
    answer:
      "Not at all! We offer dedicated beginner batches for adults, teens, and children where we start from basic body posture, rhythm exercises, and warm-ups.",
  },
  {
    question: "What is the recommended age for kids to start classical dance?",
    answer:
      "We recommend starting our Kids Dance Foundations program from age 5. At this age, children develop flexibility, rhythm, and love for music. Formal classical Bharatanatyam or Kathak begins around age 6–7.",
  },
  {
    question: "Can working adults join evening or weekend batches?",
    answer:
      "Yes! More than 40% of our students are working professionals, college students, and homemakers. We have evening batches (7:15 PM) and weekend morning & afternoon batches tailored specifically for adults.",
  },
  {
    question: "What should I wear for my first trial class?",
    answer:
      "Wear comfortable cotton workout clothing, leggings, or a kurta that allows free movement. Ghungroos and traditional practice sarees are introduced later once you join regular classes.",
  },
  {
    question: "Where is the studio located and how can I reach by Delhi Metro?",
    answer:
      "Our studio is located at C-Block, Greater Kailash Part I, South Delhi. The nearest metro stations are Kailash Colony (Violet Line) and Greater Kailash (Magenta Line), both just 5–7 minutes away by auto or cab.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sunita Mehra",
    role: "Mother of Classical Student (Age 11)",
    quote:
      "My daughter found grace, discipline and real joy here. Guru ji's teaching is unmatched in New Delhi. The patience and depth of knowledge transformed her confidence completely.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "t2",
    name: "Rohit Verma",
    role: "Adult Batch Student (Semi-Classical)",
    quote:
      "As an adult beginner, I was nervous, but the faculty was exceptionally warm and encouraging. The Bollywood & Semi-classical sessions are the highlight of my week!",
    rating: 5,
    avatar: "RV",
  },
  {
    id: "t3",
    name: "Ananya Joshi",
    role: "Senior Dancer & Arangetram Graduate",
    quote:
      "Completing my Arangetram under Guru ji's guidance was a lifelong milestone. The academy is truly a sacred space where tradition meets vibrant community.",
    rating: 5,
    avatar: "AJ",
  },
];

export const WHY_US_ITEMS = [
  {
    id: "w1",
    title: "12+ Years of Heritage",
    description: "Dedicated to preserving and propagating classical and contemporary arts with authenticity.",
    iconName: "Award",
  },
  {
    id: "w2",
    title: "Certified Lineage Instructors",
    description: "Learn directly under senior gurus with decades of performance and teaching excellence.",
    iconName: "GraduationCap",
  },
  {
    id: "w3",
    title: "Small Batch Mentorship",
    description: "Strict student-to-teacher ratios to ensure personalized correction of posture and mudras.",
    iconName: "Users",
  },
  {
    id: "w4",
    title: "Stage & Festival Opportunities",
    description: "Annual auditorium productions, national cultural festivals, and TV showcases.",
    iconName: "Sparkles",
  },
  {
    id: "w5",
    title: "Holistic Mind-Body Discipline",
    description: "Beyond just steps: we integrate yogic breathing, rhythm theory (Taal), and storytelling.",
    iconName: "HeartHandshake",
  },
];

export const STATS = [
  { value: "12+", label: "Years of Heritage" },
  { value: "500+", label: "Graduated Dancers" },
  { value: "4", label: "Specialized Styles" },
  { value: "100%", label: "Live Stage Exposure" },
];
