//controllers/GreetingController.cs

using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace DemoApi.controllers{
    [ApiController]
    [Route("[controller]")]
    public class GreetingsController: ControllerBase{

    [HttpGet]
    public IActionResult GetGreetings()    
    {
        return Ok(new{Message="HELLO, World"});

    }
    
    
    }

}