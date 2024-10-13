import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AboutList from '@/components/AboutList.vue'; // Corrigido para AboutList
import GraduatedIcon from '@/components/icons/GraduatedIcon.vue';
import ToolingIcon from '@/components/icons/IconTooling.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import FlagIcon from '@/components/icons/FlagIcon.vue';

describe('AboutList', () => {
  const globalConfig = {
    global: {
      mocks: {
        $t: (msg) => msg,
      },
      stubs: {
        'i18n-t': true,
      },
    },
  };

  it('deve renderizar corretamente o primeiro AboutItem com ToolingIcon', () => {
    const wrapper = mount(AboutList, {
      ...globalConfig,
    });

    const toolingIcon = wrapper.findComponent(ToolingIcon);
    expect(toolingIcon.exists()).toBe(true);
  });

  it('deve renderizar corretamente o segundo AboutItem com GraduatedIcon', () => {
    const wrapper = mount(AboutList, {
      ...globalConfig,
    });

    const graduatedIcon = wrapper.findComponent(GraduatedIcon);
    expect(graduatedIcon.exists()).toBe(true);
  });

  it('deve renderizar corretamente o terceiro AboutItem com IconDocumentation', () => {
    const wrapper = mount(AboutList, {
      ...globalConfig,
    });

    const documentationIcon = wrapper.findComponent(IconDocumentation);
    expect(documentationIcon.exists()).toBe(true);
  });

  it('deve renderizar corretamente o quarto AboutItem com FlagIcon', () => {
    const wrapper = mount(AboutList, {
      ...globalConfig,
    });

    const flagIcon = wrapper.findComponent(FlagIcon);
    expect(flagIcon.exists()).toBe(true);
  });
});
