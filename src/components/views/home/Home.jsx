import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import { TbWorldSearch } from 'react-icons/tb';
import { FaRegEdit, FaClipboardList, FaFileSignature, FaHandHoldingUsd, FaCalculator, FaMoneyCheckAlt, FaChartPie } from 'react-icons/fa';
import { IoBasket } from "react-icons/io5";
import { GiCargoCrane, GiPaintBrush } from 'react-icons/gi';

export default function Home() {
  // Initial cards data with icons
  const initialCardsData = [
    { name: 'Sourcing', count: 'Loading...', icon: TbWorldSearch, data: {}, active: true },
    { name: 'Screening', count: 'Loading...', icon: FaClipboardList, data: {}, active: true },
    { name: 'Analysis', count: 'Loading...', icon: FaRegEdit, data: {}, active: true },
    { name: 'Construction', count: 'Loading...', icon: GiCargoCrane, active: true },
    { name: 'Design', count: 'Loading...', icon: GiPaintBrush, active: true },
    { name: 'Legal', count: '0', icon: FaFileSignature, active: false },
    { name: 'Marketing', count: 'Loading...', icon: IoBasket, active: true },
    { name: 'Acquisition', count: 'Loading...', icon: FaHandHoldingUsd, active: true },
    { name: 'Lending', count: '0', icon: FaMoneyCheckAlt, active: false },
    { name: 'Account', count: '0', icon: FaCalculator, active: false },
    { name: 'Dashboard', count: '120', icon: FaChartPie, active: true },
  ];

  return (
    <Box m={2}>
      <Navbar title='Home' />
      <Stack flexDirection='row' flexWrap="wrap" gap={2} justifyContent='center' mt={2} alignItems='center'>
        {initialCardsData.map((card, index) => (
          <Card
            key={index + card.name}
            sx={{
              width: 290,
              textAlign: 'center',
              p: 2,
              background: '#DBFDFF',
              border: '2px solid #00A9B9',
              cursor: card.active ? 'pointer' : 'not-allowed',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.04)',
              },
            }}
          >
            <Stack alignItems="center" mb={2}>
              <card.icon style={{ fontSize: '80px', color: card.active ? '#00A9B9' : '#00b0c047' }} />
            </Stack>
            <Typography variant="h6">{card.name}</Typography>
            <Typography variant="body2">{card.count}</Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
