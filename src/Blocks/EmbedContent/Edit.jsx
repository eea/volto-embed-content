import React, { useMemo } from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { Message } from 'semantic-ui-react';
import { uniq, pick, isFunction } from 'lodash';
import { toast } from 'react-toastify';
import { SidebarPortal, BlockDataForm, Toast } from '@plone/volto/components';
import { Api } from '@plone/volto/helpers';

import View from './View';
import { getBlockConfig } from './helpers';
import useMakeClassInstance from './useMakeClassInstance';
import $schema from './schema';

const mergeFieldsets = (fieldsets_a, fieldsets_b, omitFields = []) => {
  const splitFieldsets = (fieldsets) => {
    if (!fieldsets) return [{}, []];
    return fieldsets.reduce(
      (acc, $fieldset) => {
        const fieldset = {
          ...$fieldset,
          fields: $fieldset.fields.filter(
            (field) => !omitFields.includes(field),
          ),
        };
        if (fieldset.id === 'default') {
          acc[0] = fieldset;
          return acc;
        }
        acc[1].push(fieldset);
        return acc;
      },
      [{}, []],
    );
  };

  const [default_a, a] = splitFieldsets(fieldsets_a || []);
  const [default_b, b] = splitFieldsets(fieldsets_b || []);
  return [
    {
      ...default_a,
      ...default_b,
      fields: uniq([...(default_a.fields || []), ...(default_b.fields || [])]),
    },
    ...a,
    ...b,
  ];
};

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  const api = useMakeClassInstance(Api, []);

  const blockConfig = useMemo(() => getBlockConfig(data), [data]);

  const schema = useMemo(() => {
    const { urlFieldName } = blockConfig || {};
    let blockSchema = blockConfig?.schema || {};
    if (isFunction(blockSchema)) {
      blockSchema = blockSchema(props);
    }
    return {
      title: blockSchema.title || $schema.title,
      fieldsets: mergeFieldsets($schema.fieldsets, blockSchema.fieldsets, [
        urlFieldName,
      ]),
      properties: {
        ...(blockSchema.properties || {}),
        ...$schema.properties,
      },
      required: uniq([...(blockSchema.required || []), ...$schema.required]),
    };
  }, [props, blockConfig]);

  return (
    <>
      {!data.url && (
        <Message>Please select a content to embed from block editor.</Message>
      )}
      {data.url && <View {...props} mode="edit" />}
      <SidebarPortal selected={selected}>
        <BlockDataForm
          block={block}
          title={schema.title}
          schema={schema}
          onChangeBlock={onChangeBlock}
          onChangeField={async (id, value) => {
            if (id !== 'url') {
              onChangeBlock(block, {
                ...data,
                [id]: value,
              });
              return;
            }

            if (!value) {
              onChangeBlock(block, {
                '@type': 'embed_content',
              });
              return;
            }

            try {
              const item = await api.get(value);
              const newData = {
                ...data,
                [id]: value,
                properties: pick(item, ['@id', '@type', 'UID']),
              };
              onChangeBlock(block, {
                ...newData,
              });
            } catch (error) {
              toast.error(
                <Toast
                  error
                  title={`${error.status} ${error.message}`}
                  content={`Couldn't load '${value}'.`}
                />,
              );
            }
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default compose(injectIntl)(Edit);
