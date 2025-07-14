export interface TimelineEvent {
    title: string;
    description: string;
    fullStory: string;
    featured?: boolean;
    imageKey: string;
    highlights: string[];
}

export const timelineEvents: TimelineEvent[] = [
    {
        title: "Mascot Launch",
        description: "Meet Novus, our white-bellied sea eagle mascot designed by students",
        fullStory: "Our school mascot is inspired by the white-bellied sea eagle, the largest raptor in Singapore with its majestic flight and sharp vision, symbolizes strength and adaptability in Singapore's skies. It reflects the school's pursuit of excellence, innovation, and soaring aspirations in education. Designed by our students, the mascot also has metal plates on its wings and a bionic beak.\n\nOur mascot is named Novus, to represent our school culture - experiment with new ideas, explore with fresh eyes, and excel, young as we may be, in our endeavours, both within NUS High and beyond.",
        featured: true,
        imageKey: "mascot",
        highlights: ["Designed by students", "Named Novus", "White-bellied sea eagle inspired"]
    },
    {
        title: "Games Day Exhibition Match",
        description: "Alumni victory in an electrifying Captain's Ball showdown",
        fullStory: "As part of our celebrations, we brought the generations together for a spirited showdown at our annual Games Day Exhibition Captain's Ball match! Alumni, parents, staff and students clashed in two electrifying games—each side playing their hearts out. In the end, it was our alumni who claimed victory as the champion team!",
        featured: false,
        imageKey: "games",
        highlights: ["Alumni vs Community", "Captain's Ball", "Alumni champions"]
    },
    {
        title: "Research Congress",
        description: "Nobel Laureate Sir Konstantin Novoselov shares groundbreaking graphene research",
        fullStory: "We were honoured to have Nobel Laureate Sir Konstantin Novoselov as our Guest of Honor, whose contributions to the field of Graphene research are a testament to his dedication and passion as a scientist and researcher.\n\nHis sharing on the mass production of graphene through different methods as well the use of graphene in various applications such as thermal management and lightweight tennis rackets allowed our students to get a better understanding of his research. His presence at our research congress was both an encouragement and an inspiration to our community.",
        featured: true,
        imageKey: "research",
        highlights: ["Nobel Laureate guest", "Graphene research", "Student inspiration"]
    },
    {
        title: "Speech Day",
        description: "Historic 20th Anniversary celebration with President Tharman",
        fullStory: "This year, we celebrated a very special 20th Anniversary Speech Day, with President Tharman Shanmugaratnam gracing the event as our Guest of Honour. The event was a significant one, as it saw two historic milestones taking place. Firstly, our Principal Ms Soh announced the successful commissioning of NUSHSat1, the school's first nanosatellite and the first of such accomplishments in a school for Singapore. The school also celebrated the launch of NUSHigh Giving, the school's first fund-raising initiative as we launch into our next era of growth.\n\nPresident Tharman's remarks inspired our staff and students to uphold an intellectual ethos rooted in both intellectual courage and humility—qualities exemplified by our alumni as they are forging new paths. As Cheng Herng Yi (Class of 2011) eloquently expressed, it has been his driving purpose \"to bring together the disparate strands of human knowledge and experience to attack the most difficult problems in society.\"\n\nMs Soh's refreshing reflection on the unique journey that our school has charted since its founding in 2005 highlighted our deep commitment to growth, innovation, and excellence. She shared how our students have been nurtured to have not only a bold pursuit of their passions but also a growing awareness of their larger purpose: to contribute meaningfully to society.",
        featured: true,
        imageKey: "speech",
        highlights: ["President Tharman", "NUSHSat1 announcement", "NUSHigh Giving launch", "20th Anniversary milestone"]
    },
    {
        title: "Nanosatellite Launch",
        description: "NUSHSat1 successfully transmitting images from space",
        fullStory: "NUSHSat1, NUS High School's first nanosatellite built by our students, which was launched on March 15, is functioning well and has been transmitting image photographs of the earth. It will be used as an educational tool with our local and overseas partners.\n\nThis has been a 6-year project borne out of the fruit of many batches of students who have contributed to the technical expertise required to build it. The success of the project is testament to the spirit of our motto – Experiment, explore and excel!",
        featured: true,
        imageKey: "satellite",
        highlights: ["Student-built nanosatellite", "6-year collaboration", "Singapore's first school satellite", "Experiment, explore and excel!"]
    }
]; 