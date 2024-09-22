declare global {
    namespace NodeJS {
      interface Global {
        mongoose: {
          conn: any;
          promise: Promise<typeof import('mongoose')> | null;
        };
      }
    }
  }
  
  export {};
  