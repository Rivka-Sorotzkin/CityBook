using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
    public class ChildDTO
    {
        [Key]
        public int ChildId { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public DateTime BornDate { get; set; }
        [Required]
        public string Tz { get; set; }
        public int FatherId { get; set; }
    }
}
