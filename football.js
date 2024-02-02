// Пример использования Fetch API для получения данных о новостях и расписании
fetch('https://api.example.com/news')
    .then(response => response.json())
    .then(newsData => {
        const newsSlider = document.getElementById('news-slider');
        newsData.forEach(news => {
            const newsArticle = document.createElement('article');
            newsArticle.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
            newsSlider.appendChild(newsArticle);
        });
    });

fetch('https://api.example.com/schedule')
    .then(response => response.json())
    .then(scheduleData => {
        const matchSchedule = document.getElementById('match-schedule');
        scheduleData.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.innerHTML = `<h4>${match.team1} vs ${match.team2}</h4><p>${match.date}</p>`;
            matchSchedule.appendChild(matchCard);
        });
    });

// Дополнительный JavaScript код при необходимости
