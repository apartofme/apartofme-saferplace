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
  },
  screens: {
    onboarding: {
      welcome_to_a: 'welcome to a',
    },
  },
  languages: {
    english: 'English',
    ukrainian: 'Ukrainian',
    russian: 'Russian',
  },
  labels: {
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
