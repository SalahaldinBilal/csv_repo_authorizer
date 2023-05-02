declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly USER_POOL_ID: string,
      readonly APP_CLIENT_ID: string,
    }
  }
}

export type CsvFile = string;