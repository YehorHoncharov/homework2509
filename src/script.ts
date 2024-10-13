import moment from 'moment';
import express, { Request, Response } from 'express';
import path from 'path';
import postRouter from './routers/postRouter';

const app = express();

app.set('view engine', 'ejs');
// устанавливаем папку с шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'));

// подключаем статические файлы
app.use('/static/', express.static(path.join(__dirname, 'static')));

// для парсинга JSON
app.use(express.json());

// роут для обработки запросов к постам
app.use('/post/', postRouter);

app.get('/', (req: Request, res: Response) => {
  // res.sendFile(path.resolve(__dirname, "./templates/index.html"))
  const context = {
    // words: ['hello', 'world', 'rinat']
    title: 'posts of the day',
  };
  res.render('index', context);
});

const PORT = 8000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log("http://localhost:8000")
});