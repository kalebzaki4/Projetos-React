// Arquivo MediaCard.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';  // Adicione esta linha

import './style.css';

import { Chart } from "react-google-charts";

export default function MediaCard() {
  return (
    <>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardMedia
          sx={{ height: 0 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Soma das entradas
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$1.500,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardMedia
          sx={{ height: 0 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aluguel
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$400,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardMedia
          sx={{ height: 0 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Conta de água
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$100,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardMedia
          sx={{ height: 0 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Conta de luz
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$200,00
          </Typography>
        </CardContent>
      </Card>
      <Card className='card2'>
        {/* Componente do primeiro gráfico */}
        <Chart
          chartType="LineChart"
          width="100%"
          height="300px"
          data={[
            ["x", "Ganhos", "Gastos"],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]}
          options={{
            hAxis: {
              title: "Dias",
            },
            vAxis: {
              title: "Gastos",
            },
            series: {
              1: { curveType: "function" },
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As informações do gráfico podem variar com a sua lista, sendo alteráveis. Você pode atualizá-las aqui conforme necessário.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
      <Card className='card3'>
        {/* Componente do segundo gráfico */}
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Task", "Hours per Day"],
            ["Soma das saidas", 11],
            ["Aluguel", 4],
            ["Conta de água", 2],
            ["Conta de luz", 3],
          ]}
          options={{
            title: "Analise dos dados:",
            pieHole: 0.4,
            is3D: false,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Visão geral:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As informações do gráfico podem variar com a sua lista, sendo alteráveis. Você pode atualizá-las aqui.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
      <Card className='card3'>
        {/* Componente do terceiro gráfico */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Visão geral:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As informações do gráfico podem variar com a sua lista, sendo alteráveis. Você pode atualizá-las aqui.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    </>
  );
}
