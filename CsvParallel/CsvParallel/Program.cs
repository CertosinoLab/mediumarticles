using CsvHelper;
using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;

namespace CsvParallel
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            Test();

            stopwatch.Stop();
            TimeSpan ts = stopwatch.Elapsed;
            Console.WriteLine("Elapsed Time is {0:00}:{1:00}:{2:00}.{3}",
                            ts.Hours, ts.Minutes, ts.Seconds, ts.Milliseconds);
        }

        static void Test() 
        {
            var csvConfig = new CsvConfiguration(CultureInfo.CurrentCulture)
            {
                HasHeaderRecord = true,
                Comment = '#',
                AllowComments = true,
                Delimiter = ",",
            };

            using var streamReader = File.OpenText("your path");
            using var csvReader = new CsvReader(streamReader, csvConfig);

            var users = csvReader.GetRecords<Person>();

            // try to remove AsParallel()
            var test = users.Where(x => x.Salary >= 50000 && x.Salary <= 400000 
            && x.LastName.StartsWith("C") && x.FirstName.StartsWith("J")
            && x.FirstName.EndsWith("n")
            && !x.FirstName.Contains("k")
            && x.Id >= 9000 && x.Id <= 80000
            )
                .Select(x => x).Distinct().ToList();
        } 
    }
}
