import { config } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import { Quasar, QuasarPluginOptions } from 'quasar';
import { beforeAll, afterAll } from 'vitest';
import { createTestingPinia, TestingOptions } from '@pinia/testing';

export function installQuasar(options?: Partial<QuasarPluginOptions>) {
  const globalConfigBackup = cloneDeep(config.global);

  beforeAll(() => {
    config.global.plugins.unshift([Quasar, options]);
    config.global.provide._q_l_ = {
      header: { size: 0, offset: 0, space: false },
      right: { size: 300, offset: 0, space: false },
      footer: { size: 0, offset: 0, space: false },
      left: { size: 300, offset: 0, space: false },
      isContainer: false,
    };
  });

  afterAll(() => {
    config.global = globalConfigBackup;
  });
}

export function installPinia(options?: Partial<TestingOptions>) {
  const globalConfigBackup = cloneDeep(config.global);

  beforeAll(() => {
    config.global.plugins.unshift(createTestingPinia(options));
  });

  afterAll(() => {
    config.global = globalConfigBackup;
  });
}
