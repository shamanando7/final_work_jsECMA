function getUserData(userID) {

  const url = `https://reqres.in/${userID}`;  // URL, по которому нужно делать запрос, предположим, что userID вставляется в URL как параметр  
  return fetch(url)                    // Возвращаем промис, который выполняется после завершения запроса
    .then((response) => {
      if (!response.ok) {              // Проверяем статус ответа, 200 означает успешный запрос       
        throw new Error(`Ошибка HTTP: ${response.status}`);   // Если статус не 200, отклоняем промис с сообщением об ошибке
      }
      return response.json();          // Разрешаем промис, парся данные из JSON
    })

    .then((userData) => {
      return userData;                 // Возвращаем данные о пользователе как объект
    })``
    .catch((error) => {
      return Promise.reject(error);    // Если произошла ошибка в любом из предыдущих шагов, отклоняем промис с сообщением об ошибке
    });
}

// Пример использования:

getUserData(123)
  .then((userData) => {
    console.log('Данные о пользователе:', userData);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
