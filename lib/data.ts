import { Heart, Bone, Baby, FlaskConical, Siren, Stethoscope } from "lucide-react"

export const departments = [
  {
    id: "Orthopaedics",
    name: "Orthopaedics",
    icon: Heart,
    shortDescription: "Joint replacements, spine surgery, sports medicine, and trauma care.",
    fullDescription:
      "The Orthopaedics department at SS Hospital specializes in treating musculoskeletal conditions using minimally invasive techniques and advanced surgical procedures. Our team handles everything from fractures to complex joint replacements.",
    services: [
      "Total Knee & Hip Replacement",
      "Arthroscopic Surgery",
      "Spine Surgery",
      "Sports Injury Treatment",
      "Fracture Management",
      "Physiotherapy & Rehabilitation",
    ],
    leadDoctor: { name: "Dr. V. Sreenivasa Gowda", slug: "V. Sreenivasa Gowda" },
    image: "/ortho.jpg",
  },
  {
    id: "Anaesthesiologist",
    name: "Anaesthesiologist",
    icon: Heart,
    shortDescription: "Anaesthesia Care, Perioperative Anaesthesia, Critical Anaesthesia Support",
    fullDescription:
      "Comprehensive anaesthesia support before, during, and after surgery, focusing on patient safety, pain control, and recovery monitoring.",
    services: [
      "Safe Anaesthesia for All Surgeries",
      "Spinal & Regional Anaesthesia",
      "Pain Management",
      "Emergency Anaesthesia Care",
      "Post-Surgery Monitoring"
  
    ],
    leadDoctor: { name: "Dr. L.Vinutha Sreenivasan", slug: "Dr. L.Vinutha Sreenivasan" },
    image: "/anaesthi.jpg",
  },
  {
    id: "Ortho",
    name: "Orthopaedic",
    icon: Baby,
    shortDescription: "Consultant Orthopaedic Surgen",
    fullDescription:
      "Our Maternity department provides compassionate care for mothers and newborns. From prenatal checkups to delivery and postnatal support, we ensure a safe and comfortable experience for every family.",
    services: [
      "Spine Surgery",
      "Fracture Management",
      "Physiotherapy & Rehabilitation",
    ],
    leadDoctor: { name: "Dr. Madhusudhan", slug: "Dr. Madhusudhan" },
    image: "/orthocare.jpg",
  },
  {
    id: "Plastic ",
    name: "Plastic Surgery",
    icon: FlaskConical,
    shortDescription:"Our Plastic Surgery department offers advanced reconstructive and aesthetic procedures using modern surgical techniques. We focus on restoring form and function while ensuring patient safety, precision, and natural-looking outcomes.",
    
  services: [
      "Reconstructive Surgery",
      "Trauma & Injury Reconstruction",
      "Skin & Soft Tissue Surgery",
      "Post-Surgical Reconstruction",
      "Corrective Plastic Surgery",
    
    ],
    leadDoctor: { name: "Dr. Charave Sachin Uttam", slug: "dr-Charave Sachin Uttam" },
    image: "/plastic.jpg",
  },
  {
    id: "surgery",
    name: "General Surgery",
    icon: Stethoscope,
    shortDescription: "Minimally invasive and open surgical procedures for various conditions.",
    fullDescription:
      "The General Surgery department performs a wide range of surgical procedures using both traditional and laparoscopic techniques. Our surgeons are experienced in handling complex cases with excellent outcomes.",
    services: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Surgery",
      "Thyroid Surgery",
      "Gastrointestinal Surgery",
    ],
    leadDoctor: { name: "Dr. Silambarasan", slug: "dr-Silambarasan" },
    image: "/navy-medicine-uSvk2w9sMVs-unsplash (1).jpg",
  },
  {
    id: "emergency",
    name: "Emergency Care",
    icon: Siren,
    shortDescription: "24/7 emergency services with rapid response and critical care.",
    fullDescription:
      "Our Emergency department operates round-the-clock with a dedicated team of emergency physicians, nurses, and support staff. We're equipped to handle all types of medical emergencies with speed and precision.",
    services: [
      "24/7 Emergency Response",
      "Trauma Care",
      "Critical Care Unit (ICU)",
      "Ambulance Services",
      "Emergency Surgery",
      "Poison & Overdose Management",
    ],
    leadDoctor: { name: "Dr. Sandeep A ", slug: "dr-Sandeep" },
    image: "/joint.jpg",
  },
]

export const doctors = [
  {
    id: "Dr. V. Sreenivasa Gowda",
    name: "Dr. V. Sreenivasa Gowda",
    qualification: "M.B.B.S, D. Ortho., DNB, MNAMS, MCH-Ortho",
    specialty: "Consultant Orthopaedic Surgen ",
    department: "Orthopaedic",
    experience: "25 years",
    bio: "Dr. V. Sreenivasa Gowda is a highly experienced Consultant Orthopaedic Surgeon specializing in joint replacement, trauma care, and complex orthopaedic procedures. With 25 years of experience, he is known for his clinical expertise, ethical practice, and patient-focused approach.",
    opDays: "Mon, Wed, Fri",
    opTime: "10:00 AM - 2:00 PM",
    languages: ["English", "Hindi", "Tamil", "Kannada"],
    image: "/srnivasan.png",
  },
  {
    id: "L.Vinutha Sreenivasan",
    name: "Dr. L.Vinutha Sreenivasan",
    qualification: "M.B.B.S, D.A",
    specialty: "Consultant Anaethesiologist",
    department: "Anaethesiology (Department)",
    experience: "15 years",
    bio:"Dr. L. Vinutha Sreenivasan is an experienced Consultant Anaesthesiologist with 15 years of expertise in providing safe anaesthesia and perioperative care. She specializes in anaesthesia for orthopaedic and surgical procedures and is known for her precision, patient safety, and calm clinical approach.",
    opDays: "Tue, Thu, Sat",
    opTime: "9:00 AM - 1:00 PM",
    languages: ["English", "Kannada", "Tamil"],
    image: "/vinutha.jpeg",
  },
  {
    id: "Dr. Madhusudhan",
    name: "Dr. Madhusudhan",
    qualification: "M.B.B.S., MS Ortho, Fellow Trauma",
    specialty: "Consultant Orthopaedic Surgen",
    department: "Ortho",
    experience: "5 years",
    bio:"Dr. Madhusudhan is a Consultant Orthopaedic Surgeon with 5 years of experience, specializing in trauma care and orthopaedic surgeries. He holds an MS in Orthopaedics and a Fellowship in Trauma, and is known for his focused clinical approach and patient-centered care.",
    opDays: "Mon - Sat",
    opTime: "11:00 AM - 3:00 PM",
    languages: ["English", "Tamil", "Telugu"],
    image: "/madhu.jpeg",
  },
  {
    id: "Dr. Charave Sachin Uttam",
    name: "Dr. Charave Sachin Uttam",
    qualification: "M.B.B.S., DNB., Plastic",
    specialty: "Plastic & Micro Surgen",
    department: "Plastic Surgery",
    experience: "15 years",
    bio: "Dr. Charave Sachin Uttam is an experienced Plastic & Micro Surgeon with 15 years of expertise in reconstructive and microsurgical procedures. He specializes in plastic and micro surgery, focusing on precision, functional restoration, and patient-centered care.",
    opDays: "Mon - Fri",
    opTime: "10:00 AM - 4:00 PM",
    languages: ["English","Hindi"],
    image: "/sachin.jpeg",
  },
  {
    id: "dr-Silambarasan",
    name: "Dr. Silambarasan",
    qualification: "M.B.B.S., MD, Fellow Laproscopy",
    specialty: "General & Laparoscopic Surgery",
    department: "surgery",
    experience: "15 years",
    bio: "Dr. Silmbarasan is a skilled general surgeon with extensive experience in laparoscopic and minimally invasive procedures. He is known for his surgical precision and quick recovery protocols.",
    opDays: "Mon, Wed, Fri",
    opTime: "2:00 PM - 6:00 PM",
    languages: ["English", "Telugu", "Kannada"],
    image: "/professional-indian-male-surgeon-doctor-portrait.jpg",
  },
  {
    id: "dr-anand-sharma",
    name: "Dr. Anand Sharma",
    qualification: "MD (Emergency Medicine)",
    specialty: "Emergency & Critical Care",
    department: "emergency",
    experience: "10 years",
    bio: "Dr. Anand Sharma leads our emergency department with expertise in trauma care and critical interventions. His quick decision-making and calm demeanor have saved countless lives.",
    opDays: "24/7 On-call",
    opTime: "Emergency Services",
    languages: ["English", "Hindi", "Tamil"],
    image: "/professional-indian-male-emergency-medicine-doctor.jpg",
  },
]

export const caseStudies = [
  {
    id: "successful-knee-replacement",
    title: "Successful Complex Knee Replacement",
    patient: "Mr. R (65 years, Hosur)",
    department: "Orthopaedics",
    summary:
      "65-year-old with severe osteoarthritis underwent total knee replacement; discharged on day 5; regained mobility in 8 weeks.",
    challenge:
      "Patient had severe bilateral knee osteoarthritis with significant bone loss and was unable to walk without support for 2 years.",
    intervention:
      "Performed computer-navigated total knee replacement with specialized implants designed for complex bone defects.",
    outcome:
      "Patient discharged on day 5, began walking with support on day 2, achieved full mobility within 8 weeks, and returned to normal activities.",
    doctor: "Dr. Venkatesh Murthy",
    image: "/knee-replacement-surgery-success.jpg",
  },
  {
    id: "cardiac-emergency-save",
    title: "Life-Saving Cardiac Intervention",
    patient: "Mrs. S (52 years, Krishnagiri)",
    department: "Cardiology",
    summary:
      "52-year-old with acute heart attack received emergency angioplasty within 45 minutes; full recovery achieved.",
    challenge:
      "Patient arrived with severe chest pain and ST-elevation myocardial infarction (STEMI), requiring immediate intervention.",
    intervention:
      "Emergency coronary angioplasty performed within 45 minutes of arrival, restoring blood flow to the blocked artery.",
    outcome:
      "Complete recovery with no heart muscle damage. Patient discharged in 4 days and returned to normal life within a month.",
    doctor: "Dr. Rajesh Kumar",
    image: "/cardiac-catheterization-lab.jpg",
  },
  {
    id: "high-risk-delivery",
    title: "High-Risk Twin Delivery Success",
    patient: "Mrs. P (34 years, Hosur)",
    department: "Maternity",
    summary:
      "High-risk twin pregnancy with gestational diabetes managed successfully; healthy twins delivered at 36 weeks.",
    challenge: "First-time mother with gestational diabetes carrying twins, one with intrauterine growth restriction.",
    intervention:
      "Close monitoring throughout pregnancy, controlled delivery via planned cesarean section at 36 weeks.",
    outcome:
      "Both healthy babies delivered weighing 2.4kg and 2.1kg. Mother and babies discharged in 5 days with excellent health.",
    doctor: "Dr. Lakshmi Devi",
    image: "/mertinity.jpg",
  },
]

export const blogPosts = [
  {
    id: "preparing-for-hospital-admission",
    title: "How to Prepare for Hospital Admission: A Short Checklist",
    excerpt:
      "Essential items and documents to bring for a smooth hospital stay. From medical records to personal comfort items.",
    category: "Patient Guide",
    date: "2024-11-15",
    readTime: "4 min read",
    image: "/hospital-admission-checklist.jpg",
  },
  {
    id: "signs-of-cardiac-emergency",
    title: "Signs of Cardiac Emergency: When to Visit the Hospital",
    excerpt:
      "Learn to recognize the warning signs of a heart attack. Early action saves lives - know when to seek emergency care.",
    category: "Health Tips",
    date: "2024-11-10",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "free-health-camp-report",
    title: "SS Hospital Free Health Camp — Community Outreach Report",
    excerpt:
      "Over 500 residents benefited from our recent free health screening camp. See how we're serving the Hosur community.",
    category: "Hospital News",
    date: "2024-11-05",
    readTime: "3 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "understanding-joint-replacement",
    title: "Understanding Joint Replacement: Recovery Tips",
    excerpt:
      "What to expect before, during, and after joint replacement surgery. Tips for faster recovery and better outcomes.",
    category: "Patient Education",
    date: "2024-10-28",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]
