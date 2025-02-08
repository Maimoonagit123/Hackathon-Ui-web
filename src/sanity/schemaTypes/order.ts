

export default  {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
          name: 'FirstName',
          type: 'string',
          title: 'First Name',
        },
        {
            name: 'LastName',
            type: 'string',
            title: 'LastName',
          },
          {
            name: 'Address',
            type: 'string',
            title: 'Address',
          },
          {
            name: 'City',
            type: 'string',
            title: 'City',
          },
          {
            name: 'PostalCode',
            type: 'string',
            title: 'Postal Code',
          },
          {
            name: 'Phone',
            type: 'string',
            title: 'Phone',
          },
          {
            name: 'Country',
            type: 'string',
            title: 'Country',
          },
          {
            name: 'Email',
            type: 'string',
            title: 'Email',
          },
          {
            name: 'CheckItems',
            title: 'Check Items',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'products'
                }
            }]
          },
          {
            name: "status",
            type: 'string',
            title: 'Order Status',
            options: {
                list: [
                    {title: "pending", value: "pending"},
                    {title: "processing", value: "processing"},
                    {title: "shipped", value: "shipped"},
                    {title: "delievered", value: "delievered"},
                    {title: "cancelled", value: "cancelled"},
                    {title: "refunded", value: "refunded"},
                    {title:"returned", value: "returned"},
                    {title: "completed", value: "completed"},
                ],
                layout: "radio"
            },

            initialValue: "pending",

          }
    ]
};

