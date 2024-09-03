const qa_pairs = [
  { keywords: ["oneStop", "platform"], response: "oneStop is an event management platform where you can book various event-related services such as venues, decorators, and more." },
  { keywords: ["book", "event"], response: "To book an event, navigate to our booking page, select the type of event you want to organize, and follow the instructions to complete your booking." },
  { keywords: ["cancel", "booking"], response: "Yes, you can cancel your booking. Please contact our support team for assistance with cancellations." },
  { keywords: ["services", "offer"], response: "oneStop offers a range of services including venue booking, decoration, catering, entertainment, and more." },
  { keywords: ["contact", "support"], response: "You can contact our support team via email or through the contact form on our website." },
  { keywords: ["location", "venue"], response: "You can find various venues for different events including weddings, corporate events, and parties on oneStop." },
  { keywords: ["decorators", "decoration"], response: "oneStop offers a variety of decorators to help you create the perfect ambiance for your event." },
  { keywords: ["catering", "food"], response: "Our catering services include a range of cuisines to suit your event needs." },
  { keywords: ["entertainment", "music"], response: "From live bands to DJs, oneStop provides entertainment options to keep your guests entertained." },
  { keywords: ["pricing", "cost"], response: "You can find detailed pricing information for our services on the respective service pages." },
  { keywords: ["availability", "dates"], response: "Check availability for your desired dates by visiting the booking page and selecting the service you need." },
  { keywords: ["reviews", "feedback"], response: "You can read reviews and feedback from other customers on the service pages." },
  { keywords: ["register", "sign up"], response: "To register, click on the 'Sign Up' button at the top right of the homepage and fill in your details." },
  { keywords: ["login", "account"], response: "Click on the 'Login' button at the top right of the homepage and enter your credentials to access your account." },
  { keywords: ["payment", "methods"], response: "We accept various payment methods including credit cards, debit cards, and online banking." },
  { keywords: ["invoices", "receipts"], response: "Invoices and receipts will be sent to your registered email address after payment." },
  { keywords: ["packages", "deals"], response: "We offer several packages and deals for different types of events. Visit the 'Packages' section to learn more." },
  { keywords: ["vendors", "partners"], response: "Our vendors and partners are carefully selected to ensure quality services for your event." },
  { keywords: ["updates", "notifications"], response: "Stay updated with the latest notifications by enabling alerts in your account settings." },
  { keywords: ["help", "assistance"], response: "For help and assistance, visit our 'Help' section or contact our support team." },
  { keywords: ["policy", "terms"], response: "Read our terms and policies in the 'Terms and Policies' section at the bottom of the page." },
  { keywords: ["refund", "return"], response: "Refund and return policies are detailed in our 'Refund Policy' section." },
  { keywords: ["events", "organize"], response: "We help you organize events like weddings, birthdays, corporate events, and more." },
  { keywords: ["guest list", "RSVP"], response: "Manage your guest list and track RSVPs through our platform." },
  { keywords: ["themes", "decor"], response: "Choose from a variety of themes and decorations to make your event special." },
  { keywords: ["transportation", "travel"], response: "We provide transportation and travel arrangements for your event guests." },
  { keywords: ["photography", "videography"], response: "Capture your special moments with our professional photography and videography services." },
  { keywords: ["customize", "personalize"], response: "Customize and personalize your event with our flexible options and services." }, 
       
    { keywords: ["budget", "cost management"], response: "We help you manage your event budget by providing cost-effective solutions and transparent pricing." },
    { keywords: ["event planning", "coordination"], response: "Our event planning and coordination services ensure that every detail of your event is taken care of from start to finish." },
    { keywords: ["event timeline", "schedule"], response: "We create detailed event timelines and schedules to ensure everything runs smoothly on the day of your event." },
    { keywords: ["guest management", "seating"], response: "We assist with guest management, including seating arrangements, RSVP tracking, and special accommodations." },
    { keywords: ["event promotion", "marketing"], response: "Promote your event effectively with our marketing and promotion services, including social media campaigns and email marketing." },
    { keywords: ["vendor coordination", "supplier management"], response: "We coordinate with vendors and suppliers to ensure that all services are delivered on time and meet your expectations." },
    { keywords: ["emergency planning", "contingency"], response: "We provide contingency planning for emergencies to ensure your event proceeds without a hitch." },
    { keywords: ["permits", "licenses"], response: "We handle the process of obtaining necessary permits and licenses for your event." },
    { keywords: ["post-event", "follow-up"], response: "Our post-event services include follow-up with guests, feedback collection, and vendor payments." },
    { keywords: ["live streaming", "virtual events"], response: "We offer live streaming and virtual event services to reach a wider audience." },
    { keywords: ["audio", "visual equipment"], response: "Our audio-visual equipment services include sound systems, projectors, and lighting to enhance your event experience." },
    { keywords: ["environmentally friendly", "sustainable events"], response: "We specialize in organizing environmentally friendly and sustainable events with eco-conscious vendors and practices." },
    { keywords: ["event branding", "custom logos"], response: "We can help you create custom event branding, including logos, banners, and promotional materials." },
    { keywords: ["security", "safety"], response: "We ensure the safety of your event with professional security services and crowd management." },
    { keywords: ["event analytics", "data insights"], response: "Get insights and analytics from your event to measure its success and areas for improvement." },
    { keywords: ["gifts", "favors"], response: "We provide a range of event gifts and favors to leave a lasting impression on your guests." },
    { keywords: ["event registration", "ticketing"], response: "Our event registration and ticketing services make it easy for guests to sign up and attend your event." },
    { keywords: ["event insurance", "liability"], response: "Protect your event with our event insurance and liability coverage options." },
    { keywords: ["destination events", "international"], response: "We plan and organize destination events, whether local or international, ensuring a seamless experience." },
    { keywords: ["team building", "corporate retreats"], response: "We offer team-building activities and corporate retreat planning to strengthen your team." },

    // Corporate Events
    { keywords: ["corporate", "business event"], response: "We specialize in organizing corporate events such as conferences, seminars, product launches, and corporate retreats. Our services include venue selection, event branding, and on-site coordination." },
    { keywords: ["conference", "seminar"], response: "We can plan and execute conferences and seminars of any size, ensuring a professional and seamless experience for all attendees." },
    { keywords: ["product launch", "corporate launch"], response: "Our product launch services include venue booking, audiovisual setup, and marketing to ensure your product makes a strong impact." },
    { keywords: ["corporate retreat", "team building"], response: "We organize corporate retreats and team-building activities that are designed to foster collaboration, innovation, and team spirit." },

    // Social Events
    { keywords: ["social event", "party"], response: "From birthday parties to anniversaries and reunions, we create unforgettable social events tailored to your style and preferences." },
    { keywords: ["birthday", "anniversary"], response: "Celebrate your special day with our tailored birthday and anniversary event planning services, which include venue decoration, entertainment, and catering." },
    { keywords: ["reunion", "social gathering"], response: "We help organize reunions and social gatherings that reconnect you with loved ones in a memorable setting." },

    // Weddings
    { keywords: ["wedding", "marriage"], response: "We offer comprehensive wedding planning services, including venue selection, decoration, catering, entertainment, and more, to make your special day perfect." },
    { keywords: ["bridal shower", "engagement"], response: "Our services extend to pre-wedding events such as bridal showers and engagement parties, ensuring each moment leading up to your wedding is special." },
    { keywords: ["destination wedding", "wedding abroad"], response: "Plan your dream destination wedding with our expert guidance on locations, legalities, and logistics." },

    // Milestone Achievements
    { keywords: ["milestone", "achievement"], response: "Celebrate life's milestones, such as graduations, retirements, and promotions, with events that honor the achievement and create lasting memories." },
    { keywords: ["graduation", "academic achievement"], response: "We organize graduation parties that celebrate your academic achievements with style, including decorations, catering, and entertainment." },
    { keywords: ["retirement", "career achievement"], response: "Our retirement event planning services include venue selection, guest management, and personalized touches to honor a career well spent." },

    // Cultural Events
    { keywords: ["cultural event", "festival"], response: "We specialize in planning cultural events and festivals that showcase traditions, art, and heritage, ensuring a vibrant and authentic experience." },
    { keywords: ["religious", "spiritual"], response: "Our team can organize religious and spiritual events, including ceremonies, festivals, and gatherings, respecting cultural traditions and practices." },
    { keywords: ["heritage", "cultural celebration"], response: "Celebrate your cultural heritage with events that incorporate traditional music, dance, cuisine, and customs." },

    // Charity & Fundraising Events
    { keywords: ["charity", "fundraiser"], response: "We plan and manage charity and fundraising events that help you raise awareness and funds for important causes. Our services include donor management, event logistics, and promotion." },
    { keywords: ["gala", "benefit event"], response: "Our gala and benefit event planning services ensure a glamorous and successful evening that meets your fundraising goals." },
    { keywords: ["awareness campaign", "cause"], response: "We organize awareness campaigns and cause-driven events to engage your audience and promote important social issues." },

    // Educational Events
    { keywords: ["workshop", "training"], response: "We plan educational events such as workshops, training sessions, and boot camps, providing a conducive environment for learning and growth." },
    { keywords: ["webinar", "online event"], response: "Our webinar and online event services include platform setup, content management, and audience engagement strategies." },
    { keywords: ["school event", "academic"], response: "We organize school and academic events, including competitions, award ceremonies, and fairs, that inspire and educate students." },

    // Entertainment Events
    { keywords: ["concert", "music event"], response: "We organize concerts and music events, handling everything from artist booking to stage setup and sound management." },
    { keywords: ["theater", "live performance"], response: "Our theater and live performance event services include venue selection, stage design, and ticketing to ensure a successful show." },
    { keywords: ["film screening", "premiere"], response: "We organize film screenings and premieres, offering services like red carpet setup, media coverage, and audience engagement." },

    // Sports Events
    { keywords: ["sports event", "tournament"], response: "Our sports event planning services cover everything from small tournaments to large-scale competitions, including venue booking, equipment setup, and participant coordination." },
    { keywords: ["alumni", "meeting"], response: "We organize meetings, managing logistics including presentation, participant registration, safety measures and after event management." },
    { keywords: ["team sports", "league"], response: "We help organize team sports leagues and matches, providing comprehensive event management services from start to finish." },

    // Virtual & Hybrid Events
    { keywords: ["virtual event", "hybrid event"], response: "We offer virtual and hybrid event solutions that combine in-person and online experiences, ensuring a seamless event for all attendees." },
    { keywords: ["online conference", "virtual summit"], response: "Our online conference and virtual summit planning services include platform setup, content management, and participant engagement." },
    { keywords: ["live streaming", "virtual attendance"], response: "Enhance your event with live streaming services that allow guests to participate remotely, regardless of their location." }
];


  
const chatbot = (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    //console.log(`User Message: ${userMessage}`);  // Log user message for debugging
  
    let response = "Sorry, I don't understand your question. Can you please rephrase it?";
    
    // Regular expression to match any keyword
    for (const pair of qa_pairs) {
      const regex = new RegExp(pair.keywords.join('|'), 'i');
      if (regex.test(userMessage)) {
        response = pair.response;
        break;
      }
    }
  
    //console.log(`Response: ${response}`);  // Log response for debugging
    res.json({ reply: response });
  };

  module.exports= {chatbot}