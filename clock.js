function rotateHands() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');
  const hourDeg = (hour * 30) + (minute / 2);
  const minuteDeg = (minute * 6) + (second / 10);
  const secondDeg = second * 6;
  hourHand.style.transform = rotateZ(${hourDeg}deg);
  minuteHand.style.transform = rotateZ(${minuteDeg}deg);
  secondHand.style.transform = rotateZ(${secondDeg}deg);
  setTimeout(rotateHands, 1000);
}

rotateHands();