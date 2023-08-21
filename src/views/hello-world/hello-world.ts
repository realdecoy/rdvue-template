import { Component, Vue } from 'vue-facing-decorator';
import { useMeta } from 'vue-meta';
import Logo from '@/assets/logo/rd-logo.png';
type Features = {
  title: string | HTMLElement;
  description: string;
  image: string;
  id: string;
  link?: string;
};
// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
@Component({
  components: {},
  setup() {
    return useMeta({
      title: 'Hello World',
      meta: [
        {
          name: 'description',
          content: 'Hello World',
        },
      ],
    });
  },
})
export default class HelloWorld extends Vue {
  // --------------------------------------------------------------------------
  // [Public] Fields
  // --------------------------------------------------------------------------
  features: Array<Features> = [
    {
      title: `Vue<sup>v3</sup>`,
      description: 'Frontend Framework, Leveraging Options API',
      image: 'https://vuejs.org/images/logo.png',
      id: 'vue',
      link: 'https://v3.vuejs.org/',
    },
    {
      title: 'Vite',
      description:
        'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
      image: 'https://vitejs.dev/logo.svg',
      id: 'vite',
      link: 'https://vitejs.dev/',
    },
    {
      title: 'Pinia',
      description: 'Vue 3 state management tool',
      image: 'https://pinia.esm.dev/logo.svg',
      id: 'pinia',
      link: 'https://pinia.esm.dev/',
    },
    {
      title: 'Vue Router',
      description: 'Navigational aid for in-app pages',
      image: 'https://vuejs.org/images/logo.png',
      id: 'vue-router',
      link: 'https://next.router.vuejs.org/',
    },
    {
      title: 'Vue Meta',
      description: 'Manage HTML meta information in Vue.js components',
      image: 'https://vue-meta.nuxtjs.org/vue-meta.png',
      id: 'vue-meta',
      link: 'https://vue-meta.nuxtjs.org/',
    },
    {
      title: 'Vue Facing Decorator',
      description: 'Class-based component syntax for Vue 3',
      image: 'https://vuejs.org/images/logo.png',
      id: 'vue-facing-decorator',
      link: 'https://vue-facing-decorator.netlify.app/',
    },
    {
      title: 'Sass',
      description: 'CSS with superpowers',
      image: 'https://sass-lang.com/assets/img/logos/logo.svg',
      id: 'sass',
      link: 'https://sass-lang.com/',
    },
    {
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapid UI development.',
      image:
        'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
      id: 'tailwindcss',
      link: 'https://tailwindcss.com/',
    },
    {
      title: 'TypeScript',
      description: 'Typed JavaScript at Any Scale.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201',
      id: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      title: 'Axios',
      description: 'Promise based HTTP client for the browser and node.js',
      image: 'https://logowik.com/content/uploads/images/axios3626.jpg',
      id: 'axios',
      link: 'https://axios-http.com/docs/intro',
    },
  ];

  rdLogo = Logo;
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
}
