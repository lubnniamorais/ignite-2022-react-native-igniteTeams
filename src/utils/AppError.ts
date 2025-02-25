export class AppError {
  message: string;

  // O construtor é chamado no momento em que a classe é instanciada.
  constructor(message: string) {
    this.message = message;
  }
}
