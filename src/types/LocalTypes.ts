import {User} from '../types/DBtypes';

export type Credentials = Pick<User, 'username' | 'password'>;

// export type {Credentials};
