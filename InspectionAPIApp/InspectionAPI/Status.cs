using System.ComponentModel.DataAnnotations;

namespace InspectionAPI
{
    public class Status
    {
        public int Id { get; set; }
        [StringLength(20)]
        public String StatusOption { get; set; } = String.Empty;

    }
}
