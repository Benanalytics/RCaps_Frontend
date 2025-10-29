import { addDays, intervalToDuration } from 'date-fns';

export const initialValues = {
  startFrom: null,
  destination: null,
  inBetween: [],
  startDate: null,
  startTime: null,
  avoidTolls: false,
  avoidTraffic: false,
  avoidHighways: false,
  hotels: false,
  restaurants: false,
  campGround: false,
  vehicle: null,
  chargersType: 'allChargers',
  connectorType: 'all',
  network: 'all',
  distance: '',
  time: '',
  speed: '',
  energy: '',
  cost: '',
};

export const initialReviewUpdateValues = {
  isModal: false,
  data: null,
  url: '',
};

export const secondsToDHMS = (seconds) => {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);

  let dDisplay = d > 0 ? d + (+d === 1 ? ' day, ' : ' days, ') : '';
  let hDisplay = h > 0 ? h + (+h === 1 ? ' hour, ' : ' hours, ') : '';
  let mDisplay = m > 0 ? m + (+m === 1 ? ' minute, ' : ' minutes') : '';
  return dDisplay + hDisplay + mDisplay;
};

export function dateAgo(pastDate) {
  let difference = intervalToDuration({
    start: new Date(),
    end: new Date(pastDate),
  });
  return difference?.years > 0
    ? `${difference.years} ${difference.years === 1 ? 'y' : 'y'}`
    : difference.months > 0
    ? `${difference.months} ${difference.months === 1 ? 'm' : 'm'}`
    : difference.days > 0
    ? `${difference.days} ${difference.days === 1 ? 'd' : 'd'}`
    : difference.hours > 0
    ? `${difference.hours} ${difference.hours === 1 ? 'h' : 'h'}`
    : `${difference.minutes} ${difference.minutes === 1 ? 'm' : 'm'}`;
}

export function dateComing(upcomingDate) {
  let difference = intervalToDuration({
    start: new Date(upcomingDate),
    end: new Date(),
  });
  return `${
    difference?.years > 0
      ? `${difference.years} year${difference.years === 1 ? '' : 's'}`
      : ''
  }  ${
    difference.months > 0
      ? `${difference.months} month${difference.months === 1 ? '' : 's'}`
      : ''
  }  ${
    difference.days > 0
      ? `${difference.days} day${difference.days === 1 ? '' : 's'}`
      : ''
  }`;
}

export function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export const tripStatus = {
  isCompleted: 'completed',
  inProgress: 'inprogress',
  isCancelled: 'cancelled',
  notStarted: 'notStarted',
};
