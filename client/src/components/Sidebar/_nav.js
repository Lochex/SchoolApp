export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'STUDENTS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Manage Students',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Create Students',
          url: '/students/create',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Students',
          url: '/students/list',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
};
