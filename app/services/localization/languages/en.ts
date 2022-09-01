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
    add_photo: '<- Add an optional profile photo',

    // Dummy
    forgot_password: 'Forgot the password?',
    get_started: 'Get Started',
    deposit: 'Top Up Deposit',
    view_all: 'View All',
    show_all: 'Show All',
    attend: 'Attend',
    bid_now: 'Bid Now',
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
        subtitle: 'Already have an account?',
        footer: 'By creating on account you agreeing to our',
      },
      sign_up_nickname: {
        title: 'What should we call you?',
        subtitle: '',
      },
      sign_up_avatar: {
        title: 'Select your avatar',
        subtitle: '',
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
