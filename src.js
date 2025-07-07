export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  /**
   * Добавляет ошибку в репозиторий
   * @param {number} code - числовой код ошибки
   * @param {string} description - описание ошибки
   */
  addError(code, description) {
    this.errors.set(code, description);
  }

  /**
   * Получает описание ошибки по коду
   * @param {number} code - код ошибки
   * @return {string} описание ошибки или 'Unknown error'
   */
  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}