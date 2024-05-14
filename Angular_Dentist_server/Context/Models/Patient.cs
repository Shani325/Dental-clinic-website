namespace Context.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string IdNumber { get; set; }
        public string Name { get; set; }
        public string Tel { get; set; }
        public int DoctorId { get; set; }
    }
}
