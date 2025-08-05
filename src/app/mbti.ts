export enum MBTI {
  I = "I",
  E = "E",
  N = "N",
  S = "S",
  T = "T",
  F = "F",
  J = "J",
  P = "P",
}

type Question = {
  question: string;
  answerA: {
    text: string;
    letter: MBTI;
  };
  answerB: {
    text: string;
    letter: MBTI;
  };
};

export const mbti: Question[] = [
  {
    question:
      "Before setting off on your adventure, your grandma offers you one of two ancient artifacts.",
    answerA: {
      text: "A Collection of Fun Stories",
      letter: MBTI.P,
    },
    answerB: {
      text: "A Compass to Guide Your Way",
      letter: MBTI.J,
    },
  },
  {
    question:
      "Laying in front of you is a dense, thick, and treacherous jungle, what’s your next move?",
    answerA: {
      text: "Analyze and Devise a Plan",
      letter: MBTI.P,
    },
    answerB: {
      text: "Jump Straight In",
      letter: MBTI.J,
    },
  },
  {
    question:
      "In the middle of the jungle you find a market bustling with life and fruit and artefacts for sale.",
    answerA: {
      text: "Stay and Take a Look Around",
      letter: MBTI.E,
    },
    answerB: {
      text: "Move Through the Crowd",
      letter: MBTI.I,
    },
  },
  {
    question:
      "Upon exiting the jungle, you are faced with a soup monster guarding your path forward.",
    answerA: {
      text: "Charge at the Monster",
      letter: MBTI.P,
    },
    answerB: {
      text: "Observe and Strategize First",
      letter: MBTI.J,
    },
  },
  {
    question:
      "Full of anticipation, you find it hard to fall asleep. How do you calm your nerves?",
    answerA: {
      text: "Count Some Sheep of Course",
      letter: MBTI.S,
    },
    answerB: {
      text: "Make Up a Story in Your Head",
      letter: MBTI.N,
    },
  },
  {
    question:
      "You wake up greeted by the warm beams of the morning sun. What’s your next move?",
    answerA: {
      text: "Enjoy the Golden Sunrise",
      letter: MBTI.N,
    },
    answerB: {
      text: "Head Out, Can’t Waste Time",
      letter: MBTI.S,
    },
  },
  {
    question:
      "Your grandma always told you to head north, however, you come across a sign saying to turn right.",
    answerA: {
      text: "Follow Your Grandma’s Words",
      letter: MBTI.N,
    },
    answerB: {
      text: "Listen to the Sign",
      letter: MBTI.S,
    },
  },
  {
    question:
      "At the foot of the cave you notice an old man playing a whimsical tune on the flute.",
    answerA: {
      text: "Stop, Listen, and Engage",
      letter: MBTI.E,
    },
    answerB: {
      text: "Enter the Cave",
      letter: MBTI.I,
    },
  },
  {
    question:
      "As you make your way through the cave, you find yourself faced with a dead end.",
    answerA: {
      text: "Call Out For the Lion",
      letter: MBTI.E,
    },
    answerB: {
      text: "Have a Seat and Wait",
      letter: MBTI.I,
    },
  },
  {
    question:
      "An ominous voice calls out asking why you are worthy of a secret broth recipe.",
    answerA: {
      text: "Use your Charisma to Connect",
      letter: MBTI.F,
    },
    answerB: {
      text: "Attempt to Reason with Logic",
      letter: MBTI.T,
    },
  },
  {
    question:
      "The cave illuminates with light as the voice asks you what is the most important broth ingredient.",
    answerA: {
      text: "Salt as it Enhances the Flavour",
      letter: MBTI.T,
    },
    answerB: {
      text: "Love of Course",
      letter: MBTI.F,
    },
  },
  {
    question:
      "Finally, the lion agrees to share with you the secret recipe. How do you thank them?",
    answerA: {
      text: "A Heartfelt Verbal Thanks",
      letter: MBTI.T,
    },
    answerB: {
      text: "A Big Warm Hug",
      letter: MBTI.F,
    },
  },
];

export const calculateMBTI = (answers: Map<MBTI, number>): string => {
  const mbti: MBTI[] = [];
  const getCount = (letter: MBTI): number => answers.get(letter) || 0;
  mbti.push(getCount(MBTI.I) > getCount(MBTI.E) ? MBTI.I : MBTI.E);
  mbti.push(getCount(MBTI.N) > getCount(MBTI.S) ? MBTI.N : MBTI.S);
  mbti.push(getCount(MBTI.T) > getCount(MBTI.F) ? MBTI.T : MBTI.F);
  mbti.push(getCount(MBTI.J) > getCount(MBTI.P) ? MBTI.J : MBTI.P);

  return mbti.join("");
};

type MBTIPair = [MBTI, MBTI];

const mbtiPairs: MBTIPair[] = [
  [MBTI.I, MBTI.E],
  [MBTI.N, MBTI.S],
  [MBTI.T, MBTI.F],
  [MBTI.J, MBTI.P],
];

type MBTIPercentage = {
  pair: MBTIPair;
  percentages: {
    [key in MBTI]?: number;
  };
};

export function calculateMBTIPercentages(
  answers: Map<MBTI, number>
): MBTIPercentage[] {
  return mbtiPairs.map(([a, b]) => {
    const countA = answers.get(a) ?? 0;
    const countB = answers.get(b) ?? 0;
    const total = countA + countB;

    const percentA = total === 0 ? 0 : Math.round((countA / total) * 100);
    const percentB = total === 0 ? 0 : 100 - percentA;

    return {
      pair: [a, b],
      percentages: {
        [a]: percentA,
        [b]: percentB,
      },
    };
  });
}

type BrothInfo = {
  img: string;
  broth: string;
  description: string;
  traits: string[];
};

export const brothByMBTI: Record<string, BrothInfo> = {
  ENFJ: {
    img: "/broths/TomatoVeganBroth.png",
    broth: "Tomato Vegan Broth",
    description:
      "You are a strong-willed optimist who’s always uplifting others. You’re well-rounded, maintaining balance in your life for the perfect flavour profile.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
  ENFP: {
    img: "/broths/TomYumBroth.png",
    broth: "Tom Yum Broth",
    description:
      "You are a free-spirited individual who’s always up for an adventure, whether that’s trying a new broth flavour or exploring an unfamiliar culture.",

    traits: [
      "Enthusiastic",
      "Sociable",
      "Outgoing",
      "Creative",
      "Optimistic",
      "Imaginative",
    ],
  },
  ENTJ: {
    img: "/broths/TomatoSpicySzechuanDryMix.png",
    broth: "Spicy Szechuan Dry Mix",
    description:
      "As a natural leader, you are bold and strong-willed to your core. You’re ready to take on any challenge that comes your way, from mild to Big Way hot!",
    traits: [
      "Charismatic",
      "Determined",
      "Confident",
      "Imaginative",
      "Intellectual",
      "Strategic",
    ],
  },
  ENTP: {
    img: "/broths/SchezuanGreenPepperBroth.png",
    broth: "Szechuan Green Pepper Broth",
    description:
      "You are a fearless daredevil who loves pushing boundaries and trying new things. Your spicy side can show as you challenge the status quo and seek novelty.",

    traits: [
      "Witty",
      "Contrarian",
      "Adventurous",
      "Curious",
      "Flexible",
      "Rebellious",
    ],
  },
  ESFJ: {
    img: "/broths/CollagenBoneBroth.png",
    broth: "Collagen Bone Broth",
    description:
      "You are a fearless captain, leading with authority and clear direction. Your strength and order keep the team focused and moving forward.",

    traits: [
      "Practical",
      "Responsible",
      "Loyal",
      "Empathetic",
      "Kind",
      "Charismatic",
    ],
  },
  ESFP: {
    img: "/broths/MushroomVeganBroth.png",
    broth: "Mushroom Vegan Broth",
    description:
      "You are a curious adventurer who thrives on variety. You're always excited to try something new as your tastes change with the seasons.",

    traits: [
      "Energetic",
      "Bold",
      "Brave",
      "Competitive",
      "Perceptive",
      "Savvy",
    ],
  },

  ESTJ: {
    img: "/broths/TomatoSpicySzechuanDryMix.png",
    broth: "Spicy Szechuan Dry Mix",
    description:
      "You are a commanding leader, organizing the team and making tough calls. Your decisiveness drives the quest forward.",
    traits: [
      "Dedicated",
      "Honest",
      "Loyal",
      "Organized",
      "Reliable",
      "Strong-Willed",
    ],
  },
  ESTP: {
    img: "/broths/SignatureMaLaTang.png",
    broth: "Signature Ma La Tang",
    description:
      "You are a thrill-seeker who loves taking risks and thrives on adventure. Always ready to go with the flow, you’re an absolute classic just like this broth.",

    traits: [
      "Strategic",
      "Logical",
      "Inquisitive",
      "Imaginative",
      "Creative",
      "Curious",
    ],
  },
  INFJ: {
    img: "/broths/TomatoSpicySzechuanDryMix.png",
    broth: "Tomato Spicy Szechuan Dry Mix",
    description:
      "You are a passionate artist, pushing your creativity and following your heart. You stand by your morals and make the world a better place one ingredient at a time.",

    traits: [
      "Idealistic",
      "Ambitious",
      "Compassionate",
      "Principled",
      "Selfless",
      "Knowledgeable",
    ],
  },
  INFP: {
    img: "/broths/TomatoBroth.png",
    broth: "Tomato Broth",
    description:
      "You are a gentle, nostalgic individual who values peace and creativity. You have a warm, calming presence, like a bowl of broth on a chilly day.",

    traits: [
      "Sentimental",
      "Kind",
      "Daydreamer",
      "Passionate",
      "Dutiful",
      "Empathetic",
    ],
  },
  INTJ: {
    img: "/broths/MisoBroth.png",
    broth: "Miso Broth",
    description:
      "You are a deep-thinking intellectual who really enjoys reflection and planning. Your thirst for knowledge and hunger for wisdom are never quite satisfied!",

    traits: [
      "Strategic",
      "Logical",
      "Inquisitive",
      "Imaginative",
      "Creative",
      "Curious",
    ],
  },
  INTP: {
    img: "/broths/SeasonalBroth.png",
    broth: "Seasonal Broth",
    description:
      "You are a clever inventor, always coming up with new strategies and gadgets. Your quick thinking helps the team outsmart any obstacle.",

    traits: [
      "Creative",
      "Curious",
      "Honest",
      "Analytical",
      "Flexible",
      "Objective",
    ],
  },

  ISFJ: {
    img: "/broths/CollagenBoneBroth.png",
    broth: "Collagen Bone Broth",
    description:
      "You are a kind-hearted caregiver who enjoys routine. You’re always supporting those around you, strengthening others like the mighty Collagen Bone Broth!",

    traits: [
      "Analytical",
      "Responsible",
      "Dedicated",
      "Protective",
      "Hardworking",
      "Humble",
    ],
  },

  ISFP: {
    img: "/broths/SaChaBroth.png",
    broth: "Sa Cha Broth",
    description:
      "You are a traditionalist who values family, heritage, and simplicity. You’re capable of finding beauty in everything, indulging in the rich flavours of life.",

    traits: [
      "Adventurous",
      "Spontaneous",
      "Independent",
      "Sensitive",
      "Empathetic",
      "Adaptable",
    ],
  },

  ISTJ: {
    img: "/broths/MisoBroth.png",
    broth: "Miso Broth",
    description:
      "You are a steadfast strategist. With your reliability and keen attention to detail, you’re the anchor every adventuring party needs when chaos strikes.",
    traits: [
      "Responsible",
      "Authentic",
      "Practical",
      "Honest",
      "Calm",
      "Organized",
    ],
  },

  ISTP: {
    img: "/broths/SeasonalBroth.png",
    broth: "Seasonal Broth",
    description:
      "You are a curious adventurer who thrives on variety. You’re always excited to try something new as your tastes change with the seasons.",

    traits: [
      "Innovative",
      "Observant",
      "Decisive",
      "Practical",
      "Creative",
      "Authentic",
    ],
  },
};
