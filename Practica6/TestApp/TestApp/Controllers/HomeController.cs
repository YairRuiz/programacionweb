using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IWebHostEnvironment _hostingEnvironment;

        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment hostingEnvironment)
        {
            _logger = logger;
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult TestView()
        {
            var model = new PersonViewModel();
            model.FirstName = "Jesus";
            model.LastName = "Rios";
            model.Age = 29;

            //ViewBag.TestName = "Jesus Rios";

            return View(model);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult DownloadFile()
        {
            // Descargar archivo.
            var filesPath = Path.Combine(_hostingEnvironment.ContentRootPath, "customfiles");
            
            //var fileToDelete = Path.Combine(filesPath, "3.pdf");
            //System.IO.File.Delete(fileToDelete);

            filesPath += "/5.pdf";

            if(System.IO.File.Exists(filesPath))
            {
                byte[] fileBytes = System.IO.File.ReadAllBytes(filesPath);
                return File(fileBytes, "application/pdf", "5.pdf");
            }
            else
            {
                // Mostrar error.
                ViewBag.ErrorMessage = "File not found.";
            }

            return View("Index");
        }

    }
}
