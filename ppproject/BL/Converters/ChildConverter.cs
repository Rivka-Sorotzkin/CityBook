using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Converters
{
    public class ChildConverter
    {
        public List<Child> ConvertChildren(List<ChildDTO> childrens)
        {
            List<Child> childrenS = new List<Child>();
            foreach (var ChildDto in childrens)
            {
                Child child = new Child();
                child.Full_Name = ChildDto.FullName;
                child.Tz = ChildDto.Tz;
                child.BornDate = ChildDto.BornDate;
                childrenS.Add(child);
            }
            return childrenS;

        }
    }
}
