using CsvHelper.Configuration.Attributes;
using System;

namespace CsvParallel
{
    class Person
    {
        [Index(0)]
        public int Id { get; set; }
        [Index(1)]
        public string FirstName { get; set; }
        [Index(2)]
        public string LastName { get; set; }
        [Index(3)]
        public int Salary { get; set; }
    }
}
