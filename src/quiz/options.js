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

export const getEmailStartOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'todo1',
        text: 'TODO: A good first sentence from IT support.',
        points: 100,
        description: 'TODO: Good choice!'
      },
      {
        id: 'todo2',
        text: 'TODO: A bad first sentence from IT support.',
        points: 0,
        description: 'TODO: Not so good choice.'
      }
    ];
  } else {
    return [
      {
        id: 'todo3',
        text: 'TODO: A good first sentence.',
        points: 100,
        description: 'TODO: Good choice!'
      },
      {
        id: 'todo4',
        text: 'TODO: A bad first sentence.',
        points: 0,
        description: 'TODO: Not so good choice.'
      }
    ];
  }
}

export const getEmailEndOptions = (fromOptionId) => {
  if (fromOptionId === 'itsupport') {
    return [
      {
        id: 'todo5',
        text: 'TODO: A bad second sentence from IT support.',
        points: 0,
        description: 'TODO: Not so good choice.'
      },
      {
        id: 'todo6',
        text: 'TODO: A good second sentence from IT support.',
        points: 50,
        description: 'TODO: Good choice!'
      }
    ];
  } else {
    return [
      {
        id: 'todo7',
        text: 'TODO: A bad second sentence.',
        points: 0,
        description: 'TODO: Not so good choice.'
      },
      {
        id: 'todo8',
        text: 'TODO: A good second sentence.',
        points: 50,
        description: 'TODO: Good choice!'
      }
    ];
  }
}

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
