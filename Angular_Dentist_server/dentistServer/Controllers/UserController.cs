using Context.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dentistServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> UserList = new List<User>
        {
            new User { Id = 1, Name = "tom", Password = "123456" ,Role="manager"},
            new User { Id = 2, Name = "john", Password = "123456" ,Role="doctor"}
        };

        // GET api/values
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return UserList;
        }

        // POST api/values
        [HttpPost]
        public void AddUser([FromBody] User value)
        {
            UserList.Add(value);
        }

        [HttpDelete("{id}")]
        public void deleteUser(int id)
        {
            UserList.RemoveAt(id);
        }
    }
}
