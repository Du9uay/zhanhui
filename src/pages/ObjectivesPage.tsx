import React from 'react';
import { Link } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlass';
import { 
  Target,
  CheckCircle,
  BookOpen,
  Cpu,
  Zap,
  ArrowRight
} from '../components/Icons';

const ObjectivesPage: React.FC = () => {
  const primaryObjectives = [
    {
      title: "电气图识读技能",
      description: "熟悉离散制造（如汽车装配线焊接工序）、过程控制（化工厂反应罐）、基础设施（智能楼宇）等生产流程",
      icon: <BookOpen className="w-6 h-6" />,
      details: [
        "识别电气元件符号与连接方式",
        "理解汽车装配线电气图结构",
        "掌握PLC I/O接口识读方法",
        "学会传感器和执行器连接线路分析"
      ]
    },
    {
      title: "梯形图编程操作能力",
      description: "具有使用梯形图编程工具进行常开/常闭触点绘制、定时器/计数器设置、输出线圈连接等基础操作",
      icon: <Cpu className="w-6 h-6" />,
      details: [
        "掌握梯形图五大基础指令",
        "熟练绘制常开/常闭触点",
        "设置TON定时器参数",
        "配置计数器功能",
        "实现输出线圈控制逻辑"
      ]
    },
    {
      title: "PLC硬件接线能力",
      description: "使用PLC硬件进行I/O模块接线、急停电路安全接线的操作能力",
      icon: <Zap className="w-6 h-6" />,
      details: [
        "掌握两线制传感器接线方法",
        "掌握三线制传感器接线规范",
        "实现急停电路独立硬接线",
        "熟悉熔断器选型与继电器隔离",
        "遵循安全接线标准"
      ]
    }
  ];

  const theoreticalKnowledge = [
    {
      title: "PLC循环扫描工作原理",
      points: [
        "输入采样阶段：扫描读取所有输入端子状态",
        "程序执行阶段：按顺序执行用户程序逻辑运算",
        "输出刷新阶段：更新输出锁存器驱动外部负载",
        "掌握扫描周期对实时性的影响"
      ]
    },
    {
      title: "自动化产业层级划分",
      points: [
        "传感层：光电传感器、接近开关等信号采集",
        "控制层：PLC作为系统大脑进行逻辑控制",
        "执行层：电机、电磁阀等执行器实现动作",
        "管理层：SCADA/MES系统监控与管理"
      ]
    },
    {
      title: "安全设计优先原则",
      points: [
        "急停电路必须独立于PLC程序控制",
        "避免梯形图编程中的双线圈冲突",
        "系统设计始终将安全放在首位",
        "掌握故障安全和失效安全概念"
      ]
    }
  ];

  const practicalSkills = [
    {
      title: "DI/DO点数估算选型",
      description: "根据应用需求准确估算PLC模块规格",
      steps: [
        "统计系统所需检测的输入信号数量",
        "确定需要控制的输出信号数量",
        "预留10%-20%余量应对功能扩展",
        "选择合适的PLC硬件模块"
      ]
    },
    {
      title: "系统相关安全操作",
      description: "遵循安全设计优先原则进行系统操作",
      steps: [
        "急停按钮独立硬接线设计",
        "电路单独布线确保可靠性",
        "紧急情况下快速切断电源",
        "保障人员和设备安全"
      ]
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <LiquidGlass
          displacementScale={80}
          blurAmount={0.1}
          saturation={140}
          elasticity={0.25}
          cornerRadius={24}
          className="text-center p-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">课程学习目标</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            通过本课程的学习，学生将全面掌握PLC控制器的基础知识和实践技能，
            具备从事自动化相关工作的核心能力。
          </p>
        </LiquidGlass>
      </section>

      {/* 主要学习目标 */}
      <section className="mb-16">
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.08}
          saturation={130}
          cornerRadius={20}
          className="mb-8"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              核心技能目标
            </h2>
            <p className="text-white/80">
              掌握以下三大核心技能，为自动化工程师职业发展奠定坚实基础。
            </p>
          </div>
        </LiquidGlass>

        <div className="space-y-8">
          {primaryObjectives.map((objective, index) => (
            <LiquidGlass
              key={index}
              displacementScale={50}
              blurAmount={0.08}
              saturation={130}
              cornerRadius={16}
              className="p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                    {objective.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {objective.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {objective.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </section>

      {/* 理论知识目标 */}
      <section className="mb-16">
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.08}
          saturation={130}
          cornerRadius={20}
          className="mb-8"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-purple-400" />
              理论知识掌握
            </h2>
            <p className="text-white/80">
              深入理解自动化系统的核心理论，建立完整的知识体系框架。
            </p>
          </div>
        </LiquidGlass>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {theoreticalKnowledge.map((knowledge, index) => (
            <LiquidGlass
              key={index}
              displacementScale={40}
              blurAmount={0.08}
              saturation={130}
              cornerRadius={16}
              className="p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {knowledge.title}
              </h3>
              <div className="space-y-3">
                {knowledge.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </LiquidGlass>
          ))}
        </div>
      </section>

      {/* 实践技能目标 */}
      <section className="mb-16">
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.08}
          saturation={130}
          cornerRadius={20}
          className="mb-8"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Cpu className="w-6 h-6 mr-3 text-orange-400" />
              实践技能培养
            </h2>
            <p className="text-white/80">
              通过具体的操作练习，培养解决实际工程问题的能力。
            </p>
          </div>
        </LiquidGlass>

        <div className="grid md:grid-cols-2 gap-8">
          {practicalSkills.map((skill, index) => (
            <LiquidGlass
              key={index}
              displacementScale={50}
              blurAmount={0.08}
              saturation={130}
              cornerRadius={16}
              className="p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="space-y-3">
                {skill.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {stepIndex + 1}
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </LiquidGlass>
          ))}
        </div>
      </section>

      {/* 行动引导 */}
      <section>
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.1}
          saturation={140}
          cornerRadius={20}
          className="p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            准备好开始学习了吗？
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            让我们从自动化行业的基本构成开始，逐步建立完整的PLC知识体系。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/course/automation-industry" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>开始学习第一章</span>
              </Link>
            </LiquidGlass>
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/careers" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>了解职业发展</span>
              </Link>
            </LiquidGlass>
          </div>
        </LiquidGlass>
      </section>
    </main>
  );
};

export default ObjectivesPage; 