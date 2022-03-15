import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { InfoButton } from 'components/Button';

export default function PaginationButtons({
  cardsPerPage,
  totalCards,
  paginate
}) {
  const [currentPage, setCurrent] = useState(1);
  const numOfPages = Math.ceil(totalCards / cardsPerPage);

  return (
    <Box>
      <Box>
        <span
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
              setCurrent(currentPage - 1);
            }
          }}
        >
          <InfoButton>&lt;</InfoButton>
        </span>
        <InfoButton>{currentPage}</InfoButton>
        <span
          onClick={() => {
            if (currentPage < numOfPages) {
              paginate(currentPage + 1);
              setCurrent(currentPage + 1);
            }
          }}
        >
          <InfoButton>&gt;</InfoButton>
        </span>
      </Box>
    </Box>
  );
}
