export const FROM_OPTIONS = [
  {
    id: 'itsupport',
    text: 'ITSupport@Goongle.com',
    points: 100,
    description: 'Excellent! Goongle looks just like Google, '
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
