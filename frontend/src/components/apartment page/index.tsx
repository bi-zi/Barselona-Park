'use client';
import { useEffect, useState } from 'react';
import { SliderImages } from '../category page/apartments card/slider images';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import ru from 'date-fns/locale/ru';
import { subDays, addDays } from 'date-fns';
import { usePathname } from 'next/navigation';
import { apartmentsData } from '../../fake/apartmnetsData';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './style.module.scss';

import { reservationDays } from '../helpers/functions/reservationDays';
import { Apartment } from '../helpers/types/type';


export default function Apart() {
  // const dispatch = useAppDispatch();
  // const apartmentPage = useAppSelector((state) => state.apartmentPage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const pathname = usePathname();

  const apartmentId = pathname?.split('/')[1];

  const apartment1 = apartmentsData?.find((x) => x.apartmentName === apartmentId?.split('-')[1]);

  // console.log(apartment?.description.join(' '))

  const excludedDates = [
    'Mar 08 2023',
    'Mar 09 2023',
    'Mar 10 2023',
    'Mar 12 2023',
    'Mar 13 2023',
    'Mar 14 2023',
    'Mar 23 2023',
    'Mar 24 2023',
    'Mar 25 2023',
  ].map((x) => new Date(x));

  if (endDate !== null) {
    // console.log(reservationDays(startDate, endDate, excludedDates));
  }
  let i = 0;

  // fetch('http://localhost:3500/addNewApartment', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(apartmentsData[0]),
  // })
  //   .then((response) => response.json())
  //   .then((response) => console.log(JSON.stringify(response)));

  // useEffect(() => {
  //   apartmentsData.map(x => {
  //     fetch('http://localhost:3500/addNewApartment', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(x),
  //   })
  //     .then((response) => response.json())
  //         .then((response) => console.log(JSON.stringify(response)));
  //   })
  // }, []);

  if (apartment1 === undefined) return <div>Загрузка</div>;
  return (
    <div className={styles.apartment}>
      <div className={styles.apartmentName}>Апартамент {apartment1?.apartmentName}</div>

      {/* <div className={styles.apartmentTop}>
        <div className={styles.apartmentTopSlider}>
          <SliderImages
            apartment={apartment}
            apartmentIndex={0}
            options={{
              className: styles.apartmentTopSliderImage,
              sizes: '600px',
              fit: 'fill',
              lazy: 1,
              border: 0,
              quality: 100,
            }}
          />
        </div>

        <div className={styles.apartmentTopCalendar}>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            locale={ru}
            onChange={onChange}
            excludeDates={excludedDates}
            selectsRange
            minDate={subDays(new Date(), 0)}
            maxDate={addDays(new Date(), 365)}
            monthsShown={1}
            calendarStartDay={1}
            inline
            fixedHeight
          />
        </div>
      </div> */}

      <ul className={styles.apartmentUl}>
        {apartment1?.about.description.map((x, i) => (
          <li key={i} className={styles.apartmentUlLi}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

// <form className="calendar-form" onSubmit={handleSubmit(onSubmit)}>
//   <div className="div-bloc">
//     <p>
//       <input
//         className="text-input"
//         type="text"
//         placeholder="Имя и фамилия"
//         {...register('Имя и фамилия', { required: true, maxLength: 120 })}
//       />
//       <br />
//       <input
//         className="text-input"
//         type="tel"
//         placeholder="Номер телефона"
//         {...register('Номер телефона', { required: true, maxLength: 12 })}
//       />
//     </p>
//     <p>
//       <input
//         className="text-input"
//         type="text"
//         placeholder="Email"
//         {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
//       />
//       <br />
//       <input
//         className="text-input"
//         type="text"
//         placeholder="Комментарий"
//         {...register('Комментарий', { required: true, maxLength: 180 })}
//       />
//     </p>
//   </div>

//   <div className="block-select">
//     <p className="select-checkbox">
//       <span className="select">
//         <label>Количество людей</label>
//         <select placeholder="Количество людей" {...register('Количество людей', { required: true })}>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//         </select>
//       </span>

//       <br />
//       <span className="checkbox">
//         <label>Дети</label>
//         <input type="checkbox" placeholder="Дети" {...register('Дети', { required: true })} />
//         <label>Животные</label>
//         <input type="checkbox" placeholder="Животные" {...register('Животные', {})} />
//       </span>
//     </p>
//     <input className="main-buttons-style" type="submit" value="Забронировать" />
//   </div>
// </form>;

// const aa: any = [];

// if (apartment?.balcony) {
//   aa.push('балкон');
// }
// if (apartment?.view) {
//   aa.push('вид на море');
// }
// if (apartment?.view === false) {
//   aa.push('вид на город');
// }

// if (apartment?.dishwasher) {
//   aa.push('посудомоечная машина');
// }

// if (apartment?.oven) {
//   aa.push('духовка');
// }

// if (apartment?.coffeeMachine) {
//   aa.push('кофемашина');
// }

// const rom =
//   apartment?.rooms === '3'
//     ? 'Трехкомнатный апартамент'
//     : apartment?.rooms === '2'
//     ? 'Двухкомнатный апартамент'
//     : apartment?.rooms === '1'
//     ? 'Однокомнатный апартамент'
//     : 'Апартамент студия';

// const first = `площадью ${apartment?.squareMeters} кв/м с ${apartment?.sleepingPlaces} спальными местами для семьи или компании друзей`;

// const second =
//   '  диван, обеденный стол и кондиционер, ванная комната совмещена с туалетом, в апартаменте всегда чистое постельное белье, свежесть и комфорт';

// const vse = aa
//   .concat([
//     'wi-fi',
//     '3 кондиционера',
//     'телевизор',
//     'фен',
//     'полотенца',
//     'утюг',
//     'стиральная машина',
//     'микроволновка',
//     'чайник',
//     'холодильник',
//     'можно с детьми и животными',
//   ])
//   .join(', ');

// console.log(`${rom} ${first}. ${second}. Апартамент включает в себя ${vse}!`);

// console.log(
//   'Трехкомнатный апартамент с площадью 60 кв м и 6 спальными местами для семьи или друзей – это идеальное место для отдыха и пребывания. Комнаты оборудованы двуспальными кроватями с прикроватными тумбочками и кондиционерами, а зал располагает кухней, диваном, обеденным столом и кондиционером. В апартаменте всегда чистое постельное белье, свежесть и комфорт. Вы можете наслаждаться прекрасным видом на море и иметь все необходимое для проживания: духовка, wifi, 3 кондиционера, телевизор, фен, полотенца, утюг, стиральная машина, микроволновка, чайник, холодильник. Апартамент приглашает Вас и Ваших детей, а также любимых питомцев!'.split('.'),
// );

// const userReservation = {
//   days: [],
//   email: 'bizi@gmail.com',
//   phoneNumber: '+7 (981) 654-32-10',
//   fullName: 'Boris Borisovich',
//   comment: 'Мы готовы приехать',
//   bookingTime: new Date(),
//   peopleNumber: '',
//   children: '',
//   animals: '',
// };
