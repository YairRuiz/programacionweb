using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class BaseController : Controller
    {
        public BaseController()
        {

        }

        //public override void OnActionExecuting(ActionExecutingContext context)
        //{
        //    SessionViewModel sessionObject = HttpContext.Session.GetJson<SessionViewModel>("SessionObject") ?? new SessionViewModel();
        //    if(sessionObject == null || sessionObject.UserId == 0)
        //    {
        //        HttpContext.Session.Clear();
        //        context.Result = RedirectToAction(nameof(SessionController.Login), "Session");
        //    }
        //}
    }
}
