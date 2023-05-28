var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['累计用户数', '聊天室用户数', '进入率', '拉新回流率']
  },
  xAxis: [
    {
      type: 'category',
      axisLabel:{
        show: false,//开启显示
      },
      data: ['累计用户数', '聊天室用户数', '进入率', '拉新回流率'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '人数',
      min: 0,
      max: 60,
      interval: 20,
      axisLabel: {
        formatter: '{value} w'
      }
    },
    {
      type: 'value',
      name: '比例',
      min: 0,
      max:60,
      interval: 20,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '累计用户数',
      type: 'bar',
      label: { //柱体上显示数值
        show: true,//开启显示
        position: 'top',//在上方显示
        formatter: function (params) {
          if(params.value > 0){
            return `${params.value}w`
          }
          return ''
        },
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' w';
        }
      },
      data: [
        10,0,0,0
      ]
    },
    {
      name: '聊天室用户数',
      type: 'bar',
      label: { //柱体上显示数值
        show: true,//开启显示
        position: 'top',//在上方显示
        formatter: function (params) {
          if(params.value > 0){
            return `${params.value}w`
          }
          return ''
        },
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' w';
        }
      },
      data: [
       0,4,0,0
      ]
    },
    {
      name: '进入率',
      type: 'bar',
      yAxisIndex: 1,
      label: { //柱体上显示数值
        show: true,//开启显示
        position: 'top',//在上方显示
        formatter: function (params) {
          if(params.value > 0){
            return `${params.value}%`
          }
          return ''
        },
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [0,0,40,0]
    },
    {
      name: '拉新回流率',
      type: 'bar',
      yAxisIndex: 1,
      label: { //柱体上显示数值
        show: true,//开启显示
        position: 'top',//在上方显示
        formatter: function (params) {
          if(params.value > 0){
            return `${params.value}%`
          }
          return ''
        },
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [0,0,0,9]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);