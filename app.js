document.addEventListener("DOMContentLoaded", function () {
  // let time1 = 100; // здесь вы можете установить другое начальное значение
  // const countdown = document.getElementById("countdown");
  // setInterval(updateCountdown1, 1000);
  // function updateCountdown1() {
  //   const days = Math.floor(time1 / 86400);
  //   const hours = Math.floor((time1 % 86400) / 3600);
  //   const minutes = Math.floor((time1 % 3600) / 60);
  //   let seconds = time1 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown.innerHTML = `${days}:${hours}${minutes}:${seconds}`;
  //   const minutesWithZero = minutes < 10 ? "0" + minutes : minutes;
  //   time1--;
  //   updateCountdown("countdown", time1);
  // }
  // let time2 = 100000;
  // const countdown_orig = document.getElementById("countdown_orig");
  // setInterval(updateCountdown2, 1000);
  // function updateCountdown2() {
  //   const days = Math.floor(time2 / 86400);
  //   const hours = Math.floor((time2 % 86400) / 3600);
  //   const minutes = Math.floor((time2 % 3600) / 60);
  //   let seconds = time2 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_orig.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   const minutesWithZero = minutes < 10 ? "0" + minutes : minutes;
  //   time2--;
  //   updateCountdown("countdown_orig", time2);
  // }
  // let time3 = 330000;
  // const countdown_three = document.getElementById("countdown_three");
  // setInterval(updateCountdown3, 1000);
  // function updateCountdown3() {
  //   const days = Math.floor(time3 / 86400);
  //   const hours = Math.floor((time3 % 86400) / 3600);
  //   const minutes = Math.floor((time3 % 3600) / 60);
  //   let seconds = time3 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_three.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   time3--;
  //   updateCountdown("countdown_three", time3);
  // }
  // let time4 = 330000;
  // const countdown_for = document.getElementById("countdown_for");
  // setInterval(updateCountdown4, 1000);
  // function updateCountdown4() {
  //   const days = Math.floor(time4 / 86400);
  //   const hours = Math.floor((time4 % 86400) / 3600);
  //   const minutes = Math.floor((time4 % 3600) / 60);
  //   let seconds = time4 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_for.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   time4--;
  //   updateCountdown("countdown_for", time4);
  // }
  // let time5 = 390000;
  // const countdown_five = document.getElementById("countdown_five");
  // setInterval(updateCountdown5, 1000);
  // function updateCountdown5() {
  //   const days = Math.floor(time5 / 86400);
  //   const hours = Math.floor((time5 % 86400) / 3600);
  //   const minutes = Math.floor((time5 % 3600) / 60);
  //   let seconds = time5 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_five.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   time5--;
  //   updateCountdown("countdown_five", time5);
  // }
  // let time6 = 330000;
  // const countdown_six = document.getElementById("countdown_six");
  // setInterval(updateCountdown6, 1000);
  // function updateCountdown6() {
  //   const days = Math.floor(time6 / 86400);
  //   const hours = Math.floor((timу6 % 86400) / 3600);
  //   const minutes = Math.floor((tim6 % 3600) / 60);
  //   let seconds = time6 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_six.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   time6--;
  //   updateCountdown("countdown_six", time6);
  // }
  // let time7 = 510000;
  // const countdown_seven = document.getElementById("countdown_seven");
  // setInterval(updateCountdown7, 1000);
  // function updateCountdown7() {
  //   const days = Math.floor(time2 / 86400);
  //   const hours = Math.floor((time2 % 86400) / 3600);
  //   const minutes = Math.floor((time2 % 3600) / 60);
  //   let seconds = time2 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_seven.innerHTML = `${days}:${hours}${minutes}:${seconds}`;
  //   time7--;
  //   updateCountdown("countdown_seven", time7);
  // }
  // let time8 = 9000;
  // const countdown_eight = document.getElementById("countdown_eight");
  // setInterval(updateCountdown8, 1000);
  // function updateCountdown8() {
  //   const days = Math.floor(time8 / 86400);
  //   const hours = Math.floor((time8 % 86400) / 3600);
  //   const minutes = Math.floor((time8 % 3600) / 60);
  //   let seconds = time8 % 60;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   countdown_eight.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  //   time8--;
  //   updateCountdown("countdown_eight", time8);
  // }
  // // formatTime..
  // function formatTime(time) {
  //   return time < 10 ? `0${time}` : time;
  // }
  // function updateCountdown1() {
  //   const days = Math.floor(time8 / 86400);
  //   const hours = Math.floor((time8 % 86400) / 3600);
  //   const minutes = Math.floor((time8 % 3600) / 60);
  //   const seconds = time8 % 60;
  //   countdown.innerHTML = `${formatTime(days)}:${formatTime(
  //     hours
  //   )}:${formatTime(minutes)}:${formatTime(seconds)}`;
  //   time8--;
  // }
});
// localStorage.removeItem("time1");

document.addEventListener("DOMContentLoaded", function () {
  let time1 = localStorage.getItem("time1")
    ? parseInt(localStorage.getItem("time1"))
    : 192022;
  const countdown = document.getElementById("countdown");
  if (time1 > 0) {
    time1--;
  }
  setInterval(updateCountdown1, 1000);

  function updateCountdown1() {
    if (time1 <= 0) {
      clearInterval(this);
      return;
    }

    let days = Math.floor(time1 / 86400);
    let hours = Math.floor((time1 % 86400) / 3600);
    let minutes = Math.floor((time1 % 3600) / 60);
    let seconds = time1 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time1", time1);
    time1--;
  }
  function resetTimer() {
    time1 = 392100; // Ваше начальное значение
    localStorage.setItem("time1", time1);
    updateCountdown1(); // Немедленное обновление таймера
  }
  // time2

  let time2 = localStorage.getItem("time2")
    ? parseInt(localStorage.getItem("time2"))
    : 300222;
  const countdown_orig = document.getElementById("countdown_orig");

  setInterval(updateCountdown2, 1000);
  if (time2 > 0) {
    time2--;
  }
  function updateCountdown2() {
    if (time2 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time2 / 86400);
    let hours = Math.floor((time2 % 86400) / 3600);
    let minutes = Math.floor((time2 % 3600) / 60);
    let seconds = time2 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_orig.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time2", time2);
    time2--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_2() {
    time2 = 3600; // Начальное значение
    localStorage.setItem("time2", time2);
    updateCountdown2(); // Немедленное обновление таймера
  }
  // time3
  let time3 = localStorage.getItem("time3")
    ? parseInt(localStorage.getItem("time3"))
    : 300222;
  const countdown_three = document.getElementById("countdown_three");

  setInterval(updateCountdown3, 1000);
  if (time3 > 0) {
    time3--;
  }
  function updateCountdown3() {
    if (time3 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time3 / 86400);
    let hours = Math.floor((time3 % 86400) / 3600);
    let minutes = Math.floor((time3 % 3600) / 60);
    let seconds = time3 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_three.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time3", time3);
    time3--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_3() {
    time3 = 3600; // Начальное значение
    localStorage.setItem("time3", time3);
    updateCountdown3(); // Немедленное обновление таймера
  }

  // time4
  let time4 = localStorage.getItem("time4")
    ? parseInt(localStorage.getItem("time4"))
    : 243022;
  const countdown_for = document.getElementById("countdown_for");

  setInterval(updateCountdown4, 1000);
  if (time4 > 0) {
    time4--;
  }
  function updateCountdown4() {
    if (time4 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time4 / 86400);
    let hours = Math.floor((time4 % 86400) / 3600);
    let minutes = Math.floor((time4 % 3600) / 60);
    let seconds = time4 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_for.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time4", time4);
    time4--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_4() {
    time4 = 3600; // Начальное значение
    localStorage.setItem("time4", time4);
    updateCountdown4(); // Немедленное обновление таймера
  }
  // time5

  let time5 = localStorage.getItem("time5")
    ? parseInt(localStorage.getItem("time5"))
    : 433022;
  const countdown_five = document.getElementById("countdown_five");

  setInterval(updateCountdown5, 1000);
  if (time5 > 0) {
    time5--;
  }
  function updateCountdown5() {
    if (time5 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time5 / 86400);
    let hours = Math.floor((time5 % 86400) / 3600);
    let minutes = Math.floor((time5 % 3600) / 60);
    let seconds = time5 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_five.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time5", time5);
    time5--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_5() {
    time5 = 3600; // Начальное значение
    localStorage.setItem("time5", time5);
    updateCountdown5(); // Немедленное обновление таймера
  }
  // time6
  let time6 = localStorage.getItem("time6")
    ? parseInt(localStorage.getItem("time6"))
    : 243022;
  const countdown_six = document.getElementById("countdown_six");

  setInterval(updateCountdown6, 1000);
  if (time6 > 0) {
    time6--;
  }
  function updateCountdown6() {
    if (time6 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time6 / 86400);
    let hours = Math.floor((time6 % 86400) / 3600);
    let minutes = Math.floor((time6 % 3600) / 60);
    let seconds = time6 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_six.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time6", time6);
    time6--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_6() {
    time5 = 3600; // Начальное значение
    localStorage.setItem("time5", time6);
    updateCountdown6(); // Немедленное обновление таймера
  }
  // time7
  let time7 = localStorage.getItem("time7")
    ? parseInt(localStorage.getItem("time7"))
    : 291022;
  const countdown_seven = document.getElementById("countdown_seven");

  setInterval(updateCountdown7, 1000);
  if (time7 > 0) {
    time7--;
  }
  function updateCountdown7() {
    if (time7 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time7 / 86400);
    let hours = Math.floor((time7 % 86400) / 3600);
    let minutes = Math.floor((time7 % 3600) / 60);
    let seconds = time7 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Обновление HTML после вычислений
    countdown_seven.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time7", time7);
    time7--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_5() {
    time7 = 3600; // Начальное значение
    localStorage.setItem("time7", time7);
    updateCountdown7(); // Немедленное обновление таймера
  }
  // time8
  let time8 = localStorage.getItem("time8")
    ? parseInt(localStorage.getItem("time8"))
    : 298722;
  const countdown_eight = document.getElementById("countdown_eight");

  setInterval(updateCountdown8, 1000);
  if (time8 > 0) {
    time8--;
  }
  function updateCountdown8() {
    if (time8 <= 0) {
      clearInterval(this);
      return;
    }

    // Вычисление времени
    let days = Math.floor(time8 / 86400);
    let hours = Math.floor((time8 % 86400) / 3600);
    let minutes = Math.floor((time8 % 3600) / 60);
    let seconds = time8 % 60;

    days = days < 10 ? "0" + days : days;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление HTML после вычислений
    countdown_eight.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    // Сохранение текущего времени в localStorage
    localStorage.setItem("time8", time8);
    time8--;
  }

  // Исправленная функция для сброса таймера
  function resetTimer_5() {
    time8 = 3600; // Начальное значение
    localStorage.setItem("time8", time8);
    updateCountdown8(); // Немедленное обновление таймера
  }
});

// function updateCountdown1() {
//   const days = Math.floor(time8 / 86400);
//   const hours = Math.floor((time8 % 86400) / 3600);
//   const minutes = Math.floor((time8 % 3600) / 60);
//   const seconds = time8 % 60;

//   countdown.innerHTML = `${formatTime(days)}:${formatTime(hours)}:${formatTime(
//     minutes
//   )}:${formatTime(seconds)}`;

//   time8--;
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// function updateCountdown(elementId, time) {
//   const days = Math.floor(time / 86400);
//   const hours = Math.floor((time % 86400) / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   const countdownElement = document.getElementById(elementId);
//   countdownElement.innerHTML = `${formatTime(days)}:${formatTime(
//     hours
//   )}:${formatTime(minutes)}:${formatTime(seconds)}`;

//   time--;
// }

// // the form disappears

// document.addEventListener("DOMContentLoaded", function () {
//   const shareAndDownloadButton = document.querySelector(
//     "#downloadButton_1 .btn_offer"
//   );
//   const offerPanel = document.getElementById("offerPanel");

//   shareAndDownloadButton.addEventListener("click", function () {
//     offerPanel.style.display = "none";
//   });
// });
const downloadButton8 = document.getElementById("downloadButton_8");
const downloadableImage8 = document.getElementById("downloadableImage_8");

downloadButton8.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage8.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton7 = document.getElementById("downloadButton_7");
const downloadableImage7 = document.getElementById("downloadableImage_7");

downloadButton7.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage7.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton6 = document.getElementById("downloadButton_6");
const downloadableImage6 = document.getElementById("downloadableImage_6");

downloadButton6.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage6.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton5 = document.getElementById("downloadButton_5");
const downloadableImage5 = document.getElementById("downloadableImage_5");

downloadButton5.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage5.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton4 = document.getElementById("downloadButton_4");
const downloadableImage4 = document.getElementById("downloadableImage_4");

downloadButton4.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage4.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton3 = document.getElementById("downloadButton_3");
const downloadableImage3 = document.getElementById("downloadableImage_3");

downloadButton3.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage3.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton2 = document.getElementById("downloadButton_2");
const downloadableImage2 = document.getElementById("downloadableImage_2");

downloadButton2.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage2.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const downloadButton1 = document.getElementById("downloadButton_1");
const downloadableImage1 = document.getElementById("downloadableImage_1");

downloadButton1.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.webp";
  link.href = downloadableImage1.src;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//xrs img
