import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Facebook } from '../src/facebook';

const auth = new SalteAuth({
  providers: [
    new Facebook({
      clientID: '1133025073714056',
      responseType: 'code',

      routes: true
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'facebook'
  });
});

document.body.appendChild(button);

