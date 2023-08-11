using System.Text;

namespace PrimeiroProjeto.EntitiesOrder
{
    internal class Client
    {
        public string Name { get; set; }
        public string EMail { get; set; }
        public DateTime BirthDate { get; set; }

        public Client() { }
        public Client(string name, string email, DateTime birthDate) 
        {
            Name = name;
            EMail = email;      
            BirthDate = birthDate;        
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Client: ");
            sb.Append(Name);
            sb.Append(BirthDate.ToString(" (dd/MM/yyyy)"));
            sb.Append(" - ");
            sb.AppendLine(EMail);
            return sb.ToString();
        }
    }
}
