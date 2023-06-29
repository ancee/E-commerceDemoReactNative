export class OnBoardingModel {
  public key: string;
  public text: string;
  public title: string;
  public image: string;
  public backgroundColor: string;

  constructor(
    key: string,
    text: string,
    title: string,
    image: string,
    backgroundColor: string,
  ) {
    this.key = key;
    this.text = text;
    this.title = title;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }
}

export const slides: OnBoardingModel[] = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    backgroundColor: '#febe29',
  },
];
