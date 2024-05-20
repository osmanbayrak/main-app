import React from 'react'
import EnhancedTable from './components/table';
import { Paper } from '@mui/material';

export default function App() {
  return (
    <>  
        <div className='main-title'>
            Hasta Listesi
        </div>
        <Paper sx={{margin: "40px 100px 100px 100px"}}>
            <EnhancedTable />
        </Paper>
    </>
  )
}