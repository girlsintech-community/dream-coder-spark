import { Folder, Github, ExternalLink, Search, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "Aarohi Chadha", college: "IGDTUW", github: "https://github.com/aarohichadha/focus-dock-aid.git", live: "https://focus-dock-aid.lovable.app" },
  { name: "Aarushi Singh", college: "Galgotia College of Engineering Technology", github: "https://github.com/The-AarushiSingh/timetravelmachine", live: "https://timetravelmachine.lovable.app/" },
  { name: "Aashna Aashna", college: "ABV-IIITM", github: "https://github.com/aaa-aashna/attendance-dashboard", live: "https://attendance-panic-pal.lovable.app/" },
  { name: "Aditi Chourasia", college: "MIT Kota", github: "https://github.com/Aditi777613/santa-is-judging-you", live: "https://santa-is-judging-you.vercel.app/" },
  { name: "Aditi Sharma", college: "Dr. AIT Bangalore", github: "https://github.com/adisha21/vibe-meme-express", live: "https://vibe-meme-express.lovable.app/" },
  { name: "Akhila Sunesh", college: "SCE Kottayam", github: "https://github.com/AkhilaSunesh/Soap-Sense", live: "https://soap-ijjagzpud-akhilas-projects-29c1a6ab.vercel.app/" },
  { name: "Aleena Harold Peter", college: "Gopalan College Bangalore", github: "https://github.com/aleenaharoldpeter/404_Brain_Not_Found_PROJECT_CODEGEN_2025", live: "https://aleenaharoldpeter.github.io/404_Brain_Not_Found_PROJECT_CODEGEN_2025/" },
  { name: "Ananyaa", college: "JUIT Solan", github: "https://github.com/ananyaa0518/exact-screenshot", live: "https://exact-screenshot-nine.vercel.app/" },
  { name: "Angela Bera", college: "RCC Institute of Information Technology", github: "https://github.com/angelabera/SoloSphere", live: "https://solo-sphere-alpha.vercel.app/" },
  { name: "Anshika Singh", college: "GGSIPU Delhi", github: "https://github.com/Anshika09Singh/NeuroFit", live: "https://neurofit-1f.onrender.com/" },
  { name: "Anushka Maity", college: "IEM Kolkata", github: "https://github.com/Anushka-2809/Who-Owes-Me", live: "https://who-owes-me.vercel.app/" },
  { name: "Anushka Sharma", college: "CGC Landran Punjab", github: null, live: "https://style-insight-lens.lovable.app" },
  { name: "Aparna Jha", college: "IIT Madras", github: "https://github.com/Aparna-Jha05/Code-for-Christmas-", live: "https://url-shortener-backend-jb9h.onrender.com/QyylDXuT8" },
  { name: "Archana S", college: "BGS College Bengaluru", github: "https://github.com/Archanagowda05/simp-toms-scanner.git", live: "https://simp-toms-scanner.lovable.app/" },
  { name: "Archita Agrawal", college: "NIT Hamirpur", github: "https://github.com/ArchitaAgrawal912/vibe-breaker", live: "https://smash-and-chill.lovable.app/" },
  { name: "Ayushi Srivastava", college: "United University Prayagraj", github: "https://github.com/ayushi826/Weather-App-using-Javascript", live: "https://github.com/ayushi826/Weather-App-using-Javascript" },
  { name: "Bharti Kumari", college: "CUSAT Kochi", github: "https://github.com/Bhartix07/things-my-brain-does-at-2am", live: "https://bhartix07.github.io/things-my-brain-does-at-2am/" },
  { name: "Boomika Nallasivam", college: "SSCET Salem", github: "https://github.com/boomika-nallasivam/Waste-O-Meter", live: "https://waste-o-meter.vercel.app/" },
  { name: "Chanchal", college: "Geeta University Panipat", github: "https://github.com/web174/Anywhere-Door.git", live: "https://github.com/web174/Anywhere-Door" },
  { name: "Chandani", college: "IGNOU", github: "https://github.com/Chandani-coder/The-Dream", live: "https://id-preview--eca6c18a-c0c6-4cf8-a557-b3568b5b193a.lovable.app/" },
  { name: "Deepa J", college: "Sri Shanmugha College", github: "https://github.com/amudhan1216-tech/Lovable-Project.git", live: "https://lovable-project-lilac.vercel.app/" },
  { name: "Devananda R", college: "MITS Varikoli", github: "https://github.com/Devananda771/fun_monkey.git", live: "https://id-preview--0cb10d5b-f79f-4979-bdaf-581856ebbd27.lovable.app/" },
  { name: "Diya Satish Kumar", college: "SVNIT Surat", github: "https://github.com/DiyaMenon/Litter-Ballista", live: "https://github.com/DiyaMenon/Litter-Ballista" },
  { name: "Dyuti Haranee L", college: "BGS College Bengaluru", github: "https://github.com/Dyuti2005/Ego_Crusher", live: "https://react-spa--dyutiiii.replit.app" },
  { name: "Gopika Chauhan", college: "IIT Mandi", github: "https://github.com/Cephei18/neurolog", live: "https://neurolog-two.vercel.app/" },
  { name: "Gujjula Vyshnavi", college: "SIMATS Chennai", github: "https://github.com/YOUR_USERNAME/code-at-christmas-weird-project", live: "https://YOUR_USERNAME.github.io/code-at-christmas-weird-project/" },
  { name: "Hirva Jobanputra", college: "Darshan Institute", github: "https://github.com/HirvaJobanputra/roastytoasty.git", live: "https://roasty-toasty--hirj28.replit.app" },
  { name: "Honey Priya", college: "BIT Mesra Ranchi", github: "https://github.com/Honey22205/Delhi_Vibes", live: "https://ai.studio/apps/drive/1xWOuIRX_HRlR6wubHQgTmaJVdvJQ8gIb" },
  { name: "Hoor Mala", college: "GNITS Hyderabad", github: "https://github.com/HoormalaArshad/ho-ho-no", live: "https://hoormalaarshad.github.io/ho-ho-no/" },
  { name: "Husna Fathima", college: "MNM Government HSS", github: "https://github.com/husnanasar2007-byte/this-does-nothing.git", live: "https://husnanasar2007-byte.github.io/this-does-nothing/" },
  { name: "Indu Mathi", college: "St.Joseph College Chennai", github: "https://github.com/indum-29/cursed-christmas-chaos.git", live: "https://cursed-christmas-chaos.lovable.app" },
  { name: "Ipshita Bhardwaj", college: "CGC Landran Punjab", github: "https://github.com/ipshitabhardwaj/emotions-translator", live: "https://emotiontranslator.vercel.app/" },
  { name: "Iqra Sayed", college: "APSIT Thane", github: "https://github.com/IqraS-gif/memory-galaxy-canvas", live: "https://memory-galaxy-canvas.lovable.app/" },
  { name: "Ishita Mohapatra", college: "TCET Mumbai", github: "https://github.com/IshitaaMohapatraa/proof-of-procrastination", live: "https://dopamine-decay-drive.lovable.app/" },
  { name: "Ishita Singh", college: "APSIT Thane", github: "https://github.com/IshhS/SideEye", live: "https://side-eye-beta.vercel.app" },
  { name: "Janhavi Dubey", college: "IIT Madras", github: "https://github.com/buildwithjanhavi/SnapStation", live: "https://glittery-cactus-329f47.netlify.app/" },
  { name: "Jidnyasa Patil", college: "MMCOE Pune", github: "https://github.com/Jidnyasa-P/Receipt-to-reality", live: "https://ai.studio/apps/drive/1yKeghIiO-JXJcCLqNTzubrQIBKnXjdJY?fullscreenApplet=true" },
  { name: "Kadali Swarna Latha", college: "Aditya University", github: "https://github.com/Kadaliswarna/chirstmas-hackathon", live: "https://coruscating-concha-7f3a11.netlify.app/" },
  { name: "Kalla Sahithi", college: "SVECW", github: "https://github.com/Sahithi-0506/Useless-App", live: "https://app.netlify.com/projects/sparkly-taiyaki-f07dc3/deploys/694bc5b16132646b4a98fa49" },
  { name: "Kasmya Bhatia", college: "Manipal University Jaipur", github: "https://github.com/kasmya/k-tone-palette-pal-main", live: "https://k-tone-palette-pal-main.vercel.app" },
  { name: "Khushi Ojha", college: "AIT Bangalore", github: null, live: "https://santas-hearthside-chats-ec804ce2.base44.app/" },
  { name: "Kotha Kapu Harini Reddy", college: "GNITS Hyderabad", github: "https://github.com/HariniReddy-KothaKapu/procrastination-shrine-hackathon", live: "https://procrastination-shri-yau2.bolt.host/" },
  { name: "Kummetha Nikhila", college: "Sastra University", github: "https://github.com/NikhilaKummetha/overthinking-button/tree/main", live: "https://nikhilakummetha.github.io/overthinking-button/" },
  { name: "Kunj Bhasin", college: "GLA University", github: "https://github.com/kunj-16/EntropyChamber", live: "https://entropy-chamber.vercel.app/" },
  { name: "Kyreen Bhatia", college: "Shiv Nadar School Gurgaon", github: "https://github.com/kyreenbhatia/Purrsona-Campanion-Chatbot", live: "https://purrsona-cat-companion.vercel.app" },
  { name: "Lavanya P S", college: "MNMJEC Chennai", github: "https://github.com/Lavender-princess-77/SANTA-S-USELESS-WORKSHOP", live: "https://santa-useless-workshop.lovable.app" },
  { name: "M Indhuja", college: "GCT Coimbatore", github: "https://github.com/Indhuja12z/Irresponsible-Fellow-Lovable", live: "https://irresponsible-fellow.lovable.app/" },
  { name: "Madabattula Tejo Hasini", college: "Aditya University", github: "https://github.com/Hasini2706/motivation_killer", live: "https://motivation-killer--mtejohasini.replit.app/" },
  { name: "Maithili Pandey", college: "PVPPCE Mumbai", github: "https://github.com/maithilipandey/doing-nothing", live: "https://projectcac.vercel.app/" },
  { name: "Manashaa Umapathy", college: "St Joseph's IT OMR", github: "https://github.com/ManashaaU/meme-mask/tree/main", live: "https://meme-masker--manashaaumapath.replit.app" },
  { name: "Megha Vashisht", college: "Sharda University", github: "https://github.com/Megha2626/Burn-It", live: "https://burn-g5p8tjjx8-meghas-projects-ac69babb.vercel.app" },
  { name: "Mudita Pandey", college: "Techno India University", github: "https://github.com/Muditapandey26/Code-at-Christmas-", live: "https://muditapandey26.github.io/Code-at-Christmas-/" },
  { name: "Nandani Pandey", college: "KNIT Sultanpur", github: "https://github.com/nandani555/CSSential", live: "https://cssentialss.netlify.app/" },
  { name: "Oduri Bheemeswari", college: "Aditya University", github: "https://github.com/Bheemeswari497/Christmas_hackthon", live: "https://harmonious-faun-537b0f.netlify.app/" },
  { name: "Papia Karmakar", college: "UEM Kolkata", github: "https://github.com/Papia-tech/Draw-and-Suffer", live: "https://papia-tech.github.io/Draw-and-Suffer/" },
  { name: "Parnika", college: "Chitkara University Punjab", github: "https://github.com/Parnika1804/meowrry-christmas.git", live: "https://meow-merry-mischief.lovable.app" },
  { name: "Payal Gupta", college: "MSIT New Delhi", github: "https://github.com/payalgupta25/Code-at-Christmas", live: "https://codeatchristmas-ha40vopty-payalgupta425-5450s-projects.vercel.app" },
  { name: "Peehu Mishra", college: "Bennett University", github: "https://github.com/Peehu1308/Christmas", live: "https://christmas-flax-iota.vercel.app/" },
  { name: "Prachi Kadam", college: "SSPMCOE Sindhudurg", github: "https://github.com/prachisuresh25/Chicken-Clicker", live: "https://prachisuresh25.github.io/Chicken-Clicker/" },
  { name: "Pragya Pratap", college: "KNIT Sultanpur", github: "https://github.com/pratapji2104-cpu/Love-Calculator", live: "https://lovec1lculator.netlify.app/" },
  { name: "Prashansa Bhatia", college: "VJTI Mumbai", github: "https://github.com/prashu0705/thought-weaver", live: "https://thought-spiral-studio.lovable.app" },
  { name: "Preksha Barjatya", college: "Acropolis Indore", github: "https://github.com/Prekshabarjatya/agneticos", live: "https://agneticos.lovable.app/" },
  { name: "Princess Jain", college: "APSIT Thane", github: "https://github.com/princessjainn/happy-heist-helper.git", live: "https://happy-heist-helper.lovable.app/" },
  { name: "Priya Chaurasia", college: "USAR Delhi", github: "https://github.com/NoticeableStar/completely-wrong-dob-guesser", live: "https://id-preview--e29c848c-1e53-4c15-b6b7-af0527424449.lovable.app/" },
  { name: "Ramyashree Shetty", college: "Radix Name Registry", github: "https://github.com/ramyashreeshetty/ramyashree", live: "https://ramyashree.lovable.app" },
  { name: "Reddypally Niveditha", college: "VNR VJIET", github: "https://github.com/Niveditha2931/soft-reset-hug.git", live: "https://soft-reset-hug.lovable.app" },
  { name: "Ria Saraswat", college: "IGDTUW Delhi", github: "https://github.com/Dare-TechieZ/Cozy-Code-Companion", live: "https://code-cozy-companion.lovable.app" },
  { name: "Rishika Lawankar", college: "VPM Polytechnic Thane", github: "https://github.com/Rishika-1212/London_Lights_.git", live: "https://londonlights.vercel.app/" },
  { name: "Rishima", college: "GNDU Amritsar", github: "https://github.com/rishima17/LecturePulse.git", live: "https://lecturepulse.vercel.app/" },
  { name: "Ritika Pankar", college: "Medicaps University", github: "https://github.com/Ritikapankar/Ai-Predicator", live: "https://ritikapankar.github.io/Ai-Predicator" },
  { name: "Rutuja Chopdekar", college: "LTCE Navi Mumbai", github: "https://github.com/rutujachopdekar/nekonaach", live: "https://nekonaach.lovable.app/" },
  { name: "Sai Naga Sujitha Nakka", college: "SVECW", github: "https://github.com/Sujitha572007/outofstock-life-edition", live: "https://papaya-cuchufli-754686.netlify.app/" },
  { name: "Sania Khanna", college: "Punjabi University Patiala", github: "https://github.com/saniakhanna8-ai/socksaver-9aea0178.git", live: "https://lovable.dev/projects/ff06abbc-5bda-405e-bf42-a22ebfaaa8d1" },
  { name: "Seelam Sai Sindhusha", college: "SVECW", github: "https://github.com/sindhusha2005/Moodji-The-Absurd-Mood-Translator", live: "https://github.com/sindhusha2005/Moodji-The-Absurd-Mood-Translator" },
  { name: "Sharanya Vinod Pillai", college: "SIES GST Navi Mumbai", github: "https://github.com/sharanyaa23/Chaos", live: "https://chaos-j1r0.onrender.com/" },
  { name: "Shravani Mahendra Dhuri", college: "KJSIT Mumbai", github: "https://github.com/Shravanidhuri/SantaForShe", live: "https://santaforshe.netlify.app/" },
  { name: "Shravani Vijay Kasurde", college: "TCET Mumbai", github: "https://github.com/Shravani1016/chocoquiz", live: "https://chocoquiz.lovable.app" },
  { name: "Shruti Riya", college: "Dr APJAK Women's IT Darbhanga", github: "https://github.com/Shrutir09/Snow-Flake-Planner", live: "https://cozy-snow-tasks.lovable.app/" },
  { name: "Siddhi Suhasrao Nagapure", college: "PICT Pune", github: "https://github.com/Siddhi419/vibe-fail", live: "https://vibe-code-the-christmas-siddhi.lovable.app" },
  { name: "Sneha Pandit", college: "Alipurduar GEMC", github: "https://snehapandit-book.github.io/santa-overload/", live: "https://santa-overload--snehapanditarca.replit.app/" },
  { name: "Sneha Sonkar", college: "St. Xavier's College Kolkata", github: "https://github.com/Sneha-Sonkar/elf-emotion-tracker.git", live: "https://sneha-sonkar.github.io/elf-emotion-tracker/" },
  { name: "Somya Gupta", college: "Gargi College Delhi University", github: "https://github.com/ogcode443/Code-at-Christmas---SG", live: "https://id-preview--c8c2f2c0-a373-4c1e-aac2-9ef6641f855c.lovable.app/" },
  { name: "Sreeja Das", college: "SRMIST Delhi/NCR", github: "https://github.com/sparrowdex/merry-christmas", live: "https://merry-christmas-psi-navy.vercel.app/" },
  { name: "Stuti Tiwari", college: "Dhirendra Mahila Mahavidyalaya", github: "https://github.com/stutitiwari23/civic-connect-hub", live: "https://id-preview--fa5f34f0-ecbb-41db-8563-ef6c907ebf84.lovable.app/" },
  { name: "Sudipta Mitra", college: "NSHMKC Kolkata", github: null, live: null },
  { name: "Suha Zahir", college: "AIT Bengaluru", github: "https://github.com/suha-og/focusn-t-the-vibe-room", live: "https://focusn-t.lovable.app" },
  { name: "Swati Singh", college: "IGDTUW Delhi", github: "https://github.com/Swatiiisinghh/betweentheelines.git", live: "https://betweentheelines-k5c7.vercel.app/" },
  { name: "Swikriti Singh", college: "IGDTUW Delhi", github: "https://github.com/singhswikriti1/AgonyAunt-", live: "https://lovable.dev/projects/07563dd4-e6b4-4ff3-9e81-c3b4f2e04a6e" },
  { name: "Unnisha Sen", college: "DHSGU Sagar", github: "https://github.com/Unnisha2006/Network-stimulation-", live: "https://6000-firebase-studio-1766564587244.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/" },
  { name: "Usha Kiran", college: "OUTR Bhubaneswar", github: "https://github.com/k-usha07/VibeCheck-2026", live: "https://vibecheck-2026.streamlit.app/" },
  { name: "Vaishnavi S", college: "VIT Bengaluru", github: "https://github.com/VaishnaviS249/procrastination-companion", live: "https://procrastination-compa-git-d5ecab-vaishnavi-ss-projects-10671d30.vercel.app/" },
  { name: "Valentin Niccola A", college: "SNSCT Coimbatore", github: "https://github.com/valentinniccola/procrastination-claus", live: "https://valentinniccola.github.io/procrastination-claus/" },
  { name: "Vedhapprakashni M", college: "SRM Ramapuram Chennai", github: "https://github.com/vedhapprakashni/Roastrology.git", live: "https://roastrology.lovable.app/" },
  { name: "Vishwanatha Sri Sai Kiranmai", college: "VNR VJIET", github: "https://github.com/kiranmai2005/memoryMap.git", live: "https://personal-memory-map-eawi.bolt.host" },
  { name: "Yashi Gupta", college: "Rishihood University", github: "https://github.com/yashiigupta/toxic-christmas/", live: "https://toxic-christmas.onrender.com/" },
  { name: "Yashika Bansal", college: "IGDTUW Delhi", github: "https://github.com/Yashikabansal23/dsa-encore", live: "https://dsa-again-roast.lovable.app/" },
  { name: "Yogita Jha", college: "SRMIST Chennai", github: "https://github.com/yogita005/adulting-is-hard/", live: "https://adulting-is-hard.lovable.app/" },
  { name: "Manju Bharati Mahto", college: "Parul University Vadodara", github: "https://github.com/Manju-Bharati-Mahto/Mood-Wing", live: "https://mood-wing.lovable.app/auth" },
  { name: "Kriti Kumari", college: "IIT Roorkee", github: "https://github.com/kriti1730-30/honest-thought-forms/blob/main/README.md", live: "https://honest-thought-forms.lovable.app" },
  { name: "Lithika Murugesan", college: "SSCET Salem", github: "https://github.com/LithikaMurugesan/whimsical-calculator.git", live: "https://whimsical-swart.vercel.app/" },
  { name: "Varshaa S", college: "RMKEC Chennai", github: "https://github.com/Varshaa-Selva/my-little-brain-dump/tree/main", live: "https://id-preview--f3b27964-b9b8-49ed-852d-fa02101d6a53.lovable.app/" },
  { name: "Ishwari Kenchi", college: "NIAT", github: "https://github.com/Ishwari-Kenchi/Merry-quitmas.git", live: "https://bot-haven-07115084.figma.site/" },
  { name: "Apeksha M", college: "BIT Bangalore", github: "https://github.com/Apeksha-296/moo-tivational-cow", live: "https://id-preview--2bccc3f5-acbf-49ab-9a1a-07c92d3c5f48.lovable.app/" },
  { name: "Kavinaya P", college: "GCE Dharmapuri", github: "https://github.com/KavinayaP/overthink-it", live: "https://overthink-it.vercel.app/" },
  { name: "Srestha Srivastava", college: "SRMIST Chennai", github: "https://github.com/SresthaSrivastava/TalkingVeggies", live: "https://sresthasrivastava.github.io/TalkingVeggies/" },
  { name: "Nandika Gupta", college: "PESU Bengaluru", github: "https://github.com/Nandika-Gupta/Wake_Up_Sid", live: "https://wake-up-sid.vercel.app/" },
];

// Extract project title from GitHub URL or Live URL
const extractProjectTitle = (project: typeof projects[0]): string => {
  // Try to extract from GitHub URL first
  if (project.github) {
    const match = project.github.match(/github\.com\/[^/]+\/([^/.]+)/);
    if (match) {
      return formatTitle(match[1]);
    }
  }
  
  // Try to extract from live URL
  if (project.live) {
    // Handle lovable.app URLs
    const lovableMatch = project.live.match(/([^/.]+)\.lovable\.app/);
    if (lovableMatch) {
      return formatTitle(lovableMatch[1]);
    }
    
    // Handle vercel.app URLs
    const vercelMatch = project.live.match(/([^/.]+)\.vercel\.app/);
    if (vercelMatch) {
      return formatTitle(vercelMatch[1]);
    }
    
    // Handle github.io URLs
    const githubIoMatch = project.live.match(/github\.io\/([^/]+)/);
    if (githubIoMatch) {
      return formatTitle(githubIoMatch[1]);
    }
    
    // Handle replit.app URLs
    const replitMatch = project.live.match(/([^/.-]+)--/);
    if (replitMatch) {
      return formatTitle(replitMatch[1]);
    }
    
    // Handle netlify.app URLs
    const netlifyMatch = project.live.match(/([^/.]+)\.netlify\.app/);
    if (netlifyMatch) {
      return formatTitle(netlifyMatch[1]);
    }
  }
  
  return "Project";
};

// Format title from slug
const formatTitle = (slug: string): string => {
  return slug
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const INITIAL_DISPLAY_COUNT = 12;

const ProjectsGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(query) ||
        project.college.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const displayedProjects = useMemo(() => {
    if (showAll || searchQuery.trim()) return filteredProjects;
    return filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);
  }, [filteredProjects, showAll, searchQuery]);

  const hasMore = filteredProjects.length > INITIAL_DISPLAY_COUNT && !showAll && !searchQuery.trim();

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
            <Folder className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">
              {projects.length} Projects Submitted
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projects <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore all the amazing projects built by our hackers during Code at
            Christmas
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or college..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedProjects.map((project, index) => {
            const projectTitle = extractProjectTitle(project);
            return (
              <div
                key={`${project.name}-${index}`}
                className={`glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300 hover:border-secondary/50 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${100 + (index % 20) * 30}ms` }}
              >
                <h3 className="font-semibold text-sm text-center mb-2 line-clamp-2 min-h-[2.5rem]">
                  {projectTitle}
                </h3>
                <p className="text-xs text-muted-foreground text-center mb-1">
                  Built by <span className="text-foreground font-medium">{project.name}</span>
                </p>
                <p className="text-xs text-muted-foreground text-center mb-3">
                  from {project.college}
                </p>

                <div className="flex justify-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                      title="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-muted-foreground hover:text-secondary hover:bg-secondary/20 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="group"
            >
              Show All {filteredProjects.length} Projects
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
