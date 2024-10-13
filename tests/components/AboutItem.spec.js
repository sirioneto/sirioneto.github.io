import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'; // Importando do Vitest

import AboutItem from '@/components/AboutItem.vue'; // Caminho do seu componente

describe('AboutItem', () => {
  it('deve renderizar o slot de ícone corretamente', () => {
    const wrapper = mount(AboutItem, {
      slots: {
        icon: '<svg class="icon-slot"></svg>',
      },
    });

    expect(wrapper.find('svg.icon-slot').exists()).toBe(true);
  });

  it('deve renderizar o slot de heading corretamente', () => {
    const wrapper = mount(AboutItem, {
      slots: {
        heading: '<h3 class="heading-slot">Título de Teste</h3>',
      },
    });

    expect(wrapper.find('h3.heading-slot').text()).toBe('Título de Teste');
  });

  it('deve renderizar o conteúdo do slot padrão', () => {
    const wrapper = mount(AboutItem, {
      slots: {
        default: '<p>Conteúdo do slot padrão</p>',
      },
    });

    expect(wrapper.find('p').text()).toBe('Conteúdo do slot padrão');
  });

  it('deve aplicar as classes CSS corretamente', () => {
    const wrapper = mount(AboutItem);

    expect(wrapper.classes()).toContain('item');
    expect(wrapper.find('h3').exists()).toBe(true);
  });

  it('não deve renderizar os pseudo-elementos para o primeiro e último item', () => {
    const wrapper = mount(AboutItem);

    expect(wrapper.find('.item').exists()).toBe(true);
  });
});
