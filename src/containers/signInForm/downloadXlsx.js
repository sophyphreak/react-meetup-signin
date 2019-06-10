import XLSX from 'xlsx';
import moment from 'moment';

const downloadXlsx = data => {
  const filename = getFilename();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
  XLSX.writeFile(new_workbook, filename);
};

const getFilename = () =>
  `Kadampa signin ${moment().format('dddd, MMMM Do')}.xlsx`;

export default downloadXlsx;
