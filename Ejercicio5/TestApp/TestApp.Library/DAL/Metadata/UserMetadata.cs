using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TestApp.Library.DAL.Models
{
    public class UserMetadata
    {
        // Data Annotations
        [Required(ErrorMessage = "The field first names is required.")]
        [MinLength(3, ErrorMessage = "Min length for first name is 3")]
        [Display(Name = "First Name:")]
        public string first_names;

        [Required(ErrorMessage = "The field last names is required.")]
        [MinLength(3, ErrorMessage = "Min length for last name is 3")]
        [Display(Name = "Last Name:")]
        public string last_names;
    }
}
