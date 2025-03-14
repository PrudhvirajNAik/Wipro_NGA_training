using Microsoft.AspNetCore.Mvc;
using AsyncDataAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Diagnostics;

namespace AsyncDataAPI.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        // for implementing pagination
        private static readonly List<string> SampleData = Enumerable.Range(1,100).Select(i=> $"post{i}").ToList();

        [HttpGet]
        public async Task<IActionResult> GetPosts(int page = 1, int pageSize = 10)
       {
        var paginatedData = SampleData.Skip((page - 1) * pageSize).Take(pageSize);
        return Ok(new
        {
            data = paginatedData,
            currentPage = page,
            totalPages = (int)Math.Ceiling(SampleData.Count / (double)pageSize)
        });
        }
    }
       // public async Task<IActionResult> GetPosts()
        //{

            //var posts = new List<Post>
           // {
             //   new Post { Id = 1, Title = "Async Programming", Body = "Understanding async/await in C#." },
              //  new Post { Id = 2, Title = "React Hooks", Body = "Using useEffect for API calls." },
                //new Post { Id = 3, Title = "ASP.NET Core", Body = "Building Web APIs in .NET 6+." }
            //};

            // Simulating an async operation
           // await Task.Delay(1000);
            //return Ok(posts);
        //}
    //}
}