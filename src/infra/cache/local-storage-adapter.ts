import { GetStorage } from '../../data/protocol/cache/get-storage';
import { SetStorage } from '../../data/protocol/cache/set-storage';

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set(key: string, value: object): void {
    console.log(`LocalStorageAdapter: ${value}`);
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
