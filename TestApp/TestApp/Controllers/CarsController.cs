using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestApp.Models;
using TestApp.Library.DAL.Models;

namespace TestApp.Controllers
{
    public class CarsController : Controller
    {
        private readonly TestAppEntities _ctx;

        public CarsController(TestAppEntities ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public IActionResult Index()
        {
            //_ctx.Persons.Add(new Persons() { email = "jesusriosdev@gmail.com", first_names = "Jesus", last_names = "Rios" });
            //_ctx.Persons.Add(new Persons() { email = "ivan.cebreros@gmail.com", first_names = "Ivan", last_names = "Cebreros" });
            //_ctx.SaveChanges();

            var model = _ctx.Cars_Yair.ToList();
            return View(model);
        }

        [HttpGet]
        public IActionResult Add()
        {
            var model = new Cars_Yair();
            return View(model);

        }

        [HttpPost]
        public IActionResult Add(Cars_Yair modelCar)
        {
            // Trabajar y agregar el model.

            _ctx.Cars_Yair.Add(modelCar);
            _ctx.SaveChanges();

            return RedirectToAction("Index");

        }

    }
}
