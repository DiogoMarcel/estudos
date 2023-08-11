using PrimeiroProjeto.Entities;
using PrimeiroProjeto.EntitiesOrder;
using PrimeiroProjeto.EntitiesOrder.Enums;

namespace PrimeiroProjeto {
    class Program {
        static void Main(string[] args) {
            Comment c1 = new Comment("Have a nice trip!");
            Comment c2 = new Comment("Wow that's awesome!");
            Post p1 = new Post(
                    DateTime.Parse("21/06/2018 13:05:44"),
                    "Traveling to New Zealand",
                    "I'm going to visit this wonderful country!",
                    12);
            p1.AddComment(c1);
            p1.AddComment(c2);

            Comment c3 = new Comment("Good night");
            Comment c4 = new Comment("May the Force be with you");
            Post p2 = new Post(
                    DateTime.Parse("28/07/2018 23:14:19"),
                    "Good night guys",
                    "See you tomorrow",
                    5);
            p2.AddComment(c3);
            p2.AddComment(c4);

            Console.WriteLine(p1);
            Console.WriteLine(p2);

            Console.WriteLine("------------");

            Client client = new("Alex Green", "alex@gmail.com", DateTime.Parse("15/03/1985"));
            Order O1 = new(OrderStatus.Processing, DateTime.Now, client);

            OrderItem Oi1 = new(1, 1000.00, "TV");
            OrderItem Oi2 = new(2, 40.00, "Mouse");

            O1.AddItems(Oi1);
            O1.AddItems(Oi2);

            Console.WriteLine(O1);
        }
    }
}
