import './styles.css';
import colors from './data/colors.json';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const toggleBtnsAccess = () => {
  btnStartRef.disabled = !btnStartRef.disabled;
  btnStopRef.disabled = !btnStopRef.disabled;
};

const startColorTimer = () =>
  setInterval(() => {
    const rndColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[rndColor];
  }, 1000);

const stopColorTimer = id => clearInterval(id);

let timerId = null;

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

btnStartRef.addEventListener('click', () => {
  timerId = startColorTimer();
  toggleBtnsAccess();
});

btnStopRef.addEventListener('click', () => {
  stopColorTimer(timerId);
  toggleBtnsAccess();
});
