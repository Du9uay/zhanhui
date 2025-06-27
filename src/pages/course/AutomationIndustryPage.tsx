import React from 'react';
import { Link } from 'react-router-dom';
import LiquidGlass from '../../components/LiquidGlass';
import { 
  Settings, 
  Cpu, 
  Zap, 
  Monitor,
  Network,
  ChevronRight,
  ArrowRight,
  Eye,
  Target,
  CheckCircle
} from '../../components/Icons';

const AutomationIndustryPage: React.FC = () => {
  const industryLayers = [
    {
      title: "传感层",
      description: "自动化系统获取信息的起始环节",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-400 to-blue-600",
      details: [
        "光电传感器：检测零件位置信息",
        "接近开关：感应金属物体接近",
        "温度传感器：检测环境温度变化",
        "压力传感器：监测系统压力状态"
      ],
      examples: "汽车装配线上的零件位置检测，化工厂反应罐的温度监测"
    },
    {
      title: "控制层（PLC）",
      description: "系统的'大脑'，负责逻辑运算和决策",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      details: [
        "接收传感层的电信号",
        "依据程序进行逻辑运算",
        "输出控制信号至执行层",
        "实现系统的智能控制"
      ],
      examples: "根据传感器信号控制机械手动作，调节反应罐温度"
    },
    {
      title: "执行层",
      description: "将控制信号转化为实际的物理动作",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      details: [
        "电机：实现旋转或直线运动",
        "电磁阀：控制气体或液体通断",
        "机械手：完成抓取放置动作",
        "加热/冷却装置：调节温度"
      ],
      examples: "装配线机械手执行焊接，化工厂阀门调节液位"
    },
    {
      title: "管理层（SCADA/MES）",
      description: "系统管理与监控的高级平台",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600",
      details: [
        "SCADA：数据采集与监视控制",
        "MES：制造执行系统管理",
        "实时数据分析与报告",
        "远程监控与故障诊断"
      ],
      examples: "智能楼宇的电梯调度管理，工厂设备运行状态监控"
    }
  ];

  const coreHardware = [
    {
      name: "PLC",
      description: "可编程逻辑控制器，控制层核心设备",
      components: ["CPU模块（运算处理）", "I/O模块（连接外部设备）", "电源模块（系统供电）"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "传感器",
      description: "将物理量转化为电信号",
      components: ["光电传感器", "接近开关", "温度传感器", "压力传感器"],
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "执行器",
      description: "执行控制指令的设备",
      components: ["电机（旋转运动）", "电磁阀（流体控制）", "气缸（直线运动）", "加热器（温度控制）"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "HMI人机界面",
      description: "操作人员与系统的交互界面",
      components: ["触摸屏显示", "参数设置", "状态监控", "报警显示"],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "工业网络设备",
      description: "实现设备间通信",
      components: ["工业以太网交换机", "通信协议转换器", "网络安全设备", "数据传输线缆"],
      icon: <Network className="w-6 h-6" />
    }
  ];

  const applicationScenarios = [
    {
      title: "离散制造",
      subtitle: "汽车装配线案例",
      description: "汽车装配线包含车身焊接、内饰安装等多道工序，通过PLC精确控制实现自动化生产。",
      process: [
        "传感器检测车身到达指定位置",
        "信号传输至PLC进行逻辑判断",
        "PLC控制机械手各关节运动",
        "完成精确焊接或装配动作"
      ],
      features: ["高精度定位", "快速响应", "灵活编程", "质量一致性"],
      color: "from-blue-400 to-cyan-600",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "过程控制",
      subtitle: "化工厂反应罐案例",
      description: "化工厂反应罐需要精确控制温度、压力、液位等参数，确保化学反应的安全进行。",
      process: [
        "温度/压力传感器实时监测",
        "PLC接收并分析监测数据",
        "根据工艺要求调节参数",
        "控制阀门、加热器等执行器"
      ],
      features: ["连续过程控制", "安全性要求高", "参数精确调节", "实时监控"],
      color: "from-green-400 to-teal-600",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "基础设施",
      subtitle: "智能楼宇案例",
      description: "智能楼宇通过PLC控制电梯调度、照明系统、空调系统等，实现建筑设备的智能化管理。",
      process: [
        "按钮或传感器检测用户需求",
        "PLC分析当前系统状态",
        "优化调度各子系统设备",
        "实现节能和舒适的平衡"
      ],
      features: ["长期稳定运行", "节能环保", "舒适体验", "远程管理"],
      color: "from-purple-400 to-indigo-600",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const coreCapabilities = [
    {
      category: "硬件能力",
      skills: [
        {
          name: "电气图识读",
          description: "识别电气元件符号与连接方式",
          examples: ["PLC I/O接口识别", "传感器接线端子", "执行器连接线路"]
        },
        {
          name: "PLC模块选型",
          description: "根据应用需求选择合适的PLC模块",
          examples: ["DI/DO点数估算", "通信接口选择", "扩展模块配置"]
        },
        {
          name: "安全接线",
          description: "遵循安全规范进行系统接线",
          examples: ["急停电路设计", "接地系统配置", "防护等级选择"]
        }
      ]
    },
    {
      category: "软件能力",
      skills: [
        {
          name: "梯形图编程",
          description: "使用梯形图语言编写控制程序",
          examples: ["基础指令应用", "逻辑关系设计", "程序结构规划"]
        },
        {
          name: "故障诊断",
          description: "快速定位和解决系统故障",
          examples: ["状态指示灯分析", "程序逻辑检查", "硬件连接检测"]
        }
      ]
    },
    {
      category: "系统思维",
      skills: [
        {
          name: "信号流分析",
          description: "理解输入→处理→输出的信号流程",
          examples: ["传感器信号采集", "PLC逻辑处理", "执行器动作控制"]
        },
        {
          name: "安全设计原则",
          description: "将安全放在系统设计的首位",
          examples: ["故障安全设计", "冗余保护机制", "应急响应方案"]
        }
      ]
    }
  ];

  return (
    <div className="p-6 text-white">
      <h1>自动化行业认知页面</h1>
      <p>页面正在开发中...</p>
    </div>
  );
};

export default AutomationIndustryPage; 