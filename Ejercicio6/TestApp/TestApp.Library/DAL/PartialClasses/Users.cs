using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TestApp.Library.DAL.Models;

namespace TestApp.Library.DAL.Models
{
    [MetadataType(typeof(UserMetadata))]
    public partial class Users
    {
        //return this.is_active ?? false;
        [NotMapped]
        public bool isActive { get; set; }
        public string FullName { get { return $"{this.first_names} {this.last_names}"; } }

        public static async Task<List<Users>> GetList(TestAppEntities ctx)
        {
            return await (from x in ctx.Users select x).ToListAsync();
        }

        public static async Task<Users> GetItem(TestAppEntities ctx, int user_id)
        {
            return await (from x in ctx.Users where x.user_id == user_id select x).FirstOrDefaultAsync();
        }

        public static async Task<Users> GetItem(TestAppEntities ctx, string email)
        {
            return await (from x in ctx.Users where x.email == email select x).FirstOrDefaultAsync();
        }
        public static async Task<Users> Add(TestAppEntities ctx, Users item)
        {
            ctx.Users.Add(item);
            await ctx.SaveChangesAsync();

            return item;
        }

        public static async Task<bool> Update(TestAppEntities ctx, Users item)
        {
            ctx.Update(item);
            await ctx.SaveChangesAsync();

            return true;
        }

        public static async Task<bool> Delete(TestAppEntities ctx, int user_id)
        {
            var user_item = await ctx.Users.SingleOrDefaultAsync(m => m.user_id == user_id);
            ctx.Users.Remove(user_item);
            await ctx.SaveChangesAsync();

            return true;
        }
    }
}
