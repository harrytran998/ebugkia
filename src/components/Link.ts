import { navigate } from 'vite-plugin-ssr/client/router';
import { defineComponent, h, PropType } from 'vue';

const Link = defineComponent({
  props: {
    to: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const children = slots.default && slots.default();
    const onClick = () => navigate(props.to);

    return () => {
      return h(
        'a',
        {
          href: props.to,
          onClick,
        },
        children,
      );
    };
  },
});

export default Link;
