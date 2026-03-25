export interface ChurchInfo {
  name: string;
  address: string;
  aboutUs: string;
  churchSchool: string;
}

export interface GiveInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export interface Member {
  id: string;
  name: string;
  dob: string;
  position: string;
  photoUrl: string;
  isLeader: boolean;
}

export interface UpcomingProgramme {
  title: string;
  description: string;
  targetDate: string;
  link: string;
}

export interface MediaHubFeature {
  title: "Sermon" | "Live Stream" | "Giving";
  subtitle: string;
  redirectUrl: string;
  iconHint: "mic" | "radio" | "heart";
}

export interface ChurchDepartment {
  id: string;
  name: string;
  /** Short blurb shown under the title */
  summary: string;
  /** Short inspirational quote shown under the summary */
  quote: string;
  /** Individual/leader name shown on the department image */
  individualName: string;
  imageUrl: string;
}

const UNSPLASH_PLACEHOLDER =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30";

const ROUTE_ROOT = "/cacvlp-english-assembly";

export const CHURCH_INFO: ChurchInfo = {
  name: "Christ Apostolic Church (CACVLP English Assembly)",
  address: "7, Ajiboye Street",
   
  aboutUs:
    "CACVLP English Assembly is a Christ-centered community committed to biblical teaching, prayer, worship, and practical love. We exist to raise disciples who reflect the heart of Jesus in family, work, and society. Whether you are exploring faith or growing deeper in your walk with Christ, this is a place to belong, heal, and serve.",
  churchSchool:
    "Our Church School is an engaging weekly discipleship experience where children, teens, and adults learn Scripture with clarity and life application. Through age-based classes, prayer circles, and mentorship, we help every member build strong biblical foundations and mature in character, purpose, and service.",
};

export const GIVE_INFO: GiveInfo = {
  bankName: "Access Bank",
  accountName: "Christ Apostolic Church Victory Land Pleasure DCC",
  accountNumber: "2104951027",
};

const VERSE_SEED = [
  "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "Isaiah 41:10 - Fear not, for I am with you; be not dismayed, for I am your God.",
  "Jeremiah 29:11 - For I know the plans I have for you, says the Lord, plans for welfare and not for evil.",
  "Romans 8:28 - And we know that in all things God works for the good of those who love him.",
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "Psalm 46:1 - God is our refuge and strength, a very present help in trouble.",
  "Proverbs 3:5 - Trust in the Lord with all your heart and lean not on your own understanding.",
  "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.",
  "John 14:27 - Peace I leave with you; my peace I give to you.",
  "2 Corinthians 5:7 - For we walk by faith, not by sight.",
  "Psalm 34:8 - Taste and see that the Lord is good.",
  "Romans 12:12 - Be joyful in hope, patient in affliction, faithful in prayer.",
  "Lamentations 3:22 - The steadfast love of the Lord never ceases.",
  "Hebrews 11:1 - Faith is the substance of things hoped for, the evidence of things not seen.",
  "Psalm 121:1 - I lift up my eyes to the hills. From where does my help come?",
  "Micah 6:8 - What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
  "John 8:12 - Jesus said, I am the light of the world.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace in believing.",
  "1 Peter 5:7 - Cast all your anxiety on him because he cares for you.",
  "Psalm 27:1 - The Lord is my light and my salvation; whom shall I fear?",
  "Colossians 3:23 - Whatever you do, work heartily, as for the Lord.",
  "James 1:5 - If any of you lacks wisdom, let him ask God.",
  "Hebrews 13:8 - Jesus Christ is the same yesterday and today and forever.",
  "Matthew 5:14 - You are the light of the world.",
  "Isaiah 40:31 - Those who hope in the Lord will renew their strength.",
  "Romans 6:23 - The gift of God is eternal life in Christ Jesus our Lord.",
  "Psalm 100:5 - For the Lord is good and his love endures forever.",
  "Galatians 6:9 - Let us not grow weary of doing good.",
  "1 Thessalonians 5:16 - Rejoice always.",
  "Ephesians 2:10 - We are God's workmanship, created in Christ Jesus for good works.",
  "John 3:16 - For God so loved the world that he gave his only Son.",
  "Psalm 91:2 - I will say of the Lord, He is my refuge and my fortress.",
  "2 Timothy 1:7 - God gave us a spirit not of fear but of power and love and self-control.",
  "Matthew 6:33 - Seek first the kingdom of God and his righteousness.",
  "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.",
  "Romans 10:9 - If you confess with your mouth that Jesus is Lord and believe in your heart, you will be saved.",
  "1 John 4:19 - We love because he first loved us.",
  "Exodus 14:14 - The Lord will fight for you; you need only to be still.",
  "Psalm 37:4 - Delight yourself in the Lord, and he will give you the desires of your heart.",
  "Mark 11:24 - Whatever you ask in prayer, believe that you have received it.",
];

export const BIBLE_VERSES: string[] = Array.from({ length: 365 }, (_, index) => {
  const seedVerse = VERSE_SEED[index % VERSE_SEED.length];
  return `Day ${index + 1}: ${seedVerse}`;
});

export const getBibleVerseForDate = (date: Date = new Date()): string => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diffInMs = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffInMs / 86_400_000) + 1;
  return BIBLE_VERSES[(dayOfYear - 1) % BIBLE_VERSES.length];
};

export const MEMBERS: Member[] = [
  {
    id: "m-001",
    name: "Pastor Samuel Adeyemi",
    dob: "1980-03-25",
    position: "Head Pastor",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: true,
  },
  {
    id: "m-002",
    name: "Pastor Ruth Oluwatoyin",
    dob: "1986-03-25",
    position: "Associate Pastor",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: true,
  },
  {
    id: "m-003",
    name: "Brother Daniel Okafor",
    dob: "1990-12-02",
    position: "Choir Coordinator",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: true,
  },
  {
    id: "m-004",
    name: "Sister Grace Bello",
    dob: "1995-06-17",
    position: "Choir",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: false,
  },
  {
    id: "m-005",
    name: "Brother Femi Olaitan",
    dob: "1991-03-25",
    position: "Ushering Unit",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: false,
  },
  {
    id: "m-006",
    name: "Sister Joy Nwosu",
    dob: "1993-11-29",
    position: "Church School Teacher",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: false,
  },
  {
    id: "m-007",
    name: "Brother Michael Ajayi",
    dob: "1986-08-14",
    position: "Prayer Unit Lead",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: true,
  },
  {
    id: "m-008",
    name: "Sister Esther Madu",
    dob: "1998-01-20",
    position: "Media Team",
    photoUrl: UNSPLASH_PLACEHOLDER,
    isLeader: false,
  },
];

export const UPCOMING_PROGRAMME: UpcomingProgramme = {
  title: "Revival Night",
  description:
    "An evening of worship, prayer, and teaching focused on renewal. Come expectant and invite someone along.",
  targetDate: "2026-04-12T18:30:00.000Z",
  link: `${ROUTE_ROOT}/events/revival-night`,
};

export const DEPARTMENTS: ChurchDepartment[] = [
  {
    id: "dept-choir",
    name: "Choir",
    summary:
      "Leading the congregation in worship with excellence, unity, and a heart for God’s presence.",
    quote:
      "With one voice, we lift worship—inviting God’s presence into every moment.",
    individualName: "Sis. Precious Adedayo",
    imageUrl: UNSPLASH_PLACEHOLDER,
  },
  {
    id: "dept-ushers",
    name: "Ushers",
    summary:
      "Creating a welcoming atmosphere and helping services flow with calm order and hospitality.",
    quote:
      "Our welcome is a ministry—serving with gentle order and a listening heart.",
    individualName: "Bro. Mike Ojo",
    imageUrl: "/images/adebola.jpg",
  },
  {
    id: "dept-media",
    name: "Media Team",
    summary:
      "Sound, visuals, and streaming so the message is clear in the room and online.",
    quote:
      "Faithful media helps the message travel—so every soul can hear clearly.",
    individualName: "Sis. Ada Akinyemi",
    imageUrl: UNSPLASH_PLACEHOLDER,
  },
  {
    id: "dept-prayer",
    name: "Prayer Unit",
    summary:
      "Standing in intercession for the church, families, and the harvest with faithfulness and care.",
    quote:
      "We pray with faith—believing God will do what He has promised.",
    individualName: "Bro. Daniel Okafor",
    imageUrl: UNSPLASH_PLACEHOLDER,
  },
  {
    id: "dept-school",
    name: "Church School",
    summary:
      "Age-appropriate teaching and mentoring to build strong biblical foundations for every member.",
    quote:
      "Teaching the Word with clarity—so hearts grow strong in Christ.",
    individualName: "Sis. Ruth Oluwatoyin",
    imageUrl: UNSPLASH_PLACEHOLDER,
  },
  {
    id: "dept-hospitality",
    name: "Hospitality",
    summary:
      "Caring for guests and members through food, conversation, and generous welcome.",
    quote:
      "A warm table reflects God’s love—making everyone feel at home.",
    individualName: "Bro. Samuel Adeyemi",
    imageUrl: UNSPLASH_PLACEHOLDER,
  },
];

export const LATEST_FEATURES: MediaHubFeature[] = [
  {
    title: "Sermon",
    subtitle: "Watch this week's message and explore previous teachings.",
    redirectUrl: `${ROUTE_ROOT}/media/sermons`,
    iconHint: "mic",
  },
  {
    title: "Live Stream",
    subtitle: "Join our services in real time from anywhere in the world.",
    redirectUrl: `${ROUTE_ROOT}/live`,
    iconHint: "radio",
  },
  {
    title: "Giving",
    subtitle: "Partner with our mission through secure online generosity.",
    redirectUrl: `${ROUTE_ROOT}/giving`,
    iconHint: "heart",
  },
];

export const CHURCH_LOGO_URL = UNSPLASH_PLACEHOLDER;
