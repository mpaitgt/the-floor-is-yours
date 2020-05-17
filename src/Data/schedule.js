import PoleImg from '../Images/pole.png';
import SalsaImg from '../Images/salsa-2.png';
import YogaImg from '../Images/yoga.png';
import HipHopImg from '../Images/hip-hop.png';
import Stock from '../Images/silks.png';

export const ClassTypes = [
  {
    id: 1,
    class_type: 'Pole',
    image: PoleImg
  }, 
  {
    id: 2,
    class_type: 'Striptease & Lap',
    image: Stock
  },
  {
    id: 3,
    class_type: 'Salsa',
    image: SalsaImg,
  },
  {
    id: 4,
    class_type: 'Yoga',
    image: YogaImg
  },
  {
    id: 5,
    class_type: 'Hip Hop / Street',
    image: HipHopImg
  }
];

export const ScheduleArray = [
  {
    id: 1,
    class_type: 'Pole Conditioning',
    class_day: 'Sunday',
    class_time: '9:00-9:45pm',
    class_details: '',
    instructor: 'Alexis',
    image: PoleImg
  },
  {
    id: 2,
    class_type: 'Intro to Pole',
    class_day: 'Sunday',
    class_time: '10:00-10:45am',
    class_details: '',
    instructor: 'Alexis',
    image: PoleImg
  },
  {
    id: 3,
    class_type: 'Yoga/Stretch',
    class_day: 'Sunday',
    class_time: '7:00-7:45pm',
    class_details: '',
    instructor: 'Hannah',
    image: YogaImg
  },
  {
    id: 4,
    class_type: 'Barre/Pilates',
    class_day: 'Monday',
    class_time: ' 5:00-5:45pm',
    class_details: '',
    instructor: 'Jennifer',
    image: Stock
  },
  {
    id: 5,
    class_type: 'Zumba',
    class_day: 'Tuesday',
    class_time: '7:00-7:45pm',
    class_details: '',
    instructor: 'Sondre',
    image: Stock
  },
  {
    id: 6,
    class_type: 'Exotic Floor Movement',
    class_day: 'Wednesday',
    class_time: '8:00-8:45pm',
    class_details: '',
    instructor: 'Bamm',
    image: Stock
  },
  {
    id: 7,
    class_type: 'Zumba',
    class_day: 'Thursday',
    class_time: '12:00-12:45pm',
    class_details: '',
    instructor: 'Sondre',
    image: SalsaImg
  },
  {
    id: 8,
    class_type: 'Yoga/Stretch',
    class_day: 'Thursday',
    class_time: '7:00-7:45pm',
    class_details: '',
    instructor: 'Hannah',
    image: YogaImg
  },
  {
    id: 9,
    class_type: 'Hip-Hop',
    class_day: 'Friday',
    class_time: '5:00-5:45pm',
    class_details: '',
    instructor: 'Breanah',
    image: HipHopImg
  },
  {
    id: 10,
    class_type: 'Bellydance/Burlesque',
    class_day: 'Saturday',
    class_time: '1:00-1:45pm',
    class_details: '',
    instructor: 'Christina',
    image: YogaImg
  }
];