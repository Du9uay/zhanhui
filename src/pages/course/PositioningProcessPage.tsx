import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Strategy, Users, Target, Eye, BookOpen, CheckCircle, Zap, Search } from '../../components/Icons';

const PositioningProcessPage: React.FC = () => {
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

  const flowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  };

  const processSteps = [
    {
      number: "01",
      title: "目标观众调研",
      icon: Users,
      color: "purple",
      bgGradient: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      number: "02", 
      title: "竞争与差异化分析",
      icon: Eye,
      color: "pink",
      bgGradient: "from-pink-500/20 to-pink-600/20", 
      borderColor: "border-pink-400/30"
    },
    {
      number: "03",
      title: "核心主题构思", 
      icon: Target,
      color: "indigo",
      bgGradient: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-400/30"
    },
    {
      number: "04",
      title: "品牌定位陈述撰写",
      icon: BookOpen,
      color: "emerald",
      bgGradient: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-400/30"
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
            to="/course/theme-brand-concepts" 
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一章</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/50 text-sm">第3章</span>
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

        {/* 主标题 - 流程导向设计 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl mb-8 shadow-2xl"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Strategy className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-6">
            展会主题与品牌定位的主要流程
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            该章节主要讲解展会主题与品牌定位的主要流程，首先要明确展会核心主题，需结合行业趋势等；然后分析品牌目标受众、市场定位等。
          </p>
        </motion.div>

        {/* 流程概览 - 圆形流程图 */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">流程概览</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* 中心连接线 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border-2 border-white/10 rounded-full"></div>
            </div>
            
            {/* 流程步骤 - 环形布局 */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-8">
              {processSteps.map((step, index) => {
                const positions = [
                  'lg:-translate-y-20 lg:-translate-x-8', // 左上
                  'lg:-translate-y-20 lg:translate-x-8',  // 右上
                  'lg:translate-y-20 lg:-translate-x-8',  // 左下
                  'lg:translate-y-20 lg:translate-x-8'    // 右下
                ];
                
                return (
                  <motion.div
                    key={index}
                    className={`relative ${positions[index]}`}
                    variants={flowVariants}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <div className={`glass-card p-6 text-center relative overflow-hidden bg-gradient-to-br ${step.bgGradient} border ${step.borderColor}`}>
                      {/* 装饰性背景 */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-r from-${step.color}-400 to-${step.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`text-2xl font-bold text-${step.color}-400 mb-2`}>{step.number}</div>
                        <h3 className="font-semibold text-white text-sm leading-tight">{step.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 内容区域 - 步骤详解 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* 目标观众调研 - 左右布局 */}
          <motion.section variants={itemVariants}>
            <div className="grid lg:grid-cols-12 gap-8">
              {/* 左侧步骤指示器 */}
              <div className="lg:col-span-3">
                <div className="sticky top-8">
                  <div className="glass-card p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">01</div>
                    <h3 className="text-xl font-bold text-white">目标观众调研</h3>
                  </div>
                </div>
              </div>
              
              {/* 右侧内容 */}
              <div className="lg:col-span-9 space-y-8">
                {/* 重要性分析 */}
                <motion.div 
                  className="glass-card p-8 border-l-4 border-purple-400"
                  variants={itemVariants}
                >
                  <div className="flex items-start mb-6">
                    <Zap className="w-8 h-8 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">重要性分析</h3>
                      <p className="text-white/80 leading-relaxed">
                        目标观众调研是确定展会主题和品牌定位的<span className="text-purple-400 font-bold">基础环节</span>。只有深入了解目标观众的需求、兴趣、行为等，才能精准把握市场方向，从而制定合适的主题和定位。
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 调研方法与内容 - 双列卡片 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="glass-card p-6 hover:shadow-glass-hover transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <Search className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="font-bold text-white">调研方法</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        { color: "purple", method: "发放在线问卷调研" },
                        { color: "pink", method: "开展线下访谈" },
                        { color: "indigo", method: "焦点小组讨论" },
                        { color: "emerald", method: "用户行为数据分析" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                          <div className={`w-3 h-3 bg-${item.color}-400 rounded-full mr-3`}></div>
                          <span className="text-white/80 text-sm">{item.method}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card p-6 hover:shadow-glass-hover transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="font-bold text-white">调研内容</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        { color: "green", content: "观众需求与兴趣偏好" },
                        { color: "blue", content: "参展动机与期望" },
                        { color: "orange", content: "消费行为特征" },
                        { color: "pink", content: "媒体接触习惯" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                          <div className={`w-3 h-3 bg-${item.color}-400 rounded-full mr-3`}></div>
                          <span className="text-white/80 text-sm">{item.content}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* 调研案例 - 特色展示卡片 */}
                <motion.div 
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-8 border border-purple-400/30"
                  variants={itemVariants}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-purple-400 mb-6">调研案例：2024年消费电子展</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <h5 className="font-semibold text-white mb-2">调研规模</h5>
                        <p className="text-white/70 text-sm">某消费电子展组织方对1000名科技爱好者进行调研</p>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <h5 className="font-semibold text-white mb-2">关键发现</h5>
                        <ul className="text-white/70 text-sm space-y-1">
                          <li>• 70% 关注可穿戴健康监测</li>
                          <li>• 40% 倾向环保型产品</li>
                          <li>• 60% 关注智能化程度</li>
                          <li>• 30% 关注性价比</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <h5 className="font-semibold text-white mb-2">应用结果</h5>
                        <p className="text-white/70 text-sm">构思"智能健康可穿戴与绿色消费电子"主题，定位为健康环保导向平台</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* 竞争与差异化分析 - 流程图式布局 */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl mb-4"
                whileHover={{ rotate: 5 }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">展会竞争与差异化分析</h2>
              <p className="text-white/70">通过分析竞争对手，找出自身的差异化优势</p>
            </div>

            {/* 分析步骤 - 流程卡片 */}
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", title: "调研竞争对手", desc: "展会主题和定位", color: "red", icon: Search },
                { step: "2", title: "分析市场空白", desc: "未满足需求", color: "orange", icon: Target },
                { step: "3", title: "确定自身优势", desc: "独特竞争力", color: "yellow", icon: Zap },
                { step: "4", title: "制定差异化策略", desc: "战略规划", color: "green", icon: CheckCircle }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 p-6 border border-${item.color}-400/30`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 bg-${item.color}-500 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-xl font-bold text-${item.color}-400 mb-2`}>{item.step}</div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className={`text-${item.color}-300 text-xs`}>{item.desc}</p>
                  </div>
                  
                  {/* 连接箭头 */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-white/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* 差异化案例 - 对比展示 */}
            <motion.div 
              className="glass-card p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">差异化分析案例</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-400/30">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">市场现状分析</h4>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    调研发现当地已有一个侧重展示传统消费电子硬件的展会，而市场上对消费电子软件与硬件融合应用的需求尚未被充分满足。
                  </p>
                  <div className="flex items-center text-orange-400">
                    <Target className="w-5 h-5 mr-2" />
                    <span className="font-semibold">发现市场空白</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-6 border border-emerald-400/30">
                  <h4 className="text-xl font-bold text-emerald-400 mb-4">差异化策略</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">主题设定</p>
                        <p className="text-emerald-300 text-sm">"软件硬件融合：消费电子新生态"</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">实施举措</p>
                        <p className="text-emerald-300 text-sm">专设融合应用展区，展示特斯拉智能汽车等</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* 核心主题构思 - 创意展示 */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">核心主题构思</h2>
              <p className="text-white/70">基于调研分析提炼核心主题</p>
            </div>

            {/* 构思原则 - 三角形布局 */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  num: "1", 
                  title: "贴合观众需求", 
                  desc: "呼应目标观众关注的热点",
                  color: "purple",
                  icon: Users
                },
                { 
                  num: "2", 
                  title: "突出自身优势", 
                  desc: "体现展会独特价值",
                  color: "indigo",
                  icon: Zap
                },
                { 
                  num: "3", 
                  title: "串联展示内容", 
                  desc: "有机整合各类展示",
                  color: "blue",
                  icon: CheckCircle
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-${principle.color}-500/20 to-${principle.color}-600/20 p-8 border border-${principle.color}-400/30 text-center`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 bg-${principle.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-2xl font-bold text-${principle.color}-400 mb-3`}>{principle.num}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{principle.title}</h4>
                  <p className={`text-${principle.color}-300 text-sm`}>{principle.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* 主题构思案例 - 时间线设计 */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">主题构思案例</h3>
              
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {/* 5G案例 */}
                  <motion.div 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <div className="w-1/2 pr-8">
                      <div className="glass-card p-6 ml-auto max-w-lg">
                        <h4 className="text-lg font-bold text-indigo-400 mb-3">5G技术主题构思</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="font-semibold text-white text-sm">构思背景：</span>
                            <p className="text-white/70 text-sm">观众关注5G在消费电子的应用，展会在5G技术展示有优势</p>
                          </div>
                          <div>
                            <span className="font-semibold text-white text-sm">确定主题：</span>
                            <p className="text-indigo-400 font-bold">"5G引领消费电子新变革"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="w-1/2 pl-8"></div>
                  </motion.div>

                  {/* 6G案例 */}
                  <motion.div 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <div className="w-1/2 pr-8"></div>
                    
                    <div className="relative z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="w-1/2 pl-8">
                      <div className="glass-card p-6 max-w-lg">
                        <h4 className="text-lg font-bold text-purple-400 mb-3">6G技术前瞻主题</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="font-semibold text-white text-sm">调研发现：</span>
                            <p className="text-white/70 text-sm">观众对6G潜在应用感兴趣，展会在6G研发有合作资源</p>
                          </div>
                          <div>
                            <span className="font-semibold text-white text-sm">主题构思：</span>
                            <p className="text-purple-400 font-bold">"6G开启消费电子未来之门"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 品牌定位陈述撰写 - 卡片矩阵设计 */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl mb-4"
                whileHover={{ rotate: -5 }}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">品牌定位陈述撰写</h2>
              <p className="text-white/70">清晰阐述展会的独特价值、目标受众和核心优势</p>
            </div>

            {/* 三要素展示 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "独特价值", desc: "明确展会为目标受众提供的核心价值和差异化服务", color: "blue", icon: Zap },
                { title: "目标受众", desc: "精准定义展会服务的主要人群和客户类型", color: "green", icon: Users },
                { title: "核心优势", desc: "突出展会相比竞争对手的独特竞争优势", color: "orange", icon: Target }
              ].map((element, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-${element.color}-500/20 to-${element.color}-600/20 rounded-2xl p-6 border border-${element.color}-400/30`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 bg-${element.color}-500 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <element.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`font-bold text-${element.color}-400 mb-3`}>{element.title}</h4>
                    <p className="text-white/70 text-sm">{element.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 定位陈述案例 - 引用样式 */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">定位陈述案例</h3>
              
              {/* 5G技术展会 */}
              <motion.div 
                className="glass-card p-8 border-l-4 border-blue-400"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-blue-400 mb-6">5G技术展会定位陈述</h4>
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 mb-6 border border-blue-400/30">
                  <blockquote className="text-lg text-white/90 italic leading-relaxed">
                    "我们是专注于为科技爱好者和行业从业者提供5G引领下消费电子新技术、新产品展示与交流的平台，致力于推动5G技术在消费电子领域的深度应用和创新发展"
                  </blockquote>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/10 rounded-xl p-4">
                    <span className="text-blue-400 font-semibold text-sm">目标受众</span>
                    <p className="text-white/70 text-sm mt-1">科技爱好者和行业从业者</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-4">
                    <span className="text-green-400 font-semibold text-sm">独特价值</span>
                    <p className="text-white/70 text-sm mt-1">展示5G引领的消费电子新技术新产品</p>
                  </div>
                  <div className="bg-orange-500/10 rounded-xl p-4">
                    <span className="text-orange-400 font-semibold text-sm">核心优势</span>
                    <p className="text-white/70 text-sm mt-1">推动5G技术在消费电子领域的应用创新</p>
                  </div>
                </div>
              </motion.div>

              {/* 中小企业服务 */}
              <motion.div 
                className="glass-card p-8 border-l-4 border-purple-400"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-purple-400 mb-6">中小企业服务定位陈述</h4>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 mb-4 border border-purple-400/30">
                  <blockquote className="text-lg text-white/90 italic leading-relaxed">
                    "我们是面向全球中小企业的消费电子创新展示与合作平台，凭借我们丰富的行业资源和专业的服务团队，为中小企业提供展示创新产品、获取投资、拓展合作渠道的全方位支持，助力中小企业在消费电子领域实现快速发展"
                  </blockquote>
                </div>
                
                <div className="bg-purple-500/10 rounded-xl p-4">
                  <span className="text-purple-400 font-semibold text-sm">实例参考：</span>
                  <span className="text-white/70 text-sm ml-1">阿里巴巴旗下的1688平台为中小企业提供消费电子产品的展示和合作机会，体现了为中小企业服务的定位。</span>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 导航按钮 - 浮动样式 */}
          <motion.div 
            className="flex justify-between items-center pt-16"
            variants={itemVariants}
          >
            <Link 
              to="/course/theme-brand-concepts"
              className="group flex items-center space-x-3 glass-card px-6 py-4 hover:shadow-glass-hover transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-white">上一章：展会主题与品牌定位的核心概念</span>
            </Link>
            
            <Link 
              to="/course/planning-methods"
              className="group flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>下一章：展会主题策划与品牌定位方法</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PositioningProcessPage;