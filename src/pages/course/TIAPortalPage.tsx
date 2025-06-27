import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Settings, 
  Cpu,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Eye
} from '../../components/Icons';

const TIAPortalPage: React.FC = () => {
  const softwareFeatures = [
    {
      title: "项目管理",
      description: "统一管理所有项目文件和组件",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      features: [
        "项目树结构：清晰的项目组织结构",
        "设备配置：PLC硬件配置和参数设置",
        "程序组织：OB、FC、FB等程序块管理",
        "变量管理：全局变量和局部变量定义"
      ],
      benefits: "提高工程效率，减少配置错误，便于团队协作"
    },
    {
      title: "硬件配置",
      description: "直观的硬件配置和诊断功能",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      features: [
        "设备选型：从设备目录选择PLC型号",
        "模块配置：I/O模块添加和参数设置",
        "网络配置：PROFINET网络配置",
        "诊断功能：实时设备状态监控"
      ],
      benefits: "可视化配置，减少硬件错误，支持在线诊断"
    },
    {
      title: "程序编辑",
      description: "多种编程语言支持和调试功能",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      features: [
        "梯形图编辑：直观的梯形图编程界面",
        "STL指令：结构化文本编程支持",
        "功能块：可重用的程序模块",
        "在线调试：实时程序监控和修改"
      ],
      benefits: "编程效率高，调试功能强大，支持模块化编程"
    }
  ];

  const operationSteps = [
    {
      step: "创建新项目",
      description: "建立PLC控制项目的基础框架",
      operations: [
        "启动TIA Portal软件",
        "选择'创建新项目'",
        "输入项目名称和路径",
        "选择PLC型号（如S7-1200）",
        "完成项目初始化设置"
      ],
      tips: [
        "项目名称使用有意义的描述",
        "选择合适的PLC型号和版本",
        "建议创建项目模板便于复用"
      ],
      color: "from-blue-400 to-cyan-600"
    },
    {
      step: "硬件组态",
      description: "配置PLC硬件和I/O模块",
      operations: [
        "在设备视图中添加CPU模块",
        "配置CPU参数（IP地址等）",
        "添加I/O扩展模块",
        "设置模块参数和地址",
        "编译硬件配置"
      ],
      tips: [
        "I/O地址分配要规范有序",
        "预留扩展模块插槽",
        "注意模块功耗和供电能力"
      ],
      color: "from-green-400 to-blue-600"
    },
    {
      step: "编写程序",
      description: "使用梯形图编写控制逻辑",
      operations: [
        "创建主程序OB1",
        "添加网络和编写逻辑",
        "定义变量和数据块",
        "编译检查程序语法",
        "保存程序文件"
      ],
      tips: [
        "使用符号变量提高可读性",
        "程序结构要清晰模块化",
        "及时保存避免数据丢失"
      ],
      color: "from-purple-400 to-pink-600"
    },
    {
      step: "下载调试",
      description: "将程序下载到PLC并进行调试",
      operations: [
        "连接PLC设备（以太网或USB）",
        "下载硬件配置和程序",
        "切换PLC到RUN模式",
        "监控程序运行状态",
        "修改和优化程序逻辑"
      ],
      tips: [
        "确保网络连接正常",
        "先下载硬件配置再下载程序",
        "使用监控功能观察变量状态"
      ],
      color: "from-red-400 to-orange-600"
    }
  ];

  const programmingTools = [
    {
      name: "梯形图编辑器",
      description: "主要的编程界面，支持拖拽式编程",
      functions: [
        "指令库：常用指令快速插入",
        "自动补全：变量名自动提示",
        "语法检查：实时语法错误提示",
        "交叉引用：变量使用位置查看"
      ],
      shortcuts: [
        "F9：编译程序",
        "Ctrl+S：保存程序",
        "F5：插入网络",
        "F7：插入常开触点"
      ],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "变量表",
      description: "管理项目中的所有变量定义",
      functions: [
        "全局变量：项目共享变量",
        "数据类型：Bool、Int、Real等",
        "初始值：变量默认值设置", 
        "注释说明：变量用途描述"
      ],
      shortcuts: [
        "Ctrl+T：打开变量表",
        "F2：编辑变量名",
        "Insert：插入新变量",
        "Delete：删除变量"
      ],
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "监控表",
      description: "实时监控变量值和程序状态",
      functions: [
        "变量监控：实时显示变量值",
        "强制功能：手动设置变量值",
        "触发条件：设置监控触发条件",
        "数据记录：历史数据保存"
      ],
      shortcuts: [
        "Ctrl+M：打开监控表",
        "F8：启动监控",
        "Shift+F8：停止监控",
        "F10：强制变量"
      ],
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const practicalCase = {
    title: "实操案例：交通灯控制系统",
    description: "使用TIA Portal完整实现交通灯控制项目",
    requirements: [
      "红灯持续30秒，然后转为绿灯",
      "绿灯持续25秒，然后转为黄灯",
      "黄灯持续5秒，然后转为红灯",
      "系统上电后从红灯开始循环",
      "提供手动/自动模式切换"
    ],
    hardwareConfig: [
      { module: "CPU 1214C DC/DC/DC", description: "主控制器" },
      { module: "DI 8x24VDC BA", description: "数字输入模块" },
      { module: "DO 8x24VDC/0.5A BA", description: "数字输出模块" }
    ],
    ioMapping: [
      { address: "I0.0", description: "手动/自动切换开关", type: "DI" },
      { address: "I0.1", description: "系统启动按钮", type: "DI" },
      { address: "I0.2", description: "系统停止按钮", type: "DI" },
      { address: "Q0.0", description: "红灯输出", type: "DO" },
      { address: "Q0.1", description: "黄灯输出", type: "DO" },
      { address: "Q0.2", description: "绿灯输出", type: "DO" }
    ],
    variableTable: [
      { name: "红灯定时器", type: "TON", initialValue: "T#30S" },
      { name: "黄灯定时器", type: "TON", initialValue: "T#5S" },
      { name: "绿灯定时器", type: "TON", initialValue: "T#25S" },
      { name: "系统运行", type: "BOOL", initialValue: "FALSE" },
      { name: "当前状态", type: "INT", initialValue: "1" }
    ]
  };

  const debuggingTips = [
    {
      category: "连接问题",
      issues: [
        "无法连接PLC：检查网络配置和IP地址",
        "下载失败：确认PLC处于STOP模式",
        "通信超时：检查网线连接和防火墙设置"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      category: "程序问题",
      issues: [
        "编译错误：检查语法和变量定义",
        "逻辑错误：使用监控表观察变量状态",
        "时序问题：检查扫描周期和定时器设置"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      category: "硬件问题",
      issues: [
        "I/O状态异常：检查接线和信号电平",
        "模块故障：查看诊断信息和LED指示",
        "供电问题：检查电源电压和负载电流"
      ],
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Monitor className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">TIA Portal软件操作</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            掌握西门子TIA Portal集成开发环境的使用方法，从项目创建到程序调试的完整流程。
          </p>
        </div>
      </section>

      {/* 软件功能特色 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            TIA Portal核心功能
          </h2>
          <p className="text-white/80">
            TIA Portal是西门子推出的全集成自动化软件平台，提供从硬件配置到程序调试的完整解决方案。
          </p>
        </div>

        <div className="space-y-8">
          {softwareFeatures.map((feature, index) => (
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
                    <h4 className="text-white font-medium mb-2">核心优势</h4>
                    <p className="text-white/70 text-sm">{feature.benefits}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    主要功能
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.features.map((func, funcIndex) => (
                      <div key={funcIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 操作步骤 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            完整操作流程
          </h2>
          <p className="text-white/80">
            从项目创建到程序调试的标准操作流程，确保高效完成PLC项目开发。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {operationSteps.map((step, index) => (
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
                    {step.operations.map((operation, opIndex) => (
                      <div key={opIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{operation}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-medium mb-2">操作技巧</h4>
                  <div className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="text-green-300 text-xs bg-green-900/20 rounded px-2 py-1">
                        💡 {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 编程工具 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-purple-400" />
            常用编程工具
          </h2>
          <p className="text-white/80">
            熟练掌握TIA Portal的编程工具，提高开发效率和程序质量。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programmingTools.map((tool, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {tool.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">主要功能</h4>
                  <div className="space-y-1">
                    {tool.functions.map((func, funcIndex) => (
                      <div key={funcIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {func}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">快捷键</h4>
                  <div className="space-y-1">
                    {tool.shortcuts.map((shortcut, shortIndex) => (
                      <div key={shortIndex} className="text-blue-300 text-xs bg-blue-900/20 rounded px-2 py-1 font-mono">
                        {shortcut}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实操案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalCase.title}
          </h2>
          <p className="text-white/80 mb-6">
            {practicalCase.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">控制要求</h4>
              <div className="space-y-2">
                {practicalCase.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">硬件配置</h4>
              <div className="space-y-2">
                {practicalCase.hardwareConfig.map((hw, hwIndex) => (
                  <div key={hwIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-300 font-medium text-sm">{hw.module}</div>
                    <div className="text-white/70 text-xs">{hw.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">I/O地址分配</h4>
              <div className="space-y-2">
                {practicalCase.ioMapping.map((io, ioIndex) => (
                  <div key={ioIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-300 font-mono text-sm">{io.address}</span>
                      <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">{io.type}</span>
                    </div>
                    <div className="text-white/70 text-sm mt-1">{io.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">变量定义</h4>
              <div className="space-y-2">
                {practicalCase.variableTable.map((variable, varIndex) => (
                  <div key={varIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-300 text-sm">{variable.name}</span>
                      <span className="text-cyan-300 text-xs bg-cyan-900/20 rounded px-2 py-1">{variable.type}</span>
                    </div>
                    <div className="text-white/60 text-xs mt-1">初值: {variable.initialValue}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 调试技巧 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-red-400" />
            常见问题与调试技巧
          </h2>
          <p className="text-white/80">
            掌握常见问题的解决方法，快速定位和排除故障。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {debuggingTips.map((category, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
                  ⚠️
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.issues.map((issue, issueIndex) => (
                  <div key={issueIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/90 text-sm">{issue}</div>
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
            继续学习安全强化模块
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了TIA Portal的操作方法，让我们学习工业安全的重要知识。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/safety" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：安全强化模块</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/ladder-diagram" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：梯形图编程</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TIAPortalPage;
