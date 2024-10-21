import React from 'react';
import { Message } from 'semantic-ui-react';
import { getBlockConfig } from './helpers';

const _View = (props) => {
  const { data = {}, mode } = props;

  const blockConfig = getBlockConfig(data);

  const { urlFieldName } = blockConfig || {};

  if (!blockConfig) {
    return mode === 'edit' ? (
      <Message>No view configured for this content.</Message>
    ) : null;
  }

  const View = blockConfig.view;

  return (
    <View
      {...props}
      data={{ ...(props.data || {}), [urlFieldName]: data.url }}
    />
  );
};

export default _View;
