import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  registrateUser(body): any {
    if (credentials.length) {
      console.log('credentials is not empty');
      credentials.forEach((user) => {
        if (user.login === body.login) {
          console.log('the same login is already exist');
          return 'exists';
        }
      });
      console.log('login is new');
      credentials.push(body);
      console.log('body', body);
      console.log('credentials', credentials);
      return 'created';
    }
    console.log('credentials is empty');

    credentials.push(body);
    return 'created';
  }
  loginUser(body): any {
    if (credentials.length) {
      credentials.forEach((user) => {
        if (user.login === body.login && user.password === body.password) {
          return 'success';
        } else return 'error';
      });
    }
  }
}

const credentials = [];
