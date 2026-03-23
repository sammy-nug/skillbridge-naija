const jobs = [
  // TECH SECTOR - ABUJA
  {
    title: 'Full-Stack Developer (Node.js/React)',
    description: 'Join a fast-growing Fintech startup in Wuse 2. You will be responsible for building scalable payment gateways and improving our user matching algorithms.',
    requiredSkills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' }
    ],
    location: 'Wuse 2',
    type: 'Hybrid',
  },
  {
    title: 'Data Analyst',
    description: 'We need a data enthusiast to help our FMCG client in Garki interpret sales trends across the FCT. Must be proficient in SQL and Power BI.',
    requiredSkills: [
      { name: 'SQL', level: 'Advanced' },
      { name: 'Power BI', level: 'Advanced' },
      { name: 'Excel', level: 'Advanced' }
    ],
    location: 'Garki',
    type: 'Onsite',
  },
  {
    title: 'UI/UX Product Designer',
    description: 'Design the next generation of logistics apps for our Maitama-based client. Focus on creating intuitive user journeys for both drivers and customers.',
    requiredSkills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'User Research', level: 'Intermediate' }
    ],
    location: 'Maitama',
    type: 'Remote',
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Protect our banking infrastructure from emerging threats. Experience with network security and ethical hacking is essential for our Central Business District office.',
    requiredSkills: [
      { name: 'Network Security', level: 'Advanced' },
      { name: 'Ethical Hacking', level: 'Intermediate' }
    ],
    location: 'Central Business District',
    type: 'Hybrid',
  },

  // TECH SECTOR - ABUJA (CONTINUED)
  {
    title: 'Cloud Solutions Architect',
    description: 'Help government agencies in Abuja migrate their legacy systems to AWS and Azure. Strong background in cloud security required.',
    requiredSkills: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'Cloud Security', level: 'Advanced' }
    ],
    location: 'Abuja',
    type: 'Hybrid',
  },
  {
    title: 'AI/ML Engineer',
    description: 'Develop predictive models for agricultural yields in the FCT region. Experience with Python and TensorFlow is a must.',
    requiredSkills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'TensorFlow', level: 'Intermediate' }
    ],
    location: 'Abuja',
    type: 'Remote',
  },

  // ARTISAN SECTOR - CONSTRUCTION & MAINTENANCE
  {
    title: 'Certified Industrial Plumber',
    description: 'Lead plumbing technician needed for a new high-rise project in Asokoro. Must have experience with industrial-grade piping and safety standards.',
    requiredSkills: [
      { name: 'Plumbing', level: 'Advanced' },
      { name: 'Blueprint Reading', level: 'Intermediate' }
    ],
    location: 'Asokoro',
    type: 'Onsite',
  },
  {
    title: 'Solar Panel Installation Specialist',
    description: 'Install and maintain solar energy systems for residential estates in Gwarinpa. Knowledge of battery storage systems is key.',
    requiredSkills: [
      { name: 'Solar Installation', level: 'Advanced' },
      { name: 'Electrical Wiring', level: 'Intermediate' }
    ],
    location: 'Gwarinpa',
    type: 'Onsite',
  },
  {
    title: 'Master Welder & Fabricator',
    description: 'Seeking a heavy-duty welder for infrastructure projects in the Idu Industrial Area.',
    requiredSkills: [
      { name: 'Welding', level: 'Advanced' },
      { name: 'Metal Fabrication', level: 'Advanced' }
    ],
    location: 'Idu',
    type: 'Onsite',
  },
  {
    title: 'Interior POP Decorator',
    description: 'Expert POP installer needed for luxury apartment finishing in Maitama. Attention to detail is non-negotiable.',
    requiredSkills: [
      { name: 'POP Installation', level: 'Advanced' },
      { name: 'Interior Design', level: 'Beginner' }
    ],
    location: 'Maitama',
    type: 'Onsite',
  },
  {
    title: 'Maintenance Electrician',
    description: 'Fixing industrial generators and solar inverters for a large facility in Jabi.',
    requiredSkills: [
      { name: 'Generator Repair', level: 'Advanced' },
      { name: 'Electrical Wiring', level: 'Intermediate' }
    ],
    location: 'Jabi',
    type: 'Onsite',
  },

  // CREATIVE & LIFESTYLE SECTOR
  {
    title: 'Senior Fashion Designer (Female Wear)',
    description: 'Join a leading fashion house in Wuse specializing in bespoke designs for diplomats and high-profile clients in Abuja.',
    requiredSkills: [
      { name: 'Tailoring', level: 'Advanced' },
      { name: 'Fashion Design', level: 'Advanced' },
      { name: 'Pattern Making', level: 'Intermediate' }
    ],
    location: 'Wuse',
    type: 'Onsite',
  },
  {
    title: 'Content Creator & Video Editor',
    description: 'Produce high-quality video content for our lifestyle brand based in Abuja. Proficiency in Premiere Pro or CapCut is needed.',
    requiredSkills: [
      { name: 'Video Editing', level: 'Advanced' },
      { name: 'Content Creation', level: 'Advanced' }
    ],
    location: 'Abuja',
    type: 'Remote',
  },
  {
    title: 'Professional Shoemaker/Leather Craftsman',
    description: 'Expertise in handmade leather shoes and bags production for a premium boutique in Garki.',
    requiredSkills: [
      { name: 'Leather Craft', level: 'Advanced' },
      { name: 'Shoe Making', level: 'Advanced' }
    ],
    location: 'Garki',
    type: 'Onsite',
  },

  // INFORMAL GIGS & OTHER
  {
    title: 'Mobile Phone & Laptop Repair Tech',
    description: 'Skilled technician needed at Banex Plaza to handle screen replacements and motherboard repairs.',
    requiredSkills: [
      { name: 'Phone Repair', level: 'Advanced' },
      { name: 'Computer Repair', level: 'Advanced' }
    ],
    location: 'Banex Plaza',
    type: 'Onsite',
  },
  {
    title: 'Automobile AC Specialist',
    description: 'Diagnose and fix air conditioning systems for modern vehicles at a busy workshop in Apo Mechanic Village.',
    requiredSkills: [
      { name: 'AC Repair', level: 'Advanced' },
      { name: 'Auto Repair', level: 'Intermediate' }
    ],
    location: 'Apo',
    type: 'Onsite',
  },
  {
    title: 'Hotel Front Office Manager',
    description: 'A boutique luxury hotel in Asokoro seeks an experienced Front Office Manager. Must have excellent communication skills and experience with hotel management software.',
    requiredSkills: [
      { name: 'Hotel Management', level: 'Advanced' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'Customer Service', level: 'Advanced' }
    ],
    location: 'Asokoro',
    type: 'Onsite',
  },
  {
    title: 'Delivery Rider (Logistics)',
    description: 'Fast-paced delivery company in Wuse 2 needs riders. Must have a valid bike license and good knowledge of Abuja routes.',
    requiredSkills: [
      { name: 'Motorcycle Riding', level: 'Advanced' },
      { name: 'Navigating', level: 'Intermediate' }
    ],
    location: 'Wuse 2',
    type: 'Onsite',
  },
  {
    title: 'Administrative Assistant',
    description: 'Legal firm in Maitama needs a detail-oriented admin assistant. Proficiency in Microsoft Office and document management is required.',
    requiredSkills: [
      { name: 'Microsoft Office', level: 'Advanced' },
      { name: 'Data Entry', level: 'Advanced' },
      { name: 'Organization', level: 'Advanced' }
    ],
    location: 'Maitama',
    type: 'Onsite',
  },
  {
    title: 'Primary School Teacher',
    description: 'Leading private school in Gwarinpa is hiring. Must be passionate about early childhood education and have good classroom management.',
    requiredSkills: [
      { name: 'Teaching', level: 'Advanced' },
      { name: 'Child Care', level: 'Advanced' },
      { name: 'Classroom Management', level: 'Intermediate' }
    ],
    location: 'Gwarinpa',
    type: 'Onsite',
  },
  {
    title: 'Digital Marketing Specialist',
    description: 'Help an e-commerce brand based in Jabi grow their online presence. Knowledge of SEO, SEM, and social media ads is a plus.',
    requiredSkills: [
      { name: 'Digital Marketing', level: 'Advanced' },
      { name: 'SEO', level: 'Intermediate' },
      { name: 'Social Media Management', level: 'Advanced' }
    ],
    location: 'Jabi',
    type: 'Remote',
  },
  {
    title: 'Bakery Assistant',
    description: 'Busy bakery in Lifecamp needs an assistant for bread and pastry production. Shift work required.',
    requiredSkills: [
      { name: 'Baking', level: 'Advanced' },
      { name: 'Food Safety', level: 'Intermediate' }
    ],
    location: 'Lifecamp',
    type: 'Onsite',
  },
  {
    title: 'Senior Project Manager (Construction)',
    description: 'Leading construction firm in Abuja is looking for a Senior Project Manager for a massive estate development in Guzape. Must have PMP certification and 10+ years experience.',
    requiredSkills: [
      { name: 'Project Management', level: 'Advanced' },
      { name: 'Construction Management', level: 'Advanced' },
      { name: 'Budgeting', level: 'Advanced' }
    ],
    location: 'Guzape',
    type: 'Onsite',
  },
  {
    title: 'Executive Driver',
    description: 'Private family in Maitama requires an executive driver. Must be well-spoken, have a valid license, and know Abuja very well.',
    requiredSkills: [
      { name: 'Driving', level: 'Advanced' },
      { name: 'Communication', level: 'Intermediate' }
    ],
    location: 'Maitama',
    type: 'Onsite',
  },
  {
    title: 'Software Quality Assurance Engineer',
    description: 'Fintech company in Wuse 2 needs a QA Engineer to handle automated and manual testing of our mobile app.',
    requiredSkills: [
      { name: 'Manual Testing', level: 'Advanced' },
      { name: 'Automation', level: 'Intermediate' },
      { name: 'Selenium', level: 'Intermediate' }
    ],
    location: 'Wuse 2',
    type: 'Hybrid',
  },
  {
    title: 'Chef de Partie',
    description: 'Upscale restaurant in Garki 2 is hiring. Must be experienced in continental and local dishes. Hygiene standards are paramount.',
    requiredSkills: [
      { name: 'Cooking', level: 'Advanced' },
      { name: 'Kitchen Management', level: 'Intermediate' },
      { name: 'Food Safety', level: 'Advanced' }
    ],
    location: 'Garki 2',
    type: 'Onsite',
  },
  {
    title: 'Real Estate Sales Associate',
    description: 'Join a busy real estate agency in Jabi. You will be responsible for listing properties and closing sales in the Abuja luxury market.',
    requiredSkills: [
      { name: 'Sales', level: 'Advanced' },
      { name: 'Negotiation', level: 'Advanced' },
      { name: 'Marketing', level: 'Intermediate' }
    ],
    location: 'Jabi',
    type: 'Hybrid',
  },
  {
    title: 'Security Supervisor',
    description: 'A large corporate headquarters in the Central Business District is hiring a Security Supervisor to manage the onsite guard team.',
    requiredSkills: [
      { name: 'Security Management', level: 'Advanced' },
      { name: 'Surveillance', level: 'Advanced' },
      { name: 'Leadership', level: 'Intermediate' }
    ],
    location: 'Central Business District',
    type: 'Onsite',
  },
  {
    title: 'Customer Success Representative',
    description: 'Energy company in Gwarinpa needs a customer-focused rep to handle inquiries and improve user satisfaction.',
    requiredSkills: [
      { name: 'Customer Support', level: 'Advanced' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'CRM', level: 'Intermediate' }
    ],
    location: 'Gwarinpa',
    type: 'Onsite',
  },
  {
    title: 'Logistics Operations Officer',
    description: 'Manage a fleet of delivery vans for a distribution hub in Idu Industrial Area. Strong organizational skills required.',
    requiredSkills: [
      { name: 'Logistics', level: 'Advanced' },
      { name: 'Operations', level: 'Advanced' },
      { name: 'Fleet Management', level: 'Intermediate' }
    ],
    location: 'Idu',
    type: 'Onsite',
  },
  {
    title: 'Pharmacy Technician',
    description: 'Retail pharmacy in Kubwa is hiring. Must be licensed and have experience with prescription management and inventory.',
    requiredSkills: [
      { name: 'Pharmacy', level: 'Advanced' },
      { name: 'Inventory Management', level: 'Intermediate' }
    ],
    location: 'Kubwa',
    type: 'Onsite',
  },
  {
    title: 'UI Developer (Vue.js)',
    description: 'Design agency in Wuse 1 is looking for a Vue.js developer to build interactive dashboards for our government clients.',
    requiredSkills: [
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' }
    ],
    location: 'Wuse 1',
    type: 'Remote',
  },
  {
    title: 'Graphic Designer',
    description: 'Creative studio in Utako needs a versatile graphic designer for branding and social media content creation.',
    requiredSkills: [
      { name: 'Photoshop', level: 'Advanced' },
      { name: 'Illustrator', level: 'Advanced' },
      { name: 'Branding', level: 'Intermediate' }
    ],
    location: 'Utako',
    type: 'Hybrid',
  },
  {
    title: 'Barista & Cafe Supervisor',
    description: 'New cafe in Maitama seeks a passionate barista. Must have experience with specialty coffee and basic management tasks.',
    requiredSkills: [
      { name: 'Coffee Making', level: 'Advanced' },
      { name: 'Inventory Management', level: 'Intermediate' }
    ],
    location: 'Maitama',
    type: 'Onsite',
  },
  {
    title: 'System Administrator',
    description: 'Manage the IT infrastructure for a government agency in Abuja. Experience with Linux servers and network security is required.',
    requiredSkills: [
      { name: 'Linux', level: 'Advanced' },
      { name: 'Server Management', level: 'Advanced' },
      { name: 'Network Security', level: 'Intermediate' }
    ],
    location: 'Abuja',
    type: 'Onsite',
  },
  {
    title: 'Warehouse Manager',
    description: 'Oversee operations at a large distribution center in Lugbe. Must have experience with warehouse management systems (WMS).',
    requiredSkills: [
      { name: 'Warehouse Management', level: 'Advanced' },
      { name: 'Staff Management', level: 'Advanced' },
      { name: 'Inventory', level: 'Advanced' }
    ],
    location: 'Lugbe',
    type: 'Onsite',
  },
  {
    title: 'Tailoring Instructor',
    description: 'Fashion vocational center in Karu needs an instructor for advanced tailoring and pattern making classes.',
    requiredSkills: [
      { name: 'Tailoring', level: 'Advanced' },
      { name: 'Teaching', level: 'Advanced' },
      { name: 'Pattern Making', level: 'Advanced' }
    ],
    location: 'Karu',
    type: 'Onsite',
  }
];

export default jobs;
