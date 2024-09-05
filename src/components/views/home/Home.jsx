import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import { TbWorldSearch } from 'react-icons/tb';
import { FaRegEdit, FaClipboardList, FaFileSignature, FaHandHoldingUsd, FaCalculator, FaMoneyCheckAlt, FaChartPie } from 'react-icons/fa';
import { IoBasket } from "react-icons/io5";
import { GiCargoCrane, GiPaintBrush } from 'react-icons/gi';
import PageContainer from '../../shared/pageContainer/PageContainer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTeamName } from '../../../store/slices/ProjectSlice';

export default function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initial cards data with icons
  const initialCardsData = [
    { name: 'Sourcing', count: 'Loading...', icon: TbWorldSearch, data: {}, active: true },
    { name: 'Screening', count: 'Loading...', icon: FaClipboardList, data: {}, active: true },
    { name: 'Analysis', count: 'Loading...', icon: FaRegEdit, data: {}, active: true },
    { name: 'Construction', count: 'Loading...', icon: GiCargoCrane, active: true },
    { name: 'Design', count: 'Loading...', icon: GiPaintBrush, active: true },
    { name: 'Marketing', count: 'Loading...', icon: IoBasket, active: true },
    { name: 'Acquisition', count: 'Loading...', icon: FaHandHoldingUsd, active: true },
    { name: 'Dashboard', count: '120', icon: FaChartPie, active: true },
    { name: 'Lending', count: '0', icon: FaMoneyCheckAlt, active: false },
    { name: 'Legal', count: '0', icon: FaFileSignature, active: false },
    { name: 'Account', count: '0', icon: FaCalculator, active: false },
  ];

  const handleCardClick = (name, isActive) => {
    if (isActive) {
      dispatch(setTeamName(name));
      navigate('/projects');
    }
  }

  return (
    <PageContainer title="Home" description="Home page">
      <Box m={2}>
        <Navbar title='Home' />
        <Stack flexDirection='row' flexWrap="wrap" gap={2} justifyContent='center' mt={2} alignItems='center'>
          {initialCardsData.map((card, index) => (
            <Card
              key={index + card.name}
              sx={{
                width: 220,
                textAlign: 'center',
                p: 2,
                border: '2px solid #00A9B9',
                cursor: card.active ? 'pointer' : 'not-allowed',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
              onClick={() => { handleCardClick(card.name, card.active) }}
            >
              <Stack alignItems="center" mb={2}>
                <card.icon style={{ fontSize: '60px', color: card.active ? '#00A9B9' : '#00b0c047' }} />
              </Stack>
              <Typography variant="h6">{card.name}</Typography>
              <Typography variant="body2">{card.count}</Typography>
            </Card>
          ))}
        </Stack>
      </Box>
    </PageContainer>
  );
}
