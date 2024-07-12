<template>
  <section class="contacts">
    <h1 class="font-bold text-red-600 my-4">Контакты</h1>
    <section>
      <h2 class="font-bold text-red-600 my-4">E-mail</h2>
      <ul>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
        <li><a class="underline" href="mailto:test@mail.ru">test@mail.ru</a> (Тестовая почта)</li>
      </ul>
    </section>
    <section>
      <h2 class="font-bold text-red-600 my-4">Контактные телефоны</h2>
      <ul>
        <li><a class="underline" href="tel:+79991234455">+79991234455</a></li>
      </ul>
    </section>
    <section>
      <h2 class="font-bold text-red-600 my-4">WhatsApp</h2>
      <ul>
        <li><a class="underline" href="http://wa.me/+79991234455">+79991234455</a></li>
      </ul>
    </section>
    <section>
      <h2 class="font-bold text-red-600 my-4">Офис</h2>
      <ul>
        <li>Временно на работе</li>
      </ul>
    </section>
    <section>
      <h2 class="font-bold text-red-600 text-xl my-4">Социальные сети</h2>
      <ul class="font-bold">
        <li><a class="text-red-600" href="http://vk.com">ВКонтакте</a></li>
        <li><a class="text-red-600" href="https://web.telegram.org/">Telegram</a></li>
        <li><a class="text-red-600" href="https://ok.ru/">Одноклассники</a></li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
  .contacts ul {
    @apply pl-5
  }
  .contacts li{
    @apply list-disc
  }
</style>

<script>
export default {
  name: "Contacts"
}
</script>