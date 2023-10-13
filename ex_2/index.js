function saveUserData(userData) {
  return new Promise((resolve, reject) => {
    const url = 'https://reqres.in/api/users' // Здесь указываем URL сервера

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Преобразовываем объект в JSON
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json(); // Парсим JSON из ответа
        } else {
          reject('Error: Unable to save user data'); // Промис отклоняется при ошибке
        }
      })
      .then((data) => {
        resolve(data);  // Разрешаем промис с данными о пользователе
      })
      .catch((error) => {
        reject('Error: ' + error); // Промис отклоняется при ошибке
      });
  });
}

// Пример использования

const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)
  .then((data) => {
    console.log('User data saved successfully!', data)
  })
  .catch((error) => {
    console.error('Error', error);
  });