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
      data-key="111dc0c3730a6bc3a23b0a7eaef4e732"
      async
    />,
  ]);
};
