import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  Eye,
  CheckCircle,
  ArrowRight,
  Settings,
  Monitor,
  Cpu
} from '../../components/Icons';

const SafetyPage: React.FC = () => {
  const safetyPrinciples = [
    {
      title: "故障安全原则",
      description: "系统故障时必须进入安全状态",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      principles: [
        "断电安全：失电时设备自动停止",
        "常闭设计：安全信号采用常闭触点",
        "硬件优先：安全逻辑不依赖软件",
        "冗余保护：重要安全功能双重保护"
      ],
      examples: "急停按钮断开时所有设备立即停止，安全门打开时机器自动停机"
    },
    {
      title: "风险评估与控制",
      description: "识别危险源并采取相应控制措施",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      principles: [
        "危险识别：分析所有潜在危险源",
        "风险评级：按照严重程度分级",
        "控制层级：消除-预防-保护-程序",
        "定期评估：持续改进安全措施"
      ],
      examples: "机械伤害风险通过防护罩和光幕保护，电气危险通过接地和漏电保护"
    },
    {
      title: "安全集成系统",
      description: "将安全功能集成到控制系统中",
      icon: <Settings className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      principles: [
        "功能安全：符合IEC 61508标准",
        "安全PLC：专用安全控制器",
        "诊断功能：安全回路自检测",
        "可追溯性：安全操作记录"
      ],
      examples: "F-PLC安全控制器，安全I/O模块，故障诊断系统"
    }
  ];

  const emergencyStopSystems = [
    {
      component: "急停按钮",
      description: "手动紧急停止设备运行",
      requirements: [
        "红色蘑菇头按钮，黄色背景",
        "按下后自锁，需手动复位",
        "常闭触点，断电时安全",
        "每个工作区域必须可达"
      ],
      installation: [
        "安装高度：800-1200mm",
        "设置间距：不超过15米",
        "明显标识：紧急停止字样",
        "定期检测：确保功能正常"
      ],
      wiring: "急停按钮串联在主接触器控制回路中，任一按钮按下都能切断主电源",
      color: "from-red-500 to-red-700"
    },
    {
      component: "安全门开关",
      description: "监控防护门的开闭状态",
      requirements: [
        "双通道监控：两个独立开关",
        "强制断开：机械强制分离",
        "防欺骗设计：防止人为绕过",
        "状态指示：门状态清晰显示"
      ],
      installation: [
        "安装位置：门框和门体对应",
        "检测距离：门开启3-5mm即检测",
        "防护等级：IP65以上",
        "连接方式：专用安全电缆"
      ],
      wiring: "安全门开关连接到安全PLC输入端，控制危险区域设备的运行权限",
      color: "from-orange-500 to-orange-700"
    },
    {
      component: "安全光幕",
      description: "无接触式安全保护装置",
      requirements: [
        "光束间距：根据手指/手掌选择",
        "响应时间：满足安全距离要求",
        "自检功能：定期自动检测",
        "抗干扰：光束编码和滤波"
      ],
      installation: [
        "安装高度：覆盖危险区域",
        "安全距离：S = K × T + C",
        "光轴对准：发射器和接收器同轴",
        "环境考虑：避免强光干扰"
      ],
      wiring: "光幕输出信号连接安全继电器或安全PLC，实现安全逻辑控制",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  const safetyStandards = [
    {
      standard: "IEC 61508",
      title: "功能安全基础标准",
      description: "电气/电子/可编程电子安全系统的功能安全",
      keyPoints: [
        "SIL等级：安全完整性等级1-4",
        "生命周期：从概念到废弃的全过程",
        "风险降低：量化安全目标",
        "管理体系：功能安全管理"
      ],
      application: "工业过程控制、交通运输、医疗设备等安全关键系统"
    },
    {
      standard: "ISO 13849",
      title: "机械安全控制系统",
      description: "机械安全相关控制系统的设计原则",
      keyPoints: [
        "PLr等级：所需性能等级a-e",
        "类别结构：Cat.B, 1, 2, 3, 4",
        "MTTFD：平均故障间隔时间",
        "诊断覆盖：DC诊断覆盖率"
      ],
      application: "工业机械、生产线、自动化设备的安全控制系统"
    },
    {
      standard: "IEC 62061",
      title: "机械安全功能安全",
      description: "机械电气控制系统的功能安全",
      keyPoints: [
        "SILCL：声称的安全完整性等级",
        "子系统：传感器-逻辑-执行器",
        "架构约束：硬件故障容错",
        "软件评估：系统软件安全要求"
      ],
      application: "机械设备的电气控制系统安全设计和评估"
    }
  ];

  const practicalSafetyCase = {
    title: "实际案例：冲压机安全系统设计",
    description: "设计冲压机的完整安全保护系统",
    hazardAnalysis: [
      "挤压伤害：手部被冲压模具挤压",
      "切割伤害：锋利边缘造成割伤",
      "撞击伤害：设备意外启动撞击",
      "电气危险：触电和电弧伤害"
    ],
    safetyMeasures: [
      {
        measure: "双手控制",
        description: "操作员双手同时按下启动按钮",
        implementation: "两个启动按钮相距500mm，必须在0.5秒内同时按下",
        safetyLevel: "PLd / SIL2"
      },
      {
        measure: "安全光幕",
        description: "保护冲压区域，检测人员入侵",
        implementation: "光幕高度600mm，光束间距30mm，安全距离1000mm",
        safetyLevel: "PLd / SIL2"
      },
      {
        measure: "急停系统",
        description: "紧急情况下立即停止设备",
        implementation: "操作台和维护位置各设置一个急停按钮",
        safetyLevel: "PLe / SIL3"
      },
      {
        measure: "安全门联锁",
        description: "维护门打开时禁止设备运行",
        implementation: "双通道安全门开关，带防欺骗功能",
        safetyLevel: "PLd / SIL2"
      }
    ],
    controlLogic: [
      "运行条件：安全门关闭 AND 光幕未遮挡 AND 急停未按下",
      "启动条件：运行条件 AND 双手启动按钮同时按下",
      "停止条件：任一安全条件不满足立即停止",
      "复位条件：所有安全条件恢复后手动复位"
    ]
  };

  const maintenanceSafety = [
    {
      phase: "上电前检查",
      procedures: [
        "检查急停按钮是否复位",
        "确认所有安全门已关闭",
        "检查安全设备状态指示",
        "验证接地连接可靠"
      ],
      warnings: ["断电状态下进行检查", "使用合格的检测仪表", "穿戴个人防护用品"]
    },
    {
      phase: "运行中监控",
      procedures: [
        "观察安全设备状态指示",
        "监听异常声音和振动",
        "检查温度和压力参数",
        "记录运行数据和异常"
      ],
      warnings: ["不要绕过安全保护装置", "异常情况立即停机检查", "保持安全操作距离"]
    },
    {
      phase: "维护作业",
      procedures: [
        "执行上锁挂牌程序",
        "验证设备零能量状态",
        "使用专用维护工具",
        "恢复所有安全装置"
      ],
      warnings: ["多人作业时沟通确认", "维护后测试安全功能", "记录维护作业内容"]
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">安全强化模块</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            深入学习工业安全的核心概念，掌握安全系统设计原则和实际应用方法，确保人员和设备安全。
          </p>
        </div>
      </section>

      {/* 安全设计原则 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-red-400" />
            工业安全设计原则
          </h2>
          <p className="text-white/80">
            安全是工业自动化的首要原则，必须从系统设计阶段就充分考虑安全因素。
          </p>
        </div>

        <div className="space-y-8">
          {safetyPrinciples.map((principle, index) => (
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
                    <h4 className="text-white font-medium mb-2">应用实例</h4>
                    <p className="text-white/70 text-sm">{principle.examples}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                    核心原则
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principle.principles.map((p, pIndex) => (
                      <div key={pIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 安全设备详解 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-orange-400" />
            核心安全设备
          </h2>
          <p className="text-white/80">
            了解各种安全设备的特点、安装要求和接线方法，正确选择和使用安全保护装置。
          </p>
        </div>

        <div className="space-y-8">
          {emergencyStopSystems.map((system, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${system.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {system.component}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {system.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">技术要求</h4>
                  <div className="space-y-2">
                    {system.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">安装规范</h4>
                  <div className="space-y-2">
                    {system.installation.map((install, installIndex) => (
                      <div key={installIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{install}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">接线说明</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <p className="text-green-300 text-sm leading-relaxed">
                      {system.wiring}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 安全标准 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-blue-400" />
            国际安全标准
          </h2>
          <p className="text-white/80">
            遵循国际安全标准，确保安全系统设计的规范性和有效性。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {safetyStandards.map((standard, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="mb-4">
                <div className="text-blue-300 font-bold text-lg mb-1">{standard.standard}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {standard.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {standard.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">核心要点</h4>
                  <div className="space-y-1">
                    {standard.keyPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-900/20 rounded p-3">
                  <h4 className="text-blue-300 font-medium text-sm mb-1">应用领域</h4>
                  <p className="text-blue-200 text-xs">{standard.application}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实际案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalSafetyCase.title}
          </h2>
          <p className="text-white/80 mb-6">
            {practicalSafetyCase.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-red-400 font-semibold mb-3">危险分析</h4>
              <div className="space-y-2">
                {practicalSafetyCase.hazardAnalysis.map((hazard, hazardIndex) => (
                  <div key={hazardIndex} className="flex items-start space-x-3 bg-red-900/20 rounded-lg p-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-200 text-sm">{hazard}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-green-400 font-semibold mb-3">控制逻辑</h4>
              <div className="space-y-2">
                {practicalSafetyCase.controlLogic.map((logic, logicIndex) => (
                  <div key={logicIndex} className="bg-green-900/20 rounded-lg p-3">
                    <div className="text-green-200 text-sm font-mono">{logic}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">安全措施详解</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {practicalSafetyCase.safetyMeasures.map((measure, measureIndex) => (
                <div key={measureIndex} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-yellow-300 font-medium">{measure.measure}</h5>
                    <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">
                      {measure.safetyLevel}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{measure.description}</p>
                  <p className="text-white/60 text-xs">{measure.implementation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 维护安全 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Eye className="w-6 h-6 mr-3 text-purple-400" />
            维护作业安全规程
          </h2>
          <p className="text-white/80">
            制定完善的维护安全规程，确保维护人员的安全和设备的可靠性。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {maintenanceSafety.map((phase, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {phase.phase}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">操作程序</h4>
                  <div className="space-y-2">
                    {phase.procedures.map((procedure, procIndex) => (
                      <div key={procIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{procedure}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-red-400 font-medium mb-2">安全警告</h4>
                  <div className="space-y-1">
                    {phase.warnings.map((warning, warnIndex) => (
                      <div key={warnIndex} className="text-red-300 text-xs bg-red-900/20 rounded px-2 py-1">
                        ⚠️ {warning}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            完成课程学习
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            恭喜您完成了PLC控制器基础课程的学习！现在可以查看课程总结或进行课堂测试。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/summary" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>课程总结</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>课堂测试</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/tia-portal" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Monitor className="w-5 h-5" />
                <span>上一章：TIA Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SafetyPage;
