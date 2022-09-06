export const en = {
  buttons: {
    back: 'back',
    confirm: 'Confirm',
    enter: 'Enter',
    next: 'Next',
    login: 'Login',
    signup: 'Sign up',
    skip: 'Skip',
    privacy_policy: 'Privacy Policy',
    terms_conditions: 'Terms & Conditions',

    // Dummy
    forgot_password: 'Forgot the password?',
    get_started: 'Get Started',
    deposit: 'Top Up Deposit',
    view_all: 'View All',
    show_all: 'Show All',
    attend: 'Attend',
    bid_now: 'Bid Now',
    ready: 'I’m ready',
    we_ready: 'We’re ready',
  },
  placeholders: {
    enter_email: 'Enter your email address',
    create_password: 'Create a password',
  },
  screens: {
    onboarding: {
      welcome: {
        title: 'welcome to a',
      },
      language_selection: {
        title: 'What Language would you like to use?',
      },
      acknowledgement: {
        title:
          'If you have arrived here, then I know you and your family have been through some really tough times.',
        subTitle:
          'I am so sorry that you have had to experience this. I am here to guide you and your child to find a way through this.',
      },
      sign_up_credentials: {
        title: 'Create an account',
        subTitle: 'Already have an account?',
        footer: 'By creating on account you agreeing to our',
      },
      sign_up_nickname: {
        title: 'What should we call you?',
        subTitle: '',
      },
      sign_up_avatar: {
        title: 'Select your avatar',
        subTitle: '',
        charms_introducing: {
          first: {
            title: 'Charms',
            subTitle:
              'To advance through the app, you and your child will complete special exercises together, called Charms.',
          },
          second: {
            title: 'Charms',
            subTitle:
              'These are fun and simple actions to perform which will help you connect with each other and grow together.',
          },
          third: {
            title: 'A Charm for you',
            subTitle:
              'Why don`t you try one yourself, first of all. You`ve also been through something difficult.',
          },
        },
      },
      onboard_carousel: {
        first: {
          title: 'A Safer Place',
          subTitle:
            'This app has been created to help you and your child understand the difficult things that you have been through together.',
        },
        second: {
          title: 'Snappy Title here',
          subTitle:
            'It mixes magical storytelling and proven therapy techniques to keep you both motivated and engaged.',
        },
        third: {
          title: 'A Better Future',
          subTitle:
            'In just two weeks, you will both feel calmer, closer to each other, and more in control.',
        },
      },
      joint: {
        loading: {
          first: {
            title: 'Loading Forest....',
            subtitle:
              'You can now introduce your child to A Safer Place. You can do this whenever is best for both of you.',
          },
          second: {
            title: 'Funny random loading thing...',
            subtitle:
              "We suggest telling your child that you've got something magical to play with together. Whenever they are comfortable and curious, you can begin.",
          },
        },
      },
      sidekick_intro: {
        firstPhrase: 'Who is this, who has found their way into my forest?',
        secondPhrase:
          'Travellers? But where have you come from, and where are you going?',
        thirdPhrase: 'It doesn`t matter. You`re here now.',
        fourthPhrase:
          'You look worried. Especially the big one. But there is nothing to fear.',
        fifthPhrase: 'I forgot... how rude. Just a moment...',
        sixthPhrase:
          'There. That`s better. I forget that you humans can`t see me, sometimes.',
        seventhPhrase:
          'I like to give every visitor to my forest a personal greeting.\nBut first I need to know what to call you...',
        eighthPhrase: 'If there is anything that I or my faithful assistant...',
        ninthPhrase:
          '...can do for you, please let me know. It is my job to care for everything in this forest: from the trees to the people passing through.',
        tenthPhrase:
          'And you? Are you two just passing through? You still look worried... in fact, you look as if you have both had a difficult time getting here.',
      },
    },
    menu: {
      main_menu: {
        header: 'Menu',
        title: 'What would you like to do today?',
        parents_guide: 'Parents guide',
        logout: 'Logout',
      },
      parents_guide: {
        questions: {
          section_first: {
            title: 'Section 1',
            question_first: 'question first',
            question_second: 'question second',
            question_third: 'question third',
          },

          section_second: {
            title: 'Section 2',
            question_first: 'question first',
            question_second: 'question second',
            question_third: 'question third',
          },
        },
      },
      feedback_success: {
        title: 'Thank you!',
        subtitle: 'We really appreciate your feedback.',
      },
    },
  },
  languages: {
    english: 'English',
    ukrainian: 'Ukrainian',
    russian: 'Russian',
  },
  labels: {
    and: 'and',
    take_photo: 'Take Photo',
    choose_library: 'Choose photo from library',

    // Dummy
    balance: 'Account balance',
    balance_availible: '{{currency}} {{value}} availible',
    balance_hold: '{{currency}} {{value}} on hold',
    upcoming_auctions: 'Upcoming auctions',
    my_last_bids: 'My last 24/7 bids',
    my_watchlist: 'My watchlist',
  },
  errors: {
    auth: {
      invalid_email: 'That email address is invalid!',
      email_already_in_use: 'That email address is already in use!',
    },
  },
};

export type Localization = typeof en;
