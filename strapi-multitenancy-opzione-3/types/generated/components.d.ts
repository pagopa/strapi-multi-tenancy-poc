import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsGenericSection extends Schema.Component {
  collectionName: 'components_components_generic_sections';
  info: {
    displayName: 'Generic Section';
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface PagesFullyCustomPage extends Schema.Component {
  collectionName: 'components_pages_fully_custom_pages';
  info: {
    displayName: 'Fully Custom Page';
  };
  attributes: {
    Sezione: Attribute.Component<'components.generic-section', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.generic-section': ComponentsGenericSection;
      'pages.fully-custom-page': PagesFullyCustomPage;
    }
  }
}
