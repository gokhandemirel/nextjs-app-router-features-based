'use client';

import Layout from '@/components/templates/Layout';
import { getCountry } from '@/features/country/countryThunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useEffect } from 'react';
import styled from 'styled-components';

const Product = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    padding: 8px;
  }
`;

export default function CountryPage() {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.country.list);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <Layout>
      <Product>
        {product.map((item, index) => (
          <li key={index}>
            {item.emoji} {item.name}
          </li>
        ))}
      </Product>
    </Layout>
  );
}
