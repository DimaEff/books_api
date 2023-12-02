import { appConfig, databaseConfig } from '@/config';

describe('Config', () => {
  const originEnv = process.env;
  const validEnv: typeof process.env = {
    PORT: '3000',
    DB_USERNAME: 'username',
    DB_PASSWORD: 'password',
    DB_NAME: 'name',
    DB_HOST: 'host',
    DB_PORT: 'port',
  };
  const invalidEnv: Partial<typeof process.env> = {};

  afterEach(() => {
    process.env = originEnv;
  });

  describe('App config', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    it('should success validating', () => {
      process.env = validEnv;
      console.log('process.env', process.env);
      expect(appConfig()).toBeTruthy();
    });
    it('should unsuccess validation', () => {
      // we need to disable ts to set an invalid env
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      process.env = invalidEnv;
      expect(appConfig).toThrow();
    });
  });

  describe('Database config', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    it('should success validating', () => {
      process.env = validEnv;
      console.log('process.env', process.env);
      expect(databaseConfig).toBeTruthy();
    });
    it('should unsuccess validation', () => {
      // we need to disable ts to set an invalid env
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      process.env = invalidEnv;
      expect(databaseConfig).toThrow();
    });
  });
});
