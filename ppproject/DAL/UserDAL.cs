using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserDAL
    {
        public static void AddUser(User user, List<Child> Childrens)
        {
            using (CityBookDataEntities entities = new CityBookDataEntities())
            {
                try
                {
                    entities.User.Add(user);
                    entities.SaveChanges();
                    if (Childrens.Count > 0)
                    {
                        User father = entities.User.FirstOrDefault(x => x.Tz == user.Tz);
                        foreach (var child in Childrens)
                        {
                            child.ParentId = father.UserId;
                            //child.BornDate = DateTime.Now;
                            entities.Child.Add(child);
                        }
                        entities.SaveChanges();
                    }

                }
                catch (Exception)
                {
                    throw;
                }

            }

        }
    }
}
