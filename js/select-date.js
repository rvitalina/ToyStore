const monthSelect = document.getElementById("dob-month");
const dateSelect = document.getElementById("dob-date");
const yearSelect = document.getElementById("dob-year");

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const dates = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
];

const years = [];
for (let year = 1920; year <= 2024; year++) {
  years.push({ value: year.toString(), label: year.toString() });
}

years.forEach(function (year) {
  const option = document.createElement("option");
  option.value = year.value;
  option.text = year.label;
  yearSelect.appendChild(option);
});

// Функция для обновления опций выбора даты в зависимости от выбранного месяца
function updateDateOptions() {
  const selectedMonth = monthSelect.value;
  const selectedMonthNumber = parseInt(selectedMonth);

  // Очистка текущих опций выбора даты
  dateSelect.innerHTML = "";

  // Определение максимального количества дней в выбранном месяце
  let maxDays = 30;
  if (selectedMonthNumber === 2) {
    maxDays = 28;
  } else if (
    selectedMonthNumber === 1 ||
    selectedMonthNumber === 3 ||
    selectedMonthNumber === 5 ||
    selectedMonthNumber === 7 ||
    selectedMonthNumber === 8 ||
    selectedMonthNumber === 10 ||
    selectedMonthNumber === 12
  ) {
    maxDays = 31;
  }

  const dateOptions = dates.slice(0, maxDays + 1);
  dateOptions.forEach(function (date) {
    const option = document.createElement("option");
    option.value = date.value;
    option.text = date.label;
    dateSelect.appendChild(option);
  });
}

months.forEach(function (month) {
  const option = document.createElement("option");
  option.value = month.value;
  option.text = month.label;
  monthSelect.appendChild(option);
});

monthSelect.addEventListener("change", updateDateOptions);

updateDateOptions();
