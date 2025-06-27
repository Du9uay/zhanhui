import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Settings, 
  Target,
  CheckCircle,
  ArrowRight,
  Monitor,
  Cpu,
  Eye
} from '../../components/Icons';

const IOWiringPage: React.FC = () => {
  const wiringPrinciples = [
    {
      title: "24V直流安全电压",
      description: "PLC输入输出采用24V直流低压，确保操作安全",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-400 to-blue-600",
      details: [
        "安全电压：24V直流属于安全特低电压",
        "人体安全：即使接触也不会造成电击伤害",
        "设备保护：低压工作延长设备使用寿命",
        "维护便利：带电操作相对安全"
      ],
      examples: "工业标准24V DC电源，符合IEC安全规范"
    },
    {
      title: "共阳与共阴接法",
      description: "PLC I/O模块接线分为共阳极和共阴极两种方式",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      details: [
        "共阳极（PNP）：公共端接+24V，输入端接负载到0V",
        "共阴极（NPN）：公共端接0V，输入端接负载到+24V",
        "欧系PLC：多采用共阳极接法",
        "日系PLC：多采用共阴极接法"
      ],
      examples: "西门子S7系列采用共阳极，三菱FX系列采用共阴极"
    }
  ];

  const wiringSteps = [
    {
      step: "电源接线",
      description: "正确连接PLC电源模块",
      details: [
        "确认电源规格：AC 85-264V 或 DC 24V",
        "连接PE保护地线到接地端子",
        "L+/L1连接火线，L-/L2连接零线",
        "检查电源指示灯状态"
      ],
      safety: ["断电操作", "检查电压等级", "确认接地良好"],
      color: "from-red-400 to-orange-600"
    },
    {
      step: "输入模块接线",
      description: "连接传感器和开关到DI模块",
      details: [
        "确认输入信号类型：干接点或湿接点",
        "共阳接法：传感器一端接24V，另一端接输入点",
        "共阴接法：传感器一端接0V，另一端接输入点",
        "连接公共端COM到相应电压等级"
      ],
      safety: ["注意极性", "避免短路", "检查信号电平"],
      color: "from-blue-400 to-cyan-600"
    },
    {
      step: "输出模块接线", 
      description: "连接执行器到DO模块",
      details: [
        "确认负载类型：感性负载需加续流二极管",
        "继电器输出：可接AC/DC负载，注意容量限制",
        "晶体管输出：只能接DC负载，响应速度快",
        "负载串联在输出点和公共端之间"
      ],
      safety: ["检查负载容量", "感性负载保护", "避免并联"],
      color: "from-purple-400 to-pink-600"
    }
  ];

  const signalTypes = [
    {
      name: "数字输入（DI）",
      description: "接收开关量信号，状态为ON/OFF",
      devices: ["按钮", "限位开关", "接近开关", "光电开关"],
      specifications: [
        "输入电压：DC 24V",
        "输入电流：约7mA",
        "响应时间：≤10ms",
        "抗干扰：光电隔离"
      ],
      wiring: "传感器常开触点串联在输入回路中",
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "数字输出（DO）",
      description: "输出开关量信号，控制执行器动作",
      devices: ["指示灯", "接触器", "电磁阀", "蜂鸣器"],
      specifications: [
        "输出电压：DC 24V",
        "输出电流：0.5A-2A",
        "响应时间：≤1ms",
        "保护：短路保护"
      ],
      wiring: "负载串联在输出点和公共端之间",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "模拟输入（AI）",
      description: "接收连续变化的模拟信号",
      devices: ["温度传感器", "压力变送器", "流量计", "电位器"],
      specifications: [
        "信号范围：0-10V, 4-20mA",
        "分辨率：12-16位",
        "精度：±0.1%",
        "转换时间：≤1ms"
      ],
      wiring: "注意信号屏蔽和接地",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  const safetyRequirements = [
    {
      category: "急停回路设计",
      requirements: [
        "硬件急停：急停按钮直接切断主回路电源",
        "多点设置：在危险区域设置多个急停按钮",
        "故障安全：按钮损坏时系统自动停机",
        "复位确认：急停释放后需手动复位"
      ],
      principle: "急停回路必须独立于PLC控制系统",
      color: "from-red-500 to-red-700"
    },
    {
      category: "安全门联锁",
      requirements: [
        "位置监控：监测安全门的开闭状态",
        "双通道确认：使用两个独立开关监测",
        "延时保护：门打开后延时停止设备运行",
        "状态显示：门状态在HMI上实时显示"
      ],
      principle: "安全门打开时设备必须停止运行",
      color: "from-orange-500 to-orange-700"
    },
    {
      category: "光幕保护",
      requirements: [
        "区域监控：在危险区域设置光幕",
        "及时响应：检测到入侵立即停机",
        "复位模式：手动复位或自动复位",
        "自检功能：光幕系统定期自检"
      ],
      principle: "人员进入危险区域时设备立即停止",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">I/O接线规范与安全要求</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            掌握PLC输入输出模块的正确接线方法，学习安全电路设计原则，确保系统稳定可靠运行。
          </p>
        </div>
      </section>

      {/* 接线基本原则 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            I/O接线基本原则
          </h2>
          <p className="text-white/80">
            正确的I/O接线是PLC系统稳定运行的基础，必须遵循标准规范和安全要求。
          </p>
        </div>

        <div className="space-y-8">
          {wiringPrinciples.map((principle, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">行业标准</h4>
                    <p className="text-white/70 text-sm">{principle.examples}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    技术要点
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principle.details.map((detail, detailIndex) => (
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

      {/* 接线步骤详解 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            标准接线步骤
          </h2>
          <p className="text-white/80">
            按照标准步骤进行接线，确保系统安全可靠，便于维护和故障排除。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {wiringSteps.map((step, index) => (
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
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">操作步骤</h4>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-red-400 font-medium mb-2">安全注意</h4>
                  <div className="space-y-1">
                    {step.safety.map((safety, safetyIndex) => (
                      <div key={safetyIndex} className="text-red-300 text-xs bg-red-900/20 rounded px-2 py-1">
                        ⚠️ {safety}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 信号类型说明 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-orange-400" />
            I/O信号类型详解
          </h2>
          <p className="text-white/80">
            理解不同类型I/O信号的特点和应用，为正确选择和连接设备提供指导。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {signalTypes.map((signal, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {signal.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {signal.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {signal.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">常用设备</h4>
                  <div className="flex flex-wrap gap-1">
                    {signal.devices.map((device, deviceIndex) => (
                      <span key={deviceIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">技术规格</h4>
                  <div className="space-y-1">
                    {signal.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-900/20 rounded p-3">
                  <h4 className="text-blue-300 font-medium text-sm mb-1">接线要点</h4>
                  <p className="text-blue-200 text-xs">{signal.wiring}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 安全电路设计 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-red-400" />
            安全电路设计原则
          </h2>
          <p className="text-white/80">
            安全电路设计是工业控制系统的重中之重，必须遵循故障安全和冗余保护原则。
          </p>
        </div>

        <div className="space-y-6">
          {safetyRequirements.map((requirement, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${requirement.color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {requirement.category}
                  </h3>
                  <p className="text-red-300 font-medium text-sm bg-red-900/20 rounded px-3 py-1 inline-block">
                    设计原则：{requirement.principle}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {requirement.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            继续学习梯形图编程
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了I/O接线规范和安全要求，让我们学习梯形图编程的基础指令。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/ladder-diagram" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：梯形图编程</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/plc-basics" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：PLC基础</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IOWiringPage;
