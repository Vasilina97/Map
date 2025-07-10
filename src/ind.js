import ErrorRepository from './ErrorRepository';

const errorRepo = new ErrorRepository();

// Добавляем ошибки
errorRepo.addError(101, 'Invalid user input');
errorRepo.addError(203, 'Connection timeout');

// Получаем описания
console.log(errorRepo.translate(101)); // "Invalid user input"
console.log(errorRepo.translate(999)); // "Unknown error"