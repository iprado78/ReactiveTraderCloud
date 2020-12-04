import React, { FC } from "react"
import { Title, AnalyticsLineChartWrapper, ProfitAndLossHeader } from "./styled"
import { LineCharts, lineCharts$ } from "./analyticsLineChart"
import { LastPosition, lastPosition$ } from "./LastPosition"
import styled from "styled-components/macro"
import { merge } from "rxjs"

export const ProfitAndLossStyle = styled.div`
  width: 100%;
  height: auto;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column: 1/-1;
`
export const ProfitAndLoss: FC = () => (
  <ProfitAndLossStyle>
    <ProfitAndLossHeader>
      <Title>Profit &amp; Loss</Title>
      <LastPosition />
    </ProfitAndLossHeader>
    <AnalyticsLineChartWrapper>
      <LineCharts />
    </AnalyticsLineChartWrapper>
  </ProfitAndLossStyle>
)

export const profitAndLoss$ = merge(lastPosition$, lineCharts$)
