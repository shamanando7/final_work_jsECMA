function changeStyleDelayed(elementId, delay) {
  setTimeout(function() {
    const element = document.getElementById(elementId);
    if (element) {
      // Изменяем стиль элемента. Например, меняем цвет фона.
      element.style.backgroundColor = 'red';
      element.style.color = 'white';
    }
  }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'

