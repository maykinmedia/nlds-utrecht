import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';

export const decorators = [
  (Story) => (
    <div className="utrecht-theme">
      <Story />
    </div>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },
  },
};
