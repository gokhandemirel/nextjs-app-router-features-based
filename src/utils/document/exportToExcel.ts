import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export interface ExcelColumn<T> {
  header: string;
  key: string;
  width?: number;
  accessor: (row: T) => unknown;
}

export async function exportToExcel<T>({
  data,
  columns,
  sheetName = 'Sheet1',
  fileName = 'export.xlsx'
}: {
  data: T[];
  columns: ExcelColumn<T>[];
  sheetName?: string;
  fileName?: string;
}) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);

  worksheet.columns = columns.map((col) => ({
    header: col.header,
    key: col.key,
    width: col.width ?? 20
  }));

  data.forEach((row) => {
    const excelRow = columns.reduce<Record<string, unknown>>((acc, col) => {
      acc[col.key] = col.accessor(row) ?? '-';
      return acc;
    }, {});

    worksheet.addRow(excelRow);
  });

  worksheet.getRow(1).font = { bold: true };

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), fileName);
}
