export default {
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: 'Visibile',
                name: 'visibile',
                type: 'bool',
                required: true
              },
            },
          ],
          pagina: [
            {
              input: {
                label: 'Pagine',
                name: 'pagine',
                type: 'relation',
                required: true
              },
            },
          ],
        },
      },
    },
  },
};