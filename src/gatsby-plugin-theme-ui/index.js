import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

export default {
  ...novelaTheme,
  tags: {
    ...novelaTheme.tags,
    pre: {
      ...nightOwl
    }
  }
};
