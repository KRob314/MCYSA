using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCYSA.Models
{
    public class Waiver_Medical
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }
        public string StateId { get; set; }
        public string CountryId { get; set; }
        public System.DateTime DateCompleted { get; set; }
        public Nullable<System.DateTime> LastTetanus { get; set; }
        public string Allergies { get; set; }
        public string ParentFirstName { get; set; }
        public string ParentLastName { get; set; }
        public string ParentPhone { get; set; }
        public string ParentPhone2 { get; set; }
        public string ParentEmail { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string FamilyDoctor { get; set; }
        public string DoctorPhone { get; set; }
        public string EmergencyPocName { get; set; }
        public string EmergencyPocPhone { get; set; }
        public string EmergencyPocName2 { get; set; }
        public string EmergencyPocPhone2 { get; set; }
        public string HealthHistory { get; set; }

        public virtual Country Country { get; set; }
        public virtual Player Player { get; set; }
        public virtual State State { get; set; }
    }
}
