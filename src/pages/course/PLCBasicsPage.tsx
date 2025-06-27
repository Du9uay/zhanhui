import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Settings,
  Monitor
} from '../../components/Icons';

const PLCBasicsPage: React.FC = () => {
  const plcFeatures = [
    {
      title: "工业控制器作用",
      description: "PLC是为工业环境设计的数字运算电子系统",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      details: [
        "逻辑控制：实现复杂的逻辑判断",
        "顺序控制：按预设程序执行动作序列",
        "定时控制：精确的时间控制功能",
        "计数控制：统计和计数功能",
        "算术运算：数据处理和计算"
      ],
      examples: "汽车装配线机械手控制，化工厂反应罐温度调节"
    },
    {
      title: "扫描周期与实时性",
      description: "PLC采用循环扫描工作方式，保证系统实时响应",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      details: [
        "输入采样：扫描读取所有输入端子状态",
        "程序执行：按顺序执行用户程序逻辑运算",
        "输出刷新：更新输出锁存器驱动外部负载",
        "通信处理：处理网络通信和诊断",
        "系统维护：内部系统自检和维护"
      ],
      examples: "小型PLC扫描周期：几毫秒到几十毫秒，满足多数工业控制需求"
    },
    {
      title: "硬件最小系统",
      description: "PLC硬件由CPU、电源、I/O模块三大核心部分组成",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      details: [
        "CPU模块：执行用户程序，处理数据通信",
        "电源模块：提供稳定的24V直流或220V交流电源",
        "输入模块：接收外部设备输入信号",
        "输出模块：输出控制信号驱动外部设备",
        "通信模块：实现设备间数据交换"
      ],
      examples: "西门子S7-1200系列，施耐德Modicon M221系列"
    }
  ];

  const scanCycleSteps = [
    {
      step: "输入采样阶段",
      description: "扫描读取所有输入端子状态，存入输入映像寄存器",
      details: [
        "依次读取每个输入点的状态",
        "将状态信息存储到输入映像区",
        "为程序执行准备最新的输入数据",
        "保证程序执行期间输入数据的一致性"
      ],
      color: "from-blue-400 to-cyan-600"
    },
    {
      step: "程序执行阶段", 
      description: "按先左后右、先上后下顺序扫描用户程序",
      details: [
        "从第一条指令开始顺序执行",
        "进行逻辑运算和数据处理",
        "将运算结果存入输出映像寄存器",
        "执行定时器、计数器等功能块"
      ],
      color: "from-green-400 to-blue-600"
    },
    {
      step: "输出刷新阶段",
      description: "将输出映像寄存器状态转存到输出锁存器",
      details: [
        "读取输出映像寄存器的状态",
        "更新物理输出端子的状态",
        "驱动外部负载设备动作",
        "完成一个完整的扫描周期"
      ],
      color: "from-purple-400 to-pink-600"
    }
  ];

  const hardwareComponents = [
    {
      name: "CPU模块",
      description: "PLC的核心大脑，负责程序执行和系统管理",
      specifications: [
        "处理器：32位ARM Cortex处理器",
        "程序存储器：75KB-150KB",
        "数据存储器：100KB-750KB", 
        "运行速度：0.1-1ms/千条指令"
      ],
      functions: [
        "执行用户程序逻辑",
        "处理输入输出数据",
        "管理系统资源",
        "网络通信控制"
      ],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "电源模块",
      description: "为整个PLC系统提供稳定可靠的电源供应",
      specifications: [
        "输入电压：AC 100-240V / DC 24V",
        "输出电压：DC 24V",
        "输出电流：2A-10A",
        "效率：≥85%"
      ],
      functions: [
        "AC/DC电源转换",
        "电压稳定调节",
        "过流过压保护",
        "电源状态指示"
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "I/O模块",
      description: "连接外部设备，实现信号输入输出",
      specifications: [
        "数字输入：DC 24V，AC 120/230V",
        "数字输出：继电器，晶体管，晶闸管",
        "模拟输入：0-10V，4-20mA",
        "模拟输出：0-10V，4-20mA"
      ],
      functions: [
        "外部信号采集",
        "控制信号输出",
        "信号调理转换",
        "电气隔离保护"
      ],
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const selectionPrinciples = [
    {
      title: "DI点数估算",
      description: "统计系统所需的数字输入信号数量",
      steps: [
        "列出所有传感器和开关信号",
        "包括启动、停止、限位开关等",
        "考虑系统的安全信号输入",
        "预留10%-20%的扩展余量"
      ],
      example: "物料搬运系统：传感器4个 + 按钮3个 + 安全开关2个 = 9个DI点"
    },
    {
      title: "DO点数估算", 
      description: "确定系统需要控制的输出设备数量",
      steps: [
        "统计电机、电磁阀等执行器",
        "包括指示灯、报警器等信号设备",
        "考虑系统的安全输出需求",
        "预留10%-20%的扩展余量"
      ],
      example: "物料搬运系统：电机2个 + 电磁阀3个 + 指示灯4个 = 9个DO点"
    },
    {
      title: "CPU性能选择",
      description: "根据程序复杂度和响应要求选择CPU",
      steps: [
        "评估程序的复杂程度",
        "确定系统的实时性要求",
        "考虑通信接口的需求",
        "预留未来功能扩展空间"
      ],
      example: "简单控制选择基本型CPU，复杂系统选择高性能CPU"
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Cpu className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">PLC核心定位与硬件基础</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            深入理解PLC的本质特性、工作原理和硬件构成，掌握PLC选型的基本原则和方法。
          </p>
        </div>
      </section>

      {/* PLC本质与特性 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            PLC本质与核心特性
          </h2>
          <p className="text-white/80">
            PLC作为工业自动化的核心设备，具有独特的技术特性和工作方式。
          </p>
        </div>

        <div className="space-y-8">
          {plcFeatures.map((feature, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">应用实例</h4>
                    <p className="text-white/70 text-sm">{feature.examples}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    核心功能
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 扫描周期详解 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-green-400" />
            PLC扫描周期工作原理
          </h2>
          <p className="text-white/80">
            理解PLC的循环扫描工作方式是掌握PLC编程和应用的基础。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scanCycleSteps.map((step, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white text-lg font-bold`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.step}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/70 text-xs">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 硬件组成 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-orange-400" />
            硬件最小系统组成
          </h2>
          <p className="text-white/80">
            掌握PLC硬件组成，为正确选型和系统设计奠定基础。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {hardwareComponents.map((component, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {component.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {component.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {component.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">技术规格</h4>
                  <div className="space-y-1">
                    {component.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">主要功能</h4>
                  <div className="space-y-1">
                    {component.functions.map((func, funcIndex) => (
                      <div key={funcIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DI/DO点数估算 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-purple-400" />
            PLC选型估算原则
          </h2>
          <p className="text-white/80">
            掌握科学的选型方法，确保PLC配置既能满足需求又经济实用。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {selectionPrinciples.map((principle, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {principle.description}
              </p>
              
              <div className="space-y-3 mb-4">
                {principle.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {stepIndex + 1}
                    </div>
                    <span className="text-white/70 text-sm">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="text-white font-medium text-sm mb-1">计算示例</h4>
                <p className="text-white/60 text-xs">{principle.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            继续学习电气接线规范
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了PLC的核心特性和硬件基础，让我们学习电气接线的规范和安全要求。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/io-wiring" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：电气接线规范</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/automation-industry" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：行业认知</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PLCBasicsPage;
