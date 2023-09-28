import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Style: Attribute.Enumeration<['Naked', 'Text', 'Outlined', 'Filled']>;
  };
}

export interface PagesContactPage extends Schema.Component {
  collectionName: 'components_pages_contact_pages';
  info: {
    displayName: 'Contact Page';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Form: Attribute.Component<'sections.contact-form'>;
  };
}

export interface PagesFullyCustomPage extends Schema.Component {
  collectionName: 'components_pages_fully_custom_pages';
  info: {
    displayName: 'Fully Custom Page';
  };
  attributes: {
    Sezione: Attribute.Component<'sections.generic-section', true>;
  };
}

export interface SectionsContactForm extends Schema.Component {
  collectionName: 'components_components_contact_forms';
  info: {
    displayName: 'Contact Form';
    description: '';
  };
  attributes: {
    Nome: Attribute.Boolean & Attribute.DefaultTo<false>;
    Cognome: Attribute.Boolean & Attribute.DefaultTo<false>;
    Nome_Completo: Attribute.Boolean & Attribute.DefaultTo<false>;
    Email: Attribute.Boolean & Attribute.DefaultTo<false>;
    Telefono: Attribute.Boolean & Attribute.DefaultTo<false>;
    Nome_ente: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsGenericSection extends Schema.Component {
  collectionName: 'components_components_generic_sections';
  info: {
    displayName: 'Generic Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Body: Attribute.RichText;
    Image: Attribute.Media;
    Main_CTA_Button: Attribute.Component<'components.button'>;
    Secondary_CTA_Button: Attribute.Component<'components.button'>;
    Dark_Mode: Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'pages.contact-page': PagesContactPage;
      'pages.fully-custom-page': PagesFullyCustomPage;
      'sections.contact-form': SectionsContactForm;
      'sections.generic-section': SectionsGenericSection;
      'sections.hero-section': SectionsHeroSection;
    }
  }
}
