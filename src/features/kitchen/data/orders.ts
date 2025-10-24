import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    id: '1',
    orderNumber: '0000152',
    clientName: 'MARIA CASTAÑEDA',
    orderType: 'DELIVERY',
    date: '14/10/2026',
    time: '7:51 PM',
    status: 'pending',
  },
  {
    id: '2',
    orderNumber: '0000153',
    clientName: 'JOHN DOE',
    orderType: 'PICKUP',
    date: '14/10/2026',
    time: '8:00 PM',
    status: 'in_preparation',
  },
  {
    id: '3',
    orderNumber: '0000154',
    clientName: 'JANE SMITH',
    orderType: 'DELIVERY',
    date: '14/10/2026',
    time: '8:15 PM',
    status: 'prepared',
  },
];
