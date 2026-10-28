import View from './View';
import Edit from './Edit';

import EmbedVisualizationView from '@eeacms/volto-plotlycharts/Blocks/EmbedVisualization/View';
import schemaEmbedVisualization from '@eeacms/volto-plotlycharts/Blocks/EmbedVisualization/schema';

import EmbedEEAMapView from '@eeacms/volto-eea-map/Blocks/EmbedEEAMap/View';
import { schema as schemaEmbedEEAMap } from '@eeacms/volto-eea-map/Blocks/EmbedEEAMap/schema';

import EmbedTableauVisualizationView from '@eeacms/volto-tableau/Blocks/EmbedTableauVisualization/View';
import schemaEmbedTableauVisualization from '@eeacms/volto-tableau/Blocks/EmbedTableauVisualization/schema';

import EmbedMapInteractivView from '@eeacms/volto-embed/Blocks/EmbedMaps/View';
import schemaEmbedMapInteractiv from '@eeacms/volto-embed/Blocks/EmbedMaps/schema';

import EmbedStaticContentView from '@eeacms/volto-embed-static-content/View';
import schemaEmbedStaticContentView from '@eeacms/volto-embed-static-content/schema';

import EmbedDataFigureView from '@eeacms/volto-block-data-figure/components/manage/Blocks/DataFigure/View';
import schemaEmbedDataFigure from '@eeacms/volto-block-data-figure/components/manage/Blocks/DataFigure/Schema';

import presentationSVG from '@plone/volto/icons/image.svg';

const config = (config) => {
  config.blocks.blocksConfig.embed_content = {
    id: 'embed_content',
    title: 'Embed content',
    icon: presentationSVG,
    group: 'data_visualizations',
    edit: Edit,
    view: View,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    blocksConfig: {
      type: {
        visualization: {
          view: EmbedVisualizationView,
          schema: schemaEmbedVisualization,
          urlFieldName: 'vis_url',
        },
        map_visualization: {
          view: EmbedEEAMapView,
          schema: schemaEmbedEEAMap,
          urlFieldName: 'vis_url',
        },
        tableau_visualization: {
          view: EmbedTableauVisualizationView,
          schema: schemaEmbedTableauVisualization,
          urlFieldName: 'tableau_vis_url',
        },
        map_interactive: {
          view: EmbedMapInteractivView,
          schema: schemaEmbedMapInteractiv,
        },
        chart_static: {
          view: EmbedStaticContentView,
          schema: schemaEmbedStaticContentView,
        },
        map_static: {
          view: EmbedStaticContentView,
          schema: schemaEmbedStaticContentView,
        },
        infographic: {
          view: EmbedStaticContentView,
          schema: schemaEmbedStaticContentView,
        },
        Image: {
          view: EmbedStaticContentView,
          schema: schemaEmbedStaticContentView,
        },
      },
      url: {
        external: {
          view: EmbedDataFigureView,
          schema: {
            title: schemaEmbedDataFigure.title,
          },
        },
      },
    },
  };

  return config;
};

export default config;
