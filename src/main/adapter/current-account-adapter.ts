import { UserModel } from '../../domain/models/user';
import { makeLocalStorageAdapter } from '../factories/cache/local-storage-adapter-factory';

export const setCurrentAccountAdapter = (account: UserModel): void => {
  makeLocalStorageAdapter().set('account', account);
};

export const getCurrentAccountAdapter = (): UserModel => {
  return makeLocalStorageAdapter().get('account');
};
