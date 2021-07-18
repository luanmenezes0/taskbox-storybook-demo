import { Provider } from 'react-redux';
import '../src/index.css';
import store from '../src/lib/redux';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const WithReduxStore = (StoryFn) => (
  <Provider store={store}>
    <StoryFn />
  </Provider>
);

export const decorators = [WithReduxStore];
