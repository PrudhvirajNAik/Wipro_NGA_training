using Microsoft.EntityFrameworkCore;
using ProductInventoryApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Configure services
builder.Services.AddDbContext<ProductContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.AddControllers();

var app = builder.Build();

// Configure middleware
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();
app.Run();
