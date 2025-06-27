import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Cpu, 
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Monitor,
  Eye
} from '../../components/Icons';

const LadderDiagramPage: React.FC = () => {
  const basicInstructions = [
    {
      name: "LD（常开触点）",
      symbol: "|-| |",
      description: "当输入为1时，触点闭合，程序向右导通",
      type: "输入指令",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-400 to-blue-600",
      usage: [
        "起始指令：每个网络的第一个指令",
        "并联分支：创建新的并联路径",
        "条件判断：作为逻辑判断条件"
      ],
      examples: [
        "LD I0.0  // 读取输入点I0.0的状态",
        "LD M0.1  // 读取内部继电器M0.1",
        "LD \"启动按钮\" // 使用符号名称"
      ],
      application: "检测按钮按下、传感器状态、系统条件等"
    },
    {
      name: "LDN（常闭触点）",
      symbol: "|-/|-",
      description: "当输入为0时，触点闭合，程序向右导通",
      type: "输入指令",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      usage: [
        "起始指令：网络第一个常闭触点",
        "安全逻辑：急停、安全门等安全信号",
        "反逻辑：需要反向逻辑的场合"
      ],
      examples: [
        "LDN I0.1  // 读取输入点I0.1的反状态",
        "LDN \"急停按钮\" // 急停信号检测",
        "LDN M1.0  // 内部继电器反状态"
      ],
      application: "急停检测、安全门状态、设备故障信号等"
    },
    {
      name: "A（串联常开）",
      symbol: "|- |-| |",
      description: "与前面的逻辑结果进行与运算",
      type: "逻辑指令",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      usage: [
        "串联连接：多个条件同时满足",
        "逻辑与：所有条件为真时输出为真",
        "安全联锁：多重安全条件确认"
      ],
      examples: [
        "A I0.2  // 与输入点I0.2进行与运算",
        "A \"运行许可\" // 与运行许可信号相与",
        "A T1  // 与定时器T1状态相与"
      ],
      application: "多条件启动、安全联锁、设备就绪检测等"
    },
    {
      name: "AN（串联常闭）",
      symbol: "|- |-/|-",
      description: "与前面的逻辑结果和输入的非进行与运算",
      type: "逻辑指令",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-400 to-pink-600",
      usage: [
        "反向串联：与反状态进行串联",
        "故障检测：设备无故障时允许运行",
        "保护逻辑：保护条件不成立时允许操作"
      ],
      examples: [
        "AN I0.3  // 与输入点I0.3的反状态相与",
        "AN \"设备故障\" // 无故障时允许运行",
        "AN M2.0  // 与M2.0的反状态相与"
      ],
      application: "故障检测、保护逻辑、反向条件判断等"
    },
    {
      name: "=（输出线圈）",
      symbol: "( )",
      description: "将逻辑运算结果输出到指定地址",
      type: "输出指令",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-600",
      usage: [
        "执行输出：控制外部设备动作",
        "状态存储：保存中间逻辑结果",
        "信号传递：在程序中传递控制信号"
      ],
      examples: [
        "= Q0.0  // 输出到输出点Q0.0",
        "= \"电机运行\" // 输出到电机控制",
        "= M0.0  // 输出到内部继电器"
      ],
      application: "电机控制、阀门控制、指示灯驱动等"
    }
  ];

  const programmingRules = [
    {
      title: "扫描执行规则",
      description: "程序按照从上到下、从左到右的顺序执行",
      rules: [
        "网络顺序：按照网络编号从小到大依次执行",
        "指令顺序：每个网络内从左到右扫描指令",
        "输出更新：所有网络执行完成后统一更新输出",
        "循环扫描：一个扫描周期完成后重新开始"
      ],
      tips: [
        "重要的控制逻辑放在程序前面",
        "输出指令只在网络末尾使用",
        "避免在一个扫描周期内多次修改同一输出"
      ]
    },
    {
      title: "并联分支规则",
      description: "多个条件之一满足时执行输出",
      rules: [
        "分支起始：使用LD或LDN指令开始新分支",
        "分支合并：在输出指令前自动合并",
        "嵌套分支：支持分支内再分支的复杂逻辑",
        "或逻辑：任一分支为真则输出为真"
      ],
      tips: [
        "分支数量不宜过多，影响程序可读性",
        "复杂逻辑可以分解为多个简单网络",
        "使用括号明确逻辑运算优先级"
      ]
    },
    {
      title: "地址分配规则",
      description: "合理分配I/O地址和内部元件地址",
      rules: [
        "输入地址：I开头，如I0.0-I0.7",
        "输出地址：Q开头，如Q0.0-Q0.7",
        "内部继电器：M开头，如M0.0-M7.7",
        "定时器：T开头，如T1、T2、T3"
      ],
      tips: [
        "按功能模块分配地址，便于维护",
        "保留一定数量的备用地址",
        "使用符号名称提高程序可读性"
      ]
    }
  ];

  const practicalExample = {
    title: "实际应用案例：电机启停控制",
    description: "使用基础指令实现电机的安全启停控制",
    requirements: [
      "按下启动按钮，电机启动运行",
      "按下停止按钮，电机立即停止",
      "急停按钮按下时，电机必须停止",
      "电机运行时，运行指示灯点亮",
      "系统具有自保持功能"
    ],
    ioAllocation: [
      { address: "I0.0", description: "启动按钮（常开）", type: "DI" },
      { address: "I0.1", description: "停止按钮（常闭）", type: "DI" },
      { address: "I0.2", description: "急停按钮（常闭）", type: "DI" },
      { address: "Q0.0", description: "电机接触器", type: "DO" },
      { address: "Q0.1", description: "运行指示灯", type: "DO" },
      { address: "M0.0", description: "电机运行状态", type: "内部继电器" }
    ],
    ladderLogic: [
      {
        network: "Network 1",
        description: "电机启动控制逻辑",
        logic: "LD I0.0 // 启动按钮\nA I0.1 // 停止按钮（常闭）\nA I0.2 // 急停按钮（常闭）\n= M0.0 // 电机运行信号"
      },
      {
        network: "Network 2", 
        description: "电机自保持逻辑",
        logic: "LD M0.0 // 电机运行状态\nA I0.1 // 停止按钮（常闭）\nA I0.2 // 急停按钮（常闭）\n= M0.0 // 自保持"
      },
      {
        network: "Network 3",
        description: "输出控制",
        logic: "LD M0.0 // 电机运行状态\n= Q0.0 // 电机接触器\n= Q0.1 // 运行指示灯"
      }
    ]
  };

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Settings className="w-8 h-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">梯形图编程基础指令</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            掌握PLC梯形图编程的五大基础指令，学习程序编写规则和实际应用方法。
          </p>
        </div>
      </section>

      {/* 五大基础指令 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-blue-400" />
            五大基础指令详解
          </h2>
          <p className="text-white/80">
            掌握这五个基础指令，就能编写大部分PLC控制程序。
          </p>
        </div>

        <div className="space-y-8">
          {basicInstructions.map((instruction, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${instruction.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {instruction.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {instruction.name}
                      </h3>
                      <div className="text-green-400 font-mono text-lg mb-2">
                        {instruction.symbol}
                      </div>
                      <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">
                        {instruction.type}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">应用场景</h4>
                    <p className="text-white/70 text-sm">{instruction.application}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <p className="text-white/90 mb-4">
                    {instruction.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                        使用方法
                      </h4>
                      <div className="space-y-2">
                        {instruction.usage.map((usage, usageIndex) => (
                          <div key={usageIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{usage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-blue-400" />
                        编程示例
                      </h4>
                      <div className="space-y-2">
                        {instruction.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-gray-900/50 rounded-lg p-3">
                            <code className="text-green-300 text-sm font-mono">
                              {example}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 编程规则 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-orange-400" />
            梯形图编程规则
          </h2>
          <p className="text-white/80">
            遵循正确的编程规则，编写清晰、可靠的PLC程序。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programmingRules.map((rule, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {rule.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {rule.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">核心规则</h4>
                  <div className="space-y-2">
                    {rule.rules.map((r, rIndex) => (
                      <div key={rIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-medium mb-2">编程技巧</h4>
                  <div className="space-y-1">
                    {rule.tips.map((tip, tipIndex) => (
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

      {/* 实际应用案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalExample.title}
          </h2>
          <p className="text-white/80 mb-4">
            {practicalExample.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">控制要求</h4>
              <div className="space-y-2">
                {practicalExample.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">I/O分配表</h4>
              <div className="space-y-2">
                {practicalExample.ioAllocation.map((io, ioIndex) => (
                  <div key={ioIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300 font-mono text-sm">{io.address}</span>
                      <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">{io.type}</span>
                    </div>
                    <div className="text-white/70 text-sm mt-1">{io.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {practicalExample.ladderLogic.map((network, networkIndex) => (
            <div key={networkIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {network.network}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {network.description}
              </p>
              <div className="bg-gray-900/70 rounded-lg p-4">
                <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap">
                  {network.logic}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            继续学习TIA Portal操作
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了梯形图编程基础，让我们学习西门子TIA Portal软件的具体操作方法。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/tia-portal" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：TIA Portal操作</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/io-wiring" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：接线规范</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LadderDiagramPage;
