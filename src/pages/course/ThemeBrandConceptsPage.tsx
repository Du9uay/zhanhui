import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brand, Target, Users, Award, Sparkles, CheckCircle, Compass } from '../../components/Icons';
import DigitalAvatarPlayer from '../../components/DigitalAvatarPlayer';

const ThemeBrandConceptsPage: React.FC = () => {
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

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

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
            to="/course/consumer-electronics-trends" 
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一章</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/50 text-sm">第2章</span>
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

        {/* 主标题 - 居中大卡片设计 */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-12 text-center relative overflow-hidden">
            {/* 品牌定位概念背景图 */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第二章展会主题与品牌定位的核心概念/第二章_品牌定位的概念背景图.jpg)` }}
            ></div>
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl mb-8 shadow-2xl"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Brand className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-5xl font-bold text-white mb-6">
                展会主题与品牌定位的核心概念
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                本章节聚焦展会主题与品牌定位的核心概念，学员将学习明确展会主题的构成要素，掌握品牌定位的方法，能分析如何让展会主题契合品牌定位。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 内容区域 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* 展会主题的定义与要素 - 分步骤卡片设计 */}
          <motion.section variants={itemVariants} className="relative">
            {/* 章节标题 */}
            <div className="flex items-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl mr-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-blue-400 font-semibold text-sm mb-1">SECTION 01</div>
                <h2 className="text-3xl font-bold text-white">展会主题的定义与要素</h2>
              </div>
            </div>

            {/* 核心定义 - 大引用卡片 */}
            <motion.div 
              className="glass-card p-8 mb-12 border-l-8 border-blue-400"
              variants={slideInLeft}
            >
              <div className="flex items-start">
                <Sparkles className="w-8 h-8 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">核心定义</h3>
                  <p className="text-xl text-white/90 leading-relaxed">
                    展会主题是展会的<span className="text-amber-400 font-bold">灵魂所在</span>，它是展会组织方为了传达展会核心价值而提炼出的简洁且具有吸引力的核心思想。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 三要素 - 垂直时间线设计 */}
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-amber-400 to-teal-400 rounded-full"></div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: "核心思想",
                    description: "能够精准概括展会的主要内容和价值取向",
                    color: "blue"
                  },
                  {
                    icon: Users,
                    title: "目标受众指向", 
                    description: "明确针对的是哪些人群，如科技爱好者、行业从业者等",
                    color: "amber"
                  },
                  {
                    icon: Award,
                    title: "行业特色",
                    description: "必须体现消费电子行业的特点，如最新技术应用、产品创新等",
                    color: "teal"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex items-start"
                    variants={slideInRight}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* 时间点 */}
                    <div className={`relative z-10 w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 rounded-2xl flex items-center justify-center shadow-xl mr-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* 内容卡片 */}
                    <div className="flex-1 glass-card p-6">
                      <h4 className={`text-xl font-bold text-${item.color}-400 mb-3`}>{item.title}</h4>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 案例分析 - 对比卡片布局 */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">案例分析</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div 
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-8 border border-blue-400/30"
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* 智能生活示例图 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第二章展会主题与品牌定位的核心概念/第二章_智能生活新视界示例图.jpg)` }}
                  ></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-12 bg-blue-400 rounded-full mr-4"></div>
                      <h4 className="text-xl font-bold text-blue-400">案例一："智能生活新视界"</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-blue-400 font-semibold text-sm">核心思想</span>
                        <p className="text-white/80 text-sm mt-1">展示智能技术如何开启新的生活方式</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-blue-400 font-semibold text-sm">目标受众</span>
                        <p className="text-white/80 text-sm mt-1">科技爱好者和相关行业从业者</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-blue-400 font-semibold text-sm">行业特色</span>
                        <p className="text-white/80 text-sm mt-1">突出智能技术应用</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 border border-green-400/30"
                  variants={slideInRight}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* 绿色未来示例图 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第二章展会主题与品牌定位的核心概念/第二章_消费电子的绿色未来示例图.jpg)` }}
                  ></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-12 bg-green-400 rounded-full mr-4"></div>
                      <h4 className="text-xl font-bold text-green-400">案例二："消费电子的绿色未来"</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-green-400 font-semibold text-sm">核心思想</span>
                        <p className="text-white/80 text-sm mt-1">强调消费电子行业在环保方面的发展和创新</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-green-400 font-semibold text-sm">目标受众</span>
                        <p className="text-white/80 text-sm mt-1">关注环保的消费者、环保组织及从业者</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                        <span className="text-green-400 font-semibold text-sm">行业特色</span>
                        <p className="text-white/80 text-sm mt-1">展示可回收材料、低能耗设计等环保技术</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                      <span className="text-green-400 font-semibold text-xs">实例：</span>
                      <span className="text-white/70 text-xs ml-1">苹果展示的采用再生材料制作的MacBook外壳等环保产品</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* 展会主题的定义与要素 - 数字人视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVyllYLzc3T.mp4"
              position={{ top: 100, right: '-8rem' }}
            />
          </motion.section>

          {/* 品牌定位的概念 - 交错布局设计 */}
          <motion.section variants={itemVariants} className="relative">
            {/* 章节标题 */}
            <div className="flex items-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-blue-400 rounded-2xl mr-6">
                <Brand className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-amber-400 font-semibold text-sm mb-1">SECTION 02</div>
                <h2 className="text-3xl font-bold text-white">品牌定位的概念</h2>
              </div>
            </div>

            {/* 核心概念 - 居中大卡片 */}
            <motion.div 
              className="glass-card p-10 mb-12 text-center relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <Compass className="w-16 h-16 text-amber-400 mx-auto mb-6" />
                <p className="text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  品牌定位是展会在目标市场中<span className="text-amber-400 font-bold">确立独特位置</span>的过程，旨在让展会在众多同类展会中脱颖而出。它强调展会要突出与其他展会的差异，明确自身的独特价值。
                </p>
              </div>
            </motion.div>

            {/* 定位要素与目标 - 左右分栏 */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div variants={slideInLeft}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-8 h-8 text-amber-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">定位要素</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { color: "blue", text: "展会的资源与优势" },
                      { color: "amber", text: "目标市场的需求分析" },
                      { color: "teal", text: "竞争对手的差异化分析" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/5 rounded-xl">
                        <div className={`w-3 h-3 bg-${item.color}-400 rounded-full mr-3`}></div>
                        <span className="text-white/80">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-teal-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">定位目标</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { color: "blue", text: "吸引特定的目标受众" },
                      { color: "green", text: "树立独特的展会品牌形象" },
                      { color: "orange", text: "在市场中确立优势地位" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/5 rounded-xl">
                        <div className={`w-3 h-3 bg-${item.color}-400 rounded-full mr-3`}></div>
                        <span className="text-white/80">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 定位案例分析 - 堆叠卡片设计 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">定位案例分析</h3>
              <div className="space-y-6">
                <motion.div 
                  className="relative"
                  variants={slideInLeft}
                  whileHover={{ x: 10 }}
                >
                  <div className="glass-card p-8 border-l-4 border-amber-400">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-amber-400">"高端定制化消费电子解决方案提供商"</h4>
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      这种定位聚焦于为客户提供个性化、高端的消费电子解决方案，与那些综合型、大众化的消费电子展会形成差异。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-amber-500/10 rounded-xl p-4">
                        <span className="text-amber-400 font-semibold text-sm">独特价值</span>
                        <p className="text-white/70 text-sm mt-1">个性化高端解决方案</p>
                      </div>
                      <div className="bg-amber-500/10 rounded-xl p-4">
                        <span className="text-amber-400 font-semibold text-sm">目标受众</span>
                        <p className="text-white/70 text-sm mt-1">有高端定制需求的客户</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative"
                  variants={slideInRight}
                  whileHover={{ x: -10 }}
                >
                  <div className="glass-card p-8 border-l-4 border-blue-400 ml-auto max-w-5xl">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-blue-400">"中小企业消费电子创新孵化器"</h4>
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      这种定位的独特价值在于为中小企业提供展示创新产品、获取投资和合作机会的平台。
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <span className="text-blue-400 font-semibold text-sm">目标受众</span>
                        <p className="text-white/70 text-sm mt-1">中小企业主和相关投资机构</p>
                      </div>
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <span className="text-blue-400 font-semibold text-sm">核心优势</span>
                        <p className="text-white/70 text-sm mt-1">资源整合帮助中小企业创新发展</p>
                      </div>
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <span className="text-blue-400 font-semibold text-sm">实例</span>
                        <p className="text-white/70 text-sm mt-1">华为针对中小企业的消费电子创新扶持计划</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* 品牌定位的概念 - 数字人视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVylkr4DVTu.mp4"
              position={{ top: 100, right: '-8rem' }}
            />
          </motion.section>

          {/* 导航按钮 - 浮动设计 */}
          <motion.div 
            className="flex justify-between items-center pt-16"
            variants={itemVariants}
          >
            <Link 
              to="/course/consumer-electronics-trends"
              className="group flex items-center space-x-3 glass-card px-6 py-4 hover:shadow-glass-hover transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-white">上一章：全球消费电子展发展趋势</span>
            </Link>
            
            <Link 
              to="/course/positioning-process"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-amber-500 px-6 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>下一章：展会主题与品牌定位的主要流程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeBrandConceptsPage;