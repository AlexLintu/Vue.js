import addClient from './components/addClient.vue';
import showFeed from './components/showFeed.vue';
import singleClient from './components/singleClient.vue';

export default [{
    path: '/',
    component: showFeed
  },
  {
    path: '/add',
    component: addClient
  },
  {
    path: '/client/:id',
    component: singleClient
  }
]
