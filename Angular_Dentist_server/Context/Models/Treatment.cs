namespace Context.Models
{
    public class Treatment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TzPatient { get; set; }
        public int IdDoctor { get; set; }
        public string Day { get; set; }
        public int DayNum { get; set; }
        public int Hour { get; set; }
    }
}
