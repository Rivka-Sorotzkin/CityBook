using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class UserBL
    {
        public static void AddUser(UserDTO userDTO)
        {
            UserDAL userDAL = new UserDAL();
            List<ChildDTO> childrens = new List<ChildDTO>();
            childrens = userDTO.Childrens.ToList();
            UserDAL.AddUser(new Converters.UserConverter().ConvertUser(userDTO), new Converters.ChildConverter().ConvertChildren(childrens));
        }
    }
}
