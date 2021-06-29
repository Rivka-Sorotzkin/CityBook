using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Converters
{
    public class UserConverter
    {
        public User ConvertUser(UserDTO userDto)
        {
            User user = new User();
            user.FirstName = userDto.FirstName;
            user.LastName = userDto.LastName;
            user.Tz = userDto.Tz;
            user.Gender = userDto.Gender;
            user.Hmo = userDto.Hmo;
            user.BornDate = userDto.BornDate;
            return user;
        }
    }
}
