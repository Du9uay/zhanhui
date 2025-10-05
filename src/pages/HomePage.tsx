import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, Briefcase, Network, Lightbulb, ChevronRight, Rocket , GPT, N8N, Tripo,Trophy, TrendingUp, Target, Sparkles, Exhibition, Strategy, Presentation, ArrowRight, CheckCircle } from '../components/Icons';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  
  const careerPaths = [
    {
      title: '会展策划师',
      icon: Exhibition,
      iconBg: 'from-blue-500 to-teal-500',
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
      iconBg: 'from-emerald-500 to-blue-500',
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
      iconBg: 'from-blue-500 to-emerald-500',
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
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '展会主题与品牌定位';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);


  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Exhibition className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              商业活动策划专业核心课程
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            通过系统性学习展会主题策划与品牌定位知识，掌握消费电子展发展趋势分析，
            培养具备展会策划、品牌定位、市场分析和活动执行能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* 数字人播放器1 - 为什么要学习这节课标题 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNX5yIS.mov"
            position={{ top: 0, right: '-16rem' }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 - glass卡片设计 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业？</h2>
              <p className="text-blue-200 mt-2">现在入场，抢占高薪机会</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-card p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题：一、我们为什么要关注行业？_背景图.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-blue-400">原因与现状</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 万亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 border border-blue-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题一_万亿级市场规模_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">万亿级市场规模</h4>
                    <p className="text-white/80 text-sm">
                      中国展会行业市场规模已突破15000亿元，年增长率超过20%
                    </p>
                  </motion.div>

                  {/* 政策红利期 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 border border-green-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题一_政策红利期_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-green-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">政策红利期</h4>
                    <p className="text-white/80 text-sm">
                      国家大力推动<span className="font-bold text-purple-400">"一带一路"</span>、RCEP合作加速
                    </p>
                  </motion.div>

                  {/* 地方加快建设 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-600/20 p-6 border border-cyan-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/薪资发展路径-高级策划总监.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(8, 145, 178, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-cyan-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">地方加快建设</h4>
                    <p className="text-white/80 text-sm">
                    <span className="font-bold text-purple-400">深圳</span>、<span className="font-bold text-purple-400">上海</span>等城市全力建设"国际会展之都"
                    </p>
                  </motion.div>

                  {/* 核心属性 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-600/20 p-6 border border-purple-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/大型案例分析-包头融媒车博会.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-purple-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">核心属性</h4>
                    <p className="text-white/80 text-sm">
                      产品展示、品牌传播、品牌交流，最重要的是<span className="text-purple-400 font-bold">贸易</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-amber-400">结果导向</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 p-8 border border-amber-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题一_对企业而言_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(245, 158, 11, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-amber-400 mr-3" />
                      <h4 className="text-2xl font-bold text-amber-400">对企业而言</h4>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      是未来十几年重要的市场突破口，将会越来越重视，加大资金的投入。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-8 border border-purple-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题一_对学生而言_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-purple-400 mr-3" />
                      <h4 className="text-2xl font-bold text-purple-400">对学生来说</h4>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      意味着大量的优质的就业机会。早一步了解行业，就能更早掌握行业红利，实现职业发展与个人成长的双重突破。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器2 - 为什么要关注行业 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7IVC0W.mov"
            position={{ top: 380, right: '-16rem' }}
          />
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 - 垂直时间线设计 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-cyan-200 mt-2">看懂公司架构＝摸清高薪岗位的底层逻辑</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 - 最高层级，向左偏移 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 p-8 border border-blue-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题二_弄清楚上下游_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-blue-400">上游企业</h3>
                        <span className="text-blue-400/60 text-sm font-semibold">Level 1</span>
                      </div>
                      <p className="text-white/80 text-base mb-6">提供会展所需的"硬件"与"基础条件"，相当于资源型和服务型供应商</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">展馆运营方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">会展搭建公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">会展设计公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">物流运输企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">物料制作公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-blue-400/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 - 中间层级，居中 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Network className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 border border-purple-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题二_弄清楚企业的岗位_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-purple-400">中游企业</h3>
                        <span className="text-purple-400/60 text-sm font-semibold">Level 2</span>
                      </div>
                      <p className="text-white/80 text-base mb-6">核心是活动的组织方与统筹方，负责把上游资源整合起来形成完整的会展项目</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">会展主办方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">会展承办方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">会展策划机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">数字会展公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">广告公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-purple-400/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 - 最低层级，向右偏移 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-teal-600/10 p-8 border border-green-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题二_弄清楚企业需要的技术_背景图.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-green-400">下游企业</h3>
                        <span className="text-green-400/60 text-sm font-semibold">Level 3</span>
                      </div>
                      <p className="text-white/80 text-base mb-6">面向最终的B端参展商与C端观众/客户，直接创造商业价值与观展体验</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">参展企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">观众与买家组织方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">新媒体公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white/70 text-sm">接待服务公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-amber-400 text-lg font-semibold text-center">
              上下游不同，掌握的技术不同，要明晰个人定位，选择最适合自己的路
            </p>
          </motion.div>

          {/* 数字人播放器3 - 为什么要分清企业类型 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7Ikcl1.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-orange-200 mt-2">弄清楚企业需要什么样的人</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-6 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/关于岗位你该知道的是-前期策划.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 ml-3">前期策划</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">展会的"开头准备"，要想好展会主题、定位目标客户，设计展位和活动内容</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80 text-sm">会展策划师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80 text-sm">会展业务顾问</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80 text-sm">会展设计师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期执行 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 border border-green-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/关于岗位你该知道的是-中期执行.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-400 rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 ml-3">中期执行</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">聚焦展会落地实施，包括场馆搭建、展商招募、流程管理与现场协调</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span className="text-white/80 text-sm">会展执行</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span className="text-white/80 text-sm">会展招商</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-green-400" />
                    <span className="text-white/80 text-sm">会展招展</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期运营 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 border border-purple-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/关于岗位你该知道的是-后期运营.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 ml-3">后期运营</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">展会结束后的持续运营，注重品牌推广、数据复盘与客户关系维护</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">品牌推广</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">展会运营</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">市场推广专员</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">普遍要求与待遇</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">技术经验 &gt; 学历</div>
                  <p className="text-white/70 text-sm">技术/经验要求大于学历要求</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">8K+</div>
                  <p className="text-white/70 text-sm">行业平均薪资</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">项目提成</div>
                  <p className="text-white/70 text-sm">收入天花板高</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 数字人播放器4 - 关于岗位你该知道的是 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7IW7lv.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第四部分：学习成果展示 - 对比卡片布局 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-amber-200 mt-2">不只是学了就能用的实战技巧</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和AI工具 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 单元课程目录卡片 - 第一个位置 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 p-8 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题三_浓缩十余年的核心经验_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-blue-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-400">单元课程目录</h3>
                </div>

                <div className="space-y-4">
                  {/* 前期策划 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">前期策划</span>
                    <div className="text-white/70 text-sm mt-2 space-y-1">
                      <p>• 打造自带话题度的展会主题与品牌故事（1节）</p>
                      <p>• 让展馆设计成为打卡圣地的三种思路（3节）</p>
                      <p>• 如何策划一场眼前一新的新品发布会（2节）</p>
                    </div>
                  </div>

                  {/* 中期执行 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">中期执行</span>
                    <div className="text-white/70 text-sm mt-2 space-y-1">
                      <p>• 带你玩转高效对接与B2B洽谈（1节）</p>
                      <p>• 把互动区做成全场焦点（2节）</p>
                    </div>
                  </div>

                  {/* 后期运营 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">后期运营</span>
                    <div className="text-white/70 text-sm mt-2 space-y-1">
                      <p>• 让媒体公关带动曝光（1节）</p>
                      <p>• 数据采集新玩法，轻松捕捉商机价值（1节）</p>
                      <p>• 展后还能继续成交？揭秘CRM跟进技巧（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 本节课内容卡片 - 第二个位置 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 border border-purple-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题三_在企业中才会了解到的工作流程_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-purple-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-purple-400">本节课核心内容</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-purple-400 font-semibold text-base">品牌定位</span>
                    <p className="text-white/80 text-sm mt-1">如何清晰定位品牌，高效完成竞品分析</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-purple-400 font-semibold text-base">分析方法</span>
                    <p className="text-white/80 text-sm mt-1">SWOT分析、一致性检验等专业分析方法</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-purple-400 font-semibold text-base">执行路径</span>
                    <p className="text-white/80 text-sm mt-1">如何快速高效的寻找可执行的方法路径</p>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-purple-500/10 rounded-lg">
                  <span className="text-purple-400 font-semibold text-sm">核心价值：</span>
                  <span className="text-white/70 text-sm ml-1">将理论与实践完美结合，直接应用于实际工作</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 大型案例和AI工具 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 大型案例卡片 - 第三个位置 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 border border-green-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题三_更加精准，清晰的职业方向_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-green-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-green-400">大型案例分析</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold text-base">中国国际摩托车博览会</span>
                    </div>
                    <p className="text-white/70 text-sm">深度剖析大型国际展会的策划与执行全过程</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold text-base">包头融媒车博会</span>
                    </div>
                    <p className="text-white/70 text-sm">创新型车展的品牌定位与媒体融合策略</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between bg-green-500/10 rounded-xl p-4">
                  <span className="text-green-400 text-sm">调研</span>
                  <ChevronRight className="w-4 h-4 text-green-400/50" />
                  <span className="text-green-400 text-sm">策划</span>
                  <ChevronRight className="w-4 h-4 text-green-400/50" />
                  <span className="text-green-400 text-sm">执行</span>
                  <ChevronRight className="w-4 h-4 text-green-400/50" />
                  <span className="text-green-400 text-sm">运营</span>
                </div>

                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold">从实战案例中学习，快速提升专业能力</p>
                </div>
              </div>
            </motion.div>

            {/* AI工具教学卡片 - 第四个位置 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 to-yellow-600/10 p-8 border border-orange-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${process.env.PUBLIC_URL}/images/backgrounds/为什么要学习这节课/标题三_前沿的AI工具_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-orange-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-orange-400">AI工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <GPT className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold text-base">Analysis AI</span>
                    </div>
                    <p className="text-white/70 text-sm">用于分析观众报名信息、参展商数据和现场流量，帮助主办方判断受众结构、热度区域和参展效果</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <N8N className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-white/70 text-sm">可以一键生成策划方案、自动整理财务报表，大幅减少重复性工作</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Tripo className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold text-base">Tripo</span>
                    </div>
                    <p className="text-white/70 text-sm">用于展台设计和场馆效果展示，只需输入展位需求，就能快速生成渲染图</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-orange-500/10 rounded-lg">
                  <p className="text-orange-400 text-sm font-semibold">掌握AI工具，领先同龄人的关键技能</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 数字人播放器5 - 学习成果展示 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7IqbYx.mov"
            position={{ top: 300, right: '-16rem' }}
          />

          {/* 数字人播放器6 - 岗位晋升路径 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7IPXX9.mov"
            position={{ top: 900, right: '-16rem' }}
          />
        </motion.section>

        {/* 岗位晋升路径板块 */}
        <motion.section className="mb-20 relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div 
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-500/20" 
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">初级策划师</div>
                <div className="text-3xl font-bold text-white mb-4">8K-12K</div>
                <div className="text-blue-200 text-sm">
                  <div>展会基础策划</div>
                  <div>活动执行协助</div>
                  <div>客户需求对接</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">中级策划师</div>
                <div className="text-3xl font-bold text-white mb-4">12K-20K</div>
                <div className="text-purple-200 text-sm">
                  <div>独立项目管理</div>
                  <div>品牌定位策略</div>
                  <div>团队协作领导</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-orange-400 mb-2">高级策划总监</div>
                <div className="text-3xl font-bold text-white mb-4">20K+</div>
                <div className="text-orange-200 text-sm">
                  <div>战略规划制定</div>
                  <div>大型展会统筹</div>
                  <div>行业资源整合</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器7 - 职业发展前景 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqYh7IM8Ir.mov"
            position={{ top: 100, right: '-16rem' }}
          />
        </motion.section>

        {/* 职业发展前景板块 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Exhibition className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">本节课涉及到的岗位</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              掌握展会主题与品牌定位技能，成为专业的展会策划人才
            </p>
          </div>

          {/* 职业发展路径 */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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

          {/* 核心技能亮点 */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">核心竞争力</h3>
              <p className="text-white/70 text-lg">展会主题与品牌定位专业技能</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-400 rounded-xl flex items-center justify-center">
                  <Exhibition className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">主题策划能力</h4>
                <p className="text-white/70 text-sm">掌握展会主题构思、品牌定位等核心技能</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-teal-400 rounded-xl flex items-center justify-center">
                  <Strategy className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">市场分析能力</h4>
                <p className="text-white/70 text-sm">具备SWOT分析、目标观众调研等分析技能</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">执行落地能力</h4>
                <p className="text-white/70 text-sm">从策划到执行，确保展会成功举办</p>
              </div>
            </div>
          </motion.div>

          {/* 开启职业生涯 */}
          <motion.div
            className="text-center py-16 px-8 bg-gradient-to-r from-blue-500/10 via-amber-500/10 to-blue-500/10 rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">开启你的展会策划职业生涯</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              掌握展会主题与品牌定位核心技能，成为文旅产业展会策划专家
            </p>
            <div className="flex justify-center">
              <Link 
                to="/course/consumer-electronics-trends"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                开始学习课程
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          
        </motion.section>

              </div>
            </div>
  );
  };
  
export default HomePage; 