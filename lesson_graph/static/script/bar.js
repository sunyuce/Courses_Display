function initChart(chartType){
  var chartDom = document.getElementById('difficulty');
  var myChart = echarts.init(chartDom);
  var chartTitle = document.getElementById('chart-title'); //biaot
  var option;

  if(chartType==='计算机与计算科学学院'){
    chartTitle.innerHTML = '计算机与计算科学学院 课程综合难度评分最高/最低（五项）';
    option = {
      grid: {
        left: '25%', // 增加左边距
        // right: '10%', // 增加右边距
        top: '10%', // 增加上边距
        bottom: '10%' // 增加下边距
      },
      yAxis: {
        type: 'category',
        data: [
          '机器人基础知识科普',
          '数学建模实用技术基础',
          'ACM程序设计进阶训练',
          '零基础ANDROID移动应用开发',
          'IT创新思维与方法',
          '数据库原理',
          '计算机网络原理与实验',
          '程序化交易',
          '数据结构',
          '数理统计基础'
        ],
        axisLabel: {
          interval: 0,
          rotate: 0, // 保持标签水平
          position: 'right'
        }
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            {
              value: 0.0673,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0959,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1058,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1142,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1240,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.9928,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.9007,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.7995,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.7076,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.6503,
              itemStyle: {
                color: '#a90000'
              }
            }
          ],
          type: 'bar',
          label: {
            show: true, // 开启显示
            position: 'right', // 在右边显示
            formatter: '{c}', // 显示数值
            textStyle: {
              // 数值样式
              color: 'black', // 字体颜色
              fontSize: 15 // 字体大小
            }
          }
        }
      ]
    };
  }else if(chartType==='法学院'){
    chartTitle.innerHTML = '法学院 课程综合难度评分最高/最低（五项）';
    option = {
      grid: {
        left: '20%', // 增加左边距
        // right: '10%', // 增加右边距
        top: '10%', // 增加上边距
        bottom: '10%' // 增加下边距
      },
      yAxis: {
        type: 'category',
        data: [
          '公司法学',
          '法律与案例',
          '中西文化与法律思维',
          '法学复合实践',
          '证据法',
          '行政法与诉讼法',
          '民法总论',
          '政治学原理',
          '国际法',
          '债法总论'
        ],
        axisLabel: {
          interval: 0,
          rotate: 0, // 保持标签水平
          position: 'right'
        }
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            {
              value: 0.0786,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0937,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0951,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1030,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1185,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.9113,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.9076,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.7082,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.6583,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.6413,
              itemStyle: {
                color: '#a90000'
              }
            }
          ],
          type: 'bar',
          label: {
            show: true, // 开启显示
            position: 'right', // 在右边显示
            formatter: '{c}', // 显示数值
            textStyle: {
              // 数值样式
              color: 'black', // 字体颜色
              fontSize: 15 // 字体大小
            }
          }
        }
      ]
    };
  }else if(chartType==='医学院'){
    chartTitle.innerHTML = '医学院 课程综合难度评分最高/最低（五项）';
    option = {
      grid: {
        left: '25%', // 增加左边距
        // right: '10%', // 增加右边距
        top: '10%', // 增加上边距
        bottom: '10%' // 增加下边距
      },
      yAxis: {
        type: 'category',
        data: [
          '护理专业实践(II)',
          '诊断学II实验',
          '微生物及免疫学实验',
          '生物药剂学与药物动力学实验',
          '有机化学实验(甲)',
          '有机化学',
          '病理学(甲)',
          '医学影像学',
          '生物化学(甲)',
          '人体解剖学'
        ],
        axisLabel: {
          interval: 0,
          rotate: 0, // 保持标签水平
          position: 'right'
        }
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            {
              value: 0.0790,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0826,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0827,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.0870,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.1101,
              itemStyle: {
                color: 'green'
              }
            },
            {
              value: 0.9366,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.8681,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.8565,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.8294,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 0.8054,
              itemStyle: {
                color: '#a90000'
              }
            }
          ],
          type: 'bar',
          label: {
            show: true, // 开启显示
            position: 'right', // 在右边显示
            formatter: '{c}', // 显示数值
            textStyle: {
              // 数值样式
              color: 'black', // 字体颜色
              fontSize: 15 // 字体大小
            }
          }
        }
      ]
    };
  }
  

  option && myChart.setOption(option);

  myChart.on('click', function (params) {
    // 获取搜索输入框和搜索按钮的DOM元素
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');

    // 将被点击的柱形图的数据名称设置到搜索输入框中
    searchInput.value = params.name;

    // 执行搜索按钮的点击事件
    searchButton.click();
  });

}
