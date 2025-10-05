import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Presentation, Shield, CheckCircle } from '../../components/Icons';
import DigitalAvatarPlayer from '../../components/DigitalAvatarPlayer';

const PlanningMethodsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20
      }
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  };

  const swotData = [
    {
      category: "Strengths（优势）",
      color: "emerald",
      bgGradient: "from-emerald-500/20 to-green-600/20",
      borderColor: "border-emerald-400/30",
      iconBg: "bg-emerald-500",
      items: [
        { title: "主办方资源", desc: "强大的主办方资源优势" },
        { title: "参展商邀请", desc: "知名参展商邀请能力" },
        { title: "媒体合作", desc: "行业媒体合作资源" },
        { title: "服务团队", desc: "专业的服务团队" }
      ]
    },
    {
      category: "Weaknesses（劣势）",
      color: "red",
      bgGradient: "from-red-500/20 to-amber-600/20",
      borderColor: "border-red-400/30",
      iconBg: "bg-red-500",
      items: [
        { title: "线上渠道", desc: "线上展示渠道相对薄弱" },
        { title: "互动体验", desc: "互动体验区数量较少" },
        { title: "国际知名度", desc: "国际知名度有待提升" },
        { title: "数字化程度", desc: "数字化程度需要加强" }
      ]
    },
    {
      category: "Opportunities（机会）",
      color: "blue",
      bgGradient: "from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-400/30",
      iconBg: "bg-blue-500",
      items: [
        { title: "5G技术普及", desc: "5G技术快速普及" },
        { title: "元宇宙兴起", desc: "元宇宙技术应用兴起" },
        { title: "消费需求增长", desc: "消费者对创新产品需求增长" },
        { title: "政策支持", desc: "政策支持展会产业发展" }
      ]
    },
    {
      category: "Threats（威胁）",
      color: "orange",
      bgGradient: "from-orange-500/20 to-amber-600/20",
      borderColor: "border-orange-400/30",
      iconBg: "bg-orange-500",
      items: [
        { title: "激烈竞争", desc: "同类展会激烈竞争" },
        { title: "线上冲击", desc: "线上展会模式冲击" },
        { title: "经济不确定", desc: "经济环境不确定性" },
        { title: "成本上升", desc: "参展成本持续上升" }
      ]
    }
  ];

  const checkMethods = [
    {
      step: "01",
      title: "线上问卷调研",
      icon: "📊",
      desc: "通过在线调研收集目标观众反馈",
      color: "blue",
      detail: "设计结构化问卷，获取量化数据"
    },
    {
      step: "02", 
      title: "线下访谈反馈",
      icon: "💬",
      desc: "深度面对面访谈获取质性意见",
      color: "amber",
      detail: "一对一深度访谈，探索深层需求"
    },
    {
      step: "03",
      title: "焦点小组讨论",
      icon: "👥",
      desc: "组织小组讨论形成集体智慧",
      color: "teal", 
      detail: "6-10人焦点小组，群体互动讨论"
    },
    {
      step: "04",
      title: "市场反馈分析",
      icon: "📈",
      desc: "分析市场数据和趋势反馈",
      color: "teal",
      detail: "综合市场数据，形成客观判断"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 头部导航 */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/course/positioning-process" 
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一章</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/50 text-sm">第4章</span>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white/70 text-sm">共5章</span>
          </div>

          <Link 
            to="/" 
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            返回首页
          </Link>
        </motion.div>

        {/* 主标题 - 工具箱风格设计 */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-16 text-center relative overflow-hidden">
            {/* 工具图标装饰 */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500/20 rounded-xl rotate-12"></div>
            <div className="absolute top-12 right-12 w-8 h-8 bg-amber-500/20 rounded-full"></div>
            <div className="absolute bottom-8 left-16 w-10 h-10 bg-teal-500/20 rounded-lg -rotate-12"></div>
            <div className="absolute bottom-12 right-8 w-6 h-6 bg-teal-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 via-amber-400 to-teal-400 rounded-3xl mb-8 shadow-2xl"
                initial={{ rotate: -5, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Presentation className="w-12 h-12 text-white" />
              </motion.div>
              
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                展会主题策划与品牌定位方法
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                本章节重点讲解展会主题策划与品牌定位方法。学员将学会结合市场状况策划展会主题，还能掌握品牌定位技巧，如分析目标受众、找出品牌独特卖点，从而明确展会与品牌的特色方向，提升其在市场中的辨识度与竞争力。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 内容区域 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* SWOT分析法 - 四象限工具板设计 */}
          <motion.section variants={itemVariants} className="relative">
            {/* 方法介绍 */}
            <div className="text-center mb-16 relative overflow-hidden rounded-3xl p-12">
              {/* SWOT分析法背景图 */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第四章展会主题策划与品牌定位方法/SWOT分析法-主图.jpeg)` }}
              ></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl mb-6"
                  whileHover={{ rotate: 10 }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">SWOT分析法</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  通过分析优势、劣势、机会和威胁四个维度，为展会主题策划和品牌定位提供全面的战略参考
                </p>
              </div>
            </div>

            {/* 理论背景 */}
            <motion.div 
              className="glass-card p-8 mb-12 border-l-4 border-emerald-400"
              variants={slideFromLeft}
            >
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">理论内涵</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    SWOT分析法是用于分析展会<span className="text-emerald-400 font-bold">Strengths（优势）</span>、
                    <span className="text-red-400 font-bold">Weaknesses（劣势）</span>、
                    <span className="text-blue-400 font-bold">Opportunities（机会）</span>和
                    <span className="text-orange-400 font-bold">Threats（威胁）</span>的工具。
                    通过对这四个方面的分析，能够为展会主题策划和品牌定位提供全面的参考。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SWOT四象限分析 - 工具板风格 */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {swotData.map((quadrant, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${quadrant.bgGradient} p-8 border ${quadrant.borderColor} group`}
                  variants={scaleIn}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* SWOT象限背景图 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                    style={{ 
                      backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第四章展会主题策划与品牌定位方法/SWOT分析法——${quadrant.category.charAt(0)}.jpg)` 
                    }}
                  ></div>
                  {/* 装饰性背景 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* 标题区域 */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${quadrant.iconBg} rounded-2xl flex items-center justify-center mr-4 shadow-xl`}>
                        <span className="text-white font-bold text-2xl">{quadrant.category.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{quadrant.category}</h3>
                    </div>

                    {/* 项目列表 - 卡片式 */}
                    <div className="grid gap-3">
                      {quadrant.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 + itemIndex * 0.05 }}
                          whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                        >
                          <div className="flex items-start">
                            <div className={`w-3 h-3 bg-${quadrant.color}-400 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                            <div>
                              <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                              <p className="text-white/70 text-xs">{item.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SWOT应用案例 - 双栏对比设计 */}
            <motion.div 
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-teal-500/10 p-8 border border-white/10"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">SWOT分析实战案例</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <motion.div 
                    className="glass-card p-6"
                    variants={slideFromLeft}
                  >
                    <h4 className="text-xl font-bold text-emerald-400 mb-6">某消费电子展SWOT分析</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                        <span className="text-emerald-400 font-semibold text-sm">优势发现</span>
                        <p className="text-white/80 text-sm mt-1">长期积累的行业媒体合作资源优势明显</p>
                      </div>
                      <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                        <span className="text-red-400 font-semibold text-sm">劣势识别</span>
                        <p className="text-white/80 text-sm mt-1">展会的互动体验区数量较少，影响参观体验</p>
                      </div>
                      <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                        <span className="text-blue-400 font-semibold text-sm">机会把握</span>
                        <p className="text-white/80 text-sm mt-1">元宇宙技术在消费电子领域的应用逐渐兴起</p>
                      </div>
                      <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-400/20">
                        <span className="text-orange-400 font-semibold text-sm">威胁应对</span>
                        <p className="text-white/80 text-sm mt-1">竞争对手推出了更具价格优势的展会套餐</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card p-6"
                    variants={slideFromRight}
                  >
                    <h4 className="text-xl font-bold text-blue-400 mb-6">战略调整方案</h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-white mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          应对策略
                        </h5>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</div>
                            <p className="text-white/80 text-sm">利用媒体合作优势，扩大展会宣传覆盖面</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</div>
                            <p className="text-white/80 text-sm">增加AR互动体验区和VR体验区数量</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">3</div>
                            <p className="text-white/80 text-sm">调整主题为"元宇宙消费电子新体验"</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">4</div>
                            <p className="text-white/80 text-sm">定位为"打造元宇宙消费电子互动体验的领先展会"</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                        <h5 className="font-semibold text-blue-400 mb-2 text-sm">实施效果</h5>
                        <p className="text-white/70 text-sm">
                          通过这些调整提升了展会的竞争力，如HTC在元宇宙消费电子领域的布局和展示，
                          成功吸引了大量关注元宇宙技术的观众和参展商。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* SWOT分析法视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykZNiQd4F.mp4"
              position={{ top: 300, right: '-8rem' }}
            />
          </motion.section>

          {/* 定位一致性检验 - 流程化工具设计 */}
          <motion.section variants={itemVariants} className="relative">
            {/* 标题区域 */}
            <div className="text-center mb-16">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl mb-6"
                  whileHover={{ rotate: -10 }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">定位一致性检验</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  确保展会主题、品牌定位与目标观众需求、市场实际情况保持一致的重要环节
                </p>
            </div>

            {/* 检验目的说明 */}
            <motion.div 
              className="glass-card p-8 mb-12 border-l-4 border-blue-400"
              variants={slideFromLeft}
            >
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">检验目的</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    定位一致性检验是确保展会主题、品牌定位与目标观众需求、市场实际情况等保持一致的重要环节。
                    通过检验来发现可能存在的<span className="text-amber-400 font-bold">偏差并进行调整</span>。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 检验方法 - 工具卡片阵列 */}
            <div className="grid lg:grid-cols-4 gap-6 mb-16">
              {checkMethods.map((method, index) => {
                const methodImages = [
                  "定位一致性检验——线上问卷调研.jpeg",
                  "定位一致性检验——线下访谈反馈.jpeg", 
                  "定位一致性检验——焦点小组讨论.jpeg",
                  "定位一致性检验——市场反馈分析.jpeg"
                ];
                
                return (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-${method.color}-500/20 to-${method.color}-600/20 p-6 border border-${method.color}-400/30 group`}
                    variants={scaleIn}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                  >
                    {/* 方法背景图 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                      style={{ 
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第四章展会主题策划与品牌定位方法/${methodImages[index]})` 
                      }}
                    ></div>
                    {/* 装饰背景 */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* 步骤编号 */}
                    <div className={`w-12 h-12 bg-${method.color}-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-white font-bold">{method.step}</span>
                    </div>
                    
                    {/* 图标 */}
                    <div className="text-3xl mb-3">{method.icon}</div>
                    
                    {/* 标题和描述 */}
                    <h4 className="font-bold text-white mb-2 text-sm">{method.title}</h4>
                    <p className="text-white/70 text-xs mb-3">{method.desc}</p>
                    
                    {/* 详细信息 */}
                    <div className={`bg-${method.color}-500/10 rounded-lg p-3 border border-${method.color}-400/20`}>
                      <p className="text-white/60 text-xs">{method.detail}</p>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </div>

            {/* 检验要点 - 网格布局 */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <motion.div 
                className="glass-card p-8"
                variants={slideFromLeft}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-400 to-amber-400 rounded-full mr-4"></div>
                  检验要点
                </h3>
                <div className="space-y-4">
                  {[
                    { point: "主题是否围绕定位展开", color: "blue" },
                    { point: "目标观众是否能感受到定位价值", color: "amber" }, 
                    { point: "主题与定位的关联度是否清晰", color: "teal" },
                    { point: "市场认知是否与预期一致", color: "blue" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <div className={`w-4 h-4 bg-${item.color}-400 rounded-full flex-shrink-0`}></div>
                      <span className="text-white/80 text-sm">{item.point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="glass-card p-8"
                variants={slideFromRight}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-full mr-4"></div>
                  检验流程
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "设计检验方案", desc: "确定检验方法和对象", color: "teal" },
                    { step: "2", title: "收集反馈", desc: "获取目标观众意见", color: "emerald" },
                    { step: "3", title: "分析偏差", desc: "识别不一致之处", color: "green" },
                    { step: "4", title: "优化调整", desc: "改进主题和定位", color: "green" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      <div className={`w-8 h-8 bg-${item.color}-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold`}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-white/70 text-xs">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 一致性检验案例 - 案例对比展示 */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">一致性检验案例</h3>
              
              {/* 案例一 */}
              <motion.div 
                className="relative glass-card p-8 border-l-4 border-green-400 overflow-hidden"
                variants={slideFromLeft}
              >
                {/* 案例一背景图 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第四章展会主题策划与品牌定位方法/案例一：大众化消费电子展会.jpeg)` }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-green-400 mb-6">案例一：大众化消费电子展会</h4>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
                    <h5 className="font-semibold text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                      定位设定
                    </h5>
                    <p className="text-white/80 text-sm">"面向大众的高性价比消费电子展会"</p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                    <h5 className="font-semibold text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                      主题设计
                    </h5>
                    <p className="text-white/80 text-sm">"实惠科技，畅享生活"</p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                    <h5 className="font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      检验结果
                    </h5>
                    <div>
                      <span className="text-green-400 text-sm font-medium">✓ 一致性良好</span>
                      <p className="text-white/70 text-xs mt-1">观众认为主题很好地体现了展会高性价比的定位</p>
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>

              {/* 案例二 */}
              <motion.div 
                className="relative glass-card p-8 border-l-4 border-orange-400 overflow-hidden"
                variants={slideFromRight}
              >
                {/* 案例二背景图 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第四章展会主题策划与品牌定位方法/案例二：高端商务消费电子展会调整案例.jpeg)` }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-orange-400 mb-6">案例二：高端商务消费电子展会调整案例</h4>
                
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                      <h5 className="font-semibold text-white mb-3">初始设定</h5>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-orange-400 font-medium">定位：</span><span className="text-white/80 ml-2">"高端商务消费电子展会"</span></div>
                        <div><span className="text-orange-400 font-medium">原主题：</span><span className="text-white/80 ml-2">"高端商务，智享未来"</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
                      <h5 className="font-semibold text-white mb-3">检验发现</h5>
                      <p className="text-white/80 text-sm">
                        部分观众认为主题中的"智享未来"虽然体现了科技感，但没有突出高端商务的特色
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-400/20">
                    <h5 className="font-semibold text-white mb-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">✓</div>
                      调整优化结果
                    </h5>
                    
                    <div className="grid lg:grid-cols-3 gap-4">
                      <div>
                        <span className="text-blue-400 font-medium text-sm">调整后主题</span>
                        <p className="text-white/80 text-sm mt-1">"高端商务，智领未来——消费电子的商务新境界"</p>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium text-sm">检验结果</span>
                        <p className="text-white/80 text-sm mt-1">观众反馈主题更好地契合了高端商务消费电子展会的定位</p>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium text-sm">实例参考</span>
                        <p className="text-white/80 text-sm mt-1">华为企业业务的消费电子产品定位为高端商务场景</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>

            {/* 定位一致性检验视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykYiUvVmb.mp4"
              position={{ top: 280, right: '-8rem' }}
            />
          </motion.section>

          {/* 导航按钮 - 浮动设计 */}
          <motion.div 
            className="flex justify-between items-center pt-16"
            variants={itemVariants}
          >
            <Link 
              to="/course/positioning-process"
              className="group flex items-center space-x-3 glass-card px-6 py-4 hover:shadow-glass-hover transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-white">上一章：展会主题与品牌定位的主要流程</span>
            </Link>
            
            <Link 
              to="/course/case-studies"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-amber-500 px-6 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>下一章：消费电子展主题与品牌定位案例</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlanningMethodsPage;