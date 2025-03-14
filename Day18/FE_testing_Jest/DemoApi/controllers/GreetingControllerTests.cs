// GreetingControllerTests.cs
using DemoApi.controllers;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace DemoApi.Tests
{
    public class GreetingControllerTests
    {
        [Fact]
        public void GetGreeting_ReturnsOkResult_WithGreetingMessage()
        {
            // Arrange
            var controller = new GreetingsController();

            // Act
            var result = controller.GetGreetings() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Hello, World!", ((dynamic)result.Value).Message);
        }
    }
}