import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Cpu,
  Settings,
  Monitor,
  Zap
} from '../components/Icons';

const HomePage: React.FC = () => {
  const stats = [
    { label: '学习模块', value: '6个', icon: <BookOpen className="w-6 h-6" /> },
    { label: '学习时长', value: '60分钟', icon: <Clock className="w-6 h-6" /> },
    { label: '技能掌握', value: '15项', icon: <Target className="w-6 h-6" /> },
    { label: '就业岗位', value: '3类', icon: <Users className="w-6 h-6" /> }
  ];

  const modules = [
    {
      title: '自动化行业认知',
      description: '理解自动化系统四层架构，建立行业认知基础',
      icon: <Settings className="w-8 h-8" />,
      path: '/course/automation-industry',
      color: 'from-blue-400 to-cyan-600',
      difficulty: '基础',
      duration: '10分钟'
    },
    {
      title: 'PLC核心定位', 
      description: '掌握PLC工作原理、扫描周期和选型方法',
      icon: <Cpu className="w-8 h-8" />,
      path: '/course/plc-basics',
      color: 'from-green-400 to-blue-600',
      difficulty: '重点',
      duration: '15分钟'
    },
    {
      title: '电气接线规范',
      description: '学习24V安全电压接线和安全电路设计',
      icon: <Zap className="w-8 h-8" />,
      path: '/course/io-wiring',
      color: 'from-yellow-400 to-orange-600',
      difficulty: '实操',
      duration: '10分钟'
    },
    {
      title: '梯形图编程',
      description: '掌握五大基础指令，编写控制逻辑程序',
      icon: <Monitor className="w-8 h-8" />,
      path: '/course/ladder-diagram',
      color: 'from-purple-400 to-pink-600',
      difficulty: '核心',
      duration: '15分钟'
    },
    {
      title: 'TIA Portal操作',
      description: '熟练使用西门子编程软件进行项目开发',
      icon: <Target className="w-8 h-8" />,
      path: '/course/tia-portal',
      color: 'from-indigo-400 to-purple-600',
      difficulty: '实操',
      duration: '15分钟'
    },
    {
      title: '安全强化模块',
      description: '强化工业安全意识，掌握安全设计原则',
      icon: <Award className="w-8 h-8" />,
      path: '/course/safety',
      color: 'from-red-400 to-pink-600',
      difficulty: '重要',
      duration: '5分钟'
    }
  ];

  return (
    <main className="relative z-10 px-6 pb-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PLC控制器基础
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            从零开始学习PLC控制技术，掌握自动化行业核心技能，开启工业4.0职业发展之路
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/automation-industry" className="px-8 py-4 text-white font-semibold flex items-center space-x-2 hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
                <span>开始学习</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/objectives" className="px-8 py-4 text-white font-semibold flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>学习目标</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Overview */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">课程概览</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            系统性学习PLC控制技术，从基础概念到实际应用，培养工业自动化核心能力
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {module.icon}
                </div>
                <div className="text-right">
                  <div className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1 mb-1">
                    {module.difficulty}
                  </div>
                  <div className="text-white/60 text-xs">
                    {module.duration}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {module.title}
              </h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                {module.description}
              </p>
              
              <Link 
                to={module.path}
                className="w-full bg-gradient-to-r from-white/10 to-white/20 border border-white/20 rounded-lg py-3 px-4 text-white font-medium hover:from-white/20 hover:to-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>进入学习</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">学习路径推荐</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">理论基础</h3>
              <p className="text-white/70 text-sm">
                学习自动化行业认知和PLC核心定位，建立扎实的理论基础
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">实践技能</h3>
              <p className="text-white/70 text-sm">
                掌握电气接线和梯形图编程，培养实际操作能力
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">综合应用</h3>
              <p className="text-white/70 text-sm">
                学习TIA Portal操作和安全规范，形成完整的应用能力
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">快速导航</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/objectives" className="px-6 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>学习目标</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/careers" className="px-6 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
                <span>职业发展</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/summary" className="px-6 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Award className="w-5 h-5" />
                <span>课程总结</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-6 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <CheckCircle className="w-5 h-5" />
                <span>课堂测试</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage; 