using System.Text;
using System.Globalization; 

namespace PrimeiroProjeto.EntitiesOrder
{
    internal class Product
    {
        public string Name { get; set; }
        public double Price { get; set; }

        public Product() { }    
        public Product(string name, double price) {  Name = name; Price = price; }

        /*public override string ToString() 
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Product name: ");
            sb.AppendLine(Name);
            sb.Append("Product price: $");
            sb.Append(Price.ToString("F2", CultureInfo.InvariantCulture));
            return sb.ToString();
        }*/
    }
}
