import { config } from '@vue/test-utils';
import { i18n } from '../src/boot/i18n';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';

const router = createRouterMock();

beforeEach(() => {
  injectRouterMock(router);
});

i18n.global.silentFallbackWarn = true;
i18n.global.silentTranslationWarn = true;

config.global.plugins = [i18n];
config.plugins.VueWrapper.install(VueRouterMock);
