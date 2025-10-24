export interface Order {
  id: string;
  orderNumber: string;
  clientName: string;
  orderType: string;
  date: string;
  time: string;
  status: 'pending' | 'in_preparation' | 'prepared';
}