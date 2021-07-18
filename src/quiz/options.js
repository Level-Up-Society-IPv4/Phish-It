import pdf from '../assets/pdf.png';
import goongle from '../assets/goongle.png';

//Email Sender
export const FROM_OPTIONS = [
  {
    id: 'itsupport',
    text: 'ITSupport@Goongle.com',
    points: 100,
    description: 'Excellent! “Goongle” looks just like “Google”, '
      + 'so John will think your email is from them.'
  },
  {
    id: 'mary',
    text: 'Mary@SevemthNimthBamk.com',
    points: 50,
    description: 'Smart! He might misread “SevemthNimthBamk” as “SeventhNinthBank” '
      + 'and think that Mary is his coworker. But why would he give his Gmail password to Mary? '
      + 'Maybe it would be better to impersonate Google.'
  },
  {
    id: 'evilhacker',
    text: 'EvilHacker@BadGuy.net',
    points: 0,
    description: 'Your email says you are a bad person! He will be tipped off '
      + 'that you are out to catch salmon.'
  }
];

//Email Subject Line
export const getSubjectOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'filles',
        text: 'We had an issues with your filles',
        points: 80,
        description: 'Great! Since this is not a specifically targeted phish, '
          + 'it will likely go out to many users. These typos will ensure that savvy users '
          + 'will not interact with this email and waste your time. '
          + 'Only oblivious users, who are easier targets, are likely to engage.'
      },
      {
        id: 'suspicious',
        text: 'URGENT: There is suspicious activity on your account',
        points: 100,
        description: 'Perfect! Make John nervous. The more urgent he thinks your request is, '
        + 'the less time he will spend verifying its authenticity.'
      }
    ]
  } else {
    return [
      {
        id: 'doccument',
        text: 'Pleas help me with my doccuments',
        points: 50,
        description: 'Sometimes, if you have an obvious scam, you can avoid interaction from savvy users by adding typos. '
          + 'However, since this is a targeted phish, you probably want to make your email as believable as possible.'
      },
      {
        id: 'lostpassword',
        text: 'URGENT: Lost my password',
        points: 100,
        description: 'Perfect! Make John nervous. The more urgent he thinks your request is, '
          + 'the less time he will spend verifying its authenticity.'
      },
      {
        id: 'checksecond',
        text: 'Check when you have a second',
        points: 0,
        description: 'This subject is not alarming. Try something that will make him act rashly!'
      }
    ];
  }
}

//Body - Greeting
export const getGreetingOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'hijohn',
        text: 'Hi John,',
        points: 50,
        description: 'Good choice! Addressing John by name gains his trust and makes this message seem more important.'
      },
      {
        id: 'user',
        text: 'Valued user,',
        points: 0,
        description: 'This greeting is too impersonal. John will trust you more if you address him by name!'
      }
    ];
  } else {
    return [
      {
        id: 'john',
        text: 'John,',
        points: 50,
        description: 'Good choice! Addressing John by name gains his trust and makes this message seem more important.'
      },
      {
        id: 'user',
        text: 'Hello,',
        points: 0,
        description: 'This greeting is too impersonal. John will trust you more if you address him by name!'
      }
    ];
  }
}

//Body - Situation
export const getEmailStartOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'account-accessed1',
        text: 'Your Gmail account was recently accessed in Sudbury, Ontario. '
          + 'If you did not grant permission, someone else could be using your account.',
        points: 100,
        description: 'Good choice! This statement will cause John to panick and trust you more by reaching out for help.'
      },
      {
        id: 'account-hacked1',
        text: 'Your Gmail account has been haked! You need to reply back asap to get some help from us.',
        points: 0,
        description: 'Not a good choice. Spelling mistakes in the word \'haked\' and informal speech will reveal to John the falsification of this email.'
      }
    ];
  } else {
    return [
      {
        id: 'password-changed1',
        text: 'Your account password has been changed. '
          + 'If this was not you, please refrain from signing off, as you may not be able to sign back into this account.',
        points: 100,
        description: 'Good choice! This statement will cause John to panick and trust you more by reaching out for help.'
      },
      {
        id: 'system-hacked1',
        text: 'Our compter system was hacked. Now your account is lost and all the data is gone. You need to call us.',
        points: 0,
        description: 'Not a good choice. Spelling mistakes in the word \'compter\' and informal speech will reveal to John the falsification of this email.'
      }
    ];
  }
}

//Body - Second Sentence
export const getEmailEndOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'account-accessed2',
        text: 'Your security is our top priority. ' 
          + 'Please reply to this email if you have not opened your account in Sudbury, Ontario.',
        points: 50,
        description: 'Good choice! There is a small chance John could have opened up his account in Sudbury, Ontario. '
        + 'He will be tempted to reply back for help.'
      },
      {
        id: 'account-hacked2',
        text: 'When you reply to this email, please include your full name, address, date of birth, and banking institution.',
        points: 0,
        description: 'Bad choice! John is not clueless. '
          +'Once he realizes that the company is asking for his personal information, this phishing account will be blocked.'
      }
    ];
  } else {
    return [
      {
        id: 'system-hacked2',
        text: 'Call us right now before the comapny closes at 7pm.',
        points: 0,
        description: 'Not a good choice. Further spelling mistakes and a specific time will cause suspicion to arise within John.'
      },
      {
        id: 'password-changed2',
        text: 'You can reach to our experienced IT Department by replying back to this email with \'Password change request\'.',
        points: 50,
        description: 'Good choice! Adjectives such as \'experienced\' will spark trust and relief. ' 
          + 'John will not sign out of his account in fear of losing it.'
      }
    ];
  }
}
// Attachment options
export const ATTACHMENT_OPTIONS = [
  {
    id: 'pdf',
    text: 'Infected PDF document',
    points: 200,
    description: "Wow! Now you can compromise John's computer if he opens this file. "
      + "You don't even need him to send you his password!",
    cost: 100,
    image: pdf
  },
  {
    id: 'goongle',
    text: 'Fake "Goongle" logo',
    points: 100,
    description: 'This logo will make your email look much more legitimate!',
    cost: 50,
    image: goongle
  },
  {
    id: 'none',
    text: 'None',
    points: 0
  }
]

//SignOff
export const getSignOff = (fromOptionId) => {
  return fromOptionId === 'itsupport' ? 'Google' : 'Mary';
}

export const getMessage = (score) => {
  if (score === 400) {
    return "John had no idea what hit him! Your phishing skills blew him right out of the water. "
      + "He didn't even know he was tricked until his boss asked him about the leaked documents."
  } else if (score >= 300) {
    return 'John fell right into your trap! He sent you his password, then realized his mistake. '
      + 'He scrambled, but it was too late!';
  } else if (score >= 200) {
    return 'John thought something was off about this email, but he was too busy to worry about it. '
      + "He didn't want to waste any time figuring it out, so he sent you his password!"
  } else if (score >= 100) {
    return 'At first John believed you, but then he took a closer look. '
      + 'Something tipped him off about this email, so he deleted it and never responded.';
  } else {
    return 'John took one look at this email and knew it was a scam! '
      + 'He reported it to his IT department, proud of his detective skills. '
      + 'The IT department got in touch with the police, and you were arrested!'
  }
}
