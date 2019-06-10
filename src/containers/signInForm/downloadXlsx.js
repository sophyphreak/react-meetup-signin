import XLSX from 'xlsx';
import moment from 'moment';

const downloadXlsx = personList => {
  const data = convertToArrayOfArrays(personList);
  const filename = getFilename();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
  XLSX.writeFile(new_workbook, filename);
};

const convertToArrayOfArrays = personList => {
  const data = [
    ['Name', 'Email', 'Hear About Us', 'Amount Paid', 'Payment Method', 'Date']
  ];
  personList.forEach(person => {
    data.push([
      person.name,
      person.email,
      person.heardAboutUs,
      person.amountPaid,
      person.paymentMethod,
      person.date
    ]);
  });
  return data;
};

const getFilename = () =>
  `Kadampa signin ${moment().format('dddd, MMMM Do')}.xlsx`;

export default downloadXlsx;
