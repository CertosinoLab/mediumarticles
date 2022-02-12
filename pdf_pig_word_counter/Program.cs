using System;
using UglyToad.PdfPig;
using UglyToad.PdfPig.Content;

namespace pdf_pig_word_counter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string wordToFind = "pancake";
            int numberOfOccurrences = 0;

            using (PdfDocument document = PdfDocument.Open(@"YOUR PATH\pdf\test.pdf"))
            {
                foreach (Page page in document.GetPages())
                {
                    string pageText = page.Text;

                    foreach (Word word in page.GetWords())
                    {
                        if (word.Text.ToLower().Contains(wordToFind.ToLower()))
                            numberOfOccurrences++;
                    }
                }
                Console.WriteLine("Total Occurrences: " + numberOfOccurrences);
            }
        }


    }
}
