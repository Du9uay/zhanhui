import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Exhibition,
  Brand,
  Strategy,
  Target,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  Eye,
  TrendingUp
} from '../components/Icons';

const CourseSummaryPage: React.FC = () => {
  // 课程内容总结数据（来自课程讲义.md）
  const courseSummary = {
    title: '课程内容总结',
    description: '通过本课程的学习，学员将全面掌握展会主题与品牌定位的完整知识体系。',
    coreTheories: [
      {
        id: 1,
        title: '展会主题的定义与要素',
        description: '展会主题是展会组织方为传达核心价值提炼的简洁具吸引力核心思想',
        icon: Exhibition,
        keyPoints: [
          '核心思想：精准概括展会内容价值取向',
          '目标受众指向：明确指向目标受众',
          '行业特色：体现行业特点',
          '实例：消费电子展主题"智能生活新视界"'
        ]
      },
      {
        id: 2,
        title: '品牌定位的概念',
        description: '品牌定位是展会在目标市场确立独特位置的过程',
        icon: Brand,
        keyPoints: [
          '突出与其他展会差异',
          '明确自身独特价值',
          '需考虑展会资源、优势及目标市场需求',
          '实例：定位为"高端定制化消费电子解决方案提供商"'
        ]
      },
      {
        id: 3,
        title: '目标观众调研',
        description: '确定展会主题和品牌定位的基础环节',
        icon: Eye,
        keyPoints: [
          '深入了解目标观众需求、兴趣、行为',
          '精准把握市场方向',
          '通过在线问卷、线下访谈等方式调研',
          '实例：2024年某展会调研1000名科技爱好者'
        ]
      },
      {
        id: 4,
        title: '展会竞争与差异化分析',
        description: '了解竞争对手，找出自身差异化优势',
        icon: Strategy,
        keyPoints: [
          '了解竞争对手展会主题和定位',
          '找出自身差异化优势',
          '设定"软件硬件融合：消费电子新生态"等主题',
          '设置专门的软件与硬件融合应用展区'
        ]
      }
    ],
    uniqueKnowledge: [
      {
        id: 1,
        title: '消费电子展热点主题紧跟新兴技术发展',
        description: '热点主题核心来源是元宇宙、人工智能、绿色科技等新兴技术',
        icon: TrendingUp,
        features: [
          '元宇宙相关主题随VR/AR技术发展而频繁出现',
          '反映行业向数字虚拟与现实融合生态迈进的趋势',
          '2024年展会围绕元宇宙推出相关主题',
          '参展商展示元宇宙社交应用等体现新兴技术应用'
        ]
      },
      {
        id: 2,
        title: '技术保密性与传播吸引力的平衡点',
        description: '消费电子行业技术具保密性，展会需平衡两者',
        icon: CheckCircle,
        features: [
          '企业既想展示新技术提升影响力又不泄露机密',
          '可通过展示技术在产品中的应用效果来平衡',
          '某公司新型芯片技术在智能手环中的应用展示',
          '体现技术强大又不泄露机密的平衡方式'
        ]
      },
      {
        id: 3,
        title: '快速迭代行业前瞻性主题设计技巧',
        description: '消费电子行业快速迭代，前瞻性主题设计需提前预见未来技术趋势',
        icon: Target,
        features: [
          '通过调研行业报告等分析趋势',
          '据此设计主题，并融入展示内容和活动安排',
          '2024年分析柔性显示和可折叠设备趋势',
          '构思主题"柔性未来：可折叠消费电子的无限可能"'
        ]
      }
    ],
    keyTools: [
      {
        title: 'SWOT分析法操作',
        description: '识别展会优势、劣势、机会和威胁，根据分析结果调整主题和定位'
      },
      {
        title: '定位一致性检验操作',
        description: '通过线上问卷、线下访谈等方式检验主题与定位的契合度'
      }
    ],
    importantContent: [
      {
        title: '展会主题与品牌定位的主要流程',
        points: [
          '目标观众调研：了解观众需求把握市场方向',
          '展会竞争与差异化分析：了解竞争对手找出差异化优势',
          '核心主题构思：基于调研和分析提炼核心主题',
          '品牌定位陈述撰写：清晰阐述独特价值、目标受众和核心优势'
        ]
      },
      {
        title: '正向案例与风险案例启示',
        points: [
          '正向案例：某AR眼镜品牌"无缝连接现实与数字世界"主题',
          '通过设置多个互动体验区支撑主题，获得市场反馈',
          '风险案例：过度技术化主题导致观众认知壁垒',
          '如"超高速量子计算架构解析"主题因专业难理解致参与度低'
        ]
      },
      {
        title: '消费电子展主题与品牌定位案例分析',
        points: [
          '行业特性考量中的技术保密性与传播吸引力平衡',
          '前瞻性主题设计技巧',
          '经典案例拆解中的正向和风险案例',
          '深入理解展会主题与品牌定位在实际中的应用'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="card-base p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {courseSummary.title}
              </h1>
              <p className="text-white/80 text-lg">
                {courseSummary.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 核心理论与关键方法论 */}
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            核心理论与关键方法论
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {courseSummary.coreTheories.map((theory, index) => (
              <motion.div
                key={theory.id}
                className="card-base p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16" />
                
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <theory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {theory.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {theory.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {theory.keyPoints.map((point, pointIndex) => (
                    <motion.div 
                      key={pointIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: pointIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 独特性或前沿性知识点技能点 */}
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            独特性或前沿性知识点技能点
          </motion.h2>
          
          <div className="grid gap-8">
            {courseSummary.uniqueKnowledge.map((knowledge, index) => (
              <motion.div
                key={knowledge.id}
                className="card-base p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent rounded-full -mr-20 -mt-20" />
                
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <knowledge.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {knowledge.title}
                    </h3>
                    <p className="text-white/70">
                      {knowledge.description}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  {knowledge.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 关键工具操作技能 */}
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            关键工具操作技能
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {courseSummary.keyTools.map((tool, index) => (
              <motion.div
                key={index}
                className="card-base p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 重点学习内容 */}
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            重点学习内容
          </motion.h2>
          
          <div className="space-y-6">
            {courseSummary.importantContent.map((content, index) => (
              <motion.div
                key={index}
                className="card-base p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {content.title}
                </h3>
                <div className="grid gap-3">
                  {content.points.map((point, pointIndex) => (
                    <motion.div 
                      key={pointIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: pointIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 课程完成总结 */}
        <motion.div
          className="card-base p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10" />
          
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
            恭喜！您已完成展会主题与品牌定位课程
          </h2>
          
          <p className="text-white/80 text-lg mb-6 leading-relaxed max-w-3xl mx-auto relative z-10">
            通过系统学习，您已经掌握了展会主题策划与品牌定位的完整知识体系。
            从理论基础到实战技能，从案例分析到工具运用，您已经具备了专业展会策划人员的核心能力。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10">
            <motion.div 
              className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-purple-300 mb-1">4</div>
              <div className="text-sm text-white/70">核心理论模块</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-green-300 mb-1">3</div>
              <div className="text-sm text-white/70">前沿知识技能</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-orange-300 mb-1">2</div>
              <div className="text-sm text-white/70">工具操作技能</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-pink-300 mb-1">3</div>
              <div className="text-sm text-white/70">重点学习内容</div>
            </motion.div>
          </div>
          
          <p className="text-white/60 text-sm italic relative z-10">
            "理论与实践相结合，创意与执行共提升。继续在实践中深化学习，成为展会策划领域的专业人才！"
          </p>
        </motion.div>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link
            to="/course/case-studies"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            消费电子展案例分析
          </Link>
          
          <Link
            to="/course-test"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            开始课堂测试
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryPage;