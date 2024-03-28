export function formatDate (d) {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    //let day = days[d.getDay()];
    let date = d.getDate();
    
    let month = months[d.getMonth()];
    if (month === ('Март' || 'Август')) {
      month = months[d.getMonth()] + 'a'
    } else {
      month = (months[d.getMonth()]).slice(0, -1) + 'я';
    }

    return `${date} ${month}`
  }