import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'coteau.app',
  appName: 'coteau-app',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  }
};

export default config;
