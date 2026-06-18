import {
  DBox,
  DCard,
  DChip,
  DLayout,
  DProgress,
} from '@dynamic-framework/ui-react';

import './dashboard-view.css';

type KpiCard = {
  title: string;
  value: string;
  trend: string;
  positive?: boolean;
};

const kpiCards: KpiCard[] = [
  {
    title: 'Ventas del mes',
    value: '$ 42,580',
    trend: '+12.4% vs mes anterior',
    positive: true,
  },
  {
    title: 'Pedidos activos',
    value: '318',
    trend: '+8 nuevos hoy',
    positive: true,
  },
  {
    title: 'Tasa de devolucion',
    value: '1.9%',
    trend: '-0.4% semanal',
    positive: true,
  },
  {
    title: 'Incidencias abiertas',
    value: '7',
    trend: '+2 en las ultimas 24h',
    positive: false,
  },
];

const activityRows = [
  { cliente: 'Mercado Norte', estado: 'Completado', total: '$ 1,240' },
  { cliente: 'Comercial Atlas', estado: 'Pendiente', total: '$ 980' },
  { cliente: 'Ferreteria Central', estado: 'Completado', total: '$ 1,870' },
  { cliente: 'Distribuidora Sol', estado: 'En revision', total: '$ 620' },
];

function getStatusChipColor(status: string): 'success' | 'warning' | 'info' {
  if (status === 'Completado') {
    return 'success';
  }

  if (status === 'Pendiente') {
    return 'warning';
  }

  return 'info';
}

export function DashboardView() {
  return (
    <div className="container">
      <DBox className="dashboard-page" dataAttributes={{ 'data-testid': 'dashboard-view' }}>
        <section className="dashboard-header">
          <h1>Dashboard Operativo</h1>
          <p>Resumen rapido del rendimiento comercial y estado de operaciones.</p>
        </section>

        <DLayout className="dashboard-grid" gap={4} aria-label="Indicadores clave">
          {kpiCards.map((card) => (
            <DLayout.Pane key={card.title} cols={12} colsMd={6} colsLg={3}>
              <DCard className="kpi-card">
                <DCard.Body>
                  <p className="kpi-title">{card.title}</p>
                  <p className="kpi-value">{card.value}</p>
                  <p className={`kpi-trend ${card.positive ? 'is-positive' : 'is-negative'}`}>
                    {card.trend}
                  </p>
                </DCard.Body>
              </DCard>
            </DLayout.Pane>
          ))}
        </DLayout>

        <DLayout className="dashboard-content" gap={4}>
          <DLayout.Pane cols={12} colsLg={4}>
            <DCard className="panel panel-chart" aria-label="Meta de ingresos">
              <DCard.Header>
                <h4 className="mb-0">Meta de ingresos</h4>
              </DCard.Header>
              <DCard.Body>
                <DProgress
                  currentValue={74}
                  maxValue={100}
                  height={12}
                  hideCurrentValue
                  enableStripedAnimation
                />
                <p className="progress-label">74% completado - faltan $ 13,000 para la meta mensual</p>
              </DCard.Body>
            </DCard>
          </DLayout.Pane>

          <DLayout.Pane cols={12} colsLg={8}>
            <DCard className="panel panel-table" aria-label="Actividad reciente">
              <DCard.Header>
                <h4 className="mb-0">Actividad reciente</h4>
              </DCard.Header>
              <DCard.Body>
                <table>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Estado</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityRows.map((row) => (
                      <tr key={`${row.cliente}-${row.total}`}>
                        <td>{row.cliente}</td>
                        <td>
                          <DChip
                            color={getStatusChipColor(row.estado)}
                            text={row.estado}
                          />
                        </td>
                        <td>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DCard.Body>
            </DCard>
          </DLayout.Pane>
        </DLayout>
      </DBox>
    </div>
  );
}
