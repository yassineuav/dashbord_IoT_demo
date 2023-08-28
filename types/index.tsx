export interface OrderHistory {
    id?: string | null;
    status: string;
    status_id: number;
    created_at: string;
    updated_at: string;
    description: string;
    comment: string;
    updated_from: string;
  }
  
 export interface MyData {
    id: number;
    order_description: string;
    description: string;
    weight: number;
    trigger: number;
    created_at: string;
    updated_at: string;
    status: string;
    status_id: number;
    order_history: OrderHistory[];
  }
  