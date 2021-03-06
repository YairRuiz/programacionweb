﻿using System;
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
    public class UsersController : BaseController
    {
        private readonly TestAppEntities _ctx;

        public UsersController(TestAppEntities ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var model = await Users.GetList(_ctx);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Details(int id)
        {
            var model = await Users.GetItem(_ctx, id);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var model = await Users.GetItem(_ctx, id);
            model.isActive = model.is_active ?? false;
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Users model)
        {
            model.is_active = model.isActive;
            var result = await Users.Update(_ctx, model);

            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Add()
        {
            var modelUser = new Users();
            return View(modelUser);

        }

        [HttpPost]
        public IActionResult Add(Users modelUser)
        {
            // Trabajar y agregar el model.

            _ctx.Users.Add(modelUser);
            _ctx.SaveChanges();

            return RedirectToAction("Index");
        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var modelUser = await Users.GetItem(_ctx, id);
            return View(modelUser);
        }

        [HttpPost]
        public async Task<IActionResult> Delete(Users modelUser)
        {
            var result = await Users.Delete(_ctx, modelUser.user_id);

            return RedirectToAction("Index");
        }
    }
}
