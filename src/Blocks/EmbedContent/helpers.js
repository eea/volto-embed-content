import config from '@plone/volto/registry';
import { isInternalURL } from '@plone/volto/helpers';

const getBlockConfigByType = (type) =>
  config.blocks.blocksConfig.embed_content.blocksConfig.type[type];

const getBlockConfigByUrl = (url) => {
  if (!url) return null;
  const urlType = isInternalURL(url) ? 'internal' : 'external';
  return config.blocks.blocksConfig.embed_content.blocksConfig.url[urlType];
};

export const getBlockConfig = (data) => {
  return (
    getBlockConfigByType(data.properties?.['@type']) ||
    getBlockConfigByUrl(data.url)
  );
};
