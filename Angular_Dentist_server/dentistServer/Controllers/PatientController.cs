using Context;
using Context.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dentistServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        public static List<Patient> PatientsList = new List<Patient>
        {
            new Patient {Id=1,Name="bob",IdNumber="223655874",Tel="0556768421",DoctorId=1}
        };

        [HttpGet]
        public IEnumerable<Patient> GetPatients()
        {
            return PatientsList;
        }

        [HttpPost]
        public void AddPatient([FromBody] Patient value)
        {
            PatientsList.Add(value);
        }

        [HttpDelete("{id}")]
        public void deletePat(int id)
        {
           PatientsList.RemoveAt(id);
        }
    }
}
