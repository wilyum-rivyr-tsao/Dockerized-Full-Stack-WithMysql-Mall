export interface Cart {
  userId:number,
  skuId:number,
  num:number
}

export type CartContextType = {
  cart: Cart;
  setCart: Dispatch<SetStateAction<{
    userId: number;
    skuId: number;
    num: number;
}>>;
};
