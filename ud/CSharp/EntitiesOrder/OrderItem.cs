using System;
using System.Globalization;
using System.Security.Cryptography;
using System.Text;

namespace PrimeiroProjeto.EntitiesOrder
{
    class OrderItem
    {
        public int Quantity { get; set; }
        public double Price { get; set; }

        public Product AProduct { get; set; }

        public OrderItem() 
        {
        }

        public OrderItem(int quantity, double price, string nameProduct) 
        {
            Quantity = quantity;
            Price = price;
            AProduct = new Product(nameProduct, price);
        }

        public double SubTotal() 
        { 
            return Quantity * Price; 
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(AProduct.Name);
            sb.Append(", $");
            sb.Append(Price.ToString("F2", CultureInfo.InvariantCulture));
            sb.Append(", Quantity: ");
            sb.Append(Quantity);
            sb.Append(", Sub Total: $");
            sb.Append(SubTotal().ToString("F2", CultureInfo.InvariantCulture));
            return sb.ToString();
        }
    }
}
