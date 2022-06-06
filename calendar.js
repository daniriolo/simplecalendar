const date = new Date();
const renderCalendar = () => {
   date.setDate(1);
   const monthDays = document.querySelector('.days');
   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   const firstDayIndex = date.getDay();
   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
   const nextDays = 7 - lastDayIndex - 1;
   const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
   ];

   document.querySelector(".date h2").innerHTML = months[date.getMonth()];
   const currentDay = new Date();
   document.querySelector(".date p").innerHTML = currentDay.toDateString();

   let days = "";
   for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date" onclick="selected(${[date.getFullYear(), date.getMonth() - 1, x]})">${prevLastDay - x + 1}</div>`;
   }

   for (let i = 1; i <= lastDay; i++) {
      if (
         i === new Date().getDate() &&
         date.getMonth() === new Date().getMonth()
      ) {
         days += `<div class="today" onclick="selected('${currentDay}')" >${i}</div>`;
      } else {
         days += `<div onclick="selected(${[date.getFullYear(), date.getMonth(), i]})">${i}</div>`;
      }
   }

   for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date" onclick="selected(${[date.getFullYear(), date.getMonth() + 1, j]})">${j}</div>`;
   }
   monthDays.innerHTML = days;
};


document.querySelector('.prev').addEventListener('click', () => {
   date.setMonth(date.getMonth() - 1);
   renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
   date.setMonth(date.getMonth() + 1);
   renderCalendar();
});
renderCalendar();

function selected(year, month, day) {
   const selectedDate = new Date(year, month, day);
   console.log(selectedDate.toDateString());
}