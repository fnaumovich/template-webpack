import './css/index.scss';
import _get from 'lodash.get';
import moment from 'moment';

function isNewYear(startDate) {
  return startDate.isBetween(
    moment('12-31 20:44', 'MM-DD HH:mm').utcOffset(startDate.utcOffset(), true),
    moment('01-01 06:16', 'MM-DD HH:mm').utcOffset(startDate.utcOffset(), true).add(1, 'year'),
  );
}


const date = '2018-12-31 20:45:00';
const date2 = '2019-01-01 06:15:00';
const date3 = '2018-12-31';
const date4 = '2019-01-01';

const momentedDay = moment(date4, 'YYYY-MM-DD HH:mm:ss')

console.log(isNewYear(momentedDay))
