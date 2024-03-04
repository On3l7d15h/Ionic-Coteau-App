import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'coteau.app',
  appName: 'coteau-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
