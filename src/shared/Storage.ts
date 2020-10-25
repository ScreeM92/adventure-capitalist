import { State as BusinessesState } from '../state/Businesses/hook/reducer';
import { StorageKey } from './enums';

class Storage {
  setItem(key: StorageKey, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem<T>(key: StorageKey): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  calculateEarningSinceLogout() {
    const earning = this.calculateEarning();
    const logoutSeconds = this.getItem<number>(StorageKey.LOGOUT);
    const diffSeconds = (Date.now() - logoutSeconds) / 1000;

    return diffSeconds > 5 ? earning : 0;
  }

  calculateNewBalanceSinceLogout() {
    const earning = this.calculateEarning();
    const balance = this.getItem<number>(StorageKey.BALANCE);
    const logoutSeconds = this.getItem<number>(StorageKey.LOGOUT);
    const diffSeconds = (Date.now() - logoutSeconds) / 1000;

    return diffSeconds > 5 ? balance + earning : balance;
  }

  private calculateEarning() {
    const purchases =
      Object.values(this.getItem<BusinessesState>(StorageKey.BUSINESSES) || {})
      .filter(
        ({ hasManager, purchasedTimes }) =>
        purchasedTimes && hasManager
      );
    
    const logoutSeconds = this.getItem<number>(StorageKey.LOGOUT);
    const diffSeconds = (Date.now() - logoutSeconds) / 1000;

    return purchases.reduce((prev, curr) => {
      const units = diffSeconds / curr.duration;
      return prev + (units * curr.profit);
    }, 0);
  }
}

export const storage = new Storage();
