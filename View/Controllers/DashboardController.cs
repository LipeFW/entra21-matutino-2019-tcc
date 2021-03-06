﻿using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers
{
    public class DashboardController : BaseController
    {
        public ActionResult Change(String lang)
        {
            if (lang != null)
            {
                Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(lang);
                Thread.CurrentThread.CurrentCulture = new CultureInfo(lang);
                HttpCookie cookie = new HttpCookie("Language");
                cookie.Value = lang;
                Session["Language"] = lang;
                Response.Cookies.Add(cookie);
            }
            return Redirect(Request.UrlReferrer.ToString());
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}