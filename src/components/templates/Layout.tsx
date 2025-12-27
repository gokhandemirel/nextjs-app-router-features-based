'use client';

import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  background: #fff;
`;

export default function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}
