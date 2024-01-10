export interface SerializedError {
  message: string;
  field?: string;
}

export type SerializedErrors = SerializedError[];
