import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Exhibition, Eye, Target, CheckCircle, AlertTriangle, BookOpen } from '../../components/Icons';
import DigitalAvatarPlayer from '../../components/DigitalAvatarPlayer';

const CaseStudiesPage: React.FC = () => {
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

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 25
      }
    }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 25
      }
    }
  };

  const cascadeIn = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
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
            to="/course/planning-methods" 
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一章</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-white/50 text-sm">第5章</span>
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

        {/* 主标题 - 案例聚焦设计 */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-16 text-center relative overflow-hidden">
            {/* 案例主图背景 */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第五章消费电子展主题与品牌定位案例/消费电子展主题与品牌定位案例-主图.jpeg)` }}
            ></div>
            {/* 案例图标装饰 */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-amber-500/20 rounded-2xl rotate-12"></div>
            <div className="absolute top-12 right-12 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full"></div>
            <div className="absolute bottom-8 left-16 w-14 h-14 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg -rotate-12"></div>
            <div className="absolute bottom-12 right-8 w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 via-amber-400 to-teal-400 rounded-3xl mb-8 shadow-2xl"
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                whileHover={{ rotate: 10, scale: 1.05 }}
              >
                <Exhibition className="w-12 h-12 text-white" />
              </motion.div>
              
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                消费电子展主题与品牌定位案例
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                本章节是消费电子展主题与品牌定位案例学习，学员能学到剖析消费电子展主题如何贴合市场，掌握品牌在展会上精准定位的方法，像从产品特性、受众角度分析成功案例中主题与定位的关联，提升消费电子展会相关的分析与策划技能。
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
          {/* 案例概述 - 叙述风格引入 */}
          <motion.section variants={itemVariants}>
            <div className="grid lg:grid-cols-12 gap-8">
              {/* 左侧故事引导 */}
              <div className="lg:col-span-4">
                <div className="sticky top-8 glass-card p-8 border-l-4 border-blue-400">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-amber-400 rounded-2xl flex items-center justify-center mr-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white">01</div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">案例学习导言</h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    通过真实案例深入理解消费电子展主题策划与品牌定位的实战应用，从成功经验中汲取智慧，从失败教训中获得警示。
                  </p>
                </div>
              </div>
              
              {/* 右侧内容 */}
              <div className="lg:col-span-8 space-y-8">
                <motion.div 
                  className="glass-card p-8"
                  variants={cascadeIn}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Target className="w-8 h-8 text-blue-400 mr-4" />
                    学习目标与方法
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl p-6 border border-blue-400/30">
                      <h4 className="font-bold text-white mb-4">核心学习目标</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: "🎯", title: "理解主题定位关联", desc: "掌握展会主题与品牌定位的内在联系" },
                          { icon: "📊", title: "分析成功要素", desc: "识别优秀案例中的关键成功因素" },
                          { icon: "⚠️", title: "防范常见陷阱", desc: "学会避免典型的策划误区" },
                          { icon: "🚀", title: "实战应用能力", desc: "提升实际策划和执行能力" }
                        ].map((goal, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="text-2xl">{goal.icon}</div>
                            <div>
                              <h5 className="font-semibold text-white text-sm mb-1">{goal.title}</h5>
                              <p className="text-white/70 text-xs">{goal.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-400/30">
                      <h4 className="font-bold text-white mb-4">案例分析框架</h4>
                      <div className="space-y-3">
                        {[
                          { step: "背景分析", desc: "了解案例发生的市场环境和条件", color: "green" },
                          { step: "策略解析", desc: "剖析主题设计和定位策略的思路", color: "blue" },
                          { step: "执行评估", desc: "评价实施过程和最终效果", color: "blue" },
                          { step: "经验总结", desc: "提炼可复制的成功经验和教训", color: "orange" }
                        ].map((step, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div className={`w-8 h-8 bg-${step.color}-500 rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <span className="font-medium text-white text-sm">{step.step}</span>
                              <span className="text-white/60 text-xs ml-2">- {step.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* 成功案例分析 - 故事叙述风格 */}
          <motion.section variants={itemVariants} className="relative">
            <div className="text-center mb-12">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-6"
                  whileHover={{ rotate: 10 }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">成功案例深度解析</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  通过分析业界标杆案例，理解优秀的主题策划与品牌定位是如何协同工作的
                </p>
            </div>

            {/* AR眼镜品牌成功案例 */}
            <motion.div 
              className="glass-card p-8 mb-12 border-l-4 border-green-400"
              variants={slideInFromLeft}
            >
                <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center">
                  <div className="w-3 h-12 bg-green-400 rounded-full mr-4"></div>
                  案例一："无缝连接现实与数字世界" - AR眼镜品牌的完美融合
                </h3>
              
              <div className="space-y-8">
                {/* 背景介绍 */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-400/30">
                  <h4 className="font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-green-400 mr-3" />
                    案例背景
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    该AR眼镜品牌选择了"无缝连接现实与数字世界"作为展会主题，完美呼应了
                    <span className="text-green-400 font-bold mx-1">元宇宙技术趋势</span>。
                    元宇宙的核心概念正是实现现实与虚拟世界的无缝连接，这个主题不仅契合了行业发展潮流，
                    更为品牌定位提供了强有力的支撑。
                  </p>
                </div>

                {/* 体验区设计策略 */}
                <div>
                  <h4 className="font-bold text-white mb-6 text-xl">体验区设计策略</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "AR游戏体验区",
                        color: "green",
                        image: "AR游戏体验区.jpeg",
                        features: [
                          "观众通过AR眼镜进入虚拟游戏场景",
                          "与现实环境中的物体进行互动",
                          "实现现实与数字世界完全融合",
                          "提供沉浸式游戏体验"
                        ]
                      },
                      {
                        title: "AR购物体验区", 
                        color: "blue",
                        image: "AR购物体验区.jpeg",
                        features: [
                          "用AR眼镜查看虚拟商品",
                          "商品在现实环境中的摆放效果",
                          "实现购物场景的无缝连接",
                          "革新传统购物体验"
                        ]
                      },
                      {
                        title: "AR旅游体验区",
                        color: "blue", 
                        image: "AR旅游体验区.jpeg",
                        features: [
                          "虚拟旅游景点体验",
                          "巴黎埃菲尔铁塔、北京故宫等",
                          "显示现实环境中的旅游设施信息",
                          "真正实现现实与数字世界无缝连接"
                        ]
                      }
                    ].map((area, index) => (
                      <motion.div
                        key={index}
                        className={`relative bg-${area.color}-500/10 rounded-2xl p-6 border border-${area.color}-400/30 overflow-hidden`}
                        variants={cascadeIn}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        whileHover={{ y: -5 }}
                      >
                        {/* AR体验区背景图 */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                          style={{ 
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第五章消费电子展主题与品牌定位案例/${area.image})` 
                          }}
                        ></div>
                        <div className="relative z-10">
                        <h5 className={`font-medium text-${area.color}-400 mb-4 text-lg`}>{area.title}</h5>
                        <ul className="space-y-2">
                          {area.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-white/70">
                              <div className={`w-2 h-2 bg-${area.color}-400 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 成功效果分析 */}
                <div className="relative bg-green-500/10 rounded-2xl p-8 border border-green-400/30 overflow-hidden">
                  {/* AR眼镜案例背景图 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第五章消费电子展主题与品牌定位案例/AR眼镜案例背景.jpeg)` }}
                  ></div>
                  <div className="relative z-10">
                  <h4 className="font-medium text-green-400 mb-6 text-xl">成功效果分析</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-medium text-white mb-4">观众反馈</h5>
                      <div className="space-y-3">
                        {[
                          "获得了大量观众的关注和好评",
                          "体验者对AR技术应用印象深刻", 
                          "现场排队体验人数众多",
                          "社交媒体传播效果显著"
                        ].map((feedback, index) => (
                          <div key={index} className="flex items-center text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                            {feedback}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-4">品牌价值</h5>
                      <div className="space-y-3">
                        {[
                          "品牌知名度进一步提升",
                          "确立了AR技术领域的领先地位",
                          "吸引了大量媒体关注报道",
                          "获得了投资方的高度认可"
                        ].map((value, index) => (
                          <div key={index} className="flex items-center text-sm text-white/70">
                            <Target className="w-4 h-4 text-green-400 mr-3" />
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/10 rounded-xl">
                    <strong className="text-green-400">技术参考：</strong>
                    <span className="text-sm text-white/70 ml-2">
                      微软的Hololens系列产品在AR旅游体验方面的应用展示了类似的技术实现。
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>

            {/* 正向案例：某AR眼镜品牌视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykIwBdDtu.mp4"
              position={{ top: 280, right: '-10rem' }}
            />
          </motion.section>

          {/* 失败案例警示 - 对比展示 */}
          <motion.section variants={itemVariants} className="relative">
            <div className="text-center mb-12">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl mb-6"
                  whileHover={{ rotate: -10 }}
                >
                  <AlertTriangle className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">失败案例警示分析</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  从失败案例中汲取教训，避免在实践中重蹈覆辙
                </p>
            </div>

            {/* 过度技术化主题案例 */}
            <motion.div 
              className="glass-card p-8 border-l-4 border-red-400"
              variants={slideInFromRight}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-4" />
                案例二：过度技术化主题导致的观众认知壁垒
              </h3>
              
              <div className="space-y-8">
                {/* 问题描述 */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-400/30">
                  <h4 className="font-bold text-white mb-4">问题核心</h4>
                  <p className="text-white/80 leading-relaxed">
                    有些展会主题过于技术化，导致普通观众产生
                    <span className="text-red-400 font-bold mx-1">认知壁垒</span>。
                    从理论角度分析，过度技术化的主题没有考虑到目标观众的知识水平和理解能力，
                    没有平衡好技术展示与观众认知的关系。
                  </p>
                </div>

                {/* 典型失败案例 */}
                <div>
                  <h4 className="font-bold text-white mb-6 text-xl">典型失败案例分析</h4>
                  
                  <div className="space-y-6">
                    {/* 量子计算案例 */}
                    <div className="relative bg-red-500/10 rounded-2xl p-6 border border-red-400/30 overflow-hidden">
                      {/* 案例A背景图 */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第五章消费电子展主题与品牌定位案例/失败案例警示分析——案例A：超高速量子计算架构解析主题.jpeg)` }}
                      ></div>
                      <div className="relative z-10">
                        <h5 className="font-medium text-red-400 mb-4">案例A："超高速量子计算架构解析"主题</h5>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-medium text-white mb-3">问题表现</h6>
                          <ul className="space-y-2 text-sm">
                            {[
                              "涉及复杂的量子计算专业知识",
                              "普通观众难以理解",
                              "参与度极低",
                              "展区几乎无人驻足"
                            ].map((issue, index) => (
                              <li key={index} className="flex items-center text-white/70">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-white mb-3">负面影响</h6>
                          <ul className="space-y-2 text-sm">
                            {[
                              "观众流失严重",
                              "展会整体参观体验受影响", 
                              "参展商投资回报率低",
                              "媒体关注度不足"
                            ].map((impact, index) => (
                              <li key={index} className="flex items-center text-white/70">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                                {impact}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      </div>
                    </div>

                    {/* 量子通信案例 */}
                    <div className="relative bg-orange-500/10 rounded-2xl p-6 border border-orange-400/30 overflow-hidden">
                      {/* 案例B背景图 */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/第五章消费电子展主题与品牌定位案例/失败案例警示分析——案例B：量子通信协议深度剖析展区.jpg)` }}
                      ></div>
                      <div className="relative z-10">
                        <h5 className="font-medium text-orange-400 mb-4">案例B："量子通信协议深度剖析"展区</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-medium text-white mb-2">具体情况</h6>
                          <p className="text-sm text-white/70">
                            2022年某消费电子展推出了一个主题为"量子通信协议深度剖析"的展区，
                            由于内容过于专业，普通观众根本无法理解其中的技术细节。
                          </p>
                        </div>
                        <div>
                          <h6 className="font-medium text-white mb-2">技术复杂度</h6>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              "量子通信协议的复杂数学原理",
                              "量子纠缠和量子叠加概念",
                              "密钥分发算法细节", 
                              "专业术语密集使用"
                            ].map((complexity, index) => (
                              <div key={index} className="flex items-center text-sm text-white/70">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                                {complexity}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 改进建议对比 */}
                <div>
                  <h4 className="font-bold text-white mb-6 text-xl">改进建议与对比</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/30">
                      <h5 className="font-medium text-red-400 mb-4">❌ 过度技术化做法</h5>
                      <ul className="space-y-3">
                        {[
                          "使用大量专业术语",
                          "展示复杂技术原理图",
                          "忽视观众知识背景",
                          "缺乏通俗易懂的解释",
                          "没有互动体验环节"
                        ].map((wrong, index) => (
                          <li key={index} className="flex items-start text-sm text-white/70">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {wrong}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/30">
                      <h5 className="font-medium text-green-400 mb-4">✅ 正确展示方式</h5>
                      <ul className="space-y-3">
                        {[
                          "用通俗语言描述技术价值",
                          "重点展示应用效果",
                          "设置互动体验环节",
                          "提供多层次的信息深度",
                          "考虑观众认知能力"
                        ].map((right, index) => (
                          <li key={index} className="flex items-start text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                            {right}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-500/10 rounded-xl">
                    <strong className="text-blue-400">成功参考：</strong>
                    <span className="text-sm text-white/70 ml-2">
                      苹果产品的宣传更注重用户体验和简洁易懂的展示，避免过度技术化的表达方式，
                      这为展会主题设计提供了很好的借鉴。
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 过度技术化主题导致的观众认知壁垒视频播放器 */}
            <DigitalAvatarPlayer 
              videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuVykGYst1Ih.mp4"
              position={{ top: 460, right: '-10rem' }}
            />
          </motion.section>

          {/* 导航按钮 */}
          <motion.div 
            className="flex justify-between items-center pt-16"
            variants={itemVariants}
          >
            <Link 
              to="/course/planning-methods"
              className="group flex items-center space-x-3 glass-card px-6 py-4 hover:shadow-glass-hover transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-white">上一章：展会主题策划与品牌定位方法</span>
            </Link>
            
            <Link 
              to="/course-summary"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-amber-500 px-6 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>进入课程总结</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;