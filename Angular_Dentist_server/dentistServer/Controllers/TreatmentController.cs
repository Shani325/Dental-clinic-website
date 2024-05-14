using Context;
using Context.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace dentistServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TreatmentController : ControllerBase
    {
        //public static List<Treatment> TreatmentList = new List<Treatment>
        //{
        //    new Treatment {Id=1,Name="סתימה",IdDoctor=2,Day="ראשון" ,DayNum=1,Hour=16,TzPatient="325442234"},
        //    new Treatment {Id=2,Name="עקירה",IdDoctor=3,Day="שני" ,DayNum=2,Hour=16,TzPatient="789789789"},
        //    new Treatment {Id=3,Name="טיפול שורש",IdDoctor=2,Day="שישי" ,DayNum=6,Hour=16,TzPatient="325442234"}
        //};

        private readonly IContext context;

        public TreatmentController(IContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Treatment>> GetTreatments()
        {
            return await context.Treats.ToListAsync();
        }

        [HttpPost]
        public async Task<Treatment> AddTreatment([FromBody] Treatment value)
        {
            var t=context.Treats.Add(value);
            await context.SaveChangesAsync();
            return t.Entity;
        }

        [HttpDelete]
        public async Task DeleteTreatment(int id)
        {
            context.Treats.Remove(await context.Treats.FindAsync(id));
            await context.SaveChangesAsync();

        }

        [HttpPut("{id}")]
        public async Task<Treatment> UpdateTreatment(int id, [FromBody] Treatment value)
        {
            Treatment newT=new Treatment()
            {
                Id= id,
                Day=value.Day, 
                Name=value.Name,
                DayNum=value.DayNum,
                Hour=value.Hour,
                TzPatient=value.TzPatient,
                IdDoctor=value.IdDoctor
            };
            var t=context.Treats.Update(newT);
            await context.SaveChangesAsync();
            return t.Entity;
        }
    }
}
