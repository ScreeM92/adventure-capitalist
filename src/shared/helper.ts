export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
      type: Key;
    }
  : {
      type: Key;
      payload: M[Key];
    }
};

export const priceIntl = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
