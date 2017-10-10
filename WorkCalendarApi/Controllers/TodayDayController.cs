using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace WorkCalendarApi.Controllers
{

    public class TodayDate {
        public string Date {get; set;}
    }

    [Route("api/[controller]")]
    public class TodayDateController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<MonthData> Get()
        {
            for(var i = 1; i <=12; i++)
            {
                yield return new MonthData{ 
                    Name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(i),
                    Days = 30                
                 };
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post(MonthData data)
        {

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
