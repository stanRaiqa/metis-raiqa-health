import {Link} from "@/sanity.types";

export const NavBarItems = [
    {title:"Home", link:"/"},
    {title:"Services", link:"/services"},
    {title:"How it works", link:"/how-it-works"},
    {title:"Healthcare Companion", link:"/assistant"},
    {title:"More", type: "dropdown", items: [
            {title:"Help", type:"dropdown", items: [
                {title:"Contact Us", type: "link", link:"/contact"},
                {title:"Customer Support", type: "link", link:"/support"},
                {title:"Login", type: "link", link:"/login"},
                {title:"Sign Up", type: "link", link:"/sign-up"},
                ]},
            {title:"Company", type:"dropdown", items: [
                    {title:"About Us", type: "link", link:"/about"},
                    {title:"Partners", type: "link", link:"/partners"},
                    {title:"Raiqa.com", type: "link", link:"/raiqa"},
                ]},
            {title:"Legal", type:"dropdown", items: [
                    {title:"Terms of Service", type: "link", link:"/terms"},
                    {title:"Privacy Policy", type: "link", link:"/privacy-policy"},
                    {title:"Cookie Policy", type: "link", link:"/cookie-policy"},
                    {title:"Data Security", type: "link", link:"/data-security"},
                ]},
            {title:"Resources", type:"dropdown", items: [
                    {title:"Blogs", type: "link", link:"/blogs"},
                    {title:"Webinars", type: "link", link:"/webinars"},
                    {title:"Events", type: "link", link:"/events"},
                    {title:"News", type: "link", link:"/news"},
                ]},
        ]}
]

export const FooterItems = [
    {title:"Services", link:"/#services", category: "patient"},
    {title:"Join Raiqa", link:"/patient/join", category: "patient"},
    {title:"Join Raiqa", link:"/practitioner/join", category: "practitioner"},
    {title:"How It Works", link:"/#howItWorks", category: "patient"},
    {title:"How It Works", link:"/#practitionerHowItWorks", category: "practitioner"},
    {title:"Contact Us", link:"/contact", category: "patient"},
    {title:"Contact Us", link:"/practitioner/contact", category: "practitioner"},
    {title:"About Us", link:"/about-us", category: "patient"},
    {title:"About Us", link:"/practitioner/about-us", category: "practitioner"},
    {title:"Practitioner Platform", link:"/practitioner", category: "patient"},
    {title:"Privacy Policy", link:"/privacy-policy", category: "patient"},
    {title:"Privacy Policy", link:"/privacy-policy", category: "practitioner"},
    {title:"Terms & Conditions", link:"/marketplace-terms-and-conditions", category: "patient"},
    {title:"Terms & Conditions", link:"/marketplace-terms-and-conditions", category: "practitioner"},
]

export const services = {
    midwife:{
        heroSection: {
            heading: "Trusted Midwife Care",
            subheading: "From pregnancy support to postnatal care, connect with qualified midwives through Raiqa. Instant booking. Private & bulk billed options.",
            primaryButtonText: "Book a Midwife now",
            secondaryButtonText: "Talk to AI first",
            primaryButtonLink: {_type: 'link', linkType: 'href', 'href': 'https://book-qa.raiqa.health'},
            secondaryButtonLink: {_type: 'link', linkType: 'href', 'href': 'https://book-qa.raiqa.health'},
            image: "/images/midwife_hero.png"
        },
        section2: {
            cards: [
                {image: "/images/hih-1.png", title: "Short consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
                {image: "/images/hih-1.png", title: "Standard consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
                {image: "/images/hih-1.png", title: "Long consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
                {image: "/images/hih-1.png", title: "Extended consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
            ]
        },
        section3: {
            heading: "Supporting You at Every Stage",
            subheading: "Whether you're expecting your first child or navigating the early months post-birth, our midwives offer expert guidance, empathy, and personalised care.",
            services: [
                "Antenatal support & planning",
                "Labour preparation & advice",
                "Breastfeeding & postnatal care",
                "Emotional wellbeing & birth trauma support",
                "Care plans & follow-ups"
            ]
        },
        section4: {
            heading: "Getting Midwife Care is Simple with Raiqa AI",
            firstMessage: "I’m 7 months pregnant and want to talk to a midwife."
        }
    }
}

export const defaultService = {
    heroSection: {
        heading: "Trusted Practitioner Care, Powered by Compassion & AI",
            subheading: "From pregnancy support to postnatal care, connect with qualified midwives through Raiqa. Instant booking. Private & bulk billed options.",
            primaryButtonText: "Book a Midwife now",
            secondaryButtonText: "Talk to AI first",
            primaryButtonLink: {_type: 'link', linkType: 'href', 'href': 'https://book-qa.raiqa.health'},
        secondaryButtonLink: {_type: 'link', linkType: 'href', 'href': 'https://book-qa.raiqa.health'},
        image: "/images/midwife_hero.png"
    },
    section2: {
        cards: [
            {image: "/images/hih-1.png", title: "Short consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
            {image: "/images/hih-1.png", title: "Standard consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
            {image: "/images/hih-1.png", title: "Long consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
            {image: "/images/hih-1.png", title: "Extended consultation", description: "Brief telehealth check-in for follow-up, medication review, or simple health concerns.", duration: "10", previousPrice: "45", newPrice: "35"},
        ]
    },
    section3: {
        heading: "Supporting You at Every Stage",
            subheading: "Whether you're expecting your first child or navigating the early months post-birth, our midwives offer expert guidance, empathy, and personalised care.",
            services: [
            "Antenatal support & planning",
            "Labour preparation & advice",
            "Breastfeeding & postnatal care",
            "Emotional wellbeing & birth trauma support",
            "Care plans & follow-ups"
        ]
    },
    section4: {
        heading: "Getting Midwife Care is Simple with Raiqa AI",
            firstMessage: "I’m 7 months pregnant and want to talk to a midwife."
    }
}

export const bookingBaseUrl = process.env.NEXT_PUBLIC_BOOKING_URL
export const chatUrl = process.env.NEXT_PUBLIC_CHAT_URL
export const talkUrl = process.env.NEXT_PUBLIC_TALK_URL

export const practitionerAppUrl = process.env.NEXT_PUBLIC_PRACTITIONER_APP_URL

export const bookingBaseLinkObject: Link = {_type: "link", linkType: "href", href: bookingBaseUrl}
export const chatLinkObject: Link = {_type: "link", linkType: "href", href: chatUrl}
export const talkLinkObject: Link = {_type: "link", linkType: "href", href: talkUrl}

export const practitionerAppLinkObject: Link = {_type: "link", linkType: "href", href: practitionerAppUrl}

export const AlphaPractitionerHeaderItems = [
    {title:"Home", type:'link', link:"/practitioner"},
    {title:"Your Specialty", type: "dropdown", items: [
            {title:"General Practitioners", type: "link", link:"/practitioner/specialty/general-practitioner"},
            // {title:"Paediatricians", type: "link", link:"/practitioner/specialty/paediatricians"},
            // {title:"Dermatologists", type: "link", link:"/practitioner/specialty/dermatologists"},
            // {title:"Psychiatrists", type: "link", link:"/practitioner/specialty/psychiatrists"},
            // {title:"Physiotherapists", type: "link", link:"/practitioner/specialty/physiotherapists"},
            // {title:"Dentists", type: "link", link:"/practitioner/specialty/dentists"},
            ]},
    {title:"AI Assistants", type:'link', link:"/practitioner/ai-assistants"},
    {title:"My Raiqa Page", type:'link', link:"/practitioner/my-raiqa"}
    // {title:"More Info", type: "dropdown", items: [
    //                 {title:"Contact Us", type: "link", link:"/contact"},
    //                 {title:"Customer Support", type: "link", link:"/support"},
    //                 {title:"Login", type: "link", link:"/login"},
    //                 {title:"Sign Up", type: "link", link:"/sign-up"}
    //     ]}
]