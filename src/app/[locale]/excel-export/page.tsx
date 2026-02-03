'use client';

import { ExcelColumn, exportToExcel } from '@/utils/document/exportToExcel';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;
  padding: 20px;
`;

const Button = styled.ul`
  padding: 6px 12px;
  border: solid 1px #ddd;
  border-radius: 6px;
  cursor: pointer;
`;

interface User {
  name: string;
  surname: string;
  age: number;
}

export default function ExcelExport() {
  const columns: ExcelColumn<User>[] = [
    {
      header: 'Ad',
      key: 'name',
      accessor: (row) => row.name
    },
    {
      header: 'Soyad',
      key: 'surname',
      accessor: (row) => row.surname
    },
    {
      header: 'Yaş',
      key: 'age',
      accessor: (row) => row.age
    }
  ];

  const data: User[] = [
    {
      name: 'Name 1',
      surname: 'Surname 1',
      age: 20
    },
    {
      name: 'Name 2',
      surname: 'Surname 2',
      age: 21
    }
  ];

  const handleExcelDownload = () => {
    exportToExcel<User>({
      data: data,
      columns: columns
    });
  };

  return (
    <Wrapper>
      <Button onClick={handleExcelDownload}>Excel İndir</Button>
    </Wrapper>
  );
}
