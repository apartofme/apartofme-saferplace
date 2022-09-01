export const en = {
  buttons: {
    confirm: 'Confirm',
    enter: 'Enter',
    next: 'Next',
    login: 'Login',
    register: 'Register',
    skip: 'Skip',
    forgot_password: 'Forgot the password?',
    get_started: 'Get Started',
    deposit: 'Top Up Deposit',
    view_all: 'View All',
    show_all: 'Show All',
    attend: 'Attend',
    bid_now: 'Bid Now',
    ready: 'I’m ready',
  },
  screens: {
    onboarding: {
      welcome: {
        title: 'welcome to a',
      },
      languageSelection: {
        title: 'What Language would you like to use?',
      },
      acknowledgement: {
        title:
          'If you have arrived here, then I know you and your family have been through some really tough times.',
        subTitle:
          'I am so sorry that you have had to experience this. I am here to guide you and your child to find a way through this.',
      },
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
    menu: {
      main_menu: {
        header: 'Menu',
        title: 'What would you like to do today?',
        parents_guide: 'Parents guide',
        logout: 'Logout',
      },
    },
  },
  languages: {
    english: 'English',
    ukrainian: 'Ukrainian',
    russian: 'Russian',
  },
  labels: {
    menu: 'Menu',
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
