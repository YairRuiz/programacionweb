using System;
using System.Collections.Generic;

namespace TestApp.Library.DAL.Models
{
    public partial class Cars_Yair
    {
        public int car_id { get; set; }
        public string make { get; set; }
        public string model { get; set; }
        public int? year { get; set; }
        public bool? is_active { get; set; }
        public DateTime? created_at { get; set; }
    }
}
