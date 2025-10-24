import { orders } from '../data/orders';
import { Order } from '../types/Order';

export const getOrders = (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 500);
  });
};