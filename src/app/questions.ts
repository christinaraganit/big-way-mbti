export enum MBTI {
  I = 'I',
  E = 'E',
  N = 'N',
  S = 'S',
  T = 'T',
  F = 'F',
  J = 'J',
  P = 'P',
}

type Question = {
  question: string;
  answerA: {
    text: string;
    letter: MBTI;
  }
  answerB: {
    text: string;
    letter: MBTI;
  }
};

export const questions: Question[] = [
  {
    question: "Before setting off on your adventure, your grandma offers you one of two ancient artifacts.",
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
    question: "Laying in front of you is a dense, thick, and treacherous jungle, what’s your next move?",
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
   question: "In the middle of the jungle you find a market bustling with life and fruit and artefacts for sale.",
   answerA: {
     text: "Stay and Take a Look Around",
     letter: MBTI.E,
   },
   answerB: {
     text: "Move Through the Crowd",
     letter: MBTI.I,
   }
  },
  {
    question: "Upon exiting the jungle, you are faced with a soup monster guarding your path forward.",
    answerA: {
      text: "Charge at the Monster",
      letter: MBTI.P,
    },
    answerB: {
      text: "Observe and Strategize First",
      letter: MBTI.J,
    }
  },
  {
    question: "Full of anticipation, you find it hard to fall asleep. How do you calm your nerves?",
    answerA: {
      text: "Count Some Sheep of Course",
      letter: MBTI.S,
    },
    answerB: {
      text: "Make Up a Story in Your Head",
      letter: MBTI.N,
    }
  },
  {
    question: "You wake up greeted by the warm beams of the morning sun. What’s your next move?",
    answerA: {
      text: "Enjoy the Golden Sunrise",
      letter: MBTI.N,
    },
    answerB: {
      text: "Head Out, Can’t Waste Time",
      letter: MBTI.S,
    }
  },
  {
    question: "Your grandma always told you to head north, however, you come across a sign saying to turn right.",
    answerA: {
      text: "Follow Your Grandma’s Words",
      letter: MBTI.N,
    },
    answerB: {
      text: "Listen to the Sign",
      letter: MBTI.S,
    }
  },
  {
    question: "At the foot of the cave you notice an old man playing a whimsical tune on the flute.",
    answerA: {
      text: "Stop, Listen, and Engage",
      letter: MBTI.E,
    },
    answerB: {
      text: "Enter the Cave",
      letter: MBTI.I,
    }
  },
  {
    question: "As you make your way through the cave, you find yourself faced with a dead end.",
    answerA: {
      text: "Call Out For the Lion",
      letter: MBTI.E,
    },
    answerB: {
      text: "Have a Seat and Wait",
      letter: MBTI.I,
    }
  },
  {
    question: "An ominous voice calls out asking why you are worthy of a secret broth recipe.",
    answerA: {
      text: "Use your Charisma to Connect",
      letter: MBTI.F,
    },
    answerB: {
      text: "Attempt to Reason with Logic",
      letter: MBTI.T,
    }
  },
  {
    question: "The cave illuminates with light as the voice asks you what is the most important broth ingredient.",
    answerA: {
      text: "Salt as it Enhances the Flavour",
      letter: MBTI.T,
    },
    answerB: {
      text: "Love of Course",
      letter: MBTI.F,
    }
  },
  {
    question: "Finally, the lion agrees to share with you the secret recipe. How do you thank them?",
    answerA: {
      text: "A Heartfelt Verbal Thanks",
      letter: MBTI.T,
    },
    answerB: {
      text: "A Big Warm Hug",
      letter: MBTI.F,
    }
  },
];