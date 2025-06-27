import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Settings, 
  ArrowRight, 
  CheckCircle,
  Award,
  Cpu,
  Monitor,
  Zap
} from '../components/Icons';

const CareersPage: React.FC = () => {
  const careerPaths = [
    {
      title: "PLC编程工程师",
      description: "负责PLC程序设计、调试和维护的专业工程师",
      requirements: [
        "熟练掌握至少一种PLC编程软件（如TIA Portal、Studio 5000等）",
        "具备电气控制原理和自动化系统知识",
        "能够阅读和绘制电气原理图",
        "具有现场调试和故障排除经验",
        "良好的逻辑思维和问题解决能力"
      ],
      responsibilities: [
        "根据工艺要求设计PLC控制程序",
        "进行系统集成和现场调试",
        "编写技术文档和操作手册",
        "提供技术支持和培训服务",
        "参与项目评审和技术改进"
      ],
      salaryRange: "8K-25K",
      workEnvironment: "制造企业、系统集成商、设备厂商",
      careerProspects: "高级工程师、项目经理、技术专家"
    },
    {
      title: "自动化技术员",
      description: "负责自动化设备安装、维护和技术支持的技术人员",
      requirements: [
        "掌握PLC基础编程和硬件知识",
        "熟悉常用电气元件和仪表使用",
        "具备基本的机械和电气维修技能",
        "能够使用万用表、示波器等测试仪器",
        "具有团队合作精神和服务意识"
      ],
      responsibilities: [
        "设备日常维护和保养",
        "故障诊断和维修",
        "技术改造和升级",
        "操作员培训和指导",
        "维护记录和报告编写"
      ],
      salaryRange: "5K-15K",
      workEnvironment: "生产车间、维护部门、服务公司",
      careerProspects: "高级技术员、班组长、工程师"
    },
    {
      title: "工控设备调试员",
      description: "专注于工业控制设备现场安装调试的技术人员",
      requirements: [
        "熟悉多种品牌PLC和HMI产品",
        "具备工业通信网络配置能力",
        "能够独立完成设备调试工作",
        "具有良好的客户沟通能力",
        "能够适应出差和现场作业"
      ],
      responsibilities: [
        "设备现场安装和接线",
        "系统调试和参数设置",
        "客户培训和技术交流",
        "项目验收和交付",
        "售后服务和技术支持"
      ],
      salaryRange: "6K-20K",
      workEnvironment: "项目现场、客户工厂、系统集成公司",
      careerProspects: "项目工程师、销售工程师、技术经理"
    }
  ];

  const industryApplications = [
    {
      title: "制造业",
      examples: "汽车生产线、电子装配、食品包装、纺织机械",
      characteristics: "生产节拍快、质量要求高、自动化程度高",
      plcRole: "控制生产流程、监控设备状态、实现质量追溯"
    },
    {
      title: "化工/石化",
      examples: "炼油装置、化学反应器、管道输送、安全联锁",
      characteristics: "安全要求极高、连续生产、复杂工艺控制",
      plcRole: "过程控制、安全保护、数据采集、报警管理"
    },
    {
      title: "电力/能源",
      examples: "发电厂控制、变电站自动化、新能源并网、智能电网",
      characteristics: "可靠性要求高、实时性强、远程监控",
      plcRole: "设备控制、状态监测、故障诊断、数据通信"
    },
    {
      title: "楼宇/基础设施",
      examples: "中央空调、电梯控制、照明系统、给排水",
      characteristics: "能耗优化、舒适性、远程管理",
      plcRole: "环境控制、能源管理、安防集成、运维优化"
    },
    {
      title: "水处理/环保",
      examples: "污水处理、自来水厂、废气处理、垃圾焚烧",
      characteristics: "环保标准严格、连续运行、远程监控",
      plcRole: "工艺控制、数据记录、环保监测、优化运行"
    },
    {
      title: "交通运输",
      examples: "地铁信号、机场行李、港口码头、立体停车",
      characteristics: "安全性重要、客流量大、智能化程度高",
      plcRole: "交通控制、安全保护、信息管理、调度优化"
    }
  ];

  const skillDevelopment = [
    {
      level: "入门阶段",
      duration: "3-6个月",
      focus: "掌握PLC基础理论和基本编程技能",
      skills: [
        "PLC硬件组成和工作原理",
        "基本编程语言（梯形图、指令表）",
        "简单的输入输出控制",
        "定时器和计数器应用",
        "基础电气知识"
      ],
      certifications: [
        "PLC操作员证书",
        "电工基础证书",
        "厂商入门认证"
      ]
    },
    {
      level: "基础阶段",
      duration: "6-12个月",
      focus: "能够独立完成中等复杂度的PLC项目",
      skills: [
        "复杂程序设计和优化",
        "HMI界面设计和组态",
        "模拟量处理和PID控制",
        "通信网络基础配置",
        "故障诊断和排除"
      ],
      certifications: [
        "PLC编程工程师证书",
        "西门子/AB等厂商认证",
        "自动化技术员证书"
      ]
    },
    {
      level: "进阶阶段",
      duration: "1-2年",
      focus: "系统集成和高级应用能力",
      skills: [
        "复杂系统设计和集成",
        "工业网络和通信协议",
        "运动控制和机器人集成",
        "数据采集和分析",
        "项目管理和团队协作"
      ],
      certifications: [
        "高级自动化工程师",
        "项目管理PMP认证",
        "厂商专家级认证"
      ]
    },
    {
      level: "专家阶段",
      duration: "2年以上",
      focus: "行业专家和技术领导者",
      skills: [
        "行业解决方案设计",
        "新技术研发和应用",
        "技术标准制定参与",
        "团队建设和人才培养",
        "商业价值创造"
      ],
      certifications: [
        "行业专家认证",
        "技术咨询师资格",
        "国际认证工程师"
      ]
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">职业发展规划</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            了解PLC相关职业机会，制定个人发展路径，在自动化领域开启精彩的职业生涯。
          </p>
        </div>
      </section>

      {/* 主要职业路径 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            主要职业方向
          </h2>
          <p className="text-white/80">
            PLC技术为您打开多样化的职业发展道路，从技术实施到项目管理都有广阔的发展空间。
          </p>
        </div>

        <div className="space-y-8">
          {careerPaths.map((career, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {career.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {career.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-900/20 rounded-lg p-3">
                      <span className="text-green-300 text-sm font-medium">薪资范围</span>
                      <p className="text-green-200 text-lg font-bold">{career.salaryRange}</p>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3">
                      <span className="text-blue-300 text-sm font-medium">工作环境</span>
                      <p className="text-blue-200 text-sm">{career.workEnvironment}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <span className="text-purple-300 text-sm font-medium">发展前景</span>
                      <p className="text-purple-200 text-sm">{career.careerProspects}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                        主要职责
                      </h4>
                      <div className="space-y-2">
                        {career.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-400" />
                        技能要求
                      </h4>
                      <div className="space-y-2">
                        {career.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{req}</span>
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

      {/* 行业应用领域 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-purple-400" />
            行业应用领域
          </h2>
          <p className="text-white/80">
            PLC技术广泛应用于各个工业领域，为不同背景的学生提供多样化的职业选择。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industryApplications.map((industry, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {industry.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-white/60 text-sm">典型应用：</span>
                  <p className="text-white/80 text-sm mt-1">{industry.examples}</p>
                </div>
                <div>
                  <span className="text-white/60 text-sm">行业特点：</span>
                  <p className="text-white/80 text-sm mt-1">{industry.characteristics}</p>
                </div>
                <div>
                  <span className="text-white/60 text-sm">PLC作用：</span>
                  <p className="text-white/80 text-sm mt-1">{industry.plcRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 技能发展路径 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-400" />
            技能发展路径
          </h2>
          <p className="text-white/80">
            制定清晰的学习计划，循序渐进地提升技能水平，实现职业目标。
          </p>
        </div>

        <div className="space-y-6">
          {skillDevelopment.map((stage, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{stage.level}</h3>
                  </div>
                  <p className="text-white/60 text-sm">{stage.duration}</p>
                  <p className="text-white/80 text-sm mt-2">{stage.focus}</p>
                </div>
                
                <div className="md:w-3/4 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">核心技能</h4>
                      <div className="space-y-2">
                        {stage.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-white/80 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-3">推荐证书</h4>
                      <div className="space-y-2">
                        {stage.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-white/80 text-sm">{cert}</span>
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

      {/* 行动引导 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            开始您的职业之旅
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            掌握PLC基础知识是开启自动化职业生涯的第一步。现在就开始学习，为未来的职业发展打下坚实基础。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/automation-industry" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>开始学习课程</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/objectives" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>查看学习目标</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage; 