function UserPortrait () {
    let yearOfBirth = prompt('Введіть рік народження:');
    if (yearOfBirth === null) {
        alert('Шкода, що ви не захотіли вводити свою дату народження :(');
        return;
    }

    let city = prompt('Введіть місто, в якому ви живите:');
    if (city === null) {
        alert("Шкода, що ви не захотіли вводити своє місце проживання :(");
        return;
    }

    let typeOfSport = prompt('Введіть улюбленний вид спорту: ');
    if (typeOfSport === null) {
        alert("Шкода, що ви не захотіли вводити улюбленний вид спорту");
        return;
    }

    return function () {

        let finalMessage = 'Ваш вік: ' + (2023 - yearOfBirth) + `\n`


        if(city === 'Київ') {
            finalMessage += 'Вітаю, Ви живете у столиці Києва!\n'
        } else if (city === 'Лондон') {
            finalMessage += 'Вітаю, Ви живете у столиці Великобританії!\n'
        } else if (city === 'Вашингтон') {
            finalMessage += 'Вітаю, Ви живете у столиці США!\n'
        } else {
            finalMessage += 'Місце проживання: ' + city + `\n`
        }

        switch (typeOfSport) {
            case 'Формула-1':
                finalMessage += 'Круто! Хочешь стати як Макс Ферстаппен?';
                break;
            case 'Бокс':
                finalMessage += 'Круто! Хочешь стати як Олександр Олександрович Усик?';
                break;
            case 'Футбол':
                finalMessage += 'Круто! Хочешь стати як Ліонель Мессі?'
                break;

        }
        alert(finalMessage);
    }
}

const showInfo = UserPortrait();
showInfo();


