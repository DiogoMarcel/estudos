using PrimeiroProjeto.EntitiesOrder.Enums;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Text;

namespace PrimeiroProjeto.EntitiesOrder
{
    class Order
    {
        public OrderStatus Status { get; set; }
        public DateTime Momment { get; set; }

        public List<OrderItem> Items { get; private set; } = new List<OrderItem>();

        public Client AClient { get; set; }

        public Order()
        {
        }

        public Order(OrderStatus status, DateTime momment, Client client)
        {
            Status = status;
            Momment = momment;
            AClient = client;
        }

        public void AddItems(OrderItem contract)
        {
            Items.Add(contract);
        }

        public void RemoveItems(OrderItem contract)
        {
            Items.Remove(contract);
        }

        public double Total()
        { 
            double sum = 0.0;
            foreach (OrderItem item in Items)
            {
                sum += item.SubTotal();
            }
            return sum;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("ORDER SUMMARY:");
            sb.Append("Order moment: ");
            sb.AppendLine(Momment.ToString("dd/MM/yyyy HH:mm:ss"));
            sb.Append("Order status: ");
            sb.AppendLine(Status.ToString());
            sb.Append(AClient.ToString());
            sb.AppendLine("Order items:");

            foreach (OrderItem item in Items)
            {
                sb.AppendLine(item.ToString());
            }

            sb.Append("Total price: $");
            sb.AppendLine(Total().ToString("F2", CultureInfo.InvariantCulture));

            return sb.ToString();
        }
}
}
