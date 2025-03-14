using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add Ocelot configuration
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);


// Register Ocelot services
builder.Services.AddOcelot();

var app = builder.Build();

// Configure middleware to use Ocelot
app.UseRouting();
app.UseOcelot().Wait();

app.Run();

public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        })
        .ConfigureAppConfiguration((context, config) =>
        {
            var environment = context.HostingEnvironment.EnvironmentName;
            // Adds Ocelot configuration from ocelot.json
            config.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
        });
