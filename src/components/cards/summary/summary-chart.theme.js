import * as echarts from 'echarts/core';

export const SUMMARY_CHART_THEME = 'summary chart';

const axisCommon = {
  axisLine: {
    show: false,
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    show: false,
  },
  splitLine: {
    show: false,
  },
  splitArea: {
    show: false,
  },
};

let summaryChartTheme = {
  timeAxis: axisCommon,
  logAxis: axisCommon,
  valueAxis: axisCommon,
  categoryAxis: axisCommon,
  line: {
    symbol: 'none',
    lineStyle: {
      color: '#9FB3C7',
      width: '2',
      type: 'solid',
    },
    areaStyle: {},
  },
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 0.8,
    colorStops: [
      {
        offset: 0,
        color: '#9FB3C7',
      },
      {
        offset: 1,
        color: 'rgba(128, 128, 128, 0)',
      },
    ],
    global: false,
  },
};

echarts.registerTheme(SUMMARY_CHART_THEME, summaryChartTheme);
