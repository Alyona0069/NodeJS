// 1. модуль url:
console.log("модуль url: ");
// Імпортуємо модуль 'url' з використанням ES Module синтаксису
import { URL, URLSearchParams, format, parse } from 'url';

// Створюємо новий об'єкт URL
const myUrl = new URL('https://example.com:8080/path/name?foo=bar&baz=qux#hash');

// Друкуємо властивості об'єкта URL
console.log('Href:', myUrl.href); // Повний URL
console.log('Origin:', myUrl.origin); // Протокол + хост
console.log('Protocol:', myUrl.protocol); // Протокол (https:)
console.log('Host:', myUrl.host); // Хост + порт (example.com:8080)
console.log('Hostname:', myUrl.hostname); // Тільки хост (example.com)
console.log('Port:', myUrl.port); // Порт (8080)
console.log('Pathname:', myUrl.pathname); // Шлях (/path/name)
console.log('Search:', myUrl.search); // Параметри запиту (?foo=bar&baz=qux)
console.log('Hash:', myUrl.hash); // Хеш (#hash)

// Робота з параметрами запиту через URLSearchParams
const params = myUrl.searchParams;

// Отримання значення параметра
console.log('Foo:', params.get('foo')); // bar

// Додавання нового параметра
params.append('newParam', 'newValue');
console.log('Updated Search Params:', myUrl.search); // ?foo=bar&baz=qux&newParam=newValue

// Видалення параметра
params.delete('baz');
console.log('After Deletion:', myUrl.search); // ?foo=bar&newParam=newValue

// Перебір усіх параметрів запиту
params.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});

// Розбір URL у вигляді об'єкта за допомогою parse()
const parsedUrl = parse(myUrl.href);
console.log('Parsed URL:', parsedUrl);

// Форматування об'єкта URL у рядок
const formattedUrl = format(parsedUrl);
console.log('Formatted URL:', formattedUrl);

// Створення нового об'єкта URL з абсолютного і відносного шляхів
const base = new URL('https://example.com');
const relativeUrl = new URL('/foo/bar', base);
console.log('Relative URL:', relativeUrl.href); // https://example.com/foo/bar


// 2. модуль path:
console.log("модуль path: ");
// Імпорт модуля 'path' з використанням ES Module синтаксису
import path from 'path';

// Метод path.basename() - повертає останню частину шляху
const filePath = '/users/tester/documents/file.txt';
console.log('basename:', path.basename(filePath)); // Результат: 'file.txt'

// Метод path.dirname() - повертає каталог (директорію) шляху
console.log('dirname:', path.dirname(filePath)); // Результат: '/users/tester/documents'

// Метод path.extname() - повертає розширення файлу
console.log('extname:', path.extname(filePath)); // Результат: '.txt'

// Метод path.join() - об'єднує шляхи у один
const joinedPath = path.join('/users', 'tester', 'documents', 'file.txt');
console.log('joinedPath:', joinedPath); // Результат: '/users/tester/documents/file.txt'

// Метод path.resolve() - повертає абсолютний шлях
const resolvedPath = path.resolve('documents', 'file.txt');
console.log('resolvedPath:', resolvedPath); // Абсолютний шлях до 'documents/file.txt'

// Метод path.parse() - розбирає шлях на об'єкт з інформацією про шлях
const parsedPath = path.parse(filePath);
console.log('parsedPath:', parsedPath);
// Результат:
// {
//   root: '/',
//   dir: '/users/tester/documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Метод path.format() - повертає шлях на основі об'єкта, подібного до того, що повертає path.parse()
const formattedPath = path.format(parsedPath);
console.log('formattedPath:', formattedPath); // Результат: '/users/tester/documents/file.txt'

// Метод path.isAbsolute() - визначає, чи є шлях абсолютним
console.log('isAbsolute:', path.isAbsolute(filePath)); // Результат: true
console.log('isAbsolute (relative path):', path.isAbsolute('file.txt')); // Результат: false

// Метод path.relative() - повертає відносний шлях від одного шляху до іншого
const relativePath = path.relative('/users/tester/documents', '/users/tester/photos');
console.log('relativePath:', relativePath); // Результат: '../photos'

// Метод path.normalize() - нормалізує шлях, прибираючи зайві слеши і крапки
const normalizedPath = path.normalize('/users/tester//documents/../file.txt');
console.log('normalizedPath:', normalizedPath); // Результат: '/users/tester/file.txt'

// Метод path.sep - повертає розділювач шляху (зазвичай '/' на Linux/Mac і '\\' на Windows)
console.log('path separator:', path.sep); // Результат залежить від ОС

// Метод path.delimiter - повертає розділювач для списку шляхів в середовищі
console.log('path delimiter:', path.delimiter); // Результат залежить від ОС (':' на Linux/Mac і ';' на Windows)
