import ErrorRepository from '../src/ErrorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Not Found');
    errorRepo.addError(500, 'Internal Server Error');
  });

  test('should return correct error description', () => {
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  test('should return "Unknown error" for unknown code', () => {
    expect(errorRepo.translate(403)).toBe('Unknown error');
  });

  test('should add and translate new error', () => {
    errorRepo.addError(400, 'Bad Request');
    expect(errorRepo.translate(400)).toBe('Bad Request');
  });
});