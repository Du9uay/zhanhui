import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Exhibition, Strategy, Presentation, ArrowRight, CheckCircle } from '../components/Icons';

const CareersPage: React.FC = () => {
  const careerPaths = [
    {
      title: '会展策划师',
      icon: Exhibition,
      iconBg: 'from-purple-400 to-pink-400',
      skills: [
        { name: '展会定位与主题策划', desc: '通过精准的主题和品牌定位，确保展会内容贴合目标受众和市场趋势。', highlight: true },
        { name: '空间设计与动线布局', desc: '通过合理规划展区与动线，提升观众流动效率与整体体验。' },
        { name: '品牌传播与媒体关系', desc: '借助媒体公关和国际报道增强品牌曝光与专业影响力。' },
        { name: '高端客户与 B2B 洽谈能力', desc: '熟练应对高层洽谈，实现高质量合作与资源对接。' },
        { name: '观众体验与互动场景设计', desc: '利用互动装置丰富观众体验，强化品牌印象。' },
        { name: '数据驱动与效果评估', desc: '通过客观数据分析支持优化策略与成果汇报。' }
      ]
    },
    {
      title: '品牌策划运营专员',
      icon: Strategy,
      iconBg: 'from-indigo-400 to-purple-400',
      skills: [
        { name: '品牌定位与主题表达', desc: '将品牌核心价值融入展会主题，实现一体化传播。', highlight: true },
        { name: '新品发布策划执行', desc: '针对新品发布制定创意及落地方案。' },
        { name: '媒体传播与国际曝光', desc: '利用媒体渠道和国际报道扩大品牌声量。' },
        { name: '观众互动与品牌体验设计', desc: '创造互动场景，让观众深度参与品牌体验。' },
        { name: '数据管理与商机追踪', desc: '用数据驱动运营决策与商业机会管理。' },
        { name: '评估体系与运营优化', desc: '持续评估活动成果并提出运营改进方案。' }
      ]
    },
    {
      title: '活动策划',
      icon: Presentation,
      iconBg: 'from-purple-500 to-indigo-500',
      skills: [
        { name: '主题定位与活动框架', desc: '从主题入手构建清晰、有吸引力的活动逻辑。', highlight: true },
        { name: '空间体验与互动设计', desc: '设计能有效引发用户积极参与的空间与互动。' },
        { name: '高层沟通与合作谈判', desc: '与重要客户或合作方保持优质沟通并达成共识。' },
        { name: '媒体传播设计', desc: '借助媒体策略提升活动关注度和传播效果。' },
        { name: '数字化导览或多语客服设计', desc: '引入 AI 与技术手段优化服务触点。' },
        { name: '评估反馈与迭代优化', desc: '基于效果评估形成下一步可持续优化方案。' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Exhibition className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">职业发展前景</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            掌握展会主题与品牌定位技能，成为专业的展会策划人才
          </p>
        </motion.div>

        {/* 职业发展路径 */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                className="card-base p-8 overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                {/* 背景装饰 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-12 -mt-12" />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${path.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                  <path.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {path.title}
                </h3>
                
                <div className="space-y-4">
                  {path.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        skill.highlight 
                          ? 'text-emerald-400' 
                          : 'text-white/40'
                      }`} />
                      <div>
                        <span className={`font-semibold text-sm ${
                          skill.highlight 
                            ? 'text-emerald-300' 
                            : 'text-white/60'
                        }`}>
                          {skill.name}
                        </span>
                        <p className={`text-xs mt-1 leading-relaxed ${
                          skill.highlight 
                            ? 'text-white/90' 
                            : 'text-white/50'
                        }`}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 核心技能亮点 */}
        <motion.div 
          className="mb-16 card-base p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">核心竞争力</h2>
            <p className="text-white/70 text-lg">展会主题与品牌定位专业技能</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-400 rounded-xl flex items-center justify-center">
                <Exhibition className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">主题策划能力</h3>
              <p className="text-white/70 text-sm">掌握展会主题构思、品牌定位等核心技能</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-indigo-400 rounded-xl flex items-center justify-center">
                <Strategy className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">市场分析能力</h3>
              <p className="text-white/70 text-sm">具备SWOT分析、目标观众调研等分析技能</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-xl flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">执行落地能力</h3>
              <p className="text-white/70 text-sm">从策划到执行，确保展会成功举办</p>
            </div>
          </div>
        </motion.div>

        {/* 开启职业生涯 */}
        <motion.div 
          className="text-center py-16 px-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">开启你的展会策划职业生涯</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            掌握展会主题与品牌定位核心技能，成为文旅产业展会策划专家
          </p>
          <div className="flex justify-center">
            <Link 
              to="/course/consumer-electronics-trends"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              开始学习课程
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;