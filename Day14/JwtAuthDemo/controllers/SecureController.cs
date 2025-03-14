using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/secure")]
public class SecureController : ControllerBase
{
    [Authorize]
    [HttpGet("protected")]
    public IActionResult GetProtectedData()
    {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
        var username = User.Identity.Name;
#pragma warning restore CS8602 // Dereference of a possibly null reference.
        return Ok(new { Message = "This is a protected route", User = username });
    }
}