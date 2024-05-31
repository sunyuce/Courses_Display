var chartDom = document.getElementById('difficulty');
var myChart = echarts.init(chartDom);
var option;

option = {
  yAxis: {
    type: 'category',
    data: [
      '机器人基础知识科普',
      '数学建模实用技术基础',
      'APP INVENTOR-零基础ANDROID移动应用开发',
      'ACM程序设计进阶训练',
      'PHOTOSHOP数码照片处理实用技术',
      '数据库原理',
      '计算机网络原理与实验',
      '程序化交易',
      '数据结构',
      '数理统计基础'
    ],
    axisLabel: {
      interval: 0,
      // formatter: (value) => {
      //   return value < 0 ? value * -1 : value;
      // },
      rotate:0, //设置标签倾斜
      position:'right'
    }
  },
  xAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        {
          value: 0.0547,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 0.0832,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 0.0889,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 0.0931,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 0.1037,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 0.9547,
          itemStyle: {
            color: '#a90000'
          }
        },
        {
          value: 0.8626,
          itemStyle: {
            color: '#a90000'
          }
        },
        {
          value: 0.7868,
          itemStyle: {
            color: '#a90000'
          }
        },
        {
          value: 0.6695,
          itemStyle: {
            color: '#a90000'
          }
        },
        {
          value: 0.6249,
          itemStyle: {
            color: '#a90000'
          }
        }
      ],
      type: 'bar',
      label: {
        show: true, //开启显示
        position: 'right', //在右边显示
        formatter: '{c}',//显示百分号
        textStyle: {
          //数值样式
          color: 'black', //字体颜色
          fontSize: 8 //字体大小
        }
      }
    }
  ]
};

option && myChart.setOption(option);