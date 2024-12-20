export interface ICodeMessage {
  language: string,
  code: string,
}

export interface ResultState {
  type: 'success' | 'error' | null,
  message: string;
}