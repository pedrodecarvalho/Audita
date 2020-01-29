namespace Audita.API.Models
{
    public class Site
    {
        public int Id { get; set; }
        public string SiteName { get; set; }
        public int VendorID { get; set; }
        public string Lat { get; set; }
        public string Long { get; set; }
        public float MastHeight { get; set; }
        public int TowerTypeID { get; set; }
        public string EskomAcc { get; set; }

    }

}