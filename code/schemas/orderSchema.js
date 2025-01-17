export default {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'user_id', type: 'reference', to: [{ type: 'user' }] },
      { name: 'product_ids', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
      { name: 'order_date', type: 'datetime', title: 'Order Date' },
      { name: 'total_price', type: 'number', title: 'Total Price' },
    ],
  };