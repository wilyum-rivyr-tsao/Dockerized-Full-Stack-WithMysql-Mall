export type CartItem = {
  id:number,
  userId:number,
  skuId:number,
  num:number,
  sku:any
}

export type Cart = [CartItem]

export type CartContextType = {
  cart: Cart;
  setCart: Dispatch<SetStateAction<{
      userId: number;
      skuId: number;
      num: number;
      sku:any;
  }>>;
  getCart:function;
  deleteCart:function;
  patchCart:function;
};
