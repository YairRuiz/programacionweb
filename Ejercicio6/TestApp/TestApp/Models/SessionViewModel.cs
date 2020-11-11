using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp.Models
{
    public class SessionViewModel
    {
        public int UserId { get; set; }
        public string FirstNames { get; set; }
        public string LastNames { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool? IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool ShowPersonsMenu { get; set; }
    }
}
