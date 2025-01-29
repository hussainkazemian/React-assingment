import { User } from './DBtypes';


export type Credentials = Pick<User, 'username' | 'password'>;

// export type { Credentials };
