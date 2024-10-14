import { uniqBy } from 'lodash';
import installEmbedContent from './EmbedContent';

const config = (config) => {
  config.blocks.groupBlocksOrder = uniqBy(
    [
      ...config.blocks.groupBlocksOrder,
      { id: 'data_visualizations', title: 'Data Visualizations' },
    ],
    'id',
  );

  return [installEmbedContent].reduce((acc, apply) => apply(acc), config);
};

export default config;
