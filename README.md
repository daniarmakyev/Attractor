## Технологии

- React
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS
- Express (Backend)
- GitHub API

## Установка и запуск

1. Клонировать репозиторий:
```bash
git clone https://github.com/daniarmakyev/Attractor.git .
npm install
npm start
```
## Откройте еще один терминал в нынешней директории
```bash
ОБЯЗАТЕЛЬНО ОСВОБОДИТЕ ЛОКАЛЬНЫЙ 3002 ПОРТ
cd server
npm install
node index.js
```

## В текущей реализации проекта не реализованы все необходимые меры безопасности.
1. Перенести все запросы к GitHub API на бэкенд для предотвращения прямого доступа к токену на клиенте
2. Использовать шифрование access token на бэкенде
3. Реализовать state parameter (40-символьный случайный текст) при OAuth аутентификации
4. Добавить rate limiting для API запросов
7. Настроить secure headers (CORS)

## Как я реалозваол oAuth

<img src="./src/kit/assets/image/md.png"/>