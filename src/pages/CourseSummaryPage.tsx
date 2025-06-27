import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  Target,
  Award,
  BookOpen,
  Settings,
  Cpu,
  Zap,
  Monitor,
  Eye,
  ArrowRight
} from '../components/Icons';

const CourseSummaryPage: React.FC = () => {
  const courseModules = [
    {
      title: "自动化行业认知",
      icon: <Settings className="w-6 h-6" />,
      keyPoints: [
        "掌握自动化产业四层架构",
        "理解传感层、控制层、执行层、管理层功能",
        "了解各层典型设备和应用场景",
        "建立系统性行业认知"
      ],
      achievements: "✅ 具备自动化行业基础认知能力",
      link: "/course/automation-industry"
    },
    {
      title: "PLC核心定位",
      icon: <Cpu className="w-6 h-6" />,
      keyPoints: [
        "理解PLC作为工业控制器的作用",
        "掌握扫描周期和实时性概念",
        "了解PLC硬件最小系统组成",
        "学会基本的选型估算方法"
      ],
      achievements: "✅ 具备PLC系统设计基础能力",
      link: "/course/plc-basics"
    },
    {
      title: "电气接线规范",
      icon: <Zap className="w-6 h-6" />,
      keyPoints: [
        "掌握24V安全电压接线原则",
        "理解共阳极和共阴极接法",
        "学会I/O模块正确接线方法",
        "掌握安全电路设计要求"
      ],
      achievements: "✅ 具备安全可靠的接线能力",
      link: "/course/io-wiring"
    },
    {
      title: "梯形图编程",
      icon: <Monitor className="w-6 h-6" />,
      keyPoints: [
        "掌握五大基础指令的使用",
        "理解梯形图编程规则",
        "学会编写基本控制逻辑",
        "掌握实际应用案例编程"
      ],
      achievements: "✅ 具备基础编程实现能力",
      link: "/course/ladder-diagram"
    },
    {
      title: "TIA Portal操作",
      icon: <Target className="w-6 h-6" />,
      keyPoints: [
        "掌握项目创建和硬件配置",
        "学会程序编写和调试方法",
        "了解常用编程工具使用",
        "掌握故障诊断基本技巧"
      ],
      achievements: "✅ 具备软件操作应用能力",
      link: "/course/tia-portal"
    },
    {
      title: "安全强化模块",
      icon: <Eye className="w-6 h-6" />,
      keyPoints: [
        "理解工业安全设计原则",
        "掌握安全设备使用方法",
        "了解国际安全标准要求",
        "学会安全系统设计思路"
      ],
      achievements: "✅ 具备安全意识和防护能力",
      link: "/course/safety"
    }
  ];

  const coreSkills = [
    {
      category: "理论基础",
      skills: [
        "自动化系统架构理解",
        "PLC工作原理掌握",
        "电气安全基础知识",
        "工业标准规范认知"
      ],
      level: "基础级"
    },
    {
      category: "实践技能",
      skills: [
        "I/O模块接线操作",
        "梯形图程序编写",
        "TIA Portal软件应用",
        "基本故障诊断"
      ],
      level: "应用级"
    },
    {
      category: "安全意识",
      skills: [
        "安全设计原则运用",
        "安全设备正确使用",
        "风险识别和评估",
        "应急处理程序"
      ],
      level: "专业级"
    }
  ];

  const careerPathways = [
    {
      position: "PLC编程工程师",
      description: "负责PLC程序设计、调试和维护",
      requirements: [
        "熟练掌握梯形图编程",
        "具备电气图识读能力",
        "了解工业现场设备",
        "具备故障诊断技能"
      ],
      development: "初级→中级→高级PLC工程师",
      salary: "6-15K",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      position: "自动化技术员",
      description: "负责自动化设备安装、调试和维护",
      requirements: [
        "掌握基础接线技能",
        "具备设备操作能力",
        "了解安全操作规程",
        "具备团队协作精神"
      ],
      development: "技术员→技术主管→技术经理",
      salary: "5-12K",
      icon: <Settings className="w-8 h-8" />
    },
    {
      position: "工控设备调试员",
      description: "负责工控设备现场调试和技术支持",
      requirements: [
        "具备现场调试经验",
        "掌握多种PLC平台",
        "具备客户沟通能力",
        "能够独立解决问题"
      ],
      development: "调试员→高级调试员→技术专家",
      salary: "7-18K",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const nextSteps = [
    {
      step: "深化理论学习",
      description: "继续学习更深入的自动化理论知识",
      actions: [
        "学习高级PLC指令和功能块",
        "了解工业通信协议",
        "掌握HMI人机界面设计",
        "学习SCADA系统应用"
      ]
    },
    {
      step: "扩展实践经验",
      description: "通过实际项目积累实践经验",
      actions: [
        "参与实际工程项目",
        "熟悉不同品牌PLC",
        "学习现场调试技巧",
        "积累故障处理经验"
      ]
    },
    {
      step: "获得专业认证",
      description: "通过相关认证提升专业资质",
      actions: [
        "获得PLC编程等级证书",
        "考取电工操作证",
        "参加厂商技术培训",
        "获得安全资格认证"
      ]
    }
  ];

  const practicalProjects = [
    {
      project: "交通灯控制系统",
      difficulty: "入门级",
      duration: "1-2天",
      description: "实现自动循环的交通信号灯控制",
      skills: ["基础指令应用", "定时器使用", "状态机编程"]
    },
    {
      project: "电机启停控制",
      difficulty: "基础级", 
      duration: "2-3天",
      description: "带自保持和安全保护的电机控制",
      skills: ["接线实操", "安全逻辑", "故障诊断"]
    },
    {
      project: "自动传送带系统",
      difficulty: "进阶级",
      duration: "1-2周",
      description: "多段传送带协调控制系统",
      skills: ["系统集成", "通信应用", "HMI界面"]
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-gold-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">课程总结</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            回顾PLC控制器基础课程的核心内容，总结学习成果，规划未来发展方向。
          </p>
        </div>
      </section>

      {/* 课程模块回顾 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
            课程模块回顾
          </h2>
          <p className="text-white/80">
            通过六个核心模块的学习，您已经建立了完整的PLC基础知识体系。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courseModules.map((module, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {module.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {module.title}
                  </h3>
                  <div className="text-green-300 text-sm bg-green-900/20 rounded px-3 py-1 inline-block">
                    {module.achievements}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {module.keyPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to={module.link}
                className="text-blue-300 text-sm hover:text-blue-200 flex items-center space-x-1"
              >
                <span>复习此模块</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 核心技能掌握 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-400" />
            核心技能掌握情况
          </h2>
          <p className="text-white/80">
            评估您在不同技能类别中的掌握程度，明确个人能力水平。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreSkills.map((category, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
                <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">
                  {category.level}
                </span>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 职业发展路径 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Award className="w-6 h-6 mr-3 text-purple-400" />
            职业发展路径
          </h2>
          <p className="text-white/80">
            基于课程学习成果，了解相关职业发展机会和要求。
          </p>
        </div>

        <div className="space-y-6">
          {careerPathways.map((career, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {career.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {career.position}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {career.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-green-300 font-semibold">{career.salary}</div>
                      <div className="text-white/60 text-xs">薪资范围</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-blue-300 font-semibold">晋升</div>
                      <div className="text-white/60 text-xs">发展空间</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">岗位要求</h4>
                      <div className="space-y-2">
                        {career.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">发展路径</h4>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-white/90 text-sm font-mono">
                          {career.development}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 推荐实践项目 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-orange-400" />
            推荐实践项目
          </h2>
          <p className="text-white/80">
            通过实际项目巩固所学知识，提升实践应用能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {practicalProjects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.project}
                  </h3>
                  <span className="text-orange-300 text-xs bg-orange-900/20 rounded px-2 py-1">
                    {project.difficulty}
                  </span>
                </div>
                <div className="text-blue-300 text-sm mb-2">
                  预计时间：{project.duration}
                </div>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">涉及技能</h4>
                <div className="space-y-1">
                  {project.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 下一步学习建议 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <ArrowRight className="w-6 h-6 mr-3 text-green-400" />
            下一步学习建议
          </h2>
          <p className="text-white/80">
            基于当前学习基础，制定进一步提升的学习计划。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {nextSteps.map((step, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
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
                {step.actions.map((action, actionIndex) => (
                  <div key={actionIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/70 text-sm">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 结语和行动建议 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              恭喜完成PLC控制器基础课程！ 🎉
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              您已经掌握了PLC控制系统的基础知识和基本技能。这只是自动化学习之旅的开始，
              继续实践和学习，您将能够胜任更多挑战性的自动化项目。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                  <span>参加课堂测试</span>
                </Link>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                  <span>返回课程首页</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseSummaryPage;
