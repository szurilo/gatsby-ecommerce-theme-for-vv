import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="vibe-vaults-widget"
      src="https://www.vibe-vaults.com/widget.js"
      data-key="17cef3044ac834fe22687ff658cc8b30"
      async
    />,
  ]);
};
