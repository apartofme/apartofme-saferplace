export const en = {
  buttons: {
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
