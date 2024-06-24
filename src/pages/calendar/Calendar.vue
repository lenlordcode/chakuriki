<template>
  <div>
    <h1 class="font-bold text-red-600 mb-4">Календарь соревнований</h1>

    <!-- Month and Year Selection -->
    <div class="mb-4">
      <label for="month">Выберите месяц:</label>
      <select v-model="selectedMonth" id="month" @change="updateCalendar">
        <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
      </select>

      <label for="year">Выберите год:</label>
      <select v-model="selectedYear" id="year" @change="updateCalendar">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    <!-- Calendar Display -->
    <div class="grid grid-cols-7 gap-2">
      <div
          v-for="day in calendarDays"
          :key="day.date"
          @click="showEvents(day)"
          :class="{
            'bg-yellow-400': day.events.length > 0,
            'cursor-pointer': day.events.length > 0,
          }"
          class="p-2 border hover:bg-red-600"
      >
        <div class="text-center font-bold" @click="selectDay = day">{{ day.number }}</div>
      </div>
    </div>

    <!-- Display Events for Selected Day -->
    <div class="col-span-7 mt-4">
      <h2 class="font-bold text-red-600">События на {{selectDay.date}}:</h2>
      <div v-for="(event, index) in selectedDayEvents" :key="index" class="bg-yellow-400 p-2 mt-2 rounded">
        {{ event.name }} - {{ event.time }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import dayjs from "dayjs";
import 'dayjs/locale/ru';

  export default {
    name: "Calendar",
    data() {
      return {
        selectDay: '',
        months: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        years: [2022, 2023, 2024], // Update with desired range of years
        selectedMonth: dayjs().month() + 1, // Default to current month
        selectedYear: dayjs().year(), // Default to current year
        calendarDays: [],
        selectedDayEvents: [],
      };
    },
    computed: {
      totalDaysInMonth() {
        return dayjs(`${this.selectedYear}-${this.selectedMonth}`, 'YYYY-MM').daysInMonth();
      }
    },
    mounted() {
      this.updateCalendar();
      this.calendarDays[5].events = [ // Тест
        { name: 'Финальный поеднинок', time: '14:00' },
        { name: 'Соревнование в разных категория', time: '10:00' }
      ];
      this.calendarDays[10].events = [ // Тест
        { name: 'Бой за титул чемпиона', time: '16:00' }
      ];
    },
    methods: {
      showEvents(day) {
        this.selectedDayEvents = day.events;
      },
      updateCalendar() {
        this.calendarDays = [];
        const firstDayOfMonth = dayjs(`${this.selectedYear}-${this.selectedMonth}-01`, 'YYYY-MM-DD').locale('ru');
        const startDay = firstDayOfMonth.startOf('month').startOf('week');
        const endDay = firstDayOfMonth.endOf('month').endOf('week');

        let currentDate = startDay;
        while (currentDate.isBefore(endDay)) {
          this.calendarDays.push({
            date: currentDate.format('YYYY-MM-DD'),
            number: currentDate.date(),
            events: [] // You can populate events based on your specific logic
          });
          currentDate = currentDate.add(1, 'day');
        }
      },
    },
  };
</script>


