using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestApp.Library.DAL.Models;

namespace TestApp.Library.BLL
{
    public class Session
    {
        public static async Task<Tuple<Users, string>> ValidateCredentials(TestAppEntities ctx, string Email, string Password)
        {
            try
            {
                string message = String.Empty;
                var user_found = await Users.GetItem(ctx, Email);
                if(user_found != null)
                {
                    if (user_found.is_active == true)
                    {
                        if(user_found.password == Password)
                        {

                        }
                        else
                        {
                            message = "Email or password incorrect.";
                        }
                    }
                    else
                        message = "User inactive.";
                }
                else
                    message = "Email or password incorrect.";


                return Tuple.Create(user_found, message);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
